const cors = require('cors');

const corsOptions = {
  origin: 'https://frontend-frosty.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;