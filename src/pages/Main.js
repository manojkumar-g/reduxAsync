import React from 'react';
import Navbar from '../components/Navbar';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = 'container' >
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
};
