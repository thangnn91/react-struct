import React from 'react';
import Nav from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import SlideLeft from '../../components/Common/SlideLeft';
export default (props) => {

    console.log(props);

    return (
        <>
            <div className="main-container">
                <Nav />
                <div id="main-content">
                    {props.children}
                </div>
                <Footer />
            </div>
            <SlideLeft />
        </>
    )
}

