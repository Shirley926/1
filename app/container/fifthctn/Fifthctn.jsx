/**
 * Created by Administrator on 2016/11/18.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './fifthctn.scss'
import Shelter from '../../component/shelter/Shelter.jsx'
class Fifthctn extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Fifthctn' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Fifthctn' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Fifthctn' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Fifthctn' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('Fifthctn' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('Fifthctn' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Fifthctn' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Fifthctn' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Fifthctn' + 'rendering');
        return (
            <div className="fifthctn">
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

export default (Fifthctn);