import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <section>
        <div className="thucdon" style={{backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-PSD-bg.jpg)'}}>
          <div className="col-lg-6">
            <a href="/" className="tieude1">cà phê</a>
            <span className="caption1">Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng <br /> hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, <br /> qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi <br /> tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị<br /> đậm đà và tinh tế.</span>
            <button type="button" id="one" className="btn btn-outline-warning btn-lg">khám phá thêm</button>
          </div>
          <div className="col-lg-6">
            <a href="/"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png" alt="CÀ PHÊ" /></a>
          </div>
        </div>
        <div className="thucdon" style={{backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-FREEZE.jpg)', textAlign: 'right', paddingRight: '115px'}}>
          <div className="col-lg-6">
            <a href="/"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png" style={{width: '68%', top: '-38px'}} alt="freeze" /></a>
          </div>
          <div className="col-lg-6">
            <a href="/" className="tieude2">freeze</a>
            <span className="caption2">Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.</span>
            <button type="button" id="two" className="btn btn-outline-warning btn-lg">khám phá thêm</button>
          </div>
        </div>
        <div className="thucdon" style={{backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/04_2018/menu-TEA-bg.jpg)'}}>
          <div className="col-lg-6">
            <a href="/" className="tieude3">trà</a>
            <span className="caption1" style={{color: 'white'}}>Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện<br /> đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và<br /> tận hưởng một cảm giác thật khoan khoái, tươi mới.</span>
            <button type="button" id="three" className="btn btn-outline-warning btn-lg">khám phá thêm</button>
          </div>
          <div className="col-lg-6">
            <a href="/"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png" style={{top: '-28px', right: '21%'}} alt="CÀ PHÊ" /></a>
          </div>
        </div>
        <div className="thucdon" style={{backgroundImage: 'url(https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-BANHMI-bg_2.jpg)', marginBottom: '-2px', top: '-2px', textAlign: 'right', paddingRight: '58px'}}>
          <div className="col-lg-6">
            <a href="/"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png" style={{width: '95%', left: '0'}} alt="freeze" /></a>
          </div>
          <div className="col-lg-6">
            <a href="/" className="tieude2">bánh mì</a>
            <span className="caption2">Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa lớp nhân chua, cay, mặn, ngọt quyện với lớp vỏ bánh mì giòn tan, mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách.</span>
            <button type="button" id="four" className="btn btn-outline-warning btn-lg">khám phá thêm</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;