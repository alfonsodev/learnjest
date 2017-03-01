import getUsersRoute from '../app'
jest.mock('../database')
describe('Tests app route', () => {
    test('Tets that response contains users', () => {
        let mockResponse = jest.fn()
        getUsersRoute({}, mockResponse)
        expect(mockResponse.mock.calls[0][0][0].name).toBe('fake user 1')
    })
})