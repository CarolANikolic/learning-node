import { writeFile, appendFile, readFile} from "fs";
import generateName from "sillyname";

// Node native modules
writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log("The file has been saved.")
});

appendFile("./message.txt", "\nHello from Carol!", (err) => {
    if (err) throw err;
    console.log("The second sentence is appended.")
});

readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data)
});

// NPM packages
let sillyName = generateName();
console.log(`My name is ${sillyName}.`)

