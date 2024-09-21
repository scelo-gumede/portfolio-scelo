import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Navbar = () => {
  return (
    <nav className="p-4 flex justify-end pl-20">
        <ul className="hidden sm:flex space-x-6 font-bold ">
            <li className="cursor-pointer ">Blog</li>
            <li className="cursor-pointer ">Works</li>
            <li className="cursor-pointer ">Contacts</li>
        </ul>
        <div className="sm:hidden">
        <FontAwesomeIcon icon={faBars} className="text-xlg cursor-pointer" />
        </div>
    </nav>
  )
}

export default Navbar