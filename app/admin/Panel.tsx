"use client";import {useState} from "react";
const F=[["name","Plato"],["desc","Descripción"],["price","Precio €","number"],["cat","Categoría"],["destacado","Chef","bool"],["visible","Visible","bool"]];
const L:any={nombre:"Nombre",tagline:"Frase principal",telefono:"Teléfono",whatsapp:"WhatsApp (34 + número, sin +)",direccion:"Dirección",horarios:"Horarios",email:"Email público"};
export default function Panel({initial}:{initial:any}){
 const [d,setD]=useState(initial);const [tab,setTab]=useState("resumen");const [m,setM]=useState("");
 const save=async()=>{const r=await fetch("/api/admin/data",{method:"PUT",body:JSON.stringify(d)});setM(r.ok?"Guardado ✓":"Error al guardar");setTimeout(()=>setM(""),2500)};
 const set=(i:number,f:string,v:any)=>setD({...d,dishes:d.dishes.map((x:any,j:number)=>j===i?{...x,[f]:v}:x)});
 const logout=async()=>{await fetch("/api/login",{method:"DELETE"});location.reload()};
 const T=[["resumen","Resumen"],["dishes","Platos"],["settings","Ajustes"],["reservas","Reservas"],["messages","Mensajes"]];
 return <><div style={{display:"flex",justifyContent:"space-between"}}><h2>Panel <em>admin</em></h2><button className="btn o" onClick={logout}>Salir</button></div>
 <div className="tabs">{T.map(([k,t])=><button key={k} className={tab===k?"on":""} onClick={()=>setTab(k)}>{t}</button>)}</div>
 {tab==="resumen"&&<div className="grid"><div className="card"><p className="kick">Platos en carta</p><div className="stat">{d.dishes.filter((x:any)=>x.visible).length}</div></div><div className="card"><p className="kick">Reservas</p><div className="stat">{d.reservas.length}</div></div><div className="card"><p className="kick">Mensajes</p><div className="stat">{d.messages.length}</div></div></div>}
 {tab==="dishes"&&<div style={{overflowX:"auto"}}><table><thead><tr>{F.map(f=><th key={f[0]}>{f[1]}</th>)}<th/></tr></thead><tbody>
 {d.dishes.map((r:any,i:number)=><tr key={i}>{F.map(([k,,ty])=><td key={k}>{ty==="bool"?<input type="checkbox" checked={r[k]} onChange={e=>set(i,k,e.target.checked)}/>:<input type={ty||"text"} value={r[k]} onChange={e=>set(i,k,ty==="number"?Number(e.target.value):e.target.value)}/>}</td>)}
 <td><button onClick={()=>confirm("¿Eliminar?")&&setD({...d,dishes:d.dishes.filter((_:any,j:number)=>j!==i)})}>🗑</button></td></tr>)}</tbody></table>
 <button className="btn o" onClick={()=>setD({...d,dishes:[...d.dishes,{name:"",desc:"",price:0,cat:"Principales",destacado:false,visible:true}]})}>+ Añadir plato</button></div>}
 {tab==="settings"&&<div className="card" style={{maxWidth:600}}>{Object.keys(L).map(k=><div key={k}><label>{L[k]}</label><input value={d.settings[k]||""} onChange={e=>setD({...d,settings:{...d.settings,[k]:e.target.value}})}/></div>)}</div>}
 {tab==="reservas"&&d.reservas.map((x:any,i:number)=><div className="card" key={i} style={{marginBottom:10}}><p className="kick">{x.fecha} · {x.hora} · {x.personas} pers.</p><b>{x.nombre}</b> <span className="mut">{x.email} {x.telefono}</span><p>{x.mensaje}</p><button onClick={()=>setD({...d,reservas:d.reservas.filter((_:any,j:number)=>j!==i)})}>🗑 Quitar</button></div>)}
 {tab==="messages"&&d.messages.map((x:any,i:number)=><div className="card" key={i} style={{marginBottom:10}}><b>{x.nombre}</b> <span className="mut">{x.email}</span><p>{x.mensaje}</p><button onClick={()=>setD({...d,messages:d.messages.filter((_:any,j:number)=>j!==i)})}>🗑 Quitar</button></div>)}
 {["dishes","settings","reservas","messages"].includes(tab)&&<button className="btn" onClick={save}>Guardar cambios</button>} <span>{m}</span></>}
