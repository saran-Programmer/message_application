import styles from "./ApplicationBody.module.css"
import 'reactflow/dist/style.css';
import MessageSection from "./MessageSection";
import GetInput from "../ui/GetInput"
import { useState } from "react";
import ItemButton from "../ui/ItemButton";
import GetDateInput from "../ui/GetDateInput";

// This Renders the application body. This has two sections. 1) the MessageSection 2) the buttons bar
const ApplicationBody = () => {
    const [isAddMessageSectionOpen, setIsAddMessageSectionOpen] = useState(false)
    const [isAddDateAndTimeSectionOpen, setIsAddDateAndTimeSectionOpen] = useState(false)
    const [initialNodes, setInitialNodes] = useState([])

    let [currentNodeId, setCurrentNodeId] = useState(0)
    let [currentPosition, setCurrentPostion] = useState({x: 0, y: 0})


    const handleItemButtonPressed = () => {
        setIsAddMessageSectionOpen(!isAddMessageSectionOpen)
    }


    const handleDateAndTimeButtonPressed = () => {
        setIsAddDateAndTimeSectionOpen(!isAddDateAndTimeSectionOpen)
    }

    const addNewItem = (props) => {
        if(props.type === "messageBox"){
            const newNode = {id: currentNodeId.toString(), type: 'textUpdater',position: currentPosition, data: {value: props.value, isReadOnly: props.isReadOnly}}
            setInitialNodes(e => [...e, newNode])
            setCurrentNodeId(currentNodeId += 1)
            setCurrentPostion({x: currentPosition.x += 300, y: currentPosition.y = 0})
        }else if(props.type === "dateTime"){
            console.log(props)
            const newNode = {id: currentNodeId.toString(), type: 'dateInput',position: currentPosition, data: {value: props}}
            setInitialNodes(e => [...e, newNode])
            setInitialNodes(e => [...e, newNode])
            setCurrentNodeId(currentNodeId += 1)
            setCurrentPostion({x: currentPosition.x += 300, y: currentPosition.y = 0})
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.rightSection}>
                <MessageSection initialNodes={initialNodes} setInitialNodes={setInitialNodes}/>
            </div>
            <div className={styles.leftSection}>
                {(isAddMessageSectionOpen === true) ? <GetInput onItemButtonPress={handleItemButtonPressed} addItem={addNewItem} onCancel={handleItemButtonPressed} /> : <ItemButton onItemButtonPress={handleItemButtonPressed} buttonText={"Message"} buttonIcon={"fa-regular fa-comment"}/>}
                {(isAddDateAndTimeSectionOpen === true) ? <GetDateInput onItemButtonPress={handleDateAndTimeButtonPressed} addItem={addNewItem} onCancel={handleDateAndTimeButtonPressed}/> : <ItemButton onItemButtonPress={handleDateAndTimeButtonPressed} buttonText={"Date and Time"} buttonIcon={"fa-regular fa-calendar"}/>}                
            </div>
            
        </div>
    )
}

export default ApplicationBody

