// import reactLogo from "./assets/react-logo.png"
// import Header from "./header";
// import MainContent from "./MainContent";
// import Footer from "./Footer";
// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"))

// /**
//  * Challenge:
//  *
//  * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
//  *   "Pricing", "About", and "Contact"
//  */

// /**
// Challenge:

// Part 2:
// - Add a `<header>` element with an `<img />` element with the image of the
//   React logo inside (src="react-logo.png") and make sure to set the
//   width to something more manageable so it doesn't take up the whole screen.
//   Also, as always, you should include some alt text on the image.
// - Add an `<h1>` with some text describing the page. (E.g. "Reasons
//   I'm excited to learn React"). Place it above the ordered list, then wrap
//   the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
//   structure flowing well.
// - Add a `<footer>` after the list that says:
//     "© 20xx <last name here> development. All rights reserved."
//  */

// function Page() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

// root.render(<Page />)

// export default Page;

/**
Challenge: Project setup

- Create an App component in a separate App.jsx file which is a sibling
  to this index.jsx file.
- Create a `components` folder
- Create the following components in separate files inside
  the components folder. In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Have App component import and render the Navbar and Main components
- Import and render the App component inside of index.jsx using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font  with weights 400, 600, and 700.
  Put the `<links />` to those fonts ABOVE the style.css link in index.html.
  You may need to do some extra research to figure out how this 
  works if you haven't done it before.
*/

import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}
