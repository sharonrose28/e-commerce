import React from "react";
import Products from "./Products";

const Home = () => {
    return (
            <div className="hero">
            <div className="card text-bg-dark text-black">
            <img src="images/frontpage2.jpg" className="card-img" alt="Background" height="550px"/>
                    <div className="card-img-overlay ">
                        <div className="cotainer ">
                        <h5 className="card-title display-3  fw-bolder mb-0 d-flex justify-content-center ">NEW ARRIVALS</h5>
                        <p className="card-text lead fs-2 d-flex justify-content-center"> Explore the Fashion</p>
                        </div>
                    </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home;