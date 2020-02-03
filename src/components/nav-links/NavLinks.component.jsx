import React from 'react';

import './navLinks.styles.scss';


class NavLinks extends React.Component{

  state={
    showJoe: false,
    joe: {},
  }

  clickSelectedSoldier = () => {
    // this.setState({ showJoe: false, },() => this.setState({showJoe: null }))
    this.props.selectSoldier(this.state.joe)
    // this.props.clickMenu();
    
    // this.setState((prevState)=>{
    //   return{
    //     showJoe: !prevState
    //   }
    // })
  }


  // 

  render(){
    // console.log('navlinks', this.state)
    const { soldier } = this.props;
    const { joe } = this.state;

    

    return(
      <div onMouseEnter={() => this.props.selectSoldier(this.props.soldier)}>
        <div onClick={this.clickSelectedSoldier} >
          {soldier.codename} 
        </div>



      {/* {this.state.showJoe 
      ?
        <div className="showjoee">
          <div>
            <img className="showjoe-img" src={joe.picture} alt={joe.codename}/>
            <img className="showjoe-img" src={window.location.origin + "/img/joe/hawk.jpg"} alt={this.state.joe.codename}/>
          </div>
          <div className="showjoe-bio">
            <div className="showjoe-bio-text">
            {joe.bio}
            </div>
          </div>
        </div>

      :
        null
      } */}



      </div>

   

    )
  }
}

export default NavLinks