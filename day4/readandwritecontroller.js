import{readfile}from"./readandwritefile.js";
const readfiledata = async(path) =>
{
try {
    const filedata=await readfile(path);
    console.log(filedata);
}catch(error){
    console.log("error");
}
}
readfiledata("./student.json");
