// const employee = {  //custom object
//     id : 1,
//     name : "Ali"
// }
// console.log(employee.name);
// console.log(process.argv);  //pre-defined object


console.log(process); // global


// const fs = require("fs"); // non-global
import fs from "fs"; // non-global


const action = process.argv[2];
const filename = process.argv[3];
const data = process.argv[4];

if(action == "create"){
fs.writeFileSync(filename, data);
}
else if(action == "delete"){
    fs.unlinkSync(filename);
}
else {
    console.log("Invalid Action");
}


