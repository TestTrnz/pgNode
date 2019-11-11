"use strict";

import DB from "../model/dbConnection";

export default {

    async clearTables() {
        try {
            await DB.query('TRUNCATE TABLE comments CASCADE');   
            await DB.query('TRUNCATE TABLE posts CASCADE');      
            await DB.query('TRUNCATE TABLE users CASCADE');
         
            return 'tables CLEARED!!!!';

          } catch(error) {
            return error;
          } 
        },

    async createUser() {
        try {       
            const cmd = {
                text: 'INSERT INTO users (id,"name", username, email, phone, website, "createdAt", "updatedAt")  VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
                values: [1,'aadi','aadimurthy', 'hello@gmail.com', '9010664774', 'hello.com', new Date(), new Date()] 
            }
            const result = await DB.query(cmd);
            return result;
          } catch(error) {
            return error;
          } 
        },
    async  getallUser(){
    try {      
        const { rows } = await DB.query('SELECT * FROM User');
        return  rows[0];
      } catch(error) {
        return error;
      } 
    },

}
