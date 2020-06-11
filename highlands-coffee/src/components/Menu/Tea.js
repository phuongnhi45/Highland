import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tea extends Component {
  render() {
    return (
      <div className="tra">
        <div className="cate">
          <h1 className="title">trà</h1>
          <div className="vang">
            <div className="col-8">
              <Link to="/chi-tiet-tra">
                <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA-inside.jpg" alt="Trà"/>
              </Link>
              <p>Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.</p>
              <Link to="/chi-tiet-tra" className="hang">xem sản phẩm</Link>
            </div>

            <div className="col-4">
              <div className="item">
                <div className="anh">
                  <Link to="/chi-tiet-tra">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRASENVANG.png" alt="Trà Sen Vàng"/>
                  </Link>
                </div>
                <div className="caption">
                  <Link to="/chi-tiet-tra"><h4>trà sen vàng</h4></Link>
                  <span>Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long</span>
                </div>
              </div>

              <div className="item">
                <div className="anh">
                  <Link to="/chi-tiet-tra">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRATHACHDAO.png" alt="Trà Thạch Đào"/>
                  </Link>
                </div>
                <div className="caption">
                  <Link to="/chi-tiet-tra"><h4>trà thạch đào</h4></Link>
                  <span>Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào</span>
                </div>
              </div>
            </div>
          
          </div> 
        </div>


      </div>
    );
  }
}

export default Tea;