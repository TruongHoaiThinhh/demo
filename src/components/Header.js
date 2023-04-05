import React, { useState } from 'react'
import Button from './Button';



function Header({total}) {
    const [click, setClick] = useState(false)
    const [result, setresult] = useState(0);
    return (
        <div>
            <div class="header">
                <div class="main">

                    <div class="navbar">
                        <div class="logo">
                            <img src={require("../assets/images/logo-one.png")} alt="" />
                        </div>
                        <div className={click ? 'show' : 'hidden'}>
                            <nav>
                                <ul id="MenuItems">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Products</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Account</a></li>
                                    <li><img className="cart" src={require("../assets/images/cart.png")} alt="" />{total} - {result}</li>
                                </ul>
                            </nav>
                        </div>


                        <div className="menu-icon" onClick={() => { setClick(!click) }}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-2">
                            <h1>Give Your Exercise<br />A New Mode!</h1>
                            <p>Your goal is to be better than yesterday. You are your greater competitone.
                                <br />All you need is to know what your goal is and be consistent everyday in achieving it!
                            </p>
                            <Button></Button>
                        </div>

                        <div class="col-2">
                            <img src={require("../assets/images/all-sports-banner.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
