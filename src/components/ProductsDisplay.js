import React, {memo} from 'react'

function ProductsDisplay({onIncrease}) {
    console.log('re-render')
    return (
        
        <div class="small-main">
            <h2 class="title">Products Display</h2>
            <div class="row">
                <div class="col-4">
                    <img src={require("../assets/images/product-one.png")} alt="" />
                    <h4>Red Polo Collar T-Shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <button onClick={onIncrease}>Buy Now</button>
                </div>
                <div class="col-4">
                    <img src={require("../assets/images/product-2.jpg")} alt="" />
                    <h4>Black HRX Track Sneakers</h4>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <button onClick={onIncrease}>Buy Now</button>
                </div>
                <div class="col-4">
                    <img src={require("../assets/images/product-3.jpg")} alt="" />
                    <h4>Grey Sweatpants</h4>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <button onClick={onIncrease}>Buy Now</button>
                </div>
                <div class="col-4">
                    <img src={require("../assets/images/product-four.png")} alt="" />
                    <h4>Blue NBA Trainers</h4>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <button onClick={onIncrease} >Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default memo(ProductsDisplay)
