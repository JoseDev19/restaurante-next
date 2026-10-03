import {NextResponse} from "next/server";import {makeToken} from "@/lib/auth";
export async function POST(r:Request){const {email,password}=await r.json();
 if(email?.trim().toLowerCase()!==process.env.ADMIN_EMAIL?.toLowerCase()||password!==process.env.ADMIN_PASSWORD||!password)
  return NextResponse.json({error:"Credenciales incorrectas"},{status:401});
 const res=NextResponse.json({ok:true});
 res.cookies.set("adm",makeToken(),{httpOnly:true,sameSite:"strict",secure:process.env.NODE_ENV==="production",path:"/",maxAge:604800});return res}
export async function DELETE(){const res=NextResponse.json({ok:true});res.cookies.delete("adm");return res}
