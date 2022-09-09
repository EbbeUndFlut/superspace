import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import './home.css'

const Home = () => {
    const [imgUrl, setImgUrl] = useState('')
    const [coords, setCoords] = useState([9.04,48.54])

    useEffect(()=>{
        fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${coords[0]}&lat=${coords[1]}&date=2018-01-01&&dim=0.10&api_key=cC9cdqXuCLIpFIAeZH4ozOsiMqnl7aYWy977m3Dz`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setImgUrl(data.url)
        })
    },[coords]) 
    return ( 
        <main style={{background:`url('${imgUrl}') no-repeat center/cover #000`}}>
        <Navbar klohaus='343' setcoords={setCoords}></Navbar>
        <h1>Home</h1>    
        </main>)
}
 
export default Home;