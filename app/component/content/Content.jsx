/**
 * Created by Administrator on 2016/11/15.
 */

/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import './content.scss'
class Content extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Content' + 'constructor' + arguments);
    }

    componentWillMount() {
        console.log('Content' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('Content' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('Content' + ' componentWillReceiveProps' + arguments);
    }



    componentWillUpdate() {
        console.log('Content' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('Content' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('Content' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('Content' + 'rendering');
        let _ = this;
        return (
            <div ref={(ref)=>{
                console.log(1);
                _.content1=ref;
            }
            } className="content" onWheel={function(){
                let scrolltop=document.documentElement.screenTop||document.body.scrollTop;
                if (scrolltop>(0.5*_.content1.clientHeight)){
                    _.props.onWheelHandle()
                }
            }}>
                {React.Children.map(this.props.children,(child)=>{return(child)})}
            </div>
        )
    }
}

export default (Content);