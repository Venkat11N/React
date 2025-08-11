// import React from "react"
// export default function Joke(props) {

//     const [isShown, setIsShown] = React.useState(false)


//     function togglePunchline() {
//         setIsShown(prevShown => !prevShown)
//     }

//     // console.log(isShown)
//     /**
//      * Challenge:
//      * - Create state `isShown` (boolean, default to `false`)
//      * - Add a button that toggles the value back and forth
//      */

//         /**
//      * Challenge:
//      * Only display the punchline paragraph if `isShown` is true
//      */


//     return (
//         <div>
//             {props.setup && <h3>{props.setup}</h3>}
//             {isShown ? <p>{props.punchline}</p> : null}
//             <button onClick={togglePunchline}>
//                 {isShown ? "Hide Punchline" : "Show Punchline"}
//             </button>
//             <hr />
//         </div>
//     )
// }



// import React from "react"

// export default function App() {
//     const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])


    

    
//     /**
//      * Challenge:
//      * Only display the <h1> below if there are unread messages
//      */
    
//     return (
//         <div>
//             {unreadMessages.length > 0 &&<h1>You have {unreadMessages.length} unread messages!</h1>}

//             {/* {unreadMessages.length ===  0 &&<p>You have no unread messages!</p>} */}
//         </div>
//     )
// }



import React from 'react'

function jokes  ()  {
    const [messages, setMessages] = React.useState(["a", "b"])
        /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message (singular)"
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */

    function getMessageCount() {
        if (messages.length === 0) {
            return "You're all caught up!"
        } else if (messages.length === 1) {
            return "You have 1 unread message"
        } else {
            return `You have ${messages.length} unread messages`
        }
    }

        // let text 

        // if (messages.length === 0) {
        //     text = "You're all caught up!"
        // } else if (messages.length === 1) {
        //     text = "You have 1 unread message"
        // } else {
        //     text = `You have ${messages.length} unread messages`
        // }

  return (
    <div>
        <h1>{getMessageCount()}</h1>
    </div>
  )
}

export default jokes
