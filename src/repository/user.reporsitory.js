import MySQLSingleton from '../database/MySQLSingleton.js'

const pool = MySQLSingleton.getPool()

export default class UserReporsitory {
  static async getAllUsers () {
    const [rows] = await pool.query('SELECT id, username FROM users')

    return rows
  }

  static async getIdByUsername (username) {
    const [rows] = await pool.query('SELECT id FROM users WHERE username = ? LIMIT 1', [username])

    return rows[0]
  }
}
