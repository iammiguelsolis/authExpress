import UserReporsitory from '../repository/user.reporsitory'
import bcrypt from 'bcrypt'

export default class AuthService {
  static async create ({ username, password }) {



    const newuser = await UserReporsitory.create(username,)
  }
}