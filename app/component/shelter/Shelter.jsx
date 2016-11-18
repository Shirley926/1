/**
 * Created by Administrator on 2016/11/15.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './shelter.scss'
import Logo from '../../component/logo/Logo.jsx'
class Shelter extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Shelter' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Shelter' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Shelter' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Shelter' + ' componentWillReceiveProps' + arguments);
    }


    componentWillUpdate() {
        console.log('Shelter' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Shelter' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Shelter' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Shelter' + 'rendering');
        let _= this;
        return (
            <div ref={(ref)=>{
                console.log(1);
                _.shelter1=ref;
                }
            } className="shelter" onWheel={function(){
                let scrolltop=document.documentElement.screenTop||document.body.scrollTop;
                if (scrolltop>(0.5*_.shelter1.clientHeight)){
                   _.props.onWheelHandle()
                }
            }}>
                {React.Children.map(this.props.children,(child)=>{return(child)})}
            </div>
        )
    }
}

export default (Shelter);