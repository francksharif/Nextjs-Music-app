import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'users.json');

// Function to get the next available numeric ID for a new playlist
const getNextPlaylistId = (playlists) => {
    const existingIds = playlists.map(playlist => Number(playlist.id));
    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    return maxId + 1;
};

// Function to load and parse JSON data from the file
const loadUsersData = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
};

// Function to save JSON data back to the file
const saveUsersData = async (data) => {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// GET handler to retrieve playlists for a specific user
export async function GET(req, { params }) {
    const userId = Number(params.userId); // Extract userId from params

    if (isNaN(userId)) {
        return new Response(JSON.stringify({ error: 'Invalid user ID' }), { status: 400 });
    }

    try {
        const data = await loadUsersData();
        const user = data.users.find(user => user.id === userId);

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        const playlists = user.playlists || [];
        return new Response(JSON.stringify(playlists), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to load data' }), { status: 500 });
    }
}

// POST handler to create a new playlist for a specific user
export async function POST(req, { params }) {
    const userId = Number(params.userId); // Extract userId from params

    if (isNaN(userId)) {
        return new Response(JSON.stringify({ error: 'Invalid user ID' }), { status: 400 });
    }

    try {
        const { playlistName } = await req.json();
        if (!playlistName) {
            return new Response(JSON.stringify({ error: 'Playlist name is required' }), { status: 400 });
        }

        const data = await loadUsersData();
        const user = data.users.find(user => user.id === userId);

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        if (user.playlists.some(playlist => playlist.name === playlistName)) {
            return new Response(JSON.stringify({ error: 'Playlist already exists' }), { status: 400 });
        }

        const newPlaylist = {
            id: getNextPlaylistId(user.playlists).toString(),
            name: playlistName,
            songs: [],
        };

        user.playlists.push(newPlaylist);
        await saveUsersData(data);

        return new Response(JSON.stringify(newPlaylist), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to create playlist' }), { status: 500 });
    }
}

// DELETE handler to delete a specific playlist for a user
export async function DELETE(req, { params }) {
    const userId = Number(params.userId); // Extract userId from params

    if (isNaN(userId)) {
        return new Response(JSON.stringify({ error: 'Invalid user ID' }), { status: 400 });
    }

    try {
        const { playlistId } = await req.json();
        const data = await loadUsersData();
        const user = data.users.find(user => user.id === userId);

        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        const playlistIndex = user.playlists.findIndex(playlist => playlist.id === playlistId);
        if (playlistIndex === -1) {
            return new Response(JSON.stringify({ error: 'Playlist not found' }), { status: 404 });
        }

        user.playlists.splice(playlistIndex, 1);
        await saveUsersData(data);

        return new Response(null, { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to delete playlist' }), { status: 500 });
    }
}
