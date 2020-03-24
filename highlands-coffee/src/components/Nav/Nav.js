import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="/myCarousel" data-slide-to={0} style={{marginRight: '10px'}} className="active" />
            <li data-target="/myCarousel" data-slide-to={1} style={{marginRight: '10px'}} />
            <li data-target="/myCarousel" data-slide-to={2} style={{marginRight: '10px'}} />
          </ol>
          <div className="carousel-inner">
            <a href="/" className="item active"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639.jpg" style={{width: '100%'}} /></a>
            <a href="/" className="item"><img alt="1" src="../1.jpg" style={{width: '100%'}} /></a>
            <a href="/" className="item"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/VIET.Brand_Campaign_WEBBANNER.jpg" style={{width: '100%'}} /></a>
          </div>
        </div>
        <div className="but mot">
          <a href="/"><img alt="1" src="../2.jpg" /></a>
          <button type="button" id="mot" className="btn btn-outline-warning btn-lg">khám phá thêm</button>
        </div>
        <div className="but hai">
          <a href="/"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/Product_banner_confirmed.jpg" /></a>
          <button type="button" id="hai" className="btn btn-outline-warning btn-lg">khám phá thêm</button>
        </div>
        <div className="but ba">
          <a href="/"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/HCO-7605-FESTIVE-2020-WEB-FB-2000X639_1.png" /></a>
          <button type="button" id="ba" className="btn btn-outline-warning btn-lg">khám phá thêm</button>
        </div>
        
        <div className="col-md-6 section-1">
          <div className="title">
            <h2>quán mới</h2>
          </div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <ul className="item active">
                <li className="slick"><a href="/"><h3>sân bay quốc tế đà nẵng</h3></a></li>
                <li className="slick"><a href="/">khu vực check-in ga quốc tế, <br /> sân bay đà nẵng, 62 trần <br /> quốc toản, quận hải châu, tp <br /> đà nẵng</a></li>
                <li className="slick" style={{marginTop: '15px'}}><a href="/">Tìm đường<i style={{paddingLeft: '10px'}} className="fa fa-chevron-right" aria-hidden="true" /></a></li>
              </ul>
              <ul className="item" style={{paddingBottom: '50px'}}>
                <li className="slick"><a href="/"><h3>721 huỳnh tấn phát</h3></a></li>
                <li className="slick"><a href="/">721 huỳnh tấn phát, phường<br />phú thuận, quận 7, tp.hồ chí<br />minh</a></li>
                <li className="slick" style={{marginTop: '15px'}}><a href="/">Tìm đường<i style={{paddingLeft: '10px'}} className="fa fa-chevron-right" aria-hidden="true" /></a></li>
              </ul>
              <ul className="item" style={{paddingBottom: '50px'}}>
                <li className="slick"><a href="/"><h3>hàm cá mập</h3></a></li>
                <li className="slick"><a href="/">tầng 3, 1-3-5 đinh tiên hoàng,<br />phường hàng trống, quận<br /> hoàn kiếm, hà nội</a></li>
                <li className="slick" style={{marginTop: '15px'}}><a href="/">Tìm đường<i style={{paddingLeft: '10px'}} className="fa fa-chevron-right" aria-hidden="true" /></a></li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>

        <div className="col-md-6 section-2">
          <div className="title">
            <h2>tin mới nhất</h2>
            <a href="/">xem toàn bộ<i style={{paddingLeft: '5px'}} className="fa fa-chevron-right" aria-hidden="true" /></a>
          </div>
          <div className="news">
            <div className="col-md-3">
              <a href="/" className="anh"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/news/12_2019/tra-sen-vang-moi.png" /></a>
            </div>
            <div className="col-md-9">
              <a href="/" className="chu">UỐNG TRÀ SEN VÀNG MỚI - NHẬN VÔ VÀN ƯU ĐÃI SEN VÀNG</a>
              <i className="fa fa-calendar-o" aria-hidden="true" />
            </div>
          </div>
          <div className="news">
            <div className="col-md-3">
              <a href="/" className="anh"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/hco-7598-20-years-concert-web-470x314_1.jpg" /></a>
            </div>
            <div className="col-md-9">
              <a href="/" className="chu">ĐẠI TIỆC ÂM NHẠC: HIGHLANDS COFFEE 20 NĂM - GẮN KẾT NIỀM TỰ HÀO ĐẤT VIỆT</a>
              <i className="fa fa-calendar-o two" aria-hidden="true" />
            </div>
          </div>
          <div className="news">
            <div className="col-md-3">
              <a href="/" className="anh"><img alt="1" src="https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/HCO-7598-20-YEARS-NEWS-BANNER-NEWS-470X314.jpg" /></a>
            </div>
            <div className="col-md-9">
              <a href="/" className="chu">HIGHLANDS COFFEE: TRỌN VẸN TUỔI 20 CÙNG HÀNH TRÌNH GẮN KẾT “NIỀM TỰ HÀO</a>
              <i className="fa fa-calendar-o three" aria-hidden="true" />
            </div>
          </div>
          <form className="news under">
            <input type="search" placeholder="Nhập email của bạn để nhận thông tin..." />
            <button type="button" className="btn btn-secondary btn-lg"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button> 
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;