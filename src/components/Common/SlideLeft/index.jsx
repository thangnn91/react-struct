import React from 'react';
//import '../../../resources/styles/woocommerce.css';

export default () => {

  return (
    <div>
      <div className="body-background" />
      <section className="slide-area">
        <div className="close-btn">
          <span className="close-icon ti-close" />
        </div>
        <div className="slide-container">
          <nav className="slide-nav">
            <h3 className="ct-title-1">
              Main Menu
              </h3>
            <ul className="slide-menu">
              <li className="current-menu-item">
                <a href="index-1.html">Home</a>
              </li>
              <li>
                <a href="categories.html">categories</a>
              </li>
              <li>
                <a href="blog-1.html">blog</a>
              </li>
              <li>
                <a href="about.html">about us</a>
              </li>
              <li>
                <a href="contact.html">contact us</a>
              </li>
            </ul>
          </nav>
          {/* slide-nav */}
          <nav className="slide-nav">
            <h3 className="ct-title-1">
              Discover Products
              </h3>
            <ul className="slide-menu">
              <li><a href="#">Everything</a></li>
              <li><a href="#">Popular Products</a></li>
              <li><a href="#">New Products</a></li>
              <li><a href="#">Latest Products</a></li>
            </ul>
          </nav>
          {/* slide-nav */}
          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li className="current-menu-item">
                <a href="index-1.html">Home</a>
                <ul>
                  <li><a href="index-1.html">Home Style 1</a></li>
                  <li><a href="index-2.html">Home Style 2</a></li>
                  <li><a href="index-3.html">Home Style 3</a></li>
                </ul>
              </li>
              <li>
                <a href="header-1.html">Header Styles</a>
                <ul>
                  <li><a href="header-1.html">Header Style 1</a></li>
                  <li><a href="header-2.html">Header Style 2</a></li>
                  <li><a href="header-3.html">Header Style 3</a></li>
                  <li><a href="header-4.html">Header Style 4</a></li>
                </ul>
              </li>
              <li>
                <a href="about.html">pages</a>
                <ul>
                  <li><a href="about.html">about</a></li>
                  <li><a href="service.html">service</a></li>
                  <li><a href="contact.html">contact</a></li>
                  <li><a href="faq.html">FAQs</a></li>
                  <li><a href="404.html">404 error</a></li>
                  <li><a href="coming-soon.html">coming soon</a></li>
                </ul>
              </li>
              <li>
                <a href="blog-1.html">blog</a>
                <ul>
                  <li><a href="blog-1.html">blog left sidebar</a></li>
                  <li><a href="blog-2.html">blog right sidebar</a></li>
                  <li><a href="blog-news.html">blog news</a></li>
                  <li>
                    <a href="single-1.html">single blog</a>
                    <ul>
                      <li><a href="single-1.html">single left sidebar</a></li>
                      <li><a href="single-2.html">single right sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Elements</a>
                <ul>
                  <li><a href="sc-accordion.html">accordion</a></li>
                  <li><a href="sc-alert.html">alert</a></li>
                  <li><a href="sc-button.html">buttons</a></li>
                  <li><a href="sc-client.html">clients</a></li>
                  <li><a href="sc-countdown.html">countdowns</a></li>
                  <li><a href="sc-dropcap.html">dropcaps</a></li>
                  <li><a href="sc-event.html">events</a></li>
                  <li><a href="sc-heading.html">headings</a></li>
                </ul>
              </li>
              <li>
                <a href="shop-detail-1.html">Shop</a>
                <ul>
                  <li>
                    <a href="shop-cat-1.html">categories</a>
                    <ul>
                      <li><a href="shop-cat-1.html">categories left sidebar</a></li>
                      <li><a href="shop-cat-2.html">categories right sidebar</a></li>
                      <li><a href="shop-cat-3.html">categories full width</a></li>
                    </ul>
                  </li>
                  <li><a href="cart.html">cart</a></li>
                  <li><a href="check-out.html">check out</a></li>
                  <li>
                    <a href="shop-detail-1.html">single</a>
                    <ul>
                      <li><a href="shop-detail-1.html">shop single left sidebar</a></li>
                      <li><a href="shop-detail-2.html">shop single right sidebar</a></li>
                      <li><a href="shop-detail-3.html">shop single full width</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* mmobile-nav */}
          <div className="kopa-social-links style-01">
            <ul className="clearfix">
              <li><a href="#" className="fa fa-facebook" /></li>
              <li><a href="#" className="fa fa-twitter" /></li>
              <li><a href="#" className="fa fa-instagram" /></li>
              <li><a href="#" className="fa fa-rss" /></li>
            </ul>
          </div>
          {/* social-links */}
        </div>
      </section>
    </div>
  )

}