import { useState } from "react"
import styles from "./GetDateInput.module.css"

const GetDateInput = ({onItemButtonPress, addItem}) => {

    const [currentDate, setCurrentDate] = useState("")

    const handleAddElementButtonPressed = () => {
        if (currentDate === "") {
            setCurrentDate(new Date().toLocaleDateString()) // Set currentDate to today's date
        }
        onItemButtonPress();
        addItem({value: currentDate, type: "dateTime"});
    }

    const handleDateChange = (e) => {
        setCurrentDate(e.target.value)
    }

    return(
        <div className={styles.container}>
            <div className={styles.getInput}>
                <input type="date" name="dateTime" id="dateTime" value={currentDate} onChange={handleDateChange}/>
            </div>
            <button onClick={handleAddElementButtonPressed} className={styles.addElementsButton}>Click me</button>
        </div>
    )
}

export default GetDateInput