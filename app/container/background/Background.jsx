/**
 * Created by Administrator on 2016/11/15.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './background.scss'
class Background extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Background' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Background' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Background' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Background' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Background' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Background' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Background' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Background' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Background' + 'rendering');
        return (
            <div className="background-image">

            </div>
        )
    }
}

export default (Background);