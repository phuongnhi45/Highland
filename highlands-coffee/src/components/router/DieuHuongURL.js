import React, { Component } from 'react';
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Menu from '../Menu/Menu';
import Nav from '../Nav/Nav';
import Tintuc from '../News/Tintuc';
import '../Menu/thucdon.css';
import '../Nav/nav.css';
import '../System/system.css';
import '../News/tintuc.css';
import '../Community/trachnhiem.css';
import '../about/gioithieu.css';
import '../Contact/order.css';
import system from '../System/system';
import trachnhiem from '../Community/trachnhiem';
import giatri from '../Community/giatri';
import congdong from '../Community/congdong';
import tinkhuyenmai from '../News/tinkhuyenmai';
import sukien from '../News/sukien';
import gioithieu from '../about/gioithieu';
import khoinguon from '../about/khoinguon';
import dichvu from '../about/dichvu';
import job from '../about/job';
import order from '../Contact/order';

class DieuHuongURL extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Nav}/>
        <Route exact path="/san-pham" component={Menu}/>
        <Route exact path="/he-thong-cua-hang" component={system}/>
        <Route exact path="/tin-tuc" component={Tintuc}/>
        <Route exact path="/cong-dong" component={congdong}/>
        <Route exact path="/su-kien" component={sukien}/>
        <Route exact path="/about" component={gioithieu}/>
        <Route exact path="/khoi-nguon" component={khoinguon}/>
        <Route exact path="/dich-vu-khach-hang" component={dichvu}/>
        <Route exact path="/nghe-nghiep" component={job}/>
        <Route exact path="/lien-he" component={order}/>
        <Route exact path="/tin-khuyen-mai" component={tinkhuyenmai}/>
        <Route exact path="/gia-tri-van-hoa-viet" component={giatri}/>
        <Route exact path="/trach-nhiem-cong-dong" component={trachnhiem}/>
      </Router>
    );
  }
}

export default DieuHuongURL;