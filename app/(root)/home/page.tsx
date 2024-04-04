'use client'

import { getToken } from '@/lib/spotifyAPI'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default async function Page() {
  const token = await getToken()
  return (
    <div>
      <h1></h1>
    </div>
  )
}
