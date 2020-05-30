import React, { Component } from 'react';

class gioithieu extends Component {
  render() {
    return (
      <div className="about">
        <div className="khoinguon">
          <div className="capkhoi">
            <a href="/khoi-nguon">khởi nguồn</a>
            <p><strong>Thương hiệu bắt nguồn từ cà phê Việt Nam</strong></p>
            <p>Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam. Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái và lịch sự với mức giá hợp lý. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.</p>
            <div className="nguon"><a href="/khoi-nguon">xem chi tiết</a></div>
          </div>
          <div className="anhkhoi">
            <img width="720px" height="360px" src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-ORIGIN.png" alt="khoi" />
            <div className="background1" />
          </div>
        </div>

        <div className="dichvu">
          <div className="anhdich">
            <img width="720px" height="380px" src="https://www.highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg" alt="khoi" />
            <div className="background2" />
          </div>
          <div className="capdich">
            <a href="/dich-vu-khach-hang">dịch vụ khách hàng</a>
            <p><strong>Chào mừng bạn đến với Highlands Coffee®</strong></p>
            <p>Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến Highlands Coffee®. Hãy chia sẻ với chúng tôi để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt vời hơn thế.</p>
            <a href="/dich-vu-khach-hang"><div className="hang">xem chi tiết</div></a>
          </div>
        </div>
        
        <div className="job">
          <div className="anhnghe">
            <img width="720px" height="360px" src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg" alt="" />
            <div className="background3" />
          </div>
          <div className="capnghe">
            <a href="/nghe-nghiep">nghề nghiệp</a>
            <p><strong>Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®</strong></p>
            <p>Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu, Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ chuyên nghiệp của gia đình Highlands Coffee®.</p>
            <a href="/nghe-nghiep"><div className="nghiep">xem chi tiết</div></a>
          </div>
        </div>
      </div>
    );
  }
}

export default gioithieu;