import styles from "./NabBar.module.css"
import {isSavaAble} from "../body/MessageSection"
import { useState } from "react"

const NavBar = () => {

    const [displayDetialsLabel, setDisplayDetailsLabel] = useState(false)
    const [labelStyle, setLabelStyle] = useState(styles.detailsLabelOff)
    const [labelContent, setLabelContent] = useState("")


    const handleSaveButtonPress = () => {
        if(isSavaAble === true){
            setLabelContent("Saved Changes")
            setLabelStyle(styles.detailsLabel)
        }else if(isSavaAble === false){
            setLabelContent("Cannot Save Changes")
            setLabelStyle(styles.detailsLabelError)
        }
        setInterval(() => {
            setLabelContent("")
            setLabelStyle(styles.detailsLabelOff)
        }, 2500)
        setDisplayDetailsLabel(true)
    }


    return(
    <nav className={styles.container}>
        <div className={styles.leftSide}>Text Flow App</div>
        <div className={labelStyle}>{labelContent}</div> 
        <div className={styles.rightSide}>
            <button onClick={handleSaveButtonPress}>Save Changes</button>
        </div>
    </nav>
    )
}

{/* <div className={styles.detailsLabel}>Saved Changes</div>
<div className={styles.detailsLabelError}>Cannot Save Changes</div> */}

export default NavBar