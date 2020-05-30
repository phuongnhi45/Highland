import React, { Component } from 'react';

class Tintuc extends Component {
  myFunction() {
    document.getElementById("aa").style.display = 'inline-flex';
    document.getElementById("aa").style.flexWrap = 'wrap';
  }
  render() {
    return (
      <div className="tin">
        <h1 className="title">tin tức</h1>
        <div className="newss">
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/03_2020/thumbs/470_crop_470_crop_Highlands_-_Freeze_Tra_Xanh_-_KV_Phase_1_470x312.png" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">HIGHLANDS COFFEE - DỊCH VỤ GIAO HÀNG MIỄN PHÍ</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>29/03/2020, 01:01</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/02_2018/thumbs/470_crop_HL20_470x314-01.png" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">Thư Xin Lỗi Chính Thức Khách Hàng Lê Văn Trường</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>20/02/2020, 07:35</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/02_2020/thumbs/470_crop_82667614_2845674332180059_8209717131743330304_o-Recovered.png" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">LỊCH MỞ CỬA TẾT 2020 - HIGHLANDS COFFEE</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>22/01/2020, 15:37</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/02_2020/thumbs/470_crop_83739091_2845644318849727_1748210367038750720_o_1.png" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">DANH SÁCH QUÁN CÓ ÁP DỤNG KHUNG GIÁ MỚI</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>17/01/2020, 14:45</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/03_2020/thumbs/470_crop_Untitled-2.png" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">ĐIỀU KIỆN ÁP DỤNG CHƯƠNG TRÌNH ƯU ĐÃI</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>10/01/2020, 11:48</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/12_2019/thumbs/470_crop_tra-sen-vang-moi.png" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">UỐNG TRÀ SEN VÀNG MỚI - NHẬN VÔ VÀN ƯU ĐÃI SEN VÀNG</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>04/12/2019, 23:50</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/thumbs/470_crop_hco-7598-20-years-concert-web-470x314_1.jpg" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">ĐẠI TIỆC ÂM NHẠC: HIGHLANDS COFFEE 20 NĂM - GẮN KẾT NIỀM TỰ HÀO ĐẤT VIỆT</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>28/10/2019, 12:05</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/thumbs/470_crop_HCO-7598-20-YEARS-NEWS-BANNER-NEWS-470X314.jpg" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">HIGHLANDS COFFEE: TRỌN VẸN TUỔI 20 CÙNG HÀNH TRÌNH GẮN KẾT “NIỀM TỰ HÀO ĐẤT VIỆT”</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>22/10/2019, 15:59</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/10_2019/thumbs/470_crop_HL20_470x314.png" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">HIGHLANDS COFFEE: 20 NĂM – GẮN KẾT NIỀM TỰ HÀO ĐẤT VIỆT</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>01/10/2019, 18:14</p></div>
          </div>

          <div id="aa">
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/08_2019/thumbs/470_crop_Highlands_-_Freeze_Tra_Xanh_-_KV_Phase_1_470x312.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">TẬN HƯỞNG FREEZE TRÀ XANH - TRÀ XANH ĐẬM ĐÀ, THẠCH GIÒN KHÓ CƯỠNG!</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>05/08/2019, 17:52</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/08_2019/thumbs/470_crop_HCO-7588-FTX-2019-470x314.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">NHẬN THẺ TẬN HƯỞNG CÙNG FREEZE TRÀ XANH!</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>07/08/2019, 21:16</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/08_2019/thumbs/470_crop_Highlands_-_FTX_-_KV_Phase_2_470x314_1308.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">BIẾT TẬN HƯỞNG, UỐNG FREEZE TRÀ XANH!</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>06/08/2019, 17:11</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/07_2019/thumbs/470_crop_HCO-7579-300-STORES-WEB-BANNER-470X314.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">Highlands Coffee: Mừng 300 Quán, Đón Trăm Chuyện Đậm Đà.</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>19/07/2019, 14:30</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/07_2019/thumbs/470_crop_HCO-7579-300-STORES-WEB-BANNER-NEWS-2-470X314_1.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">SỔ ƯU ĐÃI MỪNG 300 QUÁN</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>12/07/2019, 21:51</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/05_2019/thumbs/470_crop_HL_KVtalent2.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">PHIN SỮA ĐÁ, VỊ ĐẬM ĐÀ CHO NGÀY MỚI ĐẬM CHẤT</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>31/05/2019, 14:46</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/02_2019/thumbs/470_crop_lich-hoat-dong-tet-2019.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">LỊCH HOẠT ĐỘNG TRONG TẾT 2019 CỦA HIGHLANDS COFFEE</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>01/02/2019, 16:17</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/01_2019/thumbs/470_crop_HCO_7558_FESTIVE_2019_WIFI_POST_PROMOTION_1920X1080.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">LÌ XÌ TẾT VÀNG, RỘN RÀNG CHUYỆN XUÂN</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>16/01/2019, 08:00</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/01_2019/thumbs/470_crop_KVTet_horizontal.png" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">TẾT SEN VÀNG, XUÂN GIÒN CHUYỆN</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>16/01/2019, 16:06</p></div>
            </div>
          </div>

          <button onClick={this.myFunction} className="btn btn-outline-danger btn-lg">xem thêm</button>
        </div>
      </div>
    );
  }
}

export default Tintuc;