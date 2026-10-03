import Link from "next/link";import {getDb} from "@/lib/db";export const dynamic="force-dynamic";
export default function Home(){const d=getDb();const top=d.dishes.filter((x:any)=>x.destacado&&x.visible);return <>
<section className="hero"><div className="wrap"><p className="kick">Cocina mediterránea · Desde 2012</p><h1>{d.settings.tagline}</h1>
<p className="mut" style={{maxWidth:520,marginTop:20}}>Producto de temporada, fuego lento y una mirada contemporánea a los sabores que nos representan.</p>
<Link href="/reservas" className="btn">Reservar una mesa</Link><Link href="/carta" className="btn o">Descubrir la carta</Link></div></section>
<section className="alt"><div className="wrap"><p className="kick">01 — La experiencia</p><h2>Tradición con <em>alma contemporánea.</em></h2><p className="mut" style={{maxWidth:600,marginTop:16}}>En {d.settings.nombre} cocinamos con respeto por el producto y pasión por sorprender. Nuestra carta cambia con las estaciones.</p></div></section>
<section><div className="wrap"><p className="kick">02 — Selección del chef</p><h2>Una carta para <em>disfrutar.</em></h2>
<div style={{marginTop:24}}>{top.map((x:any,i:number)=><div className="dish" key={i}><div><h3>{x.name}</h3><p className="mut">{x.desc}</p></div><span className="price">{x.price}€</span></div>)}</div>
<Link href="/carta" className="btn o">Ver carta completa →</Link></div></section>
<section className="alt" style={{textAlign:"center"}}><div className="wrap"><p className="kick">Tu próxima experiencia</p><h2>La mesa está <em>preparada.</em></h2><Link href="/reservas" className="btn">Reservar ahora →</Link></div></section></>}
