import { NextResponse } from "next/server";
import fs from 'fs';
import path from "path";


export async function POST(request) {
    const { username, password } = await request.json();

    // Get to json 
    const filePath = path.join(process.cwd(), 'public', 'users.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(fileContents).users;

    // Verify user credentials
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        return NextResponse.json({ success: true, userId: user.id });
    } else {
        return NextResponse.json({ success: false, message: "Invalid username or password" });
    }



}