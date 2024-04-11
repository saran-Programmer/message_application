import styles from "./ApplicationBody.module.css"
import 'reactflow/dist/style.css';
import MessageSection from "./MessageSection";
import GetInput from "./GetInput"
import { useState } from "react";
import ItemButton from "../ui/ItemButton";

// This Renders the application body. This has two sections. 1) the MessageSection 2) the buttons bar
const ApplicationBody = () => {
    const [isAddMessageSectionOpen, setIsAddMessageSectionOpen] = useState(false)
    const [initialNodes, setInitialNodes] = useState([])

    let [currentNodeId, setCurrentNodeId] = useState(0)
    let [currentPosition, setCurrentPostion] = useState({x: 0, y: 0})

    const handleItemButtonPressed = () => {
        setIsAddMessageSectionOpen(!isAddMessageSectionOpen)
    }

    const addNewItem = (props) => {
        const newNode = {id: currentNodeId.toString(), type: 'textUpdater',position: currentPosition, data: {value: props.value, isReadOnly: props.isReadOnly}}
        setInitialNodes(e => [...e, newNode])
        setCurrentNodeId(currentNodeId += 1)
        setCurrentPostion({x: currentPosition.x += 300, y: currentPosition.y = 0})
    }

    return(
        <div className={styles.container}>
            <div className={styles.rightSection}>
                <MessageSection initialNodes={initialNodes} setInitialNodes={setInitialNodes}/>
            </div>
            <div className={styles.leftSection}>
                {(isAddMessageSectionOpen === true) ? <GetInput onItemButtonPress={handleItemButtonPressed} addItem={addNewItem}/> : <ItemButton onItemButtonPress={handleItemButtonPressed}/>}
            </div>
            
        </div>
    )
}

export default ApplicationBody

