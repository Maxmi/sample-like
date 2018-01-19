import db from '../db'

export default function addLike(user_id, album_id) {
  return db.one('INSERT INTO likes (user_id, album_id) VALUES ($1, $2) RETURNING *', [user_id, album_id])
}
