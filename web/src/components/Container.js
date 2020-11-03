import React, { Component } from 'react'
import '../shared/styles.css';
import Dashboard from './Dashboard';
import Navbar  from './Navbar';

class Container extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Dashboard/>
           </div>
        );
    }
}
export default Container;