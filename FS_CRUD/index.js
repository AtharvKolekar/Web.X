const fs = require('fs')

fs.writeFile("example.txt", "Hi, Neha here", (err, data) => {
    if(err) throw err;
    console.log("File created successfully");

    fs.readFile("example.txt", "utf-8", (err, data) =>{
        if(err) throw err;
        console.log("file content :", data);

        fs.appendFile("example.txt", "Hi, Atharv also here", (err, data) => {
            if(err) throw err;
            console.log("File updated successfully")

            fs.unlink("example.txt", (err, data) => {
                if(err) throw err;
                console.log("File deleted successfully")
            });
        });
    });
});






