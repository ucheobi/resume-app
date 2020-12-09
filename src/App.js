import React from 'react';

import Header from './components/header/header.component.jsx';
import Main from './components/main/main.component.jsx';

import './App.css';

class App extends React.Component {


render(){
  return(
    <div className='container'>
      <Header />
      <Main />
    </div>
  )
}

}

export default App;
