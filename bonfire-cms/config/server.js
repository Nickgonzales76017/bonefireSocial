module.exports = ({ env }) => ({
  host: env('HOST', '149.28.243.225'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: 'https://bonfyre.dev/cms',
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  database: {
    connection: {
      connectionString: env('DATABASE_URL','postgresql://postgres:@Ch3wbaca01475369@db.djmtarhktvoawykrzqnq.supabase.co:5432/postgres'),
      host: env('DATABASE_HOST', 'db.djmtarhktvoawykrzqnq.supabase.co'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '@Ch3wbaca01475369'),
      ssl: env.bool('DATABASE_SSL', false) && {
        key: env('DATABASE_SSL_KEY', undefined),
        cert: env('DATABASE_SSL_CERT', undefined),
        ca: env('DATABASE_SSL_CA', undefined),
        capath: env('DATABASE_SSL_CAPATH', undefined),
        cipher: env('DATABASE_SSL_CIPHER', undefined),
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
      },
    },
  },
});
