import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

// const root = ReactDOM.createRoot(document.getElementById('anime'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// class Viki extends React.Component
// {
//   constructor()
//   {
//     super() 
//     this.state={dept:"CSBS"}
//   }
//   GoLeft=()=>
//   {
//     this.setState({dept:"ECE"})
//   }
//   GoStraight=()=>
//   {
//     this.setState({dept:"ISE"})
//   }
//   GoRight=()=>
//   {
//     this.setState({dept:"Spl Labs"})
//   }
//   render()
//   {
//     return(
//     <div>
//       {/* <App /> */}
//       <h1 style={InlineStyle}>VIGNESHWAR</h1>
//     <h2 class="outline">Welcome to {this.state.dept} and our strength is {this.props.nos}</h2>
//     <h2 style={InlineStyle}>And we learning {this.props.sub}</h2>
//     <button type='button' onClick={this.GoLeft}>GoLeft</button>
//     <button type='button' onMouseOver={this.GoStraight}>GoStraight</button>
//     <button type='button' onMouseOver={this.GoRight}>GoRight</button>
//     </div>
//     )
//   }
// };

// function Fun()
// {
//   return(
//   <div>
//     <h1 style={funInline}>HELLO</h1>
//     <Viki sub="React JS" nos="64"/>
//     </div>
//   )
// }


// var InlineStyle={color:"green",textAlign:"center"}
// var funInline={textAlign:"center"}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)