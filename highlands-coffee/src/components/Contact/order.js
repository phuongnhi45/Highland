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
                
                  <h3>Payment</h3>
                  <label className="pay">
                    <input type="radio" defaultChecked="checked" name="radio" />
                    <span className="checkmark" />Thanh toán khi nhận hàng
                  </label>
                  <label className="pay">
                    <input type="radio" name="radio" />
                    <span className="checkmark" />Momo
                  </label>
                  <label className="pay">
                    <input type="radio" name="radio" />
                    <span className="checkmark" />Airpay
                  </label>
                  <label className="pay">
                    <input type="radio" name="radio" />
                    <span className="checkmark" />Card
                  </label>
                </div>
                <input type="submit" defaultValue="Xác nhận" className="xac" />
              </div>
            </form>
          </div>
          <div className="contain">
            <div className="col-50 cuon">
              <h3>Cart <span className="price"><i className="fa fa-shopping-cart" /> <b>4</b></span></h3><hr />
              <div className="hoadon"> 
                <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRASENVANG.png" alt="tra sen vang"/> 
                <div className="size">Trà sen vàng<br/><i>M</i></div>
                <span className="price tien">35.000 Đ</span>
              </div><hr />
              <div className="hoadon"> 
                <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRASENVANG.png" alt="tra sen vang"/> 
                <div className="size">Trà sen vàng<br/><i>M</i></div>
                <span className="price tien">35.000 Đ</span>
              </div><hr />
              
              <p>Total <span className="price"><b>140.000 Đ</b></span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default order;