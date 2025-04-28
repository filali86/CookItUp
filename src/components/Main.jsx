import { useState } from "react"

export default  function(){
     const [ingredients,setIngredients]=useState([])

     const ingredientsList=ingredients.map(ingredient=>(<li>{ingredient}</li>))

    const addIngredient=function(formData){
        const newIngredient =formData.get("ingredient")
        setIngredients(function(prevIngredient){
            return [...prevIngredient,newIngredient]
        })
   } 
    return(      
        <div className="main">
            <form action={addIngredient} >  
                <h1><i class="ph ph-chef-hat"></i>Cook<label>It</label>Up</h1>
                <h2>Recipe Suggestion</h2> 
                <div>
                <input type="text" placeholder="   Enter ingredients" name="ingredient" required />
                </div>         
                <button type="submit" >+ Add ingredient</button>
            </form>
            {ingredients.length>0?<section>
                <h1>Ingredients on hand:</h1>
                <div className="list">
                    <ul>{ingredientsList}</ul>
                </div>
                {ingredients.length>=4?<div className="recipe-container">
                    <div>
                        <h3>Ready for your recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button>Get a Recipe</button>
                </div>:null}
            </section>:null}           
            
        </div>   
    )     
}
