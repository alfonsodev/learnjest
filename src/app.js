import UsersModel from './models/UsersModel'

export default (request, response) => {
    let users = UsersModel.getUsers()
    response(users)
}