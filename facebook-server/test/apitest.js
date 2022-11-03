let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../app');
describe('login', () => {
describe('/GET login', () => {
    it('it should GET login page', (done)=>{
        chai.request(server)
        .get('/login')
        .end((err,res)=>{
            (res).should.have.status(200);
            done();

        });

    });
});   
console.log("Test Passed");
});