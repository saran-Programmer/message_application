import styles from "./GetInput.module.css"

const GetInput = ({onItemButtonPress}) => {
    return(
        <div className={styles.container}>
            <span className={styles.SectionTitle}>Text</span>
            <span className={styles.inputSection}>
                <textarea />
                <div className={styles.optionsSection}>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label for="readonly">Read Only</label>
                </div>
                <button className={styles.addElementButton} onClick={() => {onItemButtonPress()}}>Add Element</button>
            </span>
        </div>
    )
}

export default GetInput