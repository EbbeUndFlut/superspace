import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SpaceDisplay from "../../components/spacedisplay/SpaceDisplay";

const Custom = () => {
    const [long, setlong] = useState('')
    const [lat, setLat] = useState('')
    const [img, setImg] = useState('')

    const navigate = useNavigate()

    const fetchImg =()=>{
        fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2018-01-01&&dim=0.10&api_key=cC9cdqXuCLIpFIAeZH4ozOsiMqnl7aYWy977m3Dz`)
        .then(res => res.json())
        .then(data => setImg(data.url))
    }
    

    return ( <main>
        <section>
            <label htmlFor="">Long</label>
            <input type="number" value={long} onChange={(e) => setlong(+(e.target.value)>180? 180:Number(e.target.value))} />
            <label htmlFor="">Lat</label>
            <input type="number" onChange={(e) => setLat(Number(e.target.value))} />
            <button onClick={fetchImg}>Zörtsch</button>
            <button onClick={()=> navigate(-1)}>back</button>
        </section>
        <SpaceDisplay img={img}></SpaceDisplay>
    </main> );
}

export default Custom;