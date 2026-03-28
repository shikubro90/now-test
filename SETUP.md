# 🌸 Bloom & Petal - Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Database

#### Using the automated script (Recommended)

```bash
node setup-database.js
```

This script will:
- Create the SQLite database file
- Create all tables
- Add sample flowers
- Create default admin user (admin/admin123)

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Access the Application

- **Customer Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## Default Credentials

- **Username**: admin
- **Password**: admin123

## Troubleshooting

### Database Already Exists

If you get a "database already exists" error, you can either:
1. Delete the existing database file:
   ```bash
   rm flower_shop.db
   node setup-database.js
   ```
2. Or modify the setup script to handle existing databases

### Port Already in Use

If port 3000 is already in use, you can change it in your `.env` file or use a different port:
```bash
PORT=3001 npm run dev
```

## Project Structure

```
Openclaw_code_testing/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── flowers/
│   │   │   │   ├── route.ts          # GET all, POST new
│   │   │   │   └── [id]/route.ts     # GET, PUT, DELETE single
│   │   │   ├── orders/
│   │   │   │   └── route.ts          # GET all, POST new
│   │   │   └── login/
│   │   │       └── route.ts          # Admin login
│   │   ├── admin/
│   │   │   ├── page.tsx              # Admin dashboard
│   │   │   ├── add-flower/
│   │   │   │   └── page.tsx          # Add flower form
│   │   │   └── edit-flower/
│   │   │       └── page.tsx          # Edit flower form
│   │   ├── shop/
│   │   │   └── page.tsx              # Shop page
│   │   ├── page.tsx                  # Home page
│   │   ├── layout.tsx                # Root layout
│   │   └── globals.css               # Global styles
│   ├── lib/
│   │   └── db.ts                     # Database connection
│   └── types/
│       └── index.ts                  # TypeScript types
├── setup-database.js                 # Database setup script
├── package.json                      # Dependencies
├── next.config.js                    # Next.js config
├── tailwind.config.ts                # Tailwind config
├── tsconfig.json                     # TypeScript config
└── SETUP.md                          # Setup guide
```

## API Endpoints

### Flowers
- `GET /api/flowers` - Get all flowers
- `POST /api/flowers` - Create new flower
- `GET /api/flowers/[id]` - Get single flower
- `PUT /api/flowers/[id]` - Update flower
- `DELETE /api/flowers/[id]` - Delete flower

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order

### Authentication
- `POST /api/login` - Admin login

## Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
````

## Next Steps

1. Customize the design
2. Add more features (cart, checkout, user authentication)
3. Add payment integration (Stripe)
4. Add email notifications
5. Deploy to Vercel or Netlify

## Support

For issues or questions, please check the README.md file or create an issue in the repository.