let visitors = require('../src/App.js');
var fs = require('fs');

let visitor_file = new visitors;

describe("something", function(){

    beforeEach(function () {
        spyOn(visitor_file, 'save');
        spyOn(visitor_file, 'load');
    });

    it("should save vistors information", function(){
        visitor_file.save();
        expect(visitor_file.save).toHaveBeenCalled();
       
    });

    it("should save visitor data to Json file", function(){
        visitor_file.load();
        expect(visitor_file.load).toHaveBeenCalled();
    });

    it('should call load with a file name', function () {
        visitor_file.load("fileName");
        expect(visitor_file.load).toHaveBeenCalledWith("fileName");
    });
            
});
        
