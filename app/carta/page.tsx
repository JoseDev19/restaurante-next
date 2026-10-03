import {getDb} from "@/lib/db";export const dynamic="force-dynamic";
export default function P(){const d=getDb().dishes.filter((x:any)=>x.visible);const cats=[...new Set(d.map((x:any)=>x.cat))] as string[];
return <section><div className="wrap"><p className="kick">Cocina de temporada</p><h1>Nuestra <em>carta</em></h1>
{cats.map(c=><div key={c} style={{marginTop:48}}><h2>{c}</h2>{d.filter((x:any)=>x.cat===c).map((x:any,i:number)=><div className="dish" key={i}><div><h3>{x.name}</h3><p className="mut">{x.desc}</p></div><span className="price">{x.price}€</span></div>)}</div>)}</div></section>}
