import React from 'react'

function Brand() {
  return (
    <div class="brands">
        <div class="small-main">
            <div class="row">
                <div class="col-5">
                    <img src={require("../assets/images/logo-godrej.png")} alt=""/>
                </div>

                <div class="col-5">
                    <img src={require("../assets/images/logo-oppo.png")} alt=""/>
                </div>

                <div class="col-5">
                    <img src={require("../assets/images/logo-coca-cola.png")} alt=""/>
                </div>

                <div class="col-5">
                    <img src={require("../assets/images/logo-paypal.png")} alt=""/>
                </div>

                <div class="col-5">
                    <img src={require("../assets/images/logo-philips.png")} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brand
