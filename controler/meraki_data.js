const fs=require("fs")
const user=require("readline-sync")
const axios=require("axios")
meraki_data=axios.get("https://api.merakilearn.org/courses")
// console.log(meraki_data)
.then(api=>{
    meraki_data=api.data
    // console.log(meraki_data)
    file=JSON.stringify(meraki_data,null,3)
    a=fs.writeFileSync("data.json",file)
});