import React from 'react';

import Nav from './components/nav/Nav.component';
import HoverModalComponent from './components/hoverModal/HoverModal.component';
import DisplaySoldier from './components/displaySoldier/DisplaySoldier.component';
import Main from './components/main/Main.component';
import './App.css';

class App extends React.Component {

  // state = {
  //   menu: false
  // }

  // openCloseMenu = () => {
  //   this.setState({ menu: !this.state.menu });
  
  // }


  render(){
    return (
      <div className="App">
       {/* <Nav openCloseMenu={this.openCloseMenu} menu={this.state.menu}/> */}
        <Nav />
       <HoverModalComponent/>
       <DisplaySoldier />
       <Main />
       
      </div>
    );
  }
}

export default (App);
