import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(
      ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )

        /**
     * Challenge:
     * 1. Create a boolean state that, for now, will represent whether
     *    we've gotten a recipe back from the "chef". Default to `false`.
     *    Can call it `recipeShown`.
     * 2. Grab the markup in recipeCode.md and paste it below. This will
     *    be a placeholder for the content that will come back from the 
     *    chef once we set up that feature.
     * 3. When the user clicks the "Get a recipe" button, flip the
     *    `recipeShown` state to true.
     * 4. Only display the recipe code content if `recipeShown` is true.
     */

     const [recipeShown, setRecipeShown] = React.useState(false)
     
     function toggleRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
     }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

        /**
     * Challenge:
     * Only display the div.get-recipe-container if the ingredients list
     * has more than 3 items in it. (Fewer than that and it might not
     * give great results from the chef 🤖👩‍🍳)
     */
    


    /**
     * Challenge:
     * Using conditional rendering, only render the new <section> IF
     * there are ingredients added to the list of ingredients.
     */

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown} >Get a recipe</button>
                </div>}
            </section>}
              {recipeShown && <section>
              <h2>Chef Claude Recommends:</h2>
              <article className="suggested-recipe-container" aria-live="polite">
                  <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                  <h3>Beef Bolognese Pasta</h3>
                  <strong>Ingredients:</strong>
                  <ul>
                      <li>1 lb. ground beef</li>
                      <li>1 onion, diced</li>
                      <li>3 cloves garlic, minced</li>
                      <li>2 tablespoons tomato paste</li>
                      <li>1 (28 oz) can crushed tomatoes</li>
                      <li>1 cup beef broth</li>
                      <li>1 teaspoon dried oregano</li>
                      <li>1 teaspoon dried basil</li>
                      <li>Salt and pepper to taste</li>
                      <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                  </ul>
                  <strong>Instructions:</strong>
                  <ol>
                      <li>Bring a large pot of salted water to a boil for the pasta.</li>
                      <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                      <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                      <li>Stir in the tomato paste and cook for 1 minute.</li>
                      <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                      <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                      <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                      <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                      <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                  </ol>
              </article>
          </section>}
        </main>
    )
}



// import React from 'react'

// /**
//  * Index component renders a form to add ingredients and displays
//  * the list of added ingredients. When a user submits the form with a 
//  * new ingredient, it is added to the list of ingredients. If there 
//  */

// const Index = () => {

  
//     /**
//      * Challenge: Update our app so that when the user enters a
//      * new ingredient and submits the form, it adds that new
//      * ingredient to our list!
//      */

//   const [ingredients, setIngredients] = React.useState([])

//   // const ingredientList = ingredients.map(ingredient => (
//   //    <li key = {ingredient}>{ingredient}</li>
//   // ))

//         /**
//      * Challenge:
//      * Using conditional rendering, only render the new <section> IF
//      * there are ingredients added to the list of ingredients.
//      */
//   const ingredientsListItems = ingredients.map(ingredient => (
//     <li key={ingredient}>{ingredient}</li>
//   ))

//   function addIngredient(formData) {
//     const newIngredient = formData.get('ingredient')
//     setIngredients(prevIngredients => [...prevIngredients, newIngredient])
//   }

//       /**
//      * Challenge:
//      * Add the new ingredient to the array of ingredients. Also, add a
//      * console.log(ingredients) after adding the ingredient, because
//      * **warning**: you aren't going to see the page update!
//      *
//      * Hint: this is a one-liner solution, so don't overthink it 😅
//      */

//   // function handleSubmit(event) {
//   //          /**
//   //        * Like before, don't worry about this FormData stuff yet.
//   //        * Just use the newIngredient below to help you finish the
//   //        * challenge.
//   //        */
    

//   //   event.preventDefault()
//   //   const formData = new FormData(event.currentTarget)
//   //   const newIngredient = formData.get('ingredient')
//   //   setIngredients(prevIngredients => [...prevIngredients, newIngredient])

//   // }


//   // function handleSubmit(formData) {
//   //   const ingredient = formData.get('ingredient')
//   //   setIngredients(prevIngredients => [...prevIngredients, ingredient])

//   // }






//   return (
//     <main>
//         <form action={addIngredient} name="add-ingredient-form" className='add-ingredient-form'>
//             <input
//                 type ="text"
//                 placeholder="e.g. oregano"
//                 aria-label="Add ingredient"
//                 name="ingredient"
//             />
//             <button>Add ingredient</button>
//         </form> 
//         {ingredients.length > 0 && <section>
//           <h2>Ingredients on hand:</h2>
//           <ul className='ingredients-list' aria-live="polite">{ingredientsListItems}</ul>
//           <div className='get-recipe-conainer'>
//             <div>
//               <h3>Ready for a recipie?</h3>
//               <p>Generate a recipe from your list of ingredients.</p>
//             </div>
//             <button>Get a recipe</button>
//           </div>
//         </section>}
//     </main>
//   )
// }

// export default Index






// import React from 'react'
// import { useState } from 'react'
// function Index() {
//   const [isImportant, setIsImportant] = React.useState("Yes")
//   // setIsImportant("Heck yes!")

//       /**
//      * Challenge:
//      * 1. Create a function called `handleClick` that runs
//      *    setIsImportant("Definitely")
//      * 2. Add a click event listener to the button
//      *    that runs `handleClick` when the button is clicked.
//      */

//     /**
//      * Challenge: Replace our hard-coded "Yes" on the page with
//      * some state initiated with React.useState()
//      */

//     function handleClick() {
//       setIsImportant("Heck Yes!")
//     }

// return (
//   <main>
//     <h1 className='title'>Is state important to know?</h1>
//     <button onClick={handleClick} className='value'>{isImportant}</button>
//   </main>
// )
// }
// export default Index

// import React from 'react'

// const Index = () => {

//   const [count, setCount] = React.useState(0);

//     /**
//      * Challenge:
//      * Create state to track our count value (initial value is 0)
//      * Don't forget to replace the hard-coded "0" with your new state
//      */

//        /**
//      * Challenge:
//      * Create a function called `add` that runs
//      * when the + button is clicked. (Can just console.log("add") for now)
//      */

//       /**
//      * Challenge:
//      * See if you can think of a way to add 1 to the count
//      * every time the + button is clicked
//      */

//       /**
//      * Note: if you ever need the old value of state
//      * to help you determine the new value of state,
//      * you should pass a callback function to your
//      * state setter function instead of using
//      * state directly. This callback function will
//      * receive the old value of state as its parameter,
//      * which you can then use to determine your new
//      * value of state.
//      */

//      function add() {
//         console.log("Add")
//         setCount(prevCount => prevCount + 1);
//      }

//      function subtract() {
//         console.log("Subtract")
//         setCount(prevCount => prevCount - 1);
//      }

//     return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
//                 <h2 className="count">{count}</h2>
//                 <button className="plus" onClick={add} aria-label="Increase count">+</button>
//             </div>
//         </main>
//     )
// }

// export default Index

// import React from 'react'

// const Index = () => {

//   const [count,setCount] = React.useState(0);

//   function add() {
//     console.log("Add")
//     setCount(prevCount => prevCount + 1)
//   }

//   function subtract() {
//     console.log("Subtract")
//     setCount(prevCount => prevCount - 1)
//   }

//   return (
//     <main>
//         <h1>How many times will Bob say "state" in this section?</h1>
//         <div className='counter'>
//           <button className="minus" onClick={subtract} aria-label="Decrease count">-</button>
//           <h2 className='count'>{count}</h2>
//           <button className="plus" onClick={add} aria-label="Increase count">+</button>
//         </div>
//     </main>
//   )
// }

// export default Index

// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
//    1. Pass the new version of state that we want to use as the
//       replacement for the old version of state.
//    2. Pass a callback function. Must return what we want the new
//       value of state to be. Will receive the old version of state
//       as a parameter so we can use it to help determine what we want
//       the new value of state to be.

// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?

//    Whenever we don't really care about (or need) the old value,
//    we simply want to set a new value.

// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?

//    Whenever we do care about the previous value in state and need
//    it to help us determine what the new value should be.



// import React from "react";

// const Index = () => {
//   const [goingOut, setGoingOut] = React.useState(true);
//   /**
//    * Challenge: Replace the if/else below with a ternary
//    * to determine the text that should display on the page
//    */
//   const isGoingOut = goingOut ? true : false;
//   function handleClick() {
//     setGoingOut((prevGoingOut) => !prevGoingOut);
//   } 

//   /**
//    * Challenge:
//    * - Initialize state for `isGoingOut` as a boolean
//    * - Make it so clicking the button flips that
//    *   boolean value (true -> false, false -> true)
//    * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//    */
//   return (
//     <main>
//       <h1 className="title">Do I feel like going out tonight?</h1>
//       <button
//         onClick={handleClick}
//         className="value"
//         aria-label={`Current answer is ${
//           isGoingOut ? "Yes" : "No"
//         }. Click to change it.`}
//       >{isGoingOut ? "Yes" : "No"}</button>
//     </main>
//   );
// };

// export default Index;



// import React from 'react';
// function Index() {
// const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);

// const allFavouriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
//   "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
// const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

// function addFavouritething() {
//       /**
//      * Challenge: you do it!
//      * Every time "Add item" is clicked, it should add another string
//      * "Test" to the list on the page
//      */
//     setMyFavoriteThings(previousThings => [...previousThings, allFavouriteThings[previousThings.length]])

// }

// return (
//   <main>
//     <button onClick={addFavouritething}>Add item</button>
//     <section aria-live="polite">
//       {thingsElements}
//     </section>
//   </main>
// )

// }
// export default Index;


