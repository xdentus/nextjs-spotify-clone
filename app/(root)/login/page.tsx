'use client'
import { getToken } from '@/lib/spotifyAPI'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  //   const userLogin = () => {
  //     const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
  //     const redirectUri = 'http://localhost:3000'
  //     const apiUrl = 'https://accounts.spotify.com/authorize'
  //     const scopes = [
  //       'user-read-playback-state',
  //       'user-modify-playback-state',
  //       'user-read-currently-playing',
  //       'streaming',
  //       'playlist-read-private',
  //       'user-read-email',
  //       'user-read-private',
  //       'user-library-read',
  //       'user-library-modify',
  //     ]
  //     window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  //       ' '
  //     )}&response_type=token&show_dialog=true`
  //   }
  return (
    <div>
      <h1>
        <button onClick={() => getToken()}>LOGIN</button>
      </h1>
    </div>
  )
}
