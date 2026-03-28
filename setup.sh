#!/bin/bash

echo "🌸 Bloom & Petal - Flower Shop Setup Script"
echo "============================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies."
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Check if PostgreSQL is running
echo "🔍 Checking PostgreSQL connection..."
psql -U postgres -c "SELECT 1" > /dev/null 2>&1

if [ $? -ne 0 ]; then
    echo "⚠️  Warning: PostgreSQL is not running or credentials are incorrect."
    echo "Please ensure PostgreSQL is running and update .env with correct credentials."
else
    echo "✅ PostgreSQL is running"
fi

echo ""
echo "============================================"
echo "🎉 Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Update .env file with your database credentials"
echo "2. Run the database schema: psql -U postgres -d flower_shop -f schema.sql"
echo "3. Start the development server: npm run dev"
echo "4. Open http://localhost:3000 in your browser"
echo ""
echo "Default Admin Credentials:"
echo "   Username: admin"
echo "   Password: admin123"
echo ""