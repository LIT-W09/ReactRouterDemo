import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
<BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById('root'));

// class BorderedComponent extends React.Component {

//     render() {
//         return <div style={{border: '1px solid red'}}>
//             {this.props.children}
//         </div>
//     }
// }


// class OtherComponent extends React.Component {
//     render() {
//         return (
//             <BorderedComponent>
//                 <h1>Hello World</h1>
//             </BorderedComponent>
//         )
//     }
// }

// ReactDOM.render(<OtherComponent />, document.getElementById('root'));
