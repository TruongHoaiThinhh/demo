import React from 'react'

function Footer() {
    return (
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App For Android And Ios Mobile Phone</p>
                        <div class="app-logo">
                            <img src={require("../assets/images/play-store.png")} alt="" />
                            <img src={require("../assets/images/app-store.png")} alt="" />
                        </div>
                    </div>

                    <div class="footer-col-2">
                        <img src={require("../assets/images/logo-one.png")} alt="" />
                        <p>Our Purpose Is To Sustainably Make The Pleasure And Benefits Of Sports Accessible To The Many</p>
                    </div>

                    <div class="footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Become Affiliate</li>
                        </ul>
                    </div>

                    <div class="footer-col-4">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p class="copyright">Copyright 2023 - TruongHoaiThinh</p>
            </div>
        </div>
    )
}

export default Footer
