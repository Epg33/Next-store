import Link from 'next/link'

interface NavBar {
  inView: boolean
 }

const Nav:React.FC<NavBar> = ({ inView }):JSX.Element | null => {
  if(!inView) return null;
  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/products'>Products</Link>
      <Link href='/categorys'>Categorys</Link>
      <Link href='/carts'>Carts</Link>
      <Link href='/users'>Users</Link>
      <Link href={`/users/${1}`}>Profile</Link>
    </nav>
  )
}

export default Nav