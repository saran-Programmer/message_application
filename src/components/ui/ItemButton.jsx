import styles from "./ItemButton.module.css"

// Button dispalyed in the buttonsTab
const ItemButton = ({onItemButtonPress}) => {

    const handleButtonPress = () => {
        onItemButtonPress()
    }

    return(
        <button className={styles.itemButton} onClick={handleButtonPress}>
            <i className="fa-regular fa-comment" />
            <span className={styles.itemButtonText}>Message</span>
        </button>
    )
}

export default ItemButton