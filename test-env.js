require('dotenv').config();

console.log('Testing .env file configuration:');
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('PORT:', process.env.PORT);