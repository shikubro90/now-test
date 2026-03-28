# 🗄️ PostgreSQL Installation Guide

## macOS Installation

### Using Homebrew (Recommended)

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install PostgreSQL**:
   ```bash
   brew install postgresql@15
   ```

3. **Start PostgreSQL**:
   ```bash
   brew services start postgresql@15
   ```

4. **Create the postgres user** (if needed):
   ```bash
   sudo -u postgres createuser -s postgres
   ```

5. **Verify installation**:
   ```bash
   psql --version
   ```

### Manual Installation

1. Download from [PostgreSQL Official Website](https://www.postgresql.org/download/macosx/)
2. Run the installer
3. Follow the setup wizard
4. Set a password for the postgres user

## Linux Installation

### Ubuntu/Debian

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### CentOS/RHEL

```bash
sudo yum install postgresql-server
sudo postgresql-setup initdb
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## Windows Installation

1. Download from [PostgreSQL Official Website](https://www.postgresql.org/download/windows/)
2. Run the installer
3. Follow the setup wizard
4. Set a password for the postgres user
5. Choose to start PostgreSQL as a service

## Verify PostgreSQL is Running

```bash
# Check if PostgreSQL is running
brew services list  # macOS
sudo systemctl status postgresql  # Linux
# or check services in Windows

# Test connection
psql -U postgres
```

## Create Database and User

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE flower_shop;

# Create user (optional)
CREATE USER flower_user WITH PASSWORD 'your_password';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE flower_shop TO flower_user;

# Exit
\q
```

## Run the Setup Script

Once PostgreSQL is installed and running:

```bash
# Navigate to project directory
cd /Users/shiku/Openclaw_code_testing

# Run the setup script
node setup-database.js
```

## Troubleshooting

### "psql: command not found"

- Make sure PostgreSQL is installed
- Add PostgreSQL to your PATH (usually `/usr/local/bin` on macOS)

### "role "postgres" does not exist"

- Create the postgres user:
  ```bash
  sudo -u postgres createuser -s postgres
  ```

### "database already exists"

- Drop the existing database:
  ```bash
  dropdb flower_shop
  createdb flower_shop
  node setup-database.js
  ```

### "connection refused"

- Make sure PostgreSQL is running:
  ```bash
  brew services start postgresql@15  # macOS
  sudo systemctl start postgresql    # Linux
  ```

## Alternative: Use SQLite

If you don't want to install PostgreSQL, you can use SQLite instead:

1. Install SQLite:
   ```bash
   brew install sqlite
   ```

2. Modify `src/lib/db.ts` to use SQLite:
   ```typescript
   import Database from 'better-sqlite3';
   const db = new Database('flower_shop.db');
   ```

3. Run the setup script with SQLite support

## Next Steps

After installing PostgreSQL:

1. Run the setup script:
   ```bash
   node setup-database.js
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Access the application:
   - Customer: http://localhost:3000
   - Admin: http://localhost:3000/admin

4. Login with default credentials:
   - Username: admin
   - Password: admin123