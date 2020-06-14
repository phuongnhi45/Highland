import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Caphe extends Component {
  render() {
    return (
      <div className="roww">
        <div className="tra">
          <div className="cate">
            <h1 className="title">cà phê phin</h1>
            <div className="vang">
              <div className="col-8">
                <Link to="/chi-tiet-tra">
                  <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD-inside.jpg" alt="Trà"/>
                </Link>
                <p>Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và 'Phin' chính là linh hồn, là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. Cà phê rang xay được chiết xuất chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại có tên là 'Phin', cũng giống như thể hiện sự sâu sắc trong từng suy nghĩ và chân thành trong những mối quan hệ hiện hữu. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá, có hoặc không có sữa đặc. Highlands Coffee tự hào phục vụ cà phê Việt theo cách truyền thống của người Việt.</p>
                <Link to="/chi-tiet-tra" className="hang">xem sản phẩm</Link>
              </div>

              <div className="col-4">
                <div className="item">
                  <div className="anh">
                    <Link to="/chi-tiet-tra">
                      <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png" alt="Trà Sen Vàng"/>
                    </Link>
                  </div>
                  <div className="caption">
                    <Link to="/chi-tiet-tra"><h4>phin sữa đá</h4></Link>
                    <span>Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay,</span>
                  </div>
                </div>

                <div className="item">
                  <div className="anh">
                    <Link to="/chi-tiet-tra">
                      <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CFD.png" alt="Trà Thạch Đào"/>
                    </Link>
                  </div>
                  <div className="caption">
                    <Link to="/chi-tiet-tra"><h4>phin đen đá</h4></Link>
                    <span>Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn</span>
                  </div>
                </div>
              </div>
            
            </div> 
          </div>
        </div>
        
        <div className="roww">
          <div className="col-md-11">
            {/* Controls */}
            <div className="controls pull-right hidden-xs">
              <a className="left fa fa-chevron-left btn btn-primary" href="#carousel-example-generic" data-slide="prev" /><a className="right fa fa-chevron-right btn btn-primary" href="#carousel-example-generic" data-slide="next" />
            </div>
          </div>
        </div>
        
        <div id="carousel-example-generic" className="carousel slide hidden-xs" data-ride="carousel" style={{paddingLeft: '30px', paddingTop: '10px', marginBottom:'30px'}}>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <div className="roww">
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png" className="img-responsive" alt="a" />
                    </div>
                    <div className="info" style={{paddingLeft: '12%', fontSize: '1.5em'}}>
                      Phin Đen Nóng
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png" className="img-responsive" alt="a" />
                    </div>
                    <div className="info" style={{paddingLeft: '15%', fontSize: '1.5em'}}>
                      Phin Sữa Đá
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_GTF.png" className="img-responsive" alt="a" />
                    </div>
                    <div className="info" style={{paddingLeft: '15%', fontSize: '1.5em'}}>
                    Freeze Trà Xanh
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="roww">
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_BMTHITNUONG.png" className="img-responsive" alt="a" />
                    </div>
                    <div className="info" style={{paddingLeft: '10%', fontSize: '1.5em'}}>
                    Bánh Mì Thịt Nướng
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_SOCOLAHL.png" className="img-responsive" alt="a" />
                    </div>
                    <div className="info" style={{paddingLeft: '10%', fontSize: '1.5em'}}>
                      Sô-Cô-La Highlands
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRATHANHDAO.png" className="img-responsive" alt="a" />
                    </div>
                    <div className="info" style={{paddingLeft: '16%', fontSize: '1.5em'}}>
                      Trà Thanh Đào
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Caphe;