import React from 'react';

import { connect } from 'react-redux';

import './toys.styles.scss';


class Toys extends React.Component{


  render(){
// const{ toyPicture, toyTitle, toyInfo, toyPrice, toyAmazon } = this.props.selectedSoldier.toys[0];

// console.log('proppps',this.props.selectedSoldier);
    return(

      
      <div className="toy">
    {
      this.props.selectedSoldier !== 'empty' ?
   
        <a className="toy-link" href={this.props.selectedSoldier.toys[0].toyAmazon} rel="noopener noreferrer" target="_blank" title="Buy On Amazon">
          <div className="toy-title">{this.props.selectedSoldier.toys[0].toyTitle}</div>
          <img className="toy-name" src={this.props.selectedSoldier.toys[0].toyPicture} alt="Amazon Toy" />
          {/* <div className="toy-Price">${this.props.selectedSoldier.toys[0].toyPrice}</div> */}
          <div className="toy-info">{this.props.selectedSoldier.toys[0].toyInfo}</div>
    
        </a>
     
      :
      null
    }
    </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    selectedSoldier: state.selectedSoldier
  }
}

export default connect(mapStateToProps)(Toys);