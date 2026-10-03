import crypto from "crypto";import {cookies} from "next/headers";
const mac=(e:string)=>crypto.createHmac("sha256",process.env.AUTH_SECRET||"dev").update(e).digest("hex");
export const makeToken=()=>{const e=String(Date.now()+7*864e5);return e+"."+mac(e)};
export async function isAdmin(){const c=(await cookies()).get("adm")?.value;if(!c)return false;const [e,h]=c.split(".");
 return !!h&&h.length===64&&crypto.timingSafeEqual(Buffer.from(h),Buffer.from(mac(e)))&&Number(e)>Date.now()}
