import React from "react";
import "./styles.css";

function AboutUs() {
  return (
    <div className="container text-white px-60 mt-20 h-screen">
      <section>
        <h1 className="font-bold text-3xl">About Us</h1>

        <p className="font-semibold text-2xl my-10 ml-20">
          We are a blockchain-based payment system that is free to access and
          easy to use. Our platform is designed to improve transaction accuracy
          and reliability, ensuring that every payment is processed quickly and
          securely.
        </p>
        <p className="font-semibold text-2xl my-10 ml-20">
          Our blockchain technology allows us to offer a transparent and
          tamper-proof record of every transaction. This means that you can
          trust us to handle your payments with the utmost security and
          integrity.
        </p>
        <p className="font-semibold text-2xl my-10 ml-20">
          Our team is made up of experienced blockchain experts who are
          dedicated to providing you with the best possible payment experience.
          We are always working to improve our platform and add new features
          that make it even easier to use.
        </p>
        <p className="font-semibold text-2xl my-10 ml-20">
          So whether you're a small business owner or a consumer, you can trust
          us to handle your payments with the highest level of accuracy,
          reliability, and security.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
