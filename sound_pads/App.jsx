import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData); 

    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />
    )) 

        /**
     * Challenge: use a ternary to determine the backgroundColor
     * of the buttons
     * If darkMode is true, set them to "#222222"
     * If darkMode is false, set them to "#cccccc"
     */

 

    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     * 
     * 
     * Challenge part 2:
     * 
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Pad components
     * and set it up so when they get clicked, the function runs
     */
    // const styles = {
    //     backgroundColor: darkMode ? "#222222" : "#cccccc",
    // }

    // const buttonElements = pads.map((pad, index) => (
    //     <button                            style={{
    //             backgroundColor: darkMode ? 
    //                 (index % 2 === 0 ? "#333333" : "#222222") 
    //                 : (index % 2 === 0 ? "#aaaaaa" : "#cccccc")
    //         }} 
    //         key={pad.id}
    //     >

    //     </button>

    // ))

    function toggle(id) {

         setPads(prevPads => prevPads.map(item => {
           return item.id === id ? {... item, on: !item.on} : item
         }))
        

        /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         */
    }


    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            
        </main>
    )
}
