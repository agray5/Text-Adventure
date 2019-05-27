import React from 'react';
import ReactAnimationFrame from 'react-animation-frame';
import { update } from '../../redux/actions'

const logger = require('logdown')('UI:Updater.js')
 
class Updater extends React.Component {
    onAnimationFrame(time, lastTime) {
        const dt = time - lastTime;

        this.props.store.dispatch(update(dt));
    }

    render(){return null}
}
 
export default ReactAnimationFrame(Updater, 1000);