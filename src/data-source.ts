import path from 'path'
import "reflect-metadata"
import { DataSource } from "typeorm"
import { config } from 'dotenv';

config()

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD as string,
//     database: process.env.POSTGRES_DB,
//     logging: false,
//     ssl: { rejectUnauthorized: false },
//     entities: [path.join(__dirname, "/entities/**/*.{ts,js}")],
//     migrations: [path.join(__dirname, "/migrations/**/*.{ts,js}")],
// });

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  ssl: { rejectUnauthorized: false },
  entities: [path.join(__dirname, "/entities/**/*.{ts,js}")],
  migrations: [path.join(__dirname, "/migrations/**/*.{ts,js}")],
});