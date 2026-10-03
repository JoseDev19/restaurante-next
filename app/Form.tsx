"use client";import {useState} from "react";
export default function Form({tipo}:{tipo:"reserva"|"contacto"}){const [s,setS]=useState("");const r=tipo==="reserva";
 async function go(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const f=e.currentTarget;setS("load");
  const x=await fetch("/api/contact",{method:"POST",body:JSON.stringify({...Object.fromEntries(new FormData(f)),tipo})});setS(x.ok?"ok":"err");if(x.ok)f.reset()}
 return <form onSubmit={go} className="card"><label>Nombre</label><input name="nombre" required/><label>Email</label><input name="email" type="email" required/>
 {r?<><label>Teléfono</label><input name="telefono"/><label>Fecha</label><input name="fecha" type="date" required/><label>Hora</label><select name="hora"><option>13:30</option><option>14:30</option><option>20:30</option><option>21:30</option></select>
 <label>Personas</label><select name="personas">{[1,2,3,4,5,6,7,8].map(n=><option key={n}>{n}</option>)}</select></>:null}
 <label>{r?"Comentarios (alergias, ocasión...)":"Mensaje"}</label><textarea name="mensaje" rows={4} required={!r}/>
 <button className="btn" disabled={s==="load"}>{s==="load"?"Enviando...":r?"Reservar":"Enviar"}</button>
 {s==="ok"&&<p style={{color:"var(--a)"}}>{r?"¡Solicitud enviada! Te confirmaremos pronto.":"¡Mensaje enviado!"}</p>}{s==="err"&&<p style={{color:"#f66"}}>No se pudo enviar. Escríbenos por WhatsApp.</p>}</form>}
