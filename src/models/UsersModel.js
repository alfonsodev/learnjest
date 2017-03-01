import database from '../database'

const UsersModel = {
    getUsers() {
        let users = database.query('get users')
        return users
    }
}

export default UsersModel