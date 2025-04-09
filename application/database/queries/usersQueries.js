import {
    CREATE_USERS,
    DROP_USERS,
    ADD_USER,
    DELETE_USER,
    CHANGE_USER_PERMS
} from "../sql/usersSQL";

const { pool } = require('../connection');


/*
    Creation and Dropping of Users table
*/
const createUsersTable = async () => {
    try {
        const [rows] = await pool.query(CREATE_USERS);
        console.log(rows);

    } catch (error) {
        console.error('Error creating Users table:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

const dropUsersTable = async () => {
    try {
        const [rows] = await pool.query(DROP_USERS);
        console.log(rows);

    } catch (error) {
        console.error('Error dropping Users table:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

/*
    Modification of Users table records
*/

const addUser = async (SFSUId, firstName, lastName, email, password) => {
    try {
        const [rows] = await pool.query(ADD_USER,
            SFSUId, firstName, lastName, email, password
        );
        console.log(rows);

    } catch (error) {
        console.error('Error adding a user:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

const deleteUser = async (SFSUId, userID) => {
    try {
        const [rows] = await pool.query(DELETE_USER,
            SFSUId, userID
        );
        console.log(rows);

    } catch (error) {
        console.error('Error deleting a user:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

const changeUserPerms = async (SFSUId, perms) => {
    try {
        const [rows] = await pool.query(CHANGE_USER_PERMS,
            perms, SFSUId
        );
        console.log(rows);

    } catch (error) {
        console.error('Error deleting a user:', error);
        return {
            success: false,
            error: error.message
        };
    }
};


module.exports = {
    createUsersTable,
    dropUsersTable,
    addUser,
    deleteUser,
    changeUserPerms
};