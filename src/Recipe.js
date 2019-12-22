import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipes}>
            <h1>{title}</h1>
            <h3>Ingredients</h3>
            <ol className="ing-list">
                {
                    ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))
                }
            </ol>
            <h3>Calories:<p>{calories.toFixed(0)}kcal</p></h3>
            <img className="food-img" src={image} alt={title}></img>
        </div>
    );
}

export default Recipe;
