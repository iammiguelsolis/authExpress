import mysql from 'mysql2/promise'
import config from '../../config.js'

class MySQLSingleton {
  static instance = null
  pool = null

  constructor () {
    if (MySQLSingleton.instance) {
      return MySQLSingleton.instance
    }

    const { db } = config

    this.pool = mysql.createPool({
      host: db.host,
      user: db.user,
      password: db.password,
      database: db.name,
      port: db.port
    })

    MySQLSingleton.instance = this
  }

  async testConnection () {
    try {
      const connection = await this.pool.getConnection()
      await connection.ping()
      connection.release()
      console.log('✅ Conexión a MySQL exitosa')
    } catch (error) {
      console.error('❌ Error al conectar con MySQL:', error.message)
      process.exit(1)
    }
  }

  getPool () {
    return this.pool
  }
}

export default new MySQLSingleton()
