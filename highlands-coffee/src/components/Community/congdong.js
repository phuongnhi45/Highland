import React, { Component } from 'react';

class congdong extends Component {
  render() {
    return (
      <div className="tin" id="xuong">
        <h1 className="title">cộng đồng</h1>
        <div className="news">
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2019/thumbs/470_crop_Picture1.png" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">HIGHLANDS COFFEE CÙNG Ý TƯỞNG “LỒNG ĐÈN XANH” THẮP SÁNG "TRUNG THU XANH” CHO HƠN</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>13/09/2019, 15:59</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/05_2018/thumbs/470_crop_IMG_0479.jpg" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">TRUNG THU YÊU THƯƠNG - LỚP HỌC CHO EM 2017</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>22/01/2020, 15:37</p></div>
          </div>
        </div>
      </div>
    );
  }
}

export default congdong;