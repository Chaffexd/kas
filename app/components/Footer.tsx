import Link from "next/link"


const Footer = () => {
  return (
    <nav className="w-full mt-32 bg-rose-300">
        <ul className="flex justify-end p-12 w-full">
            <li className="font-bold text-2xl text-rose-500"><Link href={"/"}>Kas London</Link></li>
        </ul>
    </nav>
  )
}

export default Footer