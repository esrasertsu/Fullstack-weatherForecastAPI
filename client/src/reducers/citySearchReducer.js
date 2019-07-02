import { EventEmitter } from "events";
import React, {Component} from 'react';

export default function(state = null, action) {
  switch (action.type) {
    default:
    return React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          ...this.state,
          eventEmitter: this.eventEmitter
        });
      });;
  }
}


//
// export default class citySearchReducer extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.eventEmitter = new EventEmitter();
//
//     //Main App State
//     this.state = {
//       appName: "Weather Up"
//     };
//   }
//
//   render() {
//     return React.Children.map(this.props.children, child => {
//       return React.cloneElement(child, {
//         ...this.state,
//         eventEmitter: this.eventEmitter
//       });
//     });
//   }
// }
