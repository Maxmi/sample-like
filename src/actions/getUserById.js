import db from '../db'

export default function getUserById(id) {
  return db.one('SELECT * FROM users WHERE id = $1', [id])
}
