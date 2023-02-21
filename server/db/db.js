const postgres = require('postgres');
require('dotenv').config();
const sql =  postgres(process.env.DB_CONNECTION_STRING, {
        host                 : process.env.DB_HOST,
        port                 :  process.env.DB_PORT,          // Postgres server port[s]
        database             : process.env.DB_DATABASE,           // Name of database to connect to
        username             : process.env.DB_USERNAME,             // Username of database user
        password             : process.env.DB_PASSWORD,
})
const query = async (sql) => {
    
}
async function selectUser(user) {
    await user;
    //console.log(user)
    try {
        const xs = await sql`
            SELECT
                id
            FROM
                sparks
            WHERE
                username = ${user.username} AND password = ${user.password}
            LIMIT 1
        `
        //console.error(xs.length != 0);
        if(xs.length != 0){
            return xs;
        }else{
            return false;
        }
        
    } catch (error) {
        console.error(error);
        return false;
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
    }
}
async function updateUser(user) {
    await user;
    console.log(user)
    console.log(user.fname)
    try {
        const xs = await sql`
            insert into sparks (
                fname, lname, phone, email, username, password
            ) values (
                ${user.fname}, ${user.lname}, ${user.phone}, ${user.email}, ${user.username}, ${user.password}
            )
            returning *
        `
        //console.error(xs);
        if(xs.length != 0){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
    }
}  
async function deleateUser(user) {
    await user;
    console.log(user)
    console.log(user.fname)
    try {
        const xs = await sql`
            insert into sparks (
                fname, lname, phone, email, username, password
            ) values (
                ${user.fname}, ${user.lname}, ${user.phone}, ${user.email}, ${user.username}, ${user.password}
            )
            returning *
        `
        if(xs.length != 0){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
    }
}  
async function insertUsers(user) {
    await user;
    console.log(user)
    console.log(user.fname)
    try {
        const xs = await sql`
            insert into sparks (
                fname, lname, phone, email, username, password
            ) values (
                ${user.fname}, ${user.lname}, ${user.phone}, ${user.email}, ${user.username}, ${user.password}
            )
            returning id
        `
        if(xs.length != 0){
            return xs;
        }else{
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
    }
}
  
module.exports = {insertUsers, deleateUser, updateUser, selectUser,  query}; // a list of exported variables