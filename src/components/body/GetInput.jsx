import styles from "./GetInput.module.css"
import { useState } from "react"

const GetInput = ({onItemButtonPress, addItem}) => {

    const [enteredInput, setEnteredInput] = useState("")
    const [isReadOnly, setIsReadOnly] = useState(false)

    const handleAddElementButtonPressed = () => {
        onItemButtonPress()
        addItem({message: enteredInput, isReadOnly: isReadOnly})
    }

    const handleReadOnlyStateChange = () => {
        setIsReadOnly(!isReadOnly)
    }

    const handleInputChange = (e) => {
        setEnteredInput(e.target.value)
    }

    return(
        <div className={styles.container}>
            <span className={styles.SectionTitle}>Text</span>
            <span className={styles.inputSection}>
                <textarea value={enteredInput} onChange={handleInputChange}/>
                <div className={styles.optionsSection}>
                    <div>
                        <input type="checkbox" id="isReadOnly" onClick={handleReadOnlyStateChange}/>
                        <label for="readonly">Read Only</label>
                    </div>
                </div>
                <button className={styles.addElementButton} onClick={handleAddElementButtonPressed}>Add Element</button>
            </span>
        </div>
    )
}

export default GetInput