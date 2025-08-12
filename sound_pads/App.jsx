import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData); 

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} on={pad.on} />
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


    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
