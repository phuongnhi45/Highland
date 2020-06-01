import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class job extends Component {
  render() {
    return (
      <div className="start">
        <div className="loe">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
            alt="NGHỀ NGHIỆP"
          />
          <div className="back" />
        </div>

        <div className="thongtin">
          <div className="col-8">
            <div className="tieude">NGHỀ NGHIỆP</div>
            <p>
              <strong>Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®</strong>
            </p>
            <p className="mota">
              Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu, Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ chuyên nghiệp của đại gia đình Highlands Coffee®.
            </p>
            <p className="mota">
              Chi tiết các vị trí ứng tuyển:
            </p>
            <button type="button" class="btn btn-info btn-lg">Join Our Talent Network</button>
          </div>

          <div className="col-4">
            <ul className="sidebar">
              <li>
                <Link to="/khoi-nguon">
                  <img
                    src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_ABOUT-ORIGIN.png"
                    alt="KHỞI NGUỒN"
                  />
                  <span>khởi nguồn</span>
                </Link>
              </li>
              <li>
                <Link to="/dich-vu-khach-hang">
                  <img
                    src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_About_Customer_service_2.jpg"
                    alt="DỊCH VỤ KHÁCH HÀNG"
                  />
                  <span>dịch vụ khách hàng</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default job;