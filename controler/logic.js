const data=require("../data.json")
// console.log(data);
const fs=require("fs")

const getdata=(req,res)=>{
    res.json(data)
}
//post meraki data
const postdata=(req,res)=>{
  user={
    id:data.length+1,
    name:req.body.name,
    logo:req.body.log,
    notes:req.body.notes,
    days_to_complete:req.body.days_to_complete,
    short_description:req.body.short_description,
    type:req.body.type,
    course_type:req.body.course_type,
    lang_available:req.body.lang_available

      }

      data.push(user)
      res.json(user)
        a=fs.writeFileSync("data.json",JSON.stringify(data,null,3))
  }

  //put meraki data
  const putdata=(req,res)=>{
    id=req.body.id
    name=req.body.name
    logo=req.body.log
    notes=req.body.notes
    days_to_complete=req.body.days_to_complete
    short_description=req.body.short_description
    type=req.body.type
    course_type=req.body.course_type
    lang_available=req.body.lang_available

    let index=data.findIndex((data1)=>{
        return (data1.id==Number.parseInt(id))
        
    
    })

    if (index>=0){
      std=data[index]
      std.id=req.body.id
      std.name=req.body.name
      std.notes=req.body.notes
      std.days_to_complete=req.body.days_to_complete
      std.short_description=req.body.short_description
      std.type=req.body.type
      std.course_type=req.body.course_type
      std.logo=req.body.logo
      std.lang_available=req.body.lang_available

      res.json(std)
      a=fs.writeFileSync("data.json",JSON.stringify(data,null,3))

  }
  else{
      res.send(404)
  }

}
//delet meraki data
const deletedata=(req,res)=>{
  let id=req.params.id;
  let index =data.findIndex((data)=>{
      return (data.id==Number.parseInt(id))
  })
  if(index>=0){
      let std1=data[index]
      data.splice(index,1)
      // res.json(std)
      fs.writeFileSync("data.json",JSON.stringify(data,null,3))
      res.json(std1)

  }
  else{
    res.status(404)
      res.send({err:err})
  }
}



module.exports={getdata,postdata,putdata,deletedata}
