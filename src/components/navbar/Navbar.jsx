import { useEffect } from "react"
import { Link } from "react-router-dom"
import SpaceButton from "../spacebutton/Spacebutton"
import './navbar.css'
const Navbar = (props) => {
    
    return (
    <nav>
        <SpaceButton setcoords={props.setcoords} ort='Jever' coords={{long:100.75,lat:1.5}}></SpaceButton>
        <SpaceButton setcoords={props.setcoords}ort='Tübingen' coords={{long:9.04,lat:48.54}}></SpaceButton>
        <SpaceButton setcoords={props.setcoords}ort='Bergfelde' coords={{long:13.31,lat:52.67}}></SpaceButton>
        <Link to='/custom'>Custom</Link>
    </nav>
        )
}

export default Navbar