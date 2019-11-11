import { expect } from "chai"
import {clearDB, creatTestUser,getallUser} from "../src/index"
import sinon from 'sinon';
import controller from "../src/db/controller/dbController";

describe("index test", async  () => {
    describe("Clear tables function", async () => {
        it("should return Clear message!", async () => {
            let controllerStub;
            sinon.stub(controller, 'clearTables').returns('tables CLEARED!!!!')
            const str = await clearDB();
            expect(str).to.equal('tables CLEARED!!!!')
        })
    })
    
    describe("Create user function", async () => {
        it("should return message!", async () => {
            let controllerStub;
            sinon.stub(controller, 'createUser').returns('{rowCount: 1, rows: []}')
            const str = await creatTestUser();
            expect(str).to.equal('{rowCount: 1, rows: []}')
        })
    })

    describe("index test", async  () => {
        describe("get all user ", async () => {
            it("should return all user!", async () => {
                let controllerStub;
                sinon.stub(controller, 'getallUser').returns('User')
                const str = await getallUser();
                expect(str).to.equal('User')
            })
        })
    })  

    

    
    

    
    
    


    
    



})



