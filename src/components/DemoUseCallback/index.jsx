import * as React from 'react';
import { useEffect } from 'react';

const DemoChildren = React.memo((props) => {
    console.log('子组件更新');
    useEffect(() => {
        props.getInfo('子组件1');
    }, [])

    return (
        <>
            <p>子组件</p>
        </>
    )
})

export const DemoUseCallback = (props) => {
    const [number, setNumber] = React.useState(0);

    const getInfo = React.useCallback(
        (sonName) => {
            console.log(sonName);
        },
        [props.id],
    );

    return (
        <>
            <button onClick={() => setNumber(number+1)}>number++</button>
            <DemoChildren getInfo={getInfo}/>
        </>
    )
}