import { Handle, Position } from 'reactflow';

import styles from "./DateBox.module.css"

// The messageNode has two property readOnly and editable
function MessageBox({data}) {

  const setMonth = (month) => {
    month = parseInt(month) - 1
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
    console.log(month)
    return monthNames[month]
  }
  return (
    <div className={styles.container}>
      <div className={styles.label}>Date</div>
      <div className={styles.details}>
            <div className={styles.Month}>{setMonth(data.value.value.substring(5, 7))}</div>
            <div className={styles.date}>{data.value.value.substring(8, 10)}</div>
            <div className={styles.year}>{data.value.value.substring(0, 4)}</div>
      </div>
      <Handle type="source" position={Position.Right} id='a'/>
      <Handle type="target" position={Position.Left} id='b'/>
      <Handle type="source" position={Position.Bottom} id='c'/>
      <Handle type="target" position={Position.Top} id='d'/>
    </div>
  );
}



// {data.value.value.substring(8, 10)}


export default MessageBox