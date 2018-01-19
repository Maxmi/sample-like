import db from '../db'

export default function updateProfile(userID, name, email) {
  return db.one('UPDATE users SET name=$2, email=$3 WHERE id=$1 RETURNING *', [userID, name, email])
}
