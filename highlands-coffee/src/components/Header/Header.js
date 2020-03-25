import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div className="bia">
        <header>
          <a href="/" className="logo1"><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="logo" /></a>
          <div className="menu">
            <div className="tren">
              <form className="search">
                <input type="search" placeholder="Từ khoá" />
                <button name="btn-search" type="submit"><i className="fa fa-search fa-lg" aria-hidden="true" /></button>
              </form>
              <a href="/"><img alt="1" className="flag" src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-vn.jpg" /></a>
              <a href="/"><img alt="1" className="flag" src="https://www.highlandscoffee.com.vn/vnt_upload/lang/flag-en.jpg" /></a>
            </div>
            <div className="duoi">
              <ul className="ngang">
                <li className="menu-list"><a href="/">quán cà phê</a></li>
                <li className="menu-duoi">
                  <a href="/san-pham">thực đơn</a>
                  <div className="row">
                    <div className="res">
                      <div className="col-sm-2">
                        <ul>
                          <li><a href="/" className="kind">cà phê</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">cà phê phin</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">cà phê espresso</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><a href="/" className="kind">freeze</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">freeze cà phê phin</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">freeze không cà phê</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><a href="/" className="kind">trà</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">trà sen vàng</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">trà thạch đào</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">trà thanh đào</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">trà thạch vải</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><a href="/" className="kind">bánh mì</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">thịt nướng</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">xíu mại</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">chả lụa xá xíu</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">gà xé nước tương</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><a href="/" className="kind">khác</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">bánh ngọt</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">merchandise</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">cà phê đóng gói</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">thực đơn giao hàng</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <div className="banner">
                          <a href="/" className="text">Phin Sữa Đá Đậm Đà Chất Phin! 29.000đ</a>
                          <a href="/" className="imga"><img  alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/z1.jpg" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-duoi">
                  <a href="/">tin tức</a>
                  <div className="row">
                    <div className="res">
                      <div className="col-sm-3"><a href="/" className="kind">tin tức &amp; sự kiện</a></div>
                      <div className="col-sm-3"><a href="/" className="kind">tin khuyến mại</a></div>
                      <div className="col-sm-2" style={{right: '-29em'}}>
                        <div className="banner">
                          <a href="/" className="text" style={{textTransform: 'none', fontSize: '20px'}}>Tự hào sinh<br /> ra từ đất<br /> Việt, 1999!</a>
                          <a href="/" className="imga"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Thumbnail.jpg" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-duoi">
                  <a href="/">trách nhiệm cộng đồng</a>
                  <div className="row">
                    <div className="res">
                      <div className="col-sm-3">
                        <ul>
                          <li><a href="/" className="kind">giá trị văn hoá việt</a></li>
                          <li style={{margin: '-10px'}}><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">đương đại hoá tranh đồng hồ</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><a href="/" className="kind">cộng đồng</a></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><a href="/" className="name">lớp học cho em</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-2" style={{right: '-36em'}}>
                        <div className="banner">
                          <a href="/" className="text">Đương đại hoá tranh đồng hồ</a>
                          <a href="/" className="imga"><img  alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KV_Highlands_CSR_1.jpg" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-duoi">
                  <a href="/">về chúng tôi</a>
                  <div className="row" style={{paddingLeft: '170px'}}>
                    <div className="res">
                      <div className="col-sm-2"><a href="/" className="kind">khởi nguồn</a></div>
                      <div className="col-sm-3"><a href="/" className="kind">dịch vụ khách hàng</a></div>
                      <div className="col-sm-2"><a href="/" className="kind">nghề nghiệp</a></div>
                      <div className="col-sm-2" style={{right: '-20em'}}>
                        <div className="banner">
                          <a href="/" className="text" style={{textTransform: 'none', fontSize: '20px'}}>Thương<br /> hiệu bắt <br />nguồn từ<br /> cà phê Việt!</a>
                          <a href="/" className="imga"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/ABOUT-ORIGIN.png" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-list"><a href="/">liên hệ</a></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default header;