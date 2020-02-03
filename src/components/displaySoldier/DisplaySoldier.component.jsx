import React from 'react';
import { connect } from 'react-redux';

import Toys from '../toys/Toys.component';

import './displaySoldier.styles.scss';
class DisplaySoldier extends React.Component {

  state={
    profile: true,
  }


  changeTab = () => {
    this.setState({ profile: !this.state.profile })
  }

  render(){
    // console.log('displaySProps', this.props);
    const { selectedSoldier } = this.props;
    return(





      <div className={this.props.selectedSoldier === 'empty' ? "displaySoldier-hide" : "displaySoldier"}>
        <div className="displaySoldier-tabs">
          <div className={this.state.profile ? "displaySoldier-tab" : "displaySoldier-tab-hide"} onClick={this.changeTab}>Profile</div>
          <div className={this.state.profile ? "displaySoldier-tab-hide" : "displaySoldier-tab"} onClick={this.changeTab}>Toys</div>
        </div>

        {this.state.profile 
          ?
            <div className="displaySoldier-bgColor">
              <div className="displaySoldier-wrapper">
           
                  <img className="displaySoldier-img" src={selectedSoldier.picture} alt="Soldier"/>
          
                <div>
                  <div className="displaySoldier-contain">
                    <div className="displaySoldier-head">Faction: {selectedSoldier.faction} </div>
                    <div className="displaySoldier-head">Sex: {selectedSoldier.sex}  </div>
                    <div className="displaySoldier-head">Height: {selectedSoldier.height} </div>
                    <div className="displaySoldier-head">Weight: {selectedSoldier.weight} </div>
                  </div>
                  <div className="displaySoldier-info">Name: {selectedSoldier.name}</div>  
                  <div className="displaySoldier-info-mid">Grade: {selectedSoldier.grade}</div>
                  <div className="displaySoldier-info-mid">Primary MOS: {selectedSoldier.primary} </div>
                  <div className="displaySoldier-info-mid">Secondary MOS: {selectedSoldier.secondary}</div>
                  <div className="displaySoldier-info-mid">Current: {selectedSoldier.current}</div>
                  <div className="displaySoldier-info-bottom">{selectedSoldier.bio}</div>
                </div>
              </div>
            </div>
          :
          <Toys />

        }


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedSoldier: state.selectedSoldier }
}

export default connect(mapStateToProps)(DisplaySoldier);