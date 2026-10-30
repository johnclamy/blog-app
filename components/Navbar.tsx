import Link from 'next/link'


const Navbar = () => (
    <nav>
        <Link href='/'>home</Link>
        {' | '}
        <Link href='/blog'>blog</Link>
        {' | '}
        <Link href='/blog/new'>add post</Link>
    </nav>
)


export default Navbar
