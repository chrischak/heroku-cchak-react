import React from 'react';

class Photo extends React.Component {
  constructor() {
  super();
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <div className="clothes">
				<img className="clothes" src={require('../images/img1.jpg')} alt="Smile emoji" />
        <img className="clothes" src={require('../images/img2.jpg')} alt="Smile emoji" />
        <img className="clothes" src={require('../images/img3.jpg')} alt="Smile emoji" />
        <img className="clothes" src={require('../images/img4.jpg')} alt="Smile emoji" />
        <img className="clothes" src={require('../images/img5.jpg')} alt="Smile emoji" />
        <img className="clothes" src={require('../images/img6.jpg')} alt="Smile emoji" />
      </div>
    );
  }
}

export default Photo;
