export async function getToken() {
  try {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_SECRET

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      },
    })

    const data = await response.json()
    console.log(data.access_token)
    // console.log(response.json())
    // return data
  } catch (error: any) {
    console.log(error)
  }
}
