
import fs from "fs";
// import fs from "fs";
import { v2 as cloudinary } from 'cloudinary'



let deleteFile=async (filename)=>{
//   filename&&  fs.unlink(filename,(err,data)=>{
//     console.log(err)
//  })
if (!filename) {
    return true;
}
try {
    let config=({ 
        cloud_name: 'dubzpy7hn', 
    api_key: '823311175115933', 
    api_secret: 'U2nmNgWYyyFdtOPFybkkK-_IwPE' ,
      });
  
    let  filenames=filename.split('.');
let fname1=filenames[0].split("\\");
console.log(filenames[2])
let fname=fname1[0]+"/"+fname1[1]+'.'+filenames[1]


    await cloudinary.uploader.destroy(fname,config,(error,result)=>{
        console.log(error,result)
        }) 
} catch (error) {
    console.log(error)

}

}

export default deleteFile;