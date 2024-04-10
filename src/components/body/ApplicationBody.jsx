import styles from "./ApplicationBody.module.css"
import 'reactflow/dist/style.css';
import MessageSection from "./MessageSection";
import GetInput from "./GetInput"
import { useState } from "react";
import ItemButton from "../ui/ItemButton";

const ApplicationBody = () => {

    const [isAddMessageSectionOpen, setIsAddMessageSectionOpen] = useState(false)

    const handleItemButtonPressed = () => {
        setIsAddMessageSectionOpen(!isAddMessageSectionOpen)
    }

    return(
        <div className={styles.container}>
            <div className={styles.rightSection}>
                <MessageSection />
            </div>
            <div className={styles.leftSection}>
                {(isAddMessageSectionOpen === true) ? <GetInput onItemButtonPress={handleItemButtonPressed}/> : <ItemButton onItemButtonPress={handleItemButtonPressed}/>}
            </div>
        </div>
    )
}

export default ApplicationBody

