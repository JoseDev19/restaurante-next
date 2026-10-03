import fs from "fs";import path from "path";
const f=path.join(process.cwd(),"data","db.json");
export const getDb=()=>JSON.parse(fs.readFileSync(f,"utf8"));
export const saveDb=(d:any)=>fs.writeFileSync(f,JSON.stringify(d,null,2));
