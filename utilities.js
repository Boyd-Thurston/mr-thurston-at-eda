const fs = require('fs')

module.exports = {
    readJson: readJson,
}

function readJson(callback){ 
    fs.readFile('data.json','utf-8' , (err, data) => {
        if (err) callback(err);
        else { 
            callback(null, JSON.parse(data))
        }
    });  
}
