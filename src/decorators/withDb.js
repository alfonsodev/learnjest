import database from '../database'

const withDb = (target) => {
    target.db = database
}

export default withDb