import { ThreeSixty } from '@material-ui/icons';
import React, { Component } from 'react';
class PostDialog extends Component{
    render(){
        let dialog =(
            <div>
              <div>
                    {this.props.children}
                </div>
            </div>
        );
        if(!this.props.isOpen)
        {
            dialog=null;
        }
        return(
            <div>
                {dialog}
            </div>
        );
    }
}

export default PostDialog