"use strict";
import controller from "./db/controller/dbController";

 const clearDB = async function(){
  try {   
    const res = await controller.clearTables();
    return res;
  } catch(error) {
    return error;
  }
} 
const creatTestUser = async function(){
  try {      
    const res = await controller.createUser();
    return res;
  } catch(error) {
    return error;
  }
} 
const getallUser = async function(){
  try {      
      const res = await controller.getallUser();
      return res;
    } catch(error) {
      return error;
    }
}

module.exports = {clearDB, creatTestUser, getallUser}




