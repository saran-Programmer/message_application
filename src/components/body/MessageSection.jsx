import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, Position } from 'reactflow';
import MessageBox from '../ui/MessageBox';
import { useCallback, useState, useEffect } from 'react';
import 'reactflow/dist/style.css';

const nodeTypes = { textUpdater: MessageBox };

const MessageSection = ({initialNodes}) => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);

    useEffect(() => {
      setNodes(initialNodes);
  }, [initialNodes]);

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


