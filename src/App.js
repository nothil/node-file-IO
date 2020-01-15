var fs = require('fs');


module.exports = class visitors 
 {
    constructor (age, fullName, dateOfVisite, comment, timeOfVisit, nameOfAssistant){
         
        this.age = age;
        this.fullName = fullName;
        this.dateOfVisite = dateOfVisite;
        this.commet = comment;
        this.nameOfAssistant = timeOfVisit;
        this.timeOfVisit = nameOfAssistant;
    }

     save(){
        fs.writeFile(`visitor_${(this.fullName)
                                .replace(' ', '_')
                                .toLowerCase()}.json`, 
                                JSON.stringify(this, null, 4), function (err){
            if(err) throw new Error(err);
            console.log("JSON file is saved");
        });
    }

    load(nameOfFileToLoad) {
        let exampleJson = fs.readFileSync(nameOfFileToLoad);


        let userDate = JSON.parse(exampleJson);
        //console.log(userDate);


    }


    

}

 //let  charlie = new visitor(26, "Nothile Ngcobo", "12/01/2019", "none", "12:30", "Nomthandazo");
 //charlie.save();

 //let fileToLoad = new visitor();
 //fileToLoad.load("visitor_Nothile.json");