import React, { Component } from 'react';

class order extends Component {
  render() {
    return (
      <div>
        <h1>Your Cart</h1>
        <div className="order">
          <div className="contain">
            <form>
              <div className="nhi">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="Name" />
                  <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                  <input type="text" id="adr" name="address" placeholder="Address" />
                  <label htmlFor="adr"><i className="fa fa-phone-square" /> Phone</label>
                  <input type="text" id="adr" name="address" placeholder="Number" />
                </div>  
                <div className="col-50 pay">
                  <h3>Payment</h3>
                  <label className="contain">
                    <input type="radio" defaultChecked="checked" name="radio" />
                    <span className="checkmark" />Thanh toán khi nhận hàng
                  </label>
                  <label className="contain">
                    <input type="radio" name="radio" />
                    <span className="checkmark" />Momo
                  </label>
                  <label className="contain">
                    <input type="radio" name="radio" />
                    <span className="checkmark" />Airpay
                  </label>
                  <label className="contain">
                    <input type="radio" name="radio" />
                    <span className="checkmark" />Card
                  </label>
                </div>
                <input type="submit" defaultValue="Xác nhận" className="xac" />
              </div>
            </form>
          </div>
          <div className="contain">
            <div className="col-50" style={{marginTop: '16px'}}>
              <h4>Cart <span className="price" style={{color: 'black'}}><i className="fa fa-shopping-cart" /> <b>4</b></span></h4>
              <p><a href="/product">Product 1</a> <span className="price">$15</span></p>
              <p><a href="/product">Product 2</a> <span className="price">$5</span></p>
              <p><a href="/product">Product 3</a> <span className="price">$8</span></p>
              <p><a href="/product">Product 4</a> <span className="price">$2</span></p>
              <hr />
              <p>Total <span className="price" style={{color: 'black'}}><b>$30</b></span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default order;