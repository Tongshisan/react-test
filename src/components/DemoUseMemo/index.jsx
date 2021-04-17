import * as React from 'react';

export const DemoUseMemo = (props) => {
    console.log('render DemoUseMemo');
    const [count, setCount] = React.useState(0);

    const handleAddCount = () => {
        // 这里用 const num = count++ 就会报错.....
        const num = count + 1
        setCount(num);
    }

    const handleCutCount = () => {
        const num = count - 1;
        setCount(num);
    }
    const renderLists = React.useMemo(() => {
        console.log('render lists');
        return (
            <>
                {
                    props.lists.map((list) => (
                        <p key={list.id}>
                            {list.name}
                        </p>
                    ))
                }
            </>
        )
    }, [props.lists]);

    return (
        <>
            <h2>UseMemo</h2>
            {
                renderLists
            }
            <p>{count}</p>
            <button onClick={handleCutCount}>count--</button>
            <button onClick={handleAddCount}>count++</button>
        </>
    )
}