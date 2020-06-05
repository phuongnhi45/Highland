import React, { Component } from 'react';

class Detailtea extends Component {
  

  render() {
    return (
      <div className="tra-thanh-dao">
        <h1 className="traa">trà thanh đào</h1>
        <div className="main">
          <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRATHANHDAO.png" alt="tra-thanh-dao" />
          <aside>
            <p>Một trải nghiệm thú vị khác! Sự hài hòa giữa vị trà cao cấp, vị sả thanh mát và những miếng đào thơm ngon mọng nước sẽ mang đến cho bạn một thức uống tuyệt vời.</p>
            <div id="size">
              <button onClick="myFunction()" type="button" id="btn" className="active btn-sm">S</button>
              <button onClick="myFunction1()" type="button" id="btn" className="btn-sm">M</button>
              <button onClick="myFunction2()" type="button" id="btn" className="btn-sm">L</button>
            </div>
            <div id="content" className="price">39,000 VNĐ</div>
            <div id="myDIV" className="price">49,000 VNĐ</div>
            <div id="myDIV2" className="price">55,000 VNĐ</div>
          </aside>
        </div>
        <hr style={{width: '180%'}}/>

      </div>
    );
  }
}

export default Detailtea;