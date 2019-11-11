
import {Client} from 'pg';
import config  from 'config' ;

const DATABASE_URL = config.get('dbURL');


const client = new Client({
    connectionString: DATABASE_URL
  }); 

client.connect();
  
export default {
   query(command, args){
       return new Promise((resolve, reject) => {
         client.query(command, args)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {        
          reject(error);
        })
      })
    },
  }  