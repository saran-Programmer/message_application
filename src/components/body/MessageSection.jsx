import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, Position } from 'reactflow';
import MessageBox from '../ui/MessageBox';
import { useCallback, useState } from 'react';
import 'reactflow/dist/style.css';

const nodeTypes = { textUpdater: MessageBox };
const initialNodes = [
    { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
    { id: 'node-2', type: 'textUpdater', position: { x: 100, y: 100 }, data: { value: 123 } },
];


const MessageSection = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);
  
    const onNodesChange = useCallback(
      (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
      [setNodes]
    );
    const onEdgesChange = useCallback(
      (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
      [setEdges]
    );
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

export default MessageSection
