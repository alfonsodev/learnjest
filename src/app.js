import UsersModel from './models/UsersModel'

const userRoute = (request, response) => {
    let users = UsersModel.getUsers()
    response(users)
}

// This simulates our app executing
userRoute({}, (data) => {
    console.log(data)
})

export default userRoute
