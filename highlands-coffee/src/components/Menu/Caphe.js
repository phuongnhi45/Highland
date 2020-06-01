import React, { Component } from 'react';

class Caphe extends Component {
  render() {
    return (
      <div id="carousel-example-multi" className="carousel slide carousel-multi-item v-2" data-ride="carousel">
  {/*Controls*/}
  <div className="controls-top">
    <a className="btn-floating" href="#carousel-example-multi" data-slide="prev"><i className="fas fa-chevron-left" /></a>
    <a className="btn-floating" href="#carousel-example-multi" data-slide="next"><i className="fas fa-chevron-right" /></a>
  </div>
  {/*/.Controls*/}
  {/* Indicators */}
  <ol className="carousel-indicators">
    <li data-target="#carousel-example-multi" data-slide-to={0} className="active" />
    <li data-target="#carousel-example-multi" data-slide-to={1} />
    <li data-target="#carousel-example-multi" data-slide-to={2} />
    <li data-target="#carousel-example-multi" data-slide-to={3} />
    <li data-target="#carousel-example-multi" data-slide-to={4} />
    <li data-target="#carousel-example-multi" data-slide-to={5} />
  </ol>
  {/*/.Indicators*/}
  <div className="carousel-inner v-2" role="listbox">
    <div className="carousel-item active">
      <div className="col-12 col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (36).jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title font-weight-bold">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a className="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="col-12 col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (34).jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title font-weight-bold">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a className="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="col-12 col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (38).jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title font-weight-bold">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a className="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="col-12 col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (29).jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title font-weight-bold">Card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a className="btn btn-primary btn-md btn-rounded">Button</a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="col-12 col-md-4">
        <div className="card mb-2">
          <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/img (30).jpg" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title font-weight-bold">Card title</h4>
          </div></div></div></div></div></div>
    );
  }
}

export default Caphe;