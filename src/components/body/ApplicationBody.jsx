import styles from "./ApplicationBody.module.css"
import 'reactflow/dist/style.css';
import MessageSection from "./MessageSection";
import GetInput from "./GetInput"
import { useState } from "react";
import ItemButton from "../ui/ItemButton";

const ApplicationBody = () => {

    const [isAddMessageSectionOpen, setIsAddMessageSectionOpen] = useState(false)

    const [initialNodes, setInitialNodes] = useState([
        { id: "1", type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: "saran", isReadOnly: true } },
        { id: "2", type: 'textUpdater', position: { x: 100, y: 100 }, data: { value: "kings never die", isReadOnly: false } },
    ])

    let [currentNodeId, setCurrentNodeId] = useState(3)
    let [currentPosition, setCurrentPostion] = useState({x: 150, y: 150})

    const handleItemButtonPressed = () => {
        setIsAddMessageSectionOpen(!isAddMessageSectionOpen)
    }

    const addNewItem = (props) => {
        const newNode = {id: currentNodeId.toString(), type: 'textUpdater',position: currentPosition, data: {value: props.value, isReadOnly: props.isReadOnly}}
        setInitialNodes(e => [...e, newNode])
        setCurrentNodeId(currentNodeId += 1)
        setCurrentPostion({x: currentPosition.x += 100, y: currentPosition.y += 100})
    }

    return(
        <div className={styles.container}>
            <div className={styles.rightSection}>
                <MessageSection initialNodes={initialNodes}/>
            </div>
            <div className={styles.leftSection}>
                {(isAddMessageSectionOpen === true) ? <GetInput onItemButtonPress={handleItemButtonPressed} addItem={addNewItem}/> : <ItemButton onItemButtonPress={handleItemButtonPressed}/>}
            </div>
            
        </div>
    )
}

export default ApplicationBody

