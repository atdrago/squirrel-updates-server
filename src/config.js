export default {
  port: process.env.UPDATES_PORT || process.env.PORT || 3000,
  host: process.env.UPDATES_HOST || '0.0.0.0',
  github: {
    token: process.env.GITHUB_TOKEN,
    api: {
      version: '3.0.0',
      headers: {
        'user-agent': 'Aluxian/squirrel-updates-server'
      }
    }
  },
  sentry: {
    dsn: process.env.SENTRY_DSN
  },
  user: process.env.REPO_OWNER || 'Aluxian',
  repo: process.env.REPO_NAME || 'Whatsie',
  privateRepo: process.env.UPDATES_PRIVATE_REPO || false,
  patterns: {
    darwin: {
      dmg: /Negative-v\d+\.\d+\.\d+\.dmg/,
      zip: /Negative-v\d+\.\d+\.\d+\.dmg/
    }
  },
  mirrors: process.env.MIRROR_NAMES
};
