import React from 'react';
import classes from './Model.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
const model = (props) => {
    const assignedClasses = [];
    assignedClasses.push(classes.Model);
    if (props.show) {
        assignedClasses.push(classes.show)
    } else {
        assignedClasses.push(classes.unshow);
    }
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modelClosed}/>
            <div className={assignedClasses.join(' ')}>
                {props.children}
            </div>
        </Aux>
    );
};
export default model;