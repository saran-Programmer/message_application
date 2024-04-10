import styles from "./ApplicationBody.module.css"
import 'reactflow/dist/style.css';
import MessageSection from "./MessageSection";
import GetInput from "./GetInput"
import { useState } from "react";
import ItemButton from "../ui/ItemButton";
import TestComponent from "./TestComponent";

const ApplicationBody = () => {

    const [isAddMessageSectionOpen, setIsAddMessageSectionOpen] = useState(false)

    const [initialNodes, setInitialNodes] = useState([
        { id: "2", type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
        { id: "4", type: 'textUpdater', position: { x: 100, y: 100 }, data: { value: 123 } }
    ])

    let [currentNodeId, setCurrentNodeId] = useState(3)
    const currentPostion = {x: 200, y: 200}

    const handleItemButtonPressed = () => {
        setIsAddMessageSectionOpen(!isAddMessageSectionOpen)
    }

    const addNewItem = (props) => {
        const newNode = {id: currentNodeId.toString(), type: 'textUpdater',position: currentPostion, data: {value: 123}}
        setInitialNodes(e => [...e, newNode])
        console.log(currentNodeId)
        setCurrentNodeId(currentNodeId += 1)
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

