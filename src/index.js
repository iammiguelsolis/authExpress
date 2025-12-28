import app from './server.js'
import config from '../config.js'
import MySQLSingleton from './database/MySQLSingleton.js'

const { port } = config

async function startServer () {
  try {
    await MySQLSingleton.testConnection()

    app.listen(port, () => {
      console.log('----------------------------------------------------')
      console.log(`✨ Servidor Express escuchando en el puerto ${port}`)
      console.log(`🌐 http://localhost:${port}`)
      console.log('----------------------------------------------------')
    })
  } catch (error) {
    console.error('❌ Error fatal al iniciar la aplicación:', error.message)
    process.exit(1)
  }
}

startServer()
