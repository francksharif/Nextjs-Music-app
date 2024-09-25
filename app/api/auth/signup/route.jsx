import { NextResponse } from "next/server";
import fs from 'fs';
import path from "path";



export async function POST(request){
    const {username, password } = await request.json();

    // Get the path to the mock 
    const filePath = path.join(process.cwd(), 'public', 'users.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const users = JSON.parse(fileContents).users; 


    // Verify if User already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser){
        return NextResponse.json({success: false, message: 'Username already exists'})
    }


    // Create a new User
    const newUser=  {
        id: Date.now(),
        username,
        password,
        playlists: []
    };

    users.push(newUser);

    // Save to the json
    fs.writeFileSync(filePath, JSON.stringify({users}, null, 2));

    return NextResponse.json({success: true});
}