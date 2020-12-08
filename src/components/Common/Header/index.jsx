import React from 'react';
import { Link } from 'react-router-dom';
//import '../../../resources/styles/woocommerce.css';

export default () => {
  console.log('%c RENDER Nav', 'color: orange; font-size: 20px')

  return (
    <header className="kopa-page-header-1">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-6 col-xs-6 text-left">
            <div className="hamburger-menu">
              <span className="ti-menu" />
            </div>
            <div className="kopa-logo">
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-8 col-sm-0 col-xs-0">
            <nav className="main-nav">
              <ul className="main-menu sf-menu">
                <li className="">
                <Link to='/'>Trang chủ</Link>
                </li>
                <li className="">
                  <a href="#">Dịch vụ</a>
                  <ul>
                    <li className=""><Link to='/about'>Thiết kế web</Link></li>
                    <li><a href="header-2.html">Thiết kế banner</a></li>
                    <li><a href="header-3.html">Fanpage facebook</a></li>
                    <li><a href="header-4.html">Nhà thông minh</a></li>
                    <li><a href="header-4.html">Tích hợp thanh toán</a></li>
                  </ul>
                </li>
                <li className="">
                  <a href="">Về chúng tôi</a>
                </li>
                <li className="">
                  <a href="">Liên hệ</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-6 text-right">
            <div className="kopa-cart kopa-dropdown">
              <span className="ti-shopping-cart kopa-dropdown-btn" />
              <div className="kopa-dropdown-content">
                <div className="cart-product-list">
                  <ul className="clearfix">
                    <li className="product-item rm-item">
                      <article>
                        <div className="entry-thumb">
                          <a href="#"><img src="images/header/1.jpg" alt="" /></a> </div>
                        <div className="entry-content">
                          <h4 className="entry-title"><a href="#">Put a Title Here</a></h4>
                          <span className="product-num">1</span>
                          <span className="product-price">$16</span>
                        </div>
                        <span className="cart-remove rm-btn fa fa-times-circle" />
                      </article>
                    </li>
                    <li className="product-item rm-item">
                      <article>
                        <div className="entry-thumb">
                          <a href="#"><img src="images/header/2.jpg" alt="" /></a> </div>
                        <div className="entry-content">
                          <h4 className="entry-title"><a href="#">Put a Title Here</a></h4>
                          <span className="product-num">1</span>
                          <span className="product-price">$16</span>
                        </div>
                        <span className="cart-remove rm-btn fa fa-times-circle" />
                      </article>
                    </li>
                    <li className="product-item rm-item">
                      <article>
                        <div className="entry-thumb">
                          <a href="#"><img src="images/header/3.jpg" alt="" /></a> </div>
                        <div className="entry-content">
                          <h4 className="entry-title"><a href="#">Put a Title Here</a></h4>
                          <span className="product-num">1</span>
                          <span className="product-price">$16</span>
                        </div>
                        <span className="cart-remove rm-btn fa fa-times-circle" />
                      </article>
                    </li>
                  </ul>
                </div>
                <div className="cart-product-bottom">
                  <div className="kopa-pull-left">
                    <h6>$68.00</h6>
                    <span>04 items</span>
                  </div>
                  <div className="kopa-pull-right">
                    <a className="kopa-btn-3" href="#">Check out</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="short-nav kopa-dropdown">
              <div className="kopa-btn-1 kopa-dropdown-btn">
                <span />
              </div>
              <div className="kopa-dropdown-content">
                <ul className="clearfix">
                  <li><a href="#"><i className="ti-user" />My Account</a></li>
                  <li><a href="#"><i className="ti-heart" />Favorite</a></li>
                  <li><a href="#"><i className="ti-check" />Checkout</a></li>
                  <li><a href="#"><i className="ti-info-alt" />fAQs</a></li>
                  <li><a href="#"><i className="ti-share-alt" />Logout</a></li>
                </ul>
              </div>
            </div>
            <div className="kopa-search-box-1 kopa-dropdown">
              <span className="ti-search kopa-dropdown-btn" />
              <form action="#" className="search-form-1 kopa-dropdown-content" method="get">
                {/* <input className="search-text" type="text" onBlur="if (this.value == '')
                                    this.value = this.defaultValue;" onFocus="if (this.value == this.defaultValue)
                                    this.value = '';" defaultValue="Search..." placeholder="Search..." name="s" /> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )

}