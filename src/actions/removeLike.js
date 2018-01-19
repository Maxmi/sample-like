import db from '../db'

export default function removeLike(user_id, album_id) {
  return db.one('DELETE FROM likes WHERE user_id = $1 AND album_id = $2 RETURNING *', [user_id, album_id])
}
