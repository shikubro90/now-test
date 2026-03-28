// Simple test to verify application structure
const fs = require('fs');
const path = require('path');

console.log('🌸 Testing Bloom & Petal Application Structure...\n');

const requiredFiles = [
  'package.json',
  'next.config.js',
  'tailwind.config.ts',
  'tsconfig.json',
  'setup-database.js',
  'src/lib/db.ts',
  'src/types/index.ts',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
  'src/app/shop/page.tsx',
  'src/app/admin/page.tsx',
  'src/app/api/flowers/route.ts',
  'src/app/api/flowers/[id]/route.ts',
  'src/app/api/orders/route.ts',
  'src/app/api/login/route.ts',
  'src/app/admin/add-flower/page.tsx',
  'src/app/admin/edit-flower/page.tsx',
  '.env.example',
  '.gitignore'
];

let allFilesExist = true;

console.log('Checking required files:');
requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  const exists = fs.existsSync(filePath);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

console.log('\nChecking API routes:');
const apiRoutes = [
  'src/app/api/flowers/route.ts',
  'src/app/api/flowers/[id]/route.ts',
  'src/app/api/orders/route.ts',
  'src/app/api/login/route.ts'
];

apiRoutes.forEach(route => {
  const filePath = path.join(__dirname, route);
  const exists = fs.existsSync(filePath);
  console.log(`  ${exists ? '✅' : '❌'} ${route}`);
  if (!exists) allFilesExist = false;
});

console.log('\nChecking admin pages:');
const adminPages = [
  'src/app/admin/page.tsx',
  'src/app/admin/add-flower/page.tsx',
  'src/app/admin/edit-flower/page.tsx'
];

adminPages.forEach(page => {
  const filePath = path.join(__dirname, page);
  const exists = fs.existsSync(filePath);
  console.log(`  ${exists ? '✅' : '❌'} ${page}`);
  if (!exists) allFilesExist = false;
});

console.log('\nChecking documentation:');
const docs = [
  'README.md',
  'SETUP.md',
  'PROJECT_SUMMARY.md',
  'INSTALL_POSTGRESQL.md',
  'STATUS_REPORT.md'
];

docs.forEach(doc => {
  const filePath = path.join(__dirname, doc);
  const exists = fs.existsSync(filePath);
  console.log(`  ${exists ? '✅' : '❌'} ${doc}`);
  if (!exists) allFilesExist = false;
});

console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('✅ All files are present!');
  console.log('\n📝 Next steps:');
  console.log('1. Install dependencies: npm install');
  console.log('2. Run setup: node setup-database.js');
  console.log('3. Start server: npm run dev');
  console.log('\n🌐 Access the app at: http://localhost:3001');
  console.log('🔐 Admin login: admin / admin123');
  console.log('\n✨ Using SQLite (NoSQL) database - No PostgreSQL required!');
} else {
  console.log('❌ Some files are missing!');
  process.exit(1);
}