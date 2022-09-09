import style from './SpaceButton.module.css'

const SpaceButton = (props) => {
    return ( 
        <p className={style.spacebutton} onClick={()=>props.setcoords([props.coords.long, props.coords.lat])}>{props.ort}</p>
     );
}
 
export default SpaceButton;