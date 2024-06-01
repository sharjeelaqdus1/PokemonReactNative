const fs = require('fs');

// Read the API URL from command-line arguments
const apiUrl: string = process.argv[2] || 'https://default-api-url.com';

// Write the API URL to the .env file
fs.writeFileSync('.env', `API_URL=${apiUrl}\n`);

console.log(`API_URL set to: ${apiUrl}`);
