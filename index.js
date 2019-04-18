import React from 'react';
import ReactDOM from 'react-dom';
import Saas from './saas';
import 'normalize.css/normalize.css';

import AddOption from './components/AddOption';



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};



// Options -> Options component here


// Setup options prop for Options component

// addd


const User = () => {
    return (
        <div>
            <p> Name: </p>
            <p>Age: </p>
        </div>
    )

}


ReactDOM.render(<Saas />, document.getElementById('app'));