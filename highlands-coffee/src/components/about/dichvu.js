import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class dichvu extends Component {
  render() {
    return (
      <div className="start">
        <div className="loe">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg"
            alt="DỊCH VỤ KHÁCH HÀNG"
          />
          <div className="back" />
        </div>

        <div className="thongtin">
          <div className="col-8">
            <div className="tieude">DỊCH VỤ KHÁCH HÀNG</div>
            <p>
              <strong>Hãy chia sẻ với chúng tôi:</strong>
            </p>
            <p className="mota">
              Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến Highlands Coffee®. Hãy góp ý cho chúng tôi để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt vời hơn thế.
            </p>
            <p>
              <strong>Chăm sóc khách hàng:</strong>
            </p>
            <p className="mota">
              Chúng tôi có mặt trên mạng xã hội Facebook, vì vậy hãy chia sẻ với chúng tôi tại: {"\n"}
              <a href="/">https://www.facebook.com/highlandscoffeevietnam/ </a>hoặc bạn có thể gửi email cho chúng tôi theo địa chỉ:{"\n"}
              <a href="/">customerservice@highlandscoffee.com.vn</a>, chúng tôi sẽ trả lời bạn trong thời gian sớm nhất có thể.
            </p>
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
                <Link to="/nghe-nghiep">
                  <img
                    src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_ABOUT-CAREER3.jpg"
                    alt="NGHỀ NGHIỆP"
                  />
                  <span>nghề nghiệp</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default dichvu;