import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class header extends Component {
  render() {
    return (
      <div className="bia">
        <header>
          <Link to="/" className="logo1"><img src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/logo.svg" alt="logo" /></Link>
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
                <li className="menu-list"><Link to="/he-thong-cua-hang">quán cà phê</Link></li>
                <li className="menu-duoi">
                  <Link to="/san-pham">thực đơn</Link>
                  <div className="row">
                    <div className="res">
                      <div className="col-sm-2">
                        <ul>
                          <li><Link to="/ca-phe" className="kind">cà phê</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">cà phê phin</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">cà phê espresso</Link></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><Link to="/ca-phe" className="kind">freeze</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">freeze cà phê phin</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">freeze không cà phê</Link></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><Link to="/tra" className="kind">trà</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">trà sen vàng</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">trà thạch đào</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">trà thanh đào</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">trà thạch vải</Link></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><Link to="/ca-phe" className="kind">bánh mì</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">thịt nướng</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">xíu mại</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">chả lụa xá xíu</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">gà xé nước tương</Link></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><Link to="/tra" className="kind">khác</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">bánh ngọt</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">merchandise</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">cà phê đóng gói</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">thực đơn giao hàng</Link></li>
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
                  <Link to="/tin-tuc">tin tức</Link>
                  <div className="row">
                    <div className="res">
                      <div className="col-sm-3"><Link to="/tin-tuc-su-kien" className="kind">tin tức &amp; sự kiện</Link></div>
                      <div className="col-sm-3"><Link to="/tin-khuyen-mai" className="kind">tin khuyến mại</Link></div>
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
                  <Link to="/trach-nhiem-cong-dong">trách nhiệm cộng đồng</Link>
                  <div className="row">
                    <div className="res">
                      <div className="col-sm-3">
                        <ul>
                          <li><Link to="/gia-tri-van-hoa-viet" className="kind">giá trị văn hoá việt</Link></li>
                          <li style={{margin: '-10px'}}><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">đương đại hoá tranh đồng hồ</Link></li>
                        </ul>
                      </div>
                      <div className="col-sm-2">
                        <ul>
                          <li><Link to="/cong-dong" className="kind">cộng đồng</Link></li>
                          <li><i className="fa fa-caret-right" aria-hidden="true" /><Link to="/chi-tiet-tra" className="name">lớp học cho em</Link></li>
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
                  <Link to="/about">về chúng tôi</Link>
                  <div className="row" style={{paddingLeft: '170px'}}>
                    <div className="res">
                      <div className="col-sm-2"><Link to="/khoi-nguon" className="kind">khởi nguồn</Link></div>
                      <div className="col-sm-3"><Link to="/dich-vu-khach-hang" className="kind">dịch vụ khách hàng</Link></div>
                      <div className="col-sm-2"><Link to="/nghe-nghiep" className="kind">nghề nghiệp</Link></div>
                      <div className="col-sm-2" style={{right: '-20em'}}>
                        <div className="banner">
                          <Link to="/khoi-nguon">
                            <div className="text" style={{textTransform: 'none', fontSize: '20px'}}>Thương<br /> hiệu bắt <br />nguồn từ<br /> cà phê Việt!</div>
                            <div className="imga"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/ABOUT-ORIGIN.png" /></div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-list"><Link to="/lien-he">liên hệ</Link></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default header;