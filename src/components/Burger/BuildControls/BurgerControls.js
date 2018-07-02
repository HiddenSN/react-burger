import React from 'react';
import classes from './BuilderControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls} >
        <p>Current Price: $<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl, i) => {
            return <BuildControl
                addIngredient={props.addIngredient.bind(this,ctrl.type)}
                remove={props.removeIngredient.bind(this, ctrl.type)}
                key={i}
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}/>;
        })}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);


export default buildControls;