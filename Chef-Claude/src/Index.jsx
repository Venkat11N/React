import React from 'react'

const Index = () => {

  
    /**
     * Challenge: Update our app so that when the user enters a
     * new ingredient and submits the form, it adds that new
     * ingredient to our list!
     */

  const [ingredients, setIngredients] = React.useState([])

  const ingredientList = ingredients.map(ingredient => (
     <li key = {ingredient}>{ingredient}</li>
  ))

      /**
     * Challenge:
     * Add the new ingredient to the array of ingredients. Also, add a
     * console.log(ingredients) after adding the ingredient, because
     * **warning**: you aren't going to see the page update!
     *
     * Hint: this is a one-liner solution, so don't overthink it 😅
     */

  // function handleSubmit(event) {
  //          /**
  //        * Like before, don't worry about this FormData stuff yet.
  //        * Just use the newIngredient below to help you finish the
  //        * challenge.
  //        */
    

  //   event.preventDefault()
  //   const formData = new FormData(event.currentTarget)
  //   const newIngredient = formData.get('ingredient')
  //   setIngredients(prevIngredients => [...prevIngredients, newIngredient])

  // }


  function handleSubmit(formData) {
    const ingredient = formData.get('ingredient')
    setIngredients(prevIngredients => [...prevIngredients, ingredient])

  }




  return (
    <main>
        <form action={handleSubmit} name="add-ingredient-form" className='add-ingredient-form'>
            <input
                type ="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
            />
            <button>Add ingredient</button>
        </form>
        <ul>
            {ingredientList}
        </ul>
    </main>
  )
}

export default Index






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


