import {isAdmin} from "@/lib/auth";import {getDb} from "@/lib/db";import Login from "./Login";import Panel from "./Panel";
export const dynamic="force-dynamic";export const metadata={robots:"noindex"};
export default async function P(){return <section><div className="wrap">{await isAdmin()?<Panel initial={getDb()}/>:<Login/>}</div></section>}
