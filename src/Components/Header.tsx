import Link from "next/link"
import Image from "next/image"
import ThemeSwitcher from "./ThemeSwitcher"

function Header() {
  return (
    <header className="header">
          <nav>
            <div className="logo"><Link href="/"><Image alt="logo" src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" width={20} height={30}/></Link></div>

            <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="about">About</Link>
          </div>
         <ThemeSwitcher/>
          </nav>
    </header>
  )
}

export default Header