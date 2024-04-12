import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, Position } from 'reactflow';
import MessageBox from '../ui/MessageBox';
import DateBox from '../ui/DateBox';
import { useCallback, useState, useEffect } from 'react';
import 'reactflow/dist/style.css';

const nodeTypes = { textUpdater: MessageBox, dateInput: DateBox };
let isSavaAble = false

const MessageSection = ({initialNodes}) => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);

    //updates node list with ever initialNode changes
    useEffect(() => {
      setNodes(initialNodes);
    }, [initialNodes]);

    // To check if the file saveable or not if a node remains unconnected with any node then the value of isSavAble will be false or else it will be true
    useEffect(() => {
      isSavaAble = nodes.length === edges.length+1
    }, [nodes, edges])

// Callback function to handle changes to nodes
const onNodesChange = useCallback(
  (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  [setNodes]
);

// Callback function to handle changes to edges
const onEdgesChange = useCallback(
  (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  [setEdges]
);

// Callback function to handle node connections
const onConnect = useCallback(
  (connection) => setEdges((eds) => addEdge(connection, eds)),
  [setEdges]
);
    return(
        <div style={{height: "100vh"}}>
          <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          >
            <Background />
            <Controls position={Position.Top}/>
          </ReactFlow>
        </div>
    )
}

export default MessageSection;
export {isSavaAble}