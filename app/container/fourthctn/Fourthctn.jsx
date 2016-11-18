/**
 * Created by Administrator on 2016/11/18.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './fourthctn.scss'
import Content from '../../component/content/Content.jsx'
class Fourthctn extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Fourthctn' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Fourthctn' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Fourthctn' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Fourthctn' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Fourthctn' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Fourthctn' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Fourthctn' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Fourthctn' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Fourthctn' + 'rendering');
        return (
            <div className="fourthctn">
                <Content>
                <div className="paragraph"><h2>Title</h2><p>Content</p><p>Content</p><p>Content</p></div>
                <div className="picturectn">
                    <div className="picture" style={{height: '300px',width: '300px'}}></div>
                </div>
                </Content>
            </div>
        )
    }
}

export default (Fourthctn);