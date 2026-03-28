# Flower Shop Website

A beautiful, colorful flower e-commerce website built with Next.js, TypeScript, Tailwind CSS, and a local JSON database.

## 🌸 Features

- **Beautiful UI**: Vibrant gradient design with animations
- **Product Catalog**: Display flowers with images, prices, and descriptions
- **Admin Panel**: Manage flowers, view orders, and handle users
- **Local Database**: Simple JSON-based database for data persistence
- **Responsive Design**: Works on all devices
- **Contact Form**: Send messages to the shop
- **About Page**: Learn about the company
- **User Authentication**: Secure login system

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: JSON file (flower_shop.json)
- **Authentication**: bcryptjs

## 📦 Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
node setup-database.js
```

4. Create admin user (if not already created):
```bash
node create-admin.js
```

## 🚀 Running the Application

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Admin Login

- **Username**: admin
- **Password**: admin123

Access the admin panel at: http://localhost:3000/admin

## 📁 Project Structure

```
flower_site/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── flowers/
│   │   │   ├── login/
│   │   │   └── orders/
│   │   ├── admin/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── shop/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── lib/
│   │   └── db.ts
│   └── types/
│       └── index.ts
├── flower_shop.json  # Local database
├── setup-database.js # Database setup script
├── create-admin.js   # Admin user creation
└── package.json
```

## 🎨 Pages

- **Home**: Landing page with hero section
- **Shop**: Flower catalog with filtering
- **About**: Company information and team
- **Contact**: Contact form and information
- **Admin**: Dashboard for managing the shop

## 📝 Database

The application uses a simple JSON file for data persistence:

- **Flowers**: Product information
- **Users**: Customer accounts
- **Orders**: Purchase history
- **Order Items**: Individual order details

## 🚀 Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## 📄 License

This project is open source and available under the MIT License.# now-test
