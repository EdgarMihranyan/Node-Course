import fs from "fs" 
 
export const stat = (path) => { 
    return new Promise((res, rej) => { 
        fs.stat(path, (err, stats) => { 
            if (err) return rej(err) 
            return res(stats) 
        }); 
    }) 
} 
 
export const readFile = (path,format)=>{ 
    return new Promise((res,rej)=>{ 
        fs.readFile(path,format, (err, data) => { 
            if (err)return rej(err) 
            return res(data); 
          }); 
    }) 
} 
 
export const writeFile = (path,content,flag)=>{ 
    return new Promise((res,rej)=>{ 
        fs.writeFile(path, content,flag, err => { 
            if (err) return rej(err) 
            return res() 
          }); 
    }) 
}  
 
export const existsSync = fs.existsSync