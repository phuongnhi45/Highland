import React, { Component } from 'react';

class system extends Component {
  render() {
    return (
      <div className="find">
        <h1>tìm quán cà phê</h1>
        <div className="choice-find">
          <label className="custom-select" htmlFor="styledSelect1">
            <select id="styledSelect1" name="options">
              <option value>Việt Nam</option>
            </select>
          </label>
          <label className="custom-select" htmlFor="styledSelect1">
            <select id="styledSelect1" name="options">
              <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
              <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
              <option value="An Giang">An Giang</option>
              <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
              <option value="Bắc Giang">Bắc Giang</option>
              <option value="Bắc Kạn">Bắc Kạn</option>
              <option value="Bạc Liêu">Bạc Liêu</option>
              <option value="Bắc Ninh">Bắc Ninh</option>
              <option value="Bình Định">Bình Định</option>
              <option value="Bình Thuận">Bình Thuận</option>
              <option value="Cà Mau">Cà Mau</option>
              <option value="Cao Bằng">Cao Bằng</option>
              <option value="Đắk Lắk">Đắk Lắk</option>
              <option value="Điện Biên">Điện Biên</option>
              <option value="Đồng Nai">Đồng Nai</option>
              <option value="Đồng Tháp">Đồng Tháp</option>
              <option value="Gia Lai">Gia Lai</option>
              <option value="Hà Giang">Hà Giang</option>
              <option value="Hà Nam">Hà Nam</option>
              <option value="Hà Tĩnh">Hà Tĩnh</option>
              <option value="Hải Dương">Hải Dương</option>
              <option value="Hậu Giang">Hậu Giang</option>
              <option value="Hòa Bình">Hòa Bình</option>
              <option value="Hưng Yên">Hưng Yên</option>
              <option value="Khánh Hòa">Khánh Hòa</option>
              <option value="Kiên Giang">Kiên Giang</option>
              <option value="Kon Tum">Kon Tum</option>
              <option value="Lai Châu">Lai Châu</option>
              <option value="Lâm Đồng">Lâm Đồng</option>
              <option value="Lạng Sơn">Lạng Sơn</option>
              <option value="Lào Cai">Lào Cai</option>
              <option value="Long An">Long An</option>
              <option value="Nam Định">Nam Định</option>
              <option value="Nghệ An">Nghệ An</option>
              <option value="Ninh Bình">Ninh Bình</option>
              <option value="Ninh Thuận">Ninh Thuận</option>
              <option value="Phú Thọ">Phú Thọ</option>
              <option value="Quảng Bình">Quảng Bình</option>
              <option value="Quảng Ngãi">Quảng Ngãi</option>
              <option value="Quảng Ninh">Quảng Ninh</option>
              <option value="Quảng Trị">Quảng Trị</option>
              <option value="Sóc Trăng">Sóc Trăng</option>
              <option value="Sơn La">Sơn La</option>
              <option value="Tây Ninh">Tây Ninh</option>
              <option value="Thái Bình">Thái Bình</option>
              <option value="Thái Nguyên">Thái Nguyên</option>
              <option value="Thanh Hóa">Thanh Hóa</option>
              <option value="Tiền Giang">Tiền Giang</option>
              <option value="Trà Vinh">Trà Vinh</option>
              <option value="Tuyên Quang">Tuyên Quang</option>
              <option value="Vĩnh Long">Vĩnh Long</option>
              <option value="Vĩnh Phúc">Vĩnh Phúc</option>
              <option value="Yên Bái">Yên Bái</option>
              <option value="Phú Yên">Phú Yên</option>
              <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
              <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
              <option value="Tp.Hà Nội">Tp.Hà Nội</option>
              <option value="TP  HCM">TP HCM</option>
            </select>
          </label>
          <label className="custom-select" htmlFor="styledSelect1">
            <select id="styledSelect1" name="options">
              <option value>Quận/Huyện</option>
              <option value={1}>A Lưới</option>
              <option value={2}>Hương Thuỷ</option>
              <option value={3}>Hương Trà</option>
              <option value={4}>Nam Đông</option>
              <option value={2}>Phong Điền</option>
              <option value={3}>Phú Lộc</option>
              <option value={4}>TP.Huế</option>
            </select>
          </label>
          <label className="custom-select" htmlFor="styledSelect1">
            <select id="styledSelect1" name="options">
              <option value>Tiện ích</option>
              <option value={1}>Wifi miễn phí</option>
              <option value={2}>Thanh toán bằng thẻ</option>
            </select>
          </label>
          <form className="kiem">
            <input type="search" placeholder="Nhập tên đường, hoặc quán..." />
            <button name="btn-search" type="submit"><i className="fa fa-search fa-lg" aria-hidden="true"/>Tìm kiếm</button>
          </form>
        </div>

        <div className="ban-do">
          <div className="quan">
            <div className="count">Tìm được 5 quán</div>
            <div className="list">
              <a href="/dc" className="item-quan">
                <h4>vincom plaza huế</h4>
                <p className="dc">50A Hùng Vương, Phường Phú Nhuận, Tp. Huế , Thừa Thiên Huế</p>
                <i className="fa fa-phone" aria-hidden="true" />
                <p className="tgian">OPEN</p>
                <i className="fa fa-wifi" aria-hidden="true" /><br/>
                <i className="fa fa-credit-card" aria-hidden="true" />
              </a>
            </div>
            <div className="list">
              <a href="/dc" className="item-quan">
                <h4>vincom plaza huế</h4>
                <p className="dc">50A Hùng Vương, Phường Phú Nhuận, Tp. Huế , Thừa Thiên Huế</p>
                <i className="fa fa-phone" aria-hidden="true" />
                <p className="tgian">OPEN</p>
                <i className="fa fa-wifi" aria-hidden="true" /><br/>
                <i className="fa fa-credit-card" aria-hidden="true" />
              </a>
            </div>
            <div className="list">
              <a href="/dc" className="item-quan">
                <h4>vincom plaza huế</h4>
                <p className="dc">50A Hùng Vương, Phường Phú Nhuận, Tp. Huế , Thừa Thiên Huế</p>
                <i className="fa fa-phone" aria-hidden="true" />
                <p className="tgian">OPEN</p>
                <i className="fa fa-wifi" aria-hidden="true" /><br/>
                <i className="fa fa-credit-card" aria-hidden="true" />
              </a>
            </div>
            <div className="list">
              <a href="/dc" className="item-quan">
                <h4>vincom plaza huế</h4>
                <p className="dc">50A Hùng Vương, Phường Phú Nhuận, Tp. Huế , Thừa Thiên Huế</p>
                <i className="fa fa-phone" aria-hidden="true" />
                <p className="tgian">OPEN</p>
                <i className="fa fa-wifi" aria-hidden="true" /><br/>
                <i className="fa fa-credit-card" aria-hidden="true" />
              </a>
            </div>
            <div className="list">
              <a href="/dc" className="item-quan">
                <h4>vincom plaza huế</h4>
                <p className="dc">50A Hùng Vương, Phường Phú Nhuận, Tp. Huế , Thừa Thiên Huế</p>
                <i className="fa fa-phone" aria-hidden="true" />
                <p className="tgian">OPEN</p>
                <i className="fa fa-wifi" aria-hidden="true" /><br/>
                <i className="fa fa-credit-card" aria-hidden="true" />
              </a>
            </div>

          </div>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.2771920086598!2d107.5865213149806!3d16.46149613317805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a138544240a5%3A0x882ddf04d7146c9f!2zOSBOZ8O0IFF1eeG7gW4sIFbEqW5oIE5pbmgsIFRow6BuaCBwaOG7kSBIdeG6vywgVGjhu6thIFRoacOqbiBIdeG6vywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1585213273943!5m2!1svi!2s" width={800} height={600} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
          </div>
        </div>

      </div>
    );
  }
}

export default system;