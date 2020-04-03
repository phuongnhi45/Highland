import React, { Component } from 'react';

class sukien extends Component {
  myFunction() {
    document.getElementById("bb").style.display = 'inline-flex';
    document.getElementById("bb").style.flexWrap = 'wrap';
  }
  render() {
    return (
      <div className="tin">
        <h1 className="title">tin tức & sự kiện</h1>
        <div className="news">
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
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/08_2019/thumbs/470_crop_Highlands_-_Freeze_Tra_Xanh_-_KV_Phase_1_470x312.jpg" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">TẬN HƯỞNG FREEZE TRÀ XANH - TRÀ XANH ĐẬM ĐÀ, THẠCH GIÒN KHÓ CƯỠNG!</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>05/08/2019, 17:52</p></div>
          </div>
          <div className="main-news">
            <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/08_2019/thumbs/470_crop_Highlands_-_FTX_-_KV_Phase_2_470x314_1308.jpg" alt="news" /></a>
            <div className="cap"><a href="/chi-tiet-tin-tuc">BIẾT TẬN HƯỞNG, UỐNG FREEZE TRÀ XANH!</a></div>
            <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>06/08/2019, 17:11</p></div>
          </div>        

          <div id="bb">
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/07_2019/thumbs/470_crop_HCO-7579-300-STORES-WEB-BANNER-470X314.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">Highlands Coffee: Mừng 300 Quán, Đón Trăm Chuyện Đậm Đà.</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>19/07/2019, 14:30</p></div>
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
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/01_2019/thumbs/470_crop_KVTet_horizontal.png" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">TẾT SEN VÀNG, XUÂN GIÒN CHUYỆN</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>16/01/2019, 16:06</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/12_2018/thumbs/470_crop_Invitation_Vie_1_2.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">VCK HIGHLANDS COFFEE PHIN VÀNG PHA CHẾ 2018</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>14/12/2018, 12:03</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/12_2018/thumbs/470_crop__DSC6278.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">THAM GIA KHẢO SÁT "NƠI LÀM VIỆC TỐT NHẤT VIỆT NAM" CÙNG HIGHLANDS COFFEE</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>06/12/2018, 23:28</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/11_2018/thumbs/470_crop_Thumbnail.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">HIGHLANDS COFFEE: TỰ HÀO SINH RA TỪ ĐẤT VIỆT, 1999</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>19/11/2018, 12:26</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/08_2018/thumbs/470_crop_39616891_1927859690628199_1905017522776702976_n_1_2.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">CUỘC THI “CHIA SẺ KHOẢNH KHẮC TẬN HƯỞNG FREEZE TRÀ XANH”</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>22/08/2018, 16:15</p></div>
            </div>
            <div className="main-news">
              <a className="anh" href="/chi-tiet-tin-tuc"><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/07_2018/thumbs/470_crop_Highlands-Profile-Picture.jpg" alt="news" /></a>
              <div className="cap"><a href="/chi-tiet-tin-tuc">BIẾT TẬN HƯỞNG, UỐNG FREEZE TRÀ XANH!</a></div>
              <div className="date"><i className="fa fa-calendar-o" aria-hidden="true" /><p>24/07/2018, 15:24</p></div>
            </div>
          </div>

          <button onClick={this.myFunction} className="btn btn-outline-danger btn-lg">xem thêm</button>
        </div>
      </div>
    );
  }
}

export default sukien;