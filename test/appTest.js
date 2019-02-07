var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('Entry tests', function() {
    
    it('should add a new entry', function(done) {
        chai.request(server)
          .post('/entry')
          .send({'name': 'Java', 'lastName': 'Script'})
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      });


    it('should find nothing for this label', function(done) {
        var label = 'nemlabel';
        chai.request(server)
            .get('/entry/search/' + label)
            .end(function(err, res){
            res.should.have.status(404);
            done();
        });
    });

    it('should return an array', function(done) {
        var label = 'patak';
        chai.request(server)
            .get('/entry/search/' + label)
            .end(function(err, res){
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        });
    });  
  });


