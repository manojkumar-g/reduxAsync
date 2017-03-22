import React from 'react';
import css from '../styles/home.styl';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : '' };
    this.editValues = this.editValues.bind(this);
  }
  editValues(e) {
    this.setState({[e.target.name]:e.target.value});
  }
  render(){
    return(
      <section>
        <div className="login">
          <h1>Login to Web App</h1>
          <form method="post" action="index.html">
            <p><input type="text" name="username" placeholder="Username" onChange = { e => this.editValues(e)}/></p>
            <p><input type="password" name="password"  placeholder="Password" onChange = { e => this.editValues(e)} /></p>
            <p className="remember_me">
              <label>
                <input type="checkbox" name="remember_me" id="remember_me"/>
                Remember me on this computer
              </label>
            </p>
            <p className="submit"><input type="submit" name="commit" value="Login"/></p>
          </form>
        </div>

        <div className="login-help">
          <p>Forgot your password? <a href="#">Click here to reset it</a>.</p>
        </div>
    </section>
    );
  }
}
