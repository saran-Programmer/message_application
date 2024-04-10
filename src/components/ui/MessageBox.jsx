import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

import styles from "./MessageBox.module.css"

function MessageBox() {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <div className={styles.container}>
      <div className={styles.labelSection}>Send Message</div>
      <div className={styles.inputSection}>
        <input id="text" name="text" onChange={onChange} className="nodrag" placeholder='Enter Message' autoComplete='off'/>
      </div>
      <Handle type="source" position={Position.Right} id='a'/>
      <Handle type="target" position={Position.Left} id='a'/>
    </div>
  );
}

export default MessageBox