import React from 'react'

function Categories() {
  return (
    <div class="small-main">
        <div class="categories">
            <div class="row">
                <div class="col-3">
                    <img src={require("../assets/images/category-one.png")} alt=""/>
                </div>
                <div class="col-3">
                    <img src={require("../assets/images/category-2.jpg")} alt=""/>
                </div>
                <div class="col-3">
                    <img src={require("../assets/images/category4.jpg")} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories
