import "./globals.css";import Link from "next/link";import {Playfair_Display,Inter} from "next/font/google";import {getDb} from "@/lib/db";
const pf=Playfair_Display({subsets:["latin"],variable:"--h"});const inter=Inter({subsets:["latin"],variable:"--b"});
export const dynamic="force-dynamic";export const metadata={title:"Sabor & Arte | Restaurante",description:"Cocina mediterránea contemporánea en Alicante."};
const nav=[["/","Inicio"],["/carta","Carta"],["/nosotros","Nosotros"],["/reservas","Reservas"],["/contacto","Contacto"]];
export default function L({children}:{children:React.ReactNode}){const s=getDb().settings;
 return <html lang="es" className={`${pf.variable} ${inter.variable}`}><body>
 <header><div className="wrap bar"><Link href="/" className="logo">{s.nombre}</Link><nav>{nav.map(([h,t])=><Link key={h} href={h}>{t}</Link>)}</nav></div></header>
 <main>{children}</main>
 <footer><div className="wrap"><span className="logo">{s.nombre}</span><p>Cocina mediterránea contemporánea. Hecha para compartir.</p><p>{s.direccion}</p><p>{s.telefono}</p><p>{s.horarios}</p><p>© {new Date().getFullYear()} {s.nombre}</p></div></footer>
 <a className="wa" href={`https://wa.me/${s.whatsapp}?text=${encodeURIComponent("Hola, quiero información o reservar mesa")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
 <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff"><path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3zm0 23.7a10.7 10.7 0 0 1-5.5-1.5l-.4-.2-3.800 1.200 1.200-3.700-.3-.4A10.700 10.700 0 1 1 16 26.700zm5.900-8c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7 0a8.700 8.700 0 0 1-4.300-3.800c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6a1.200 1.200 0 0 0-.9.400 3.700 3.700 0 0 0-1.100 2.700 6.400 6.400 0 0 0 1.400 3.400 14.700 14.700 0 0 0 5.600 4.900c2 .8 2.800.9 3.800.7a3.200 3.200 0 0 0 2.100-1.500 2.600 2.600 0 0 0 .2-1.500c-.1-.1-.3-.2-.6-.4z"/></svg></a>
 </body></html>}
