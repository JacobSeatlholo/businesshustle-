# BusinessHustle Real-Time Social Platform

A production-grade, Next.js-powered real-time social platform with gamified economy, virtual gifting, and Discord integration. Designed for **Vercel deployment** at **businesshustle.co.za**.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ / Bun
- Discord Developer Application (for OAuth2)
- Vercel account (for deployment)

### Local Development

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Discord credentials

# Push database schema
bun run db:push

# Start development server (port 3000)
bun run dev

# Start real-time service (port 3003)
cd mini-services/realtime-service && bun run dev
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DISCORD_CLIENT_ID` | Discord Application Client ID | ✅ |
| `DISCORD_CLIENT_SECRET` | Discord Application Client Secret | ✅ |
| `NEXTAUTH_SECRET` | Random secret for JWT signing | ✅ |
| `NEXTAUTH_URL` | Your application URL | ✅ |
| `DATABASE_URL` | Database connection string | ✅ |

## 🏗️ Architecture Overview

### Core Modules

1. **Discord OAuth2 Integration**
   - NextAuth.js with Discord provider
   - Automatic user sync on login
   - Token management for API access

2. **Real-Time Socket.io Service**
   - Presence tracking (online/offline)
   - Live gifting with animations
   - Room membership management
   - Rate limiting & authentication

3. **Gamified Economy System**
   - Wallet with cent-precision balance
   - Virtual shop with rarity tiers
   - Inventory management
   - Double-entry ledger audit trail

4. **API Routes**
   - `/api/wallet` - Balance operations
   - `/api/shop` - Item catalog & purchases
   - `/api/inventory` - User items
   - `/api/transactions` - History
   - `/api/rooms` - Chat rooms
   - `/api/user` - Profile management

## 💳 Economy System

### Currency
- **BHC (BusinessHustle Credits)**
- Stored as integers (cents) to prevent floating-point errors
- Displayed in ZAR format (e.g., R10.00 = 1000 cents)

### Transaction Types
- `PURCHASE` - Buying shop items
- `GIFT_SEND` / `GIFT_RECEIVE` - Virtual gifting
- `TOP_UP` - Adding credits
- `DAILY_BONUS` - Login rewards
- `REFUND` - Admin reversals

### Gifting Pipeline (Concurrency-Safe)

```
1. Validate gift item exists & is active
2. Check sender wallet balance (row-level lock via Prisma $transaction)
3. Deduct amount from sender wallet
4. Create ledger transaction (debit entry)
5. Add item to receiver's inventory
6. Record gift event
7. Emit real-time WebSocket events:
   - gift:sent → Sender confirmation
   - gift:received_room → All room members (with animation trigger)
   - gift:received_direct → Receiver (if not in room)
8. Trigger confetti/canvas animation on client
```

## 🎁 Shop Items

### Categories
- **Gifts** - Sendable items (roses, crowns, potions)
- **Badges** - Profile display items
- **Themes** - Chat room skins
- **Effects** - Room-wide animations

### Rarity Tiers
| Tier | Color | Price Range |
|------|-------|-------------|
| COMMON | Gray | Free - 100¢ |
| UNCOMMON | Green | 100¢ - 500¢ |
| RARE | Blue | 500¢ - 1,000¢ |
| EPIC | Purple | 1,000¢ - 5,000¢ |
| LEGENDARY | Gold | 5,000¢+ |

## 🔌 Vercel Deployment

### Setup Steps

1. **Create Discord Application**
   - Visit https://discord.com/developers/applications
   - Create new application
   - Copy Client ID & Secret
   - Set redirect URI: `https://www.businesshustle.co.za/api/auth/callback/discord`
   - Enable bot scope if using bridge features

2. **Configure Vercel Project**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Link project
   vercel link
   
   # Set environment variables
   vercel env add DISCORD_CLIENT_ID
   vercel env add DISCORD_CLIENT_SECRET
   vercel env add NEXTAUTH_SECRET
   vercel env add DATABASE_URL
   ```

3. **Deploy**
   ```bash
   # Production deploy
   vercel --prod
   ```

4. **Socket.io on Vercel**
   - The realtime service runs as a separate process
   - For production, consider:
     - Vercel Edge Functions with third-party WebSocket (Pusher, Ably)
     - Separate server (Fly.io, Railway) for Socket.io
     - Serverless WebSockets (Vercel-compatible)

### Domain Configuration

Add custom domain in Vercel dashboard:
1. Go to Project Settings → Domains
2. Add `www.businesshustle.co.za`
3. Configure DNS (CNAME or A record)
4. Enable HTTPS (automatic)

## 📊 Database Schema (Key Tables)

### Users
- Discord OAuth2 identity mapping
- Gamification (level, XP, reputation)
- Online presence tracking

### Wallets
- Cent-precision balance storage
- Total earned/spent tracking
- One-to-one with users

### Shop Items
- Categorized virtual goods
- Rarity-based pricing
- Stock limits for limited editions

### Ledger Transactions
- Immutable audit trail
- Double-entry bookkeeping
- Running balance per entry

### Gifts
- Real-time gifting events
- Animation triggers
- Anonymous sending option

## 🔒 Security Considerations

- **Rate Limiting**: All socket events are rate-limited
- **Row-Level Locking**: Transactions use Prisma `$transaction` for atomicity
- **Input Validation**: Zod schemas on all API routes
- **CORS**: Configured for businesshustle.co.za origin
- **Authentication**: JWT sessions via NextAuth.js

## 🧪 Testing Features

The development build includes:

- **Test Credit Button**: Adds 100 BHC to wallet (Shop tab)
- **Demo Rooms**: Pre-configured chat rooms
- **Seed Data**: Sample shop items via `/api/shop/seed`
- **Gift Animations**: Canvas confetti effects

## 📝 Next Steps for Production

1. [ ] Replace SQLite with PostgreSQL (Vercel Postgres / Neon / PlanetScale)
2. [ ] Add Redis caching layer for hot data
3. [ ] Implement Discord Bot bridge for channel sync
4. [ ] Add payment gateway integration (PayFast/Yoco for SA)
5. [ ] Implement file uploads for custom avatars/banners
6. [ ] Add email notifications for gifts/rewards
7. [ ] Set up monitoring (Sentry for errors, analytics)
8. [ ] POPIA compliance review (South African data protection)

## 🤝 Contributing

This is a proprietary platform for BusinessHustle.co.za. For internal contributions, follow the existing code patterns and ensure TypeScript strict mode compliance.

## 📄 License

Proprietary - BusinessHustle (Pty) Ltd

---

**Built with ❤️ for the South African hustle community**
