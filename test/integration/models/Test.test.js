describe('TestModel', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      Test.find()
      .then(function(results) {
        done(); //This does nothing.
      })
      .catch(done);
    });
  });

});