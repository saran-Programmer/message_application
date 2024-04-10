const TestComponent = (initialNodes) => {
    return(
        <div>
            {
                initialNodes.initialNodes.map(e => (
                    <span>{e.type}</span>
                ))
            }
        </div>
    )
}

export default TestComponent