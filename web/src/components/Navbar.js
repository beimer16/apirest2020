import React, { Component } from 'react'
import '../shared/styles.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
class Navbar extends Component {
    render() {
        return (
              <AppBar position="fixed" color="primary">
                <Toolbar>
                    hello
               </Toolbar>
            </AppBar>
        );
    }
}
export default Navbar;













