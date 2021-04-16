import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((__,i)=>{
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
        });  
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    //console.log(tranformedIngredients);
    if (tranformedIngredients.length === 0) {
        tranformedIngredients = <p>Please start adding ingredients!</p>
    }
    return(
         <div className={classes.Burger}>
             <BurgerIngredient type="bread-top"/>
             {tranformedIngredients}
             <BurgerIngredient type="bread-bottom"/>
         </div>
    );
};

export default burger;