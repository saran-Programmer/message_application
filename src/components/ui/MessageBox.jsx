import { useState } from 'react';
import { Handle, Position } from 'reactflow';

import styles from "./MessageBox.module.css"

// The messageNode has two property readOnly and editable
function MessageBox({data}) {

  const [currentValue, setCurrentValue] = useState(data.value);

  const handleValueChange = (e) => {
    setCurrentValue(e.target.value)
  }

  return (
    <div className={styles.container}>
      {(data.isReadOnly === true) ? <div className={styles.labelSectionReadOnly}>Send Message (Read Only)</div> : <div className={styles.labelSection}>Send Message</div>}
      <div className={styles.inputSection}>  
      {
        (data.isReadOnly === true) ? <input id="text" name="text" className="nodrag" autoComplete='off' readOnly value={data.value} /> : <input id="text" name="text" className="nodrag" onChange={handleValueChange} value={currentValue} placeholder='Enter Message' autoComplete='off'/>
      }
      </div>
      <Handle type="source" position={Position.Right} id='a'/>
      <Handle type="target" position={Position.Left} id='b'/>
    </div>
  );
}

export default MessageBox