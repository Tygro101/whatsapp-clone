import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WhatsAppShell from './components/WhatsAppShell';
import { connect } from 'react-redux';;




class App extends Component{

  render(){
    return (
      <WhatsAppShell></WhatsAppShell>
    )
  }
}

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(App);

