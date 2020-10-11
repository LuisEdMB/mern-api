module.exports = {
    PORT_APP: process.env.PORT_APP || 4000,
    DATABASE_SERVER: process.env.DATABASE_SERVER || 'localhost',
    DATABASE_PORT: process.env.DATABASE_PORT || '27017',
    DATABASE_RESOURCE: process.env.DATABASE_RESOURCE || 'test_database'
}