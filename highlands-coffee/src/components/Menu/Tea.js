import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tea extends Component {
  render() {
    return (
      <div className="tra">
        <div className="cate">
          <h1 className="title">trà</h1>
          <div className="vang">
            <div className="col-8">
              <Link to="/chi-tiet-tra">
                <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA-inside.jpg" alt="Trà"/>
              </Link>
              <p>Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.</p>
              <Link to="/chi-tiet-tra" className="hang">xem sản phẩm</Link>
            </div>

            <div className="col-4">
              <div className="item">
                <div className="anh">
                  <Link to="/chi-tiet-tra">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRASENVANG.png" alt="Trà Sen Vàng"/>
                  </Link>
                </div>
                <div className="caption">
                  <Link to="/chi-tiet-tra"><h4>trà sen vàng</h4></Link>
                  <span>Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long</span>
                </div>
              </div>

              <div className="item">
                <div className="anh">
                  <Link to="/chi-tiet-tra">
                    <img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_TRATHACHDAO.png" alt="Trà Thạch Đào"/>
                  </Link>
                </div>
                <div className="caption">
                  <Link to="/chi-tiet-tra"><h4>trà thạch đào</h4></Link>
                  <span>Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào</span>
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

export default Tea;