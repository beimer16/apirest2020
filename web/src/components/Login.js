import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../shared/styles.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Register from './Register';
import { withRouter } from "react-router-dom";
import config from '../shared/config';
import axios from 'axios';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = this.state = {
            values: {
                emailUser: '',
                pwdUser: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.handleSubmit()
    }


    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            values: {
                ...this.state.values,
                [name]: value
            }
        })
    }

    handleSubmit() {
        const values = JSON.stringify(this.state.values)
        /*  var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            console.log(xhr.responseText)
        })*/
        console.log(config.baseUrl + '/auth')
        fetch(config.baseUrl + '/auth',
            {
                method: 'post',
                body: JSON.stringify(this.state.values),
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
           }).then(function(response) {
            return response.json();
          }).then(function(data) {
            console.log('Created Gist:', data);
          });
    }

    Register = () => {

        this.props.history.push("/Register");
    };

    render() {
        const { emailUser, pwdUser } = this.state.values
        return (

            <div className="App-container">
                <div className="App-login">
                    <Card
                        className="App-card">
                        <div className="App-card-header">
                            Login App
                        </div>
                        <CardContent>
                            <form onSubmit={this.handleSubmit}>
                                <TextField
                                    name="emailUser"
                                    value={emailUser}
                                    onChange={this.handleChange}
                                    className="App-field"
                                    required id="standard-required"
                                    label="Required"
                                    placeholder="Email User" />
                                <TextField
                                    name="pwdUser"
                                    value={pwdUser}
                                    onChange={this.handleChange}
                                    className="App-field"
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    placeholder="Password User"
                                    autoComplete="current-password" />
                                <Button
                                    className="App-button"
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Login
                               </Button>
                                <Button
                                    className="App-button"
                                    component="button"
                                    variant="contained"
                                    onClick={this.Register}>
                                    Register
                                </Button>
                            </form>
                        </CardContent>

                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;