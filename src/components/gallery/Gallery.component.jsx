import React from 'react';
import Modal from 'react-modal';

import './gallery.styles.scss';


class Gallery extends React.Component{

  state = {
    modal: false,
    image: ''
  }

  componentDidMount(){Modal.setAppElement("body");};

  openModal = (img) => {
    this.setState({ modal: true, image: img })
    this.removeScroll();
  };

  //modal closes we remove image after modal transition is over so we don't see missing image icon in DOM
  closeModal = () => this.setState(() => {
      return { modal: false }
  }, () => {
    setTimeout(() => {
      this.setState({image: ''})
    },500)
    this.addScroll();
  });

  //click outside modal image to close modal
  closeModalOutsideImageClick = (e) => {
    let target = e.target.className

    if(target === 'modal' || target === 'modal-container'){
      this.setState(() => {
        return { modal: false }
      }, () => {
        this.setState({image: ''})
      }, 500)

      
    }
    this.addScroll();
  }

  //when modal shows add/remove class name to body to remove background scroll
  addScroll = () => document.body.classList.remove('noScroll');
  removeScroll = () => document.body.classList.add('noScroll');


  render(){
    console.log('stateeee', this.state)

    return(
      <div>
      <section className="gallery">
          <div className="gallery-item--1" onClick={() => this.openModal('img/gallery/joe1.jpg')}><img src="img/gallery/joe1.jpg" alt="Gallery 1" className="gallery__img" /></div>
          <div className="gallery-item--2" onClick={() => this.openModal('img/gallery/joe2.jpg')}><img src="img/gallery/joe2.jpg" alt="Gallery 2" className="gallery__img" /></div>
          <div className="gallery-item--3" onClick={() => this.openModal('img/gallery/joe3.jpg')}><img src="img/gallery/joe3.jpg" alt="Gallery 3" className="gallery__img" /></div>
          <div className="gallery-item--4" onClick={() => this.openModal('img/gallery/joe4.jpg')}><img src="img/gallery/joe4.jpg" alt="Gallery 4" className="gallery__img" /></div>
          <div className="gallery-item--5" onClick={() => this.openModal('img/gallery/joe5.jpg')}><img src="img/gallery/joe5.jpg" alt="Gallery 5" className="gallery__img" /></div>
          <div className="gallery-item--6" onClick={() => this.openModal('img/gallery/joe6.jpg')}><img src="img/gallery/joe6.jpg" alt="Gallery 6" className="gallery__img" /></div>
          <div className="gallery-item--7" onClick={() => this.openModal('img/gallery/joe7.jpg')}><img src="img/gallery/joe7.jpg" alt="Gallery 7" className="gallery__img" /></div>
          <div className="gallery-item--8" onClick={() => this.openModal('img/gallery/joe8.jpg')}><img src="img/gallery/joe8.jpg" alt="Gallery 8" className="gallery__img" /></div>
          <div className="gallery-item--9" onClick={() => this.openModal('img/gallery/joe9.jpg')}><img src="img/gallery/joe9.jpg" alt="Gallery 9" className="gallery__img" /></div>
          <div className="gallery-item--10" onClick={() => this.openModal('img/gallery/joe10.jpg')}><img src="img/gallery/joe10.jpg" alt="Gallery 10" className="gallery__img" /></div>
          <div className="gallery-item--11" onClick={() => this.openModal('img/gallery/joe11.jpg')}><img src="img/gallery/joe11.jpg" alt="Gallery 11" className="gallery__img" /></div>
          <div className="gallery-item--12" onClick={() => this.openModal('img/gallery/joe12.jpg')}><img src="img/gallery/joe12.jpg" alt="Gallery 12" className="gallery__img" /></div>
          <div className="gallery-item--13" onClick={() => this.openModal('img/gallery/joe13.jpg')}><img src="img/gallery/joe13.jpg" alt="Gallery 13" className="gallery__img" /></div>
          <div className="gallery-item--14" onClick={() => this.openModal('img/gallery/joe14.jpg')}><img src="img/gallery/joe14.jpg" alt="Gallery 14" className="gallery__img" /></div>


      </section>




          {/* <Modal className="modal" isOpen={this.state.modal} onRequestClose={this.closeModal}>
        
            <button className="modal-close" onClick={this.closeModal}>X</button>
            <div className="modal-container" onRequestClose={this.closeModal}>
              <img src={this.state.image} />
            </div>
          
      
          
      
          </Modal> */}

      {/* <Modal isOpen={this.state.modal} onRequestClose={this.closeModal} contentLabel="Selected Option" closeTimeoutMS={300}>
   
      
        <div className="modal">
        <button className="modal-button" onClick={this.closeModal}>X</button>
          <img src={this.state.image} className="modal-img" />

        </div>
			

			</Modal> */}

      {this.state.modal ?
      
      <div className="modal" onClick={this.closeModalOutsideImageClick}>
      <button className="modal-close" onClick={this.closeModal}>X</button>
      <div className="modal-container">
        <img src={this.state.image} className="modal-img" alt="gallery" />
      </div>
    </div>

    :
    null

    
    }


        </div>









   

    )
  }
}




export default Gallery;