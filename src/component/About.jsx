import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="card text-black bg-dark">
        <img
          src="images/about.jpg"
          className="card-img"
          alt="About Us"
          style={{ maxWidth: '100%', height: '600px' }}
        />
        <div className="card-img-overlay">
          <div className="container ">
            <h1 className="card-title display-3 fw-bolder text-center mt-5">
              About Us
            </h1>
            <p className="card-text lead fs-2 text-center">
              Salvatore
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <h1 className="mb-4 text-center">Our Story</h1>
        <p className="fs-5">
          Welcome to Salvatore, your go-to destination for the latest trends in
          fashion, cutting-edge gadgets, and top-notch electronics. At Salvatore,
          we believe in the seamless integration of style and technology to
          enhance your lifestyle.
        </p>
        <p className="fs-5">
          Our journey began with a passion for delivering high-quality products
          that not only keep you on trend but also make your daily life more
          convenient and enjoyable. From stylish clothing that reflects your
          personality to innovative gadgets and electronics that elevate your
          tech game, Salvatore is here to redefine your shopping experience.
        </p>
        <p className="fs-5">
          We curate a carefully selected collection of clothing, gadgets, and
          electronics from top brands, ensuring that every product meets our
          standards of quality, style, and functionality. Whether you're
          looking for the perfect outfit, the latest smartphone, or innovative
          smart home devices, Salvatore has you covered.
        </p>
      </div>
    </div>
  );
};

export default About;
