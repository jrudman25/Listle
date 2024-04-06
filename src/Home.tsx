/**
 * Home.tsx
 * The main page of the site.
 * @version 2024.04.06
 */
import React, { useEffect, useState } from 'react';
import { Typography, Box } from "@mui/material";

const Home = () => {

    const [playlists, setPlaylists] = useState<any[]>([]);
    const [selectedSong, setSelectedSong] = useState<string>('');

    useEffect(() => {
        const fetchPlaylists = async () => {
            const accessToken = sessionStorage.getItem('accessToken');
            if (accessToken) {
                try {
                    const response = await fetch('https://api.spotify.com/v1/me/playlists', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setPlaylists(data.items);
                    } else {
                        console.error('Failed to fetch playlists:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching playlists:', error);
                }
            }
        };

        fetchPlaylists();
    }, []);

    const handlePlaylistClick = async (playlistId: string) => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) {
            try {
                const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.items.length > 0) {
                        const randomIndex = Math.floor(Math.random() * data.items.length);
                        const selectedTrack = data.items[randomIndex].track;
                        setSelectedSong(selectedTrack.name);
                    } else {
                        console.error('Playlist has no tracks');
                    }
                } else {
                    console.error('Failed to fetch playlist tracks:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching playlist tracks:', error);
            }
        }
    };

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    color='black'
                    marginBottom='0.5rem'
                >
                    Home
                </Typography>
                <Typography variant="h4">Your Playlists</Typography>
                <ul>
                    {playlists.map((playlist: any) => (
                        <li key={playlist.id} onClick={() => handlePlaylistClick(playlist.id)}>
                            {playlist.name}
                        </li>
                    ))}
                </ul>
                {selectedSong && (
                    <Typography variant="h6">Selected Song: {selectedSong}</Typography>
                )}
            </Box>
        </div>
    );
};

export default Home;
