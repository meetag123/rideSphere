const mysql= require('mysql2/promise')
const mysqlPool=mysql.createPool(
{
    host:'localhost',
    user:'root',
    password:'meet@grawal123',
    database:'Ridesphere_db',
});
module.exports=mysqlPool;
