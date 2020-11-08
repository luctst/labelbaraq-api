const url = require('url');

let settings = {
  client: 'postgres'
};

if (process.env.DATABASE_URL) {
  const parsed = url.parse(process.env.DATABASE_URL, true);
  const [username, password] = parsed.auth.split(':');

  settings.host = parsed.hostname;
  settings.port = Number(parsed.port);
  settings.database = parsed.pathname.substr(1);
  settings.username = username;
  settings.password = password;
  settings.ssl = true;
}

module.exports = {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings,
      options: {}
    }
  }
};
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME', 'strapi'),
//         username: env('DATABASE_USERNAME', ''),
//         password: env('DATABASE_PASSWORD', ''),
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });