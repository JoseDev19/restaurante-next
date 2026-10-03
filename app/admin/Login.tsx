"use client";import {useState} from "react";
export default function Login(){const [e,setE]=useState("");const [p,setP]=useState("");const [err,setErr]=useState("");
 async function go(ev:React.FormEvent){ev.preventDefault();const r=await fetch("/api/login",{method:"POST",body:JSON.stringify({email:e,password:p})});r.ok?location.reload():setErr("Credenciales incorrectas")}
 return <form onSubmit={go} className="card" style={{maxWidth:400,margin:"0 auto"}}><p className="kick">Acceso privado</p><h2>PANEL ADMIN</h2><br/>
 <label>Email</label><input type="email" value={e} onChange={x=>setE(x.target.value)} required/><label>Contraseña</label><input type="password" value={p} onChange={x=>setP(x.target.value)} required/>
 <button className="btn">Entrar</button>{err&&<p style={{color:"#f66"}}>{err}</p>}</form>}
