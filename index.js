import { writeFile, appendFile, readFile} from "fs";


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