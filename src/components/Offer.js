import React from 'react'

function Offer() {
  return (
    <div class="offer">
    <div class="small-main">
        <div class="row">
            <div class="col-2">
                <img  src={require("../assets/images/exclusive Product.png" )} class="offer-img" alt=""/>
            </div>

            <div class="col-2">
                <p>Only Available In This Store</p>
                <h1>Xiaomi Mi Smart Band 4</h1>
                <small>
                    AMOLED color touch screen with better brightness and 40% more viewable screen.
                    View your calls, messages and notifications
                    Track physical activity (including swimming).
                    Water resistant up to 50 m.
                    Improvement in the measurement of metrics.
                </small>

                <div class="button">
                    <a href="#" class="btn">Buy Now &#10132</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Offer
