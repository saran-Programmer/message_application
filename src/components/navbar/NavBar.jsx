import styles from "./NabBar.module.css"
import {isSavaAble} from "../body/MessageSection"
import { useState } from "react"

const NavBar = () => {

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
        setTimeout(() => {
            setLabelContent("")
            setLabelStyle(styles.detailsLabelOff)
        }, 5000)
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

export default NavBar