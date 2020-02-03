import React from 'react';

import { connect } from 'react-redux';
import { selectSoldier, hoverSoldier } from '../redux/actions';

// import NavLinks from '../nav-links/NavLinks.component';
import './nav.styles.scss';

class Nav extends React.Component {

  state = {
    menu: false
  }

  openCloseMenu = () => {
    this.setState({ menu: !this.state.menu });
  }

  clickedSoldier = (soldier) => {
    this.props.selectSoldier(soldier)
    this.openCloseMenu();
    window.scroll(0,0);
  }

  clickMenu = () => {
    this.props.selectSoldier('empty')
    this.openCloseMenu()
  }


  render(){
    // console.log('state', this.state)
    // console.log('navProps', this.props)
    const { hawk, snakeEyes, outback, cobraCommander, destro } = this.props.soldiers[0]

    return(


      <nav id="nav">

          <div className="nav">
            <div className="nav-contain">
              <div className="nav-hamburger_brand">
                <i className="fas fa-bars nav-i" onClick={this.clickMenu}></i>
                {/* <div className="nav-brand">G.I.JOE</div>  */}
              </div>
              <img className="nav-logo" src={window.location.origin + "/img/logo.png"} alt="logo" /> 
            </div>
          </div>



          <div className={this.state.menu ? "nav-menu" : "nav-menu-hidden"} >
            <div className= {this.state.menu ? "nav-menu-links" : "nav-menu-links-hidden"} >
              <div className="nav-menu-nav">
                <img className="nav-menu-nav--icon" src={window.location.origin + "/img/heads.png"} alt="nav-icon" />
              </div>



              <div className="nav-menu-link" onMouseEnter={() => this.props.hoverSoldier(hawk)} onMouseLeave={() => this.props.hoverSoldier('empty')} onClick={()=> this.clickedSoldier(hawk)}>
                {hawk.codename}
              </div>
      
              <div className="nav-menu-link" onMouseEnter={() => this.props.hoverSoldier(snakeEyes)} onMouseLeave={() => this.props.hoverSoldier('empty')} onClick={()=> this.clickedSoldier(snakeEyes)}>
                {snakeEyes.codename}
              </div>

              <div className="nav-menu-link" onMouseEnter={() => this.props.hoverSoldier(outback)} onMouseLeave={() => this.props.hoverSoldier('empty')} onClick={()=> this.clickedSoldier(outback)}>
                {outback.codename}
              </div>

              <div className="nav-menu-link" onMouseEnter={() => this.props.hoverSoldier(cobraCommander)} onMouseLeave={() => this.props.hoverSoldier('empty')} onClick={()=> this.clickedSoldier(cobraCommander)}>
                {cobraCommander.codename}
              </div>

              <div className="nav-menu-link" onMouseEnter={() => this.props.hoverSoldier(destro)} onMouseLeave={() => this.props.hoverSoldier('empty')} onClick={()=> this.clickedSoldier(destro)}>
                {destro.codename}
              </div>
      

            </div>
            <div className={this.state.menu ? "nav-menu-close" : "nav-menu-close-hidden"} onClick={this.clickMenu} >
            <i className="fas fa-times nav-menu-x"></i>
            </div>
          </div>


      </nav>



    )
  }
}



  const mapStateToProps = (state) => {
    return { 
      soldiers: state.soldiers,
    }
  }


export default connect(mapStateToProps, {
  selectSoldier: selectSoldier,
  hoverSoldier: hoverSoldier
})(Nav);

