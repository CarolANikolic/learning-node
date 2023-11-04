const { writeFile, appendFile} = require("fs");


writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log("The file has been saved.")
});

appendFile("./message.txt", "\nHello from Carol!", (err) => {
    if (err) throw err;
    console.log("The second sentence is appended.")
});