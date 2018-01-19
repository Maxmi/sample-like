import Promise from 'bluebird'
import pg from 'pg-promise'

const connect = pg({promiseLib: Promise})
const db = connect(process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL)

export default db
