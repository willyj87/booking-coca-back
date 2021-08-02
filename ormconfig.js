// eslint-disable-next-line @typescript-eslint/no-var-requires
const { env } = require('process');

module.exports = {
  type: 'mysql',
  host: env.DATABASE_HOST,
  port: +env.DATABASE_PORT,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: ['dist/**/resources/**/*.entity.js'],
  migrations: ['dist/**/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  seeds: ['dist/**/database/seeds/**/*.js'],
  factories: ['dist/**/database/factories/**/*.js'],
  synchronize: false,
  logging: true,
};
