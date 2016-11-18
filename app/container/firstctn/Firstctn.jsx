/**
 * Created by Administrator on 2016/11/17.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './firstctn.scss'
import Shelter from '../../component/shelter/Shelter.jsx'
import Logo from '../../component/logo/Logo.jsx'
class Firstctn extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Firstctn' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Firstctn' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Firstctn' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Firstctn' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Firstctn' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Firstctn' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Firstctn' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Firstctn' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Firstctn' + 'rendering');
        return (
            <div className="firstctn">
                <Shelter>
                    <Logo></Logo>
                    <div className="title">Title</div>
                    <div className="subtitle">Subtitle</div>
                </Shelter>
            </div>
        )
    }
}

export default (Firstctn);