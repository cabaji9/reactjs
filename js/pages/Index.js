import React from 'react'

export default class Index extends React.Component {
 render() {
   return (
     <p>
       Hello, <input type="text" placeholder="Your name here" />!
       It is {this.props.date.toTimeString()}
       This is the index
     </p>
   );
 }
}
