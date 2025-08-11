// import './App.css'
// import Contact from './Contact'

// function App() {
//   return (
//     <div className='contacts'>
//       <Contact 
//         img="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         name="Mr. Whiskerson"
//         phone="(212) 555-1234"
//         email="mr.whiskaz@catnap.meow"
//       />
//       <Contact 
//         img="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         name="Miss Whiskerson"
//         phone="(212) 555-5678"
//         email="miss.whiskaz@catnap.meow"
//       />
//       <Contact 
//         img="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         name="Mr. Whiskers"
//         phone="(212) 555-8765"
//         email="mr.whiskers@catnap.meow"
//       />
//       <Contact 
//         img="https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         name="Miss Whiskers"
//         phone="(212) 555-4321"
//         email="miss.whiskers@catnap.meow"
//       />
//     </div>
//   ) 
// }

// export default App





// import React from 'react'
// import Joke from './Joke.jsx'
// import './App.css'

    
//     /**
//      * Challenge: manually turn this string array into an array of
//      * JSX elements by surrounding each ninja turtle with an <h2> element
//      */ 


// const App = () => {
//   const ninjaTurtles = [<h2>Donatello</h2>, <h2>Leonardo</h2>, <h2>Michelangelo</h2>, <h2>Rapheal</h2>]
//   return (
//     <main>
//       {ninjaTurtles}
//     </main>
//   )
// }

// export default App



        


import React from 'react'
import Joke from './Joke.jsx'
import jokesData from './jokesData.js'
function App  () {
  const jokeElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} /> 
  });

  return (
    <main>
      {jokeElements}
    </main>
  ) 
}

export default App




// 1. What does the `.map()` array method do?
// Returns a new array. Whatever gets returned from the callback
// function provided is placed at the same index in the new array.
// Usually we take the items from the original array and modify them
// in some way.


// 2. What do we usually use `.map()` for in React?
// Convert an array of raw data into an array of JSX elements
// that can be displayed on the page.


// 3. Critical thinking: why is using `.map()` better than just
//    creating the components manually by typing them out?
//     1. We often don't have the data ahead of time when we're building
//        the app, so we simply can't manually type them out.
//     2. It makes our code more "self-sustaining" - not requiring additional
//        changes to the code whenever the data changes.