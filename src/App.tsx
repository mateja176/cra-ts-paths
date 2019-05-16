import { capitalize } from 'format';
import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const App: React.FC = () => <div className="App">{capitalize('react')}</div>;

export default hot(module)(App);
