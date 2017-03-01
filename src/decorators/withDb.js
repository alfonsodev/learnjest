import database from 'learnjest-database'

const withDb = (target) => {
    target.db = database
}

export default withDb