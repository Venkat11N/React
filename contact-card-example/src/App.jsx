// import React from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   /**
//    * Challenge: see if you can remember how to grab an array of checked
//    * items from the dietaryRestrictions checkboxes.
//    */

//   function signUp(formData) {
//     const data = Object.fromEntries(formData);
//     const dietaryData = formData.getAll("dietaryRestrictions");

//     const allData = {
//       ...data,
//       dietaryData

//     }
//     console.log("All Data:", allData);
//   }


//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action={signUp}>
//         <label>
//           Email:
//           <input
//             id="email"
//             type="email"
//             defaultValue="joe@me.com"
//             name="email"
//           />
//         </label>
//         <br />

//         <label>
//           Password:
//           <input
//             id="password"
//             type="password"
//             defaultValue="password123"
//             name="password"
//             placeholder="********"
//           />
//         </label>

//         <label htmlFor="description">Description:</label>
//         <textarea id="description" name="description"></textarea>

//         <fieldset>
//           <legend>Employment Status:</legend>
//           <label>
//             <input type="radio" name="employmentStatus" value="unemployed" />
//             Unemployed
//           </label>
//           <label>
//             <input type="radio" name="employmentStatus" value = "part-time"/>
//             Part-Time
//           </label>
//           <label>
//             <input type="radio" name="employmentStatus"  value="full-time" />
//             Full-Time
//           </label>
//         </fieldset>


//         <fieldset>
//           <legend>Dietary Status:</legend>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value="kosher" />
//               Kosher
//            </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions" value = "vegan"/>
//             Vegan
//            </label>
//           <label>
//             <input type="checkbox" name="dietaryRestrictions"  value="gultanFree" />
//             Gluten-Free
//            </label>
//         </fieldset>

//         <label htmlFor="favColor">What is your favorite color?</label>
//         <select id="favColor" name="favColor" defaultValue="" required>
//           <option value="">-- Choose a color --</option>
//           <option value="Red">Red</option>
//           <option value="Orange">Orange</option>
//           <option value="Yellow">Yellow</option>
//           <option value="Green">Green</option>
//           <option value="Blue">Blue</option>
//           <option value="Purple">Purple</option>
//           <option value="Pink">Pink</option>
//           <option value="Black">Black</option>
//           <option value="White">White</option>
//         </select>

//          <button>Submit</button>
//       </form>
//     </section>
//   );
// }

// export default App;

import React from 'react'

function App () {
  const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])

      /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     */


  return (
    <div>
      {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}

    </div>
  )
}

export default App
