const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'flower_shop.json');

console.log('🌸 Creating admin user...\n');

try {
  // Load existing database
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  
  // Create admin user
  const adminUser = {
    id: 1,
    username: 'admin',
    password_hash: bcrypt.hashSync('admin123', 10),
    created_at: new Date().toISOString()
  };
  
  // Check if admin already exists
  const existingAdmin = db.users.find(u => u.username === 'admin');
  if (existingAdmin) {
    console.log('✅ Admin user already exists');
    console.log('\nAdmin Credentials:');
    console.log('   Username: admin');
    console.log('   Password: admin123');
  } else {
    db.users.push(adminUser);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    console.log('✅ Admin user created successfully!');
    console.log('\n🎉 Admin Credentials:');
    console.log('   Username: admin');
    console.log('   Password: admin123');
  }
  
} catch (error) {
  console.error('❌ Error creating admin user:', error);
  process.exit(1);
}