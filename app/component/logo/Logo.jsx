/**
 * Created by Administrator on 2016/11/16.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './logo.scss'
class Logo extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Logo' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Logo' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Logo' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Logo' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Logo' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Logo' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Logo' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Logo' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Logo' + 'rendering');
        return (
            <div className="logo" style={{WebkitTransform:'scale(2)',height:'60%',zIndex:10}}>
                    <ul className="cube-inner">
                        <li className="front"></li>
                        <li className="back"></li>
                        <li className="right"></li>
                        <li className="left"></li>
                        <li className="top"></li>
                        <li className="bottom"></li>
                    </ul>
                    <ul className="cube">
                        <li className="front"></li>
                        <li className="back"></li>
                        <li className="right"></li>
                        <li className="left"></li>
                        <li className="top"></li>
                        <li className="bottom"></li>
                        <li className="floor"></li>
                    </ul>
                </div>

        )
    }
}

export default (Logo);