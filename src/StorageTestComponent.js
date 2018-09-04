import React, { Component } from 'react';
const StorageTest = ({keyToGet, keyToSet, valueToSet}) => {
  	localStorage.setItem(keyToSet, valueToSet);
  	let v = localStorage.getItem(keyToGet);
    return (
      <p>{v}</p>
    );
}

export default StorageTest;