import Form from "../Form";import {getDb} from "@/lib/db";export const dynamic="force-dynamic";
export default function P(){const s=getDb().settings;return <section><div className="wrap"><p className="kick">Contacto</p><h1>Hablemos</h1>
<div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:40}}><div><p>📍 {s.direccion}</p><p>📞 {s.telefono}</p><p>✉️ {s.email}</p><p className="mut" style={{marginTop:12}}>{s.horarios}</p></div><Form tipo="contacto"/></div></div></section>}
