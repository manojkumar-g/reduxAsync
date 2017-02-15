import React from 'react';
import {connect} from 'react-redux';
import {postRegister} from '../actions';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : '' };
    this.editValues = this.editValues.bind(this);
    this.submitDetails = this.submitDetails.bind(this);
  }
  editValues(e) {
    this.setState({[e.target.name]:e.target.value});
  }
  submitDetails(e){
    e.preventDefault();
    this.props.postRegister({username:this.state.username,password:this.state.password});
  }
  render(){
    return(
      <section>
        <div className="login">
          <h1>Register to Web App</h1>
          <form>
            <p><input type="text" name="username" placeholder="Username" onChange = { e => this.editValues(e)}/></p>
            <p><input type="password" name="password"  placeholder="Password" onChange = { e => this.editValues(e)} /></p>
            <p className="remember_me">
              <label>
                <input type="checkbox" name="remember_me" id="remember_me"/>
                Remember me on this computer
              </label>
            </p>
            <p className="submit"><input type="submit" name="commit" onClick = {this.submitDetails}/></p>
          </form>
        </div>

    </section>
    );
  }
}

Register = connect(null,{postRegister})(Register);

export default Register;
