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
        
        <div id="carousel-example-generic" className="carousel slide hidden-xs" data-ride="carousel">
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <div className="roww">
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                    </div>
                    <div className="info">
                      <div className="roww">
                        <div className="price col-md-6">
                          <h5>
                            Sample Product</h5>
                          <h5 className="price-text-color">
                            $199.99</h5>
                        </div>
                        <div className="rating hidden-sm col-md-6">
                          <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                          </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                          </i><i className="fa fa-star" />
                        </div>
                      </div>
                      <div className="separator clear-left">
                        <p className="btn-add">
                          <i className="fa fa-shopping-cart" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                        <p className="btn-details">
                          <i className="fa fa-list" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                      </div>
                      <div className="clearfix">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                    </div>
                    <div className="info">
                      <div className="roww">
                        <div className="price col-md-6">
                          <h5>
                            Product Example</h5>
                          <h5 className="price-text-color">
                            $249.99</h5>
                        </div>
                        <div className="rating hidden-sm col-md-6">
                        </div>
                      </div>
                      <div className="separator clear-left">
                        <p className="btn-add">
                          <i className="fa fa-shopping-cart" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                        <p className="btn-details">
                          <i className="fa fa-list" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                      </div>
                      <div className="clearfix">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                    </div>
                    <div className="info">
                      <div className="roww">
                        <div className="price col-md-6">
                          <h5>
                            Next Sample Product</h5>
                          <h5 className="price-text-color">
                            $149.99</h5>
                        </div>
                        <div className="rating hidden-sm col-md-6">
                          <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                          </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                          </i><i className="fa fa-star" />
                        </div>
                      </div>
                      <div className="separator clear-left">
                        <p className="btn-add">
                          <i className="fa fa-shopping-cart" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                        <p className="btn-details">
                          <i className="fa fa-list" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                      </div>
                      <div className="clearfix">
                      </div>
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
                      <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                    </div>
                    <div className="info">
                      <div className="roww">
                        <div className="price col-md-6">
                          <h5>
                            Product with Variants</h5>
                          <h5 className="price-text-color">
                            $199.99</h5>
                        </div>
                        <div className="rating hidden-sm col-md-6">
                          <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                          </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                          </i><i className="fa fa-star" />
                        </div>
                      </div>
                      <div className="separator clear-left">
                        <p className="btn-add">
                          <i className="fa fa-shopping-cart" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                        <p className="btn-details">
                          <i className="fa fa-list" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                      </div>
                      <div className="clearfix">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                    </div>
                    <div className="info">
                      <div className="roww">
                        <div className="price col-md-6">
                          <h5>
                            Grouped Product</h5>
                          <h5 className="price-text-color">
                            $249.99</h5>
                        </div>
                        <div className="rating hidden-sm col-md-6">
                        </div>
                      </div>
                      <div className="separator clear-left">
                        <p className="btn-add">
                          <i className="fa fa-shopping-cart" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                        <p className="btn-details">
                          <i className="fa fa-list" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                      </div>
                      <div className="clearfix">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="col-item">
                    <div className="photo">
                      <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                    </div>
                    <div className="info">
                      <div className="roww">
                        <div className="price col-md-6">
                          <h5>
                            Product with Variants</h5>
                          <h5 className="price-text-color">
                            $149.99</h5>
                        </div>
                        <div className="rating hidden-sm col-md-6">
                          <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                          </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                          </i><i className="fa fa-star" />
                        </div>
                      </div>
                      <div className="separator clear-left">
                        <p className="btn-add">
                          <i className="fa fa-shopping-cart" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                        <p className="btn-details">
                          <i className="fa fa-list" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                      </div>
                      <div className="clearfix">
                      </div>
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