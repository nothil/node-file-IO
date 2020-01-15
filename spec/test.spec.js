let visitors = require('../src/App.js');

let visitor_file = new visitors;
 
describe("something", function(){
    it("should do something", function(){
        expect(visitor_file.save("")).toBe(true)
       
    });

    it("should save visitor data to Json file", function(){
        expect(visitor_file.load()).toBe()
    });
            
});
        
