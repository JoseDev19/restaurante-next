import {NextResponse} from "next/server";import {isAdmin} from "@/lib/auth";import {getDb,saveDb} from "@/lib/db";
export async function GET(){if(!await isAdmin())return NextResponse.json({},{status:401});return NextResponse.json(getDb())}
export async function PUT(r:Request){if(!await isAdmin())return NextResponse.json({},{status:401});
 const d=await r.json();if(!Array.isArray(d.dishes)||typeof d.settings!=="object")return NextResponse.json({},{status:400});
 saveDb(d);return NextResponse.json({ok:true})}
