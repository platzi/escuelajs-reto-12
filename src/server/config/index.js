require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8000,
  API_URL: process.env.API_URL,
};

module.exports = { config };
