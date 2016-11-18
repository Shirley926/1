/**
 * Created by Administrator on 2016/11/17.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './thirdctn.scss'
import Shelter from '../../component/shelter/Shelter.jsx'
class Thirdctn extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Thirdctn' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Thirdctn' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Thirdctn' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Thirdctn' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Thirdctn' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Thirdctn' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Thirdctn' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Thirdctn' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Thirdctn' + 'rendering');
        return (
            <div className="thirdctn">
                <Shelter>
                    <header>Title</header>
                    <div className="circles">
                        <div className="circle" style={{height:'200px',width:'200px'}}>Name</div>
                        <div className="circle" style={{height:'200px',width:'200px'}}>Name</div>
                        <div className="circle" style={{height:'200px',width:'200px'}}>Name</div>
                        <div className="circle" style={{height:'200px',width:'200px'}}>Name</div>
                    </div>
                </Shelter>
            </div>
        )
    }
}

export default (Thirdctn);