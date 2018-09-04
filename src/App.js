import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Frame from 'react-frame-component';
import StorageTest from './StorageTestComponent.js'
class App extends Component {
  render() {

    localStorage.setItem("test", "test-value");
    return (
      <div>
        <Frame>
         <StorageTest keyToGet="test2" keyToSet="test5" valueToSet="test5-value" />
         <StorageTest keyToGet="test" keyToSet="test2" valueToSet="test2-value" />
         <StorageTest keyToGet="test3" keyToSet="test4" valueToSet="test4-value" />
        </Frame>
        <Frame>
          <StorageTest keyToGet="test3" keyToSet="test6" valueToSet="test6-value" />
          <StorageTest keyToGet="test2" keyToSet="test3" valueToSet="test3-value" />

          <StorageTest keyToGet="test" keyToSet="test3" valueToSet="test3-value" />
        </Frame>
      </div>
    );
  }
}

export default App;
