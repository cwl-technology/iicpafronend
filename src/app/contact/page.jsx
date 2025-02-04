import React from 'react'

const Page = () => {
    return (
        <>
            <section className="page-header">
                <div className="page-header__bg" style={{backgroundImage: "url(/assets/images/shapes/page-header-bg-shape.png)"}}>
                </div>
                <div className="page-header__shape-4">
                    <img src="/assets/images/shapes/page-header-shape-4.png" alt="" />
                </div>
                <div className="page-header__shape-5">
                    <img src="/assets/images/shapes/page-header-shape-5.png" alt="" />
                </div>
                <div className="page-header__social">
                    <a href="#">Facebook</a>
                    <span>//</span>
                    <a href="#">Instagram</a>
                    <span>//</span>
                    <a href="#">LinkedIn</a>
                    <span>//</span>
                    <a href="#">Twitter</a>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <div className="page-header__img">
                            <img src="/assets/images/resources/page-header-img-1.png" alt="" />
                            <div className="page-header__shape-1">
                                <img src="/assets/images/shapes/page-header-shape-1.png" alt="" />
                            </div>
                            <div className="page-header__shape-2">
                                <img src="/assets/images/shapes/page-header-shape-2.png" alt="" />
                            </div>
                            <div className="page-header__shape-3">
                                <img src="/assets/images/shapes/page-header-shape-3.png" alt="" />
                            </div>
                        </div>
                        <h2>Contact Us</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><span>//</span></li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page