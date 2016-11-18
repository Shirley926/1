/**
 * Created by Administrator on 2016/11/17.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './secondctn.scss'
import Content from '../../component/content/Content.jsx'
class Secondctn extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Secondctn' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Secondctn' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Secondctn' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Secondctn' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Secondctn' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Secondctn' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Secondctn' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Secondctn' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Secondctn' + 'rendering');
        return (
            <div className="secondctn">
                <Content>
                    <header>Title</header>
                    <div className="columns">
                        <div className="column">Content</div>
                        <div className="column">Content</div>
                        <div className="column">Content</div>
                    </div>
                </Content>
            </div>
        )
    }
}

export default (Secondctn);