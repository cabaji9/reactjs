import React from 'react'
import Index from './Index'
import { render } from 'react-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

export default class App extends React.Component {

  updateDivWithComponent(classNameReact,props) {
   render(
     React.createElement(classNameReact,props),
     document.getElementById('mount-point-internal')
   );
 }

 render() {
   return (
     <div>
     <ul>
     <li>
     <button type="button" onClick={()=>this.updateDivWithComponent(Index,{date:new Date()})}>Index</button>
     </li>
     <li>
     <button type="button" onClick={()=>this.updateDivWithComponent(AboutUs)}>About Us</button>
     </li>
     <li>
     <button type="button" onClick={()=>this.updateDivWithComponent(ContactUs)}>Contact Us</button>
     </li>
     </ul>
     <div id="mount-point-internal"></div>
     </div>
   );
 }
}
