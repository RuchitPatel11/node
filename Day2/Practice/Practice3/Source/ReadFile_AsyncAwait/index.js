const fs = require('fs');
const {readFile} = require('fs/promises')

const readText = async() =>{
 const myFiles = ["file1.txt","file2.txt"];
 for(const file of myFiles){
    const data = await readFile(file,"utf-8",(err) =>{throw err;});
    console.log(data);
 }
}
readText();