import React from 'react';
import { connect } from 'react-redux';
// import { selectedSoldier } from '../redux/actions';

import './hoverModal.styles.scss';

class HoverModal extends React.Component{

  // state = {
  //   joeee: this.props
  // }




  render(){
    // console.log('hover', this.props.hoveredSoldier)
    return(
      <div>

  
          <div className={this.props.hoveredSoldier === 'empty' ? "hoverModal-hide" : "hoverModal"}>
            <div>
              <img className="hoverModal-img" src={this.props.hoveredSoldier.picture} alt={this.props.hoveredSoldier.codename}/>
              {/* <img className="hoverModal-img" src={window.location.origin + "/img/joe/hawk.jpg"} alt='joe'/> */}
            </div>
            <div className="hoverModal-bio">
              <div className="hoverModal-bio-text">{this.props.hoveredSoldier.hoverBio}</div>
            </div>
          </div>

      </div>
  
    )
  }
}


const mapStateToProps = (state) => {
  return {
    selectedSoldier: state.selectedSoldier,
    hoveredSoldier: state.hoveredSoldier    

  }
}

export default connect(mapStateToProps)(HoverModal);