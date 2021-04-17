import * as React from 'react';
import {DemoUseMemo, DemoUseCallback} from '../../components';
import './index.css';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useMemo: {
                lists: [
                    {
                        id: '00001',
                        name: '张三'
                    },
                    {
                        id: '00002',
                        name: '李四'
                    }
                ]
            }
        }
    }

    render() {

        const {useMemo} = this.state;
        return (
            <div className="index-wrap">
                <h1>Index</h1>
                <DemoUseMemo lists={useMemo.lists}/>
                <DemoUseCallback />
            </div>
        )
    }
}