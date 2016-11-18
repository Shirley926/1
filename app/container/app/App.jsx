/**
 * Created by Administrator on 2016/11/15.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import Content from '../../component/content/Content.jsx'
import Shelter from '../../component/shelter/Shelter.jsx'
import Firstctn from '../firstctn/Firstctn.jsx'
import Secondctn from '../secondctn/Secondctn.jsx'
import Thirdctn from '../thirdctn/Thirdctn.jsx'
import Fourthctn from '../fourthctn/Fourthctn.jsx'
import Fifthctn from '../fifthctn/Fifthctn.jsx'
import ReactDOM from 'react-dom'
import Background from '../background/Background.jsx'
import Logo from '../../component/logo/Logo.jsx'
import './app.scss'
class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('App' + 'constructor' + arguments);
        this.state={
            backgroundColor:'white'
        }
    }

    componentWillMount() {
        console.log('App' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('App' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('App' + ' componentWillReceiveProps' + arguments);
    }

    componentWillUpdate() {
        console.log('App' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('App' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('App' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('App' + 'rendering');
        return (
            <div className="container">
                <Firstctn></Firstctn>
                <Secondctn></Secondctn>
                <Thirdctn></Thirdctn>
                <Fourthctn></Fourthctn>
                <Fifthctn></Fifthctn>
                <Background></Background>
            </div>
        )
    }
}

export default (App);