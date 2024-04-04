import Link from 'next/link'

export default function Topbar() {
  return (
    <div className="min-w-full flex items-center justify-between">
      <ul>
        <li>
          <Link href={'/login'}>Login</Link>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <Link href={'/home'}>Home</Link>
        </li>
        <li>
          <Link href={'/library'}>Library</Link>
        </li>
        <li>
          <Link href={'/search'}>Search</Link>
        </li>
      </ul>
      <ul>
        <li>
          <span className="hidden"></span>
        </li>
      </ul>
    </div>
  )
}
