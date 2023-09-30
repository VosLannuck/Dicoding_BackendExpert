/* istanbul ignore file */
const pool = require('../src/Infrastructure/database/postgres');

// Singleton object
// AddUser
// FindUserById
// CleanTable

const UsersTableTestHelper = {
  addUser : async ({
    id = 'user-123',
    username = 'Vos',
    password = 'secret',
    fullname = 'Vos lannuck',
  }) => {
  
    const query = {
      text: 'INSERT INTO users VALUES($1, $2, $3, $4)',
      values: [id, username, password, fullname],
    }

    await pool.query(query);

  },
  findUserById: async(id) => {
    const query = {
      text: 'SELECT * FROM users WHERE id = $1',
      values: [id]
    }

    const result = await pool.query(query);
    return result.rows;
  },
  cleanTable: async() => {
    const query = "TRUNCATE TABLE users";

    await pool.query(query);
  }

}


module.exports = UsersTableTestHelper;
