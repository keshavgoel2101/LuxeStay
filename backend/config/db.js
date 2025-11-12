/**
 * Database Connection
 * PostgreSQL connection using Prisma ORM
 */

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Connected to PostgreSQL database via Prisma');
  } catch (error) {
    console.error('❌ Error connecting to database:', error.message);
    process.exit(1);
  }
};

module.exports = { prisma, connectDB };
