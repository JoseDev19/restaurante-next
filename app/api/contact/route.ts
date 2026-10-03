import {NextResponse} from "next/server";import nodemailer from "nodemailer";import {getDb,saveDb} from "@/lib/db";
export async function POST(r:Request){const b=await r.json();
 const x:any=Object.fromEntries(Object.entries(b).map(([k,v])=>[k,String(v||"").slice(0,2000)]));
 const res=x.tipo==="reserva";
 if(!x.nombre||!/^\S+@\S+\.\S+$/.test(x.email)||(res?!x.fecha||!x.hora:!x.mensaje))return NextResponse.json({error:"Revisa los campos"},{status:400});
 x.fecha_envio=new Date().toISOString();
 try{const d=getDb();(res?d.reservas:d.messages).unshift(x);saveDb(d)}catch{}
 try{const t=nodemailer.createTransport({service:"gmail",auth:{user:process.env.GMAIL_USER,pass:process.env.GMAIL_APP_PASSWORD}});
  await t.sendMail({from:process.env.GMAIL_USER,to:process.env.OWNER_EMAIL,replyTo:x.email,subject:res?`[Reserva] ${x.nombre} · ${x.fecha} ${x.hora} · ${x.personas} pers.`:`[Contacto] ${x.nombre}`,
  text:Object.entries(x).filter(([k])=>k!=="tipo"&&k!=="fecha_envio").map(([k,v])=>`${k}: ${v}`).join("\n")})}
 catch{return NextResponse.json({error:"No se pudo enviar"},{status:500})}
 return NextResponse.json({ok:true})}
