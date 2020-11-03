import React, { Component } from 'react'
import '../shared/styles.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import config from '../shared/config';


class Register extends Component {


  constructor(props) {
    super(props);
    this.state = this.state = {
      values: {
        nameUser: '',
        lastnameUser: '',
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




  handleSubmit() {
    const values = JSON.stringify(this.state.values)
    fetch(config.baseUrl + '/user',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: values
      }
    ).then(response => response.json())
      .then(data => {
        if (!data) {
          alert('it has saved data')
          this.props.history.push("/Container");
        }
      })
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

  render() {

    const { nameUser, lastnameUser, emailUser, pwdUser } = this.state.values

    return (
      <div className="container-form">
        <div className="form">
          <Card
            className="card-form"
          >
            <div className="card-header-form">
              Register App
          </div>
            <CardContent>
              <form onSubmit={this.handleSubmit} >
                <TextField
                  name="nameUser"
                  value={nameUser}
                  onChange={this.handleChange}
                  className="field-form"
                  required id="standard-required"
                  label="Required"
                  placeholder="name user" />
                <TextField
                  name="lastnameUser"
                  value={lastnameUser}
                  onChange={this.handleChange}
                  className="field-form"
                  required id="standard-required"
                  label="Required"
                  placeholder="lastname user" />
                <TextField
                  name="emailUser"
                  value={emailUser}
                  onChange={this.handleChange}
                  className="field-form"
                  required id="standard-required"
                  label="Required"
                  placeholder="email user" />
                <TextField
                  name="pwdUser"
                  value={pwdUser}
                  onChange={this.handleChange}
                  className="field-form"
                  required id="standard-required"
                  label="Required"
                  placeholder="password user" />
                <Button
                  type="submit"
                  className="App-button"
                  color="primary"
                  variant="contained">
                  Save
              </Button>
                <Button
                  className="App-button"
                  component="button"
                  variant="contained"
                  onClick={this.Register}
                >
                  Cancel
             </Button>
              </form>
            </CardContent>

          </Card>
        </div>
      </div>
    );
  }
}
export default Register;