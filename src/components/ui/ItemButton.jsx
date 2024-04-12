import styles from "./ItemButton.module.css"

// Button dispalyed in the buttonsTab
const ItemButton = ({onItemButtonPress, buttonText, buttonIcon}) => {

    const handleButtonPress = () => {
        onItemButtonPress()
    }

    return(
        <button className={styles.itemButton} onClick={handleButtonPress}>
            <i className={buttonIcon} />
            <span className={styles.itemButtonText}>{buttonText}</span>
        </button>
    )
}

export default ItemButton