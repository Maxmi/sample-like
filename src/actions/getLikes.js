import db from '../db'

export default function getLikes(albumId) {
  return db.any('SELECT COUNT(user_id) FROM likes WHERE album_id = $1', [albumId])
}
