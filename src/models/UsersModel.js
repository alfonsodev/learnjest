import withDb from '../decorators/withDb'

@withDb
class UsersModel {
    getUsers() {
        let users = UsersModel.db.query('get users')
        return users
    }
}

let userModel = new UsersModel()
export default userModel