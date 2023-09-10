"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone as faPhoneSolid } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const makestyle = {
  color: "black",
  fontSize: "12px",
  lineHeight: "1.33337",
  fontWeight: 600,
  letterSpacing: "-.01em",
  fontFamily:
    '"SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  marginRight: "30px",
  paddingRight: "30px",
  marginBottom: "0.8em",
  outline: "none",
};
const Footer = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  return (
    <footer
      className="border-t"
      style={{ borderWidth: "0px", backgroundColor: "#f3f3f3" }}
    >
      <div className="mx-auto py-10 ">
        <div
          className=" md:block"
        >
          <p
            className="text-left text-[13px] px-2 "
            
          >
            In the vast and ever-evolving world of real estate, where every
            property tells a unique story, seasoned professionals, with their
            extensive knowledge and unwavering commitment, embark on a journey
            with clients to navigate the intricate landscape of buying and
            selling real estate. They serve as guides through the labyrinth of
            choices and considerations, meticulously analyzing market
            conditions, property values, financing options, and the individual
            dreams and aspirations that drive each transaction. With dedication
            and expertise, these professionals transform aspirations into
            tangible reality, turning houses into homes and investments into
            legacies. In this dynamic industry, location is not just a point on
            a map but a critical factor influencing decisions, while equity
            represents the financial cornerstone on which dreams are built.
            Agents, armed with market insights, negotiate transactions that have
            the potential to redefine financial portfolios. Listings are not
            mere properties but opportunities for transformation, attracting
            both buyers and sellers seeking to shape their futures. The real
            estate markets ebb and flow can be likened to a symphony, with
            agents orchestrating transactions that harmonize dreams and
            financial goals. Buyers enter the scene with visions of their ideal
            homes, while sellers entrust agents to maximize their propertys
            value. Investment potential often takes center stage, as buyers seek
            growth and sellers aim for optimal returns. In the midst of this
            symphony, agents are the conductors, bringing together various
            elements—buyer and seller, property and value—into a harmonious
            composition. Mortgage options serve as the musical notes, each one
            playing a distinct role in the financial melody. Transactions are
            the crescendos, marking milestones in the lives of clients, who
            entrust agents with their hopes and financial aspirations. Real
            estate is more than just a transaction; its a journey filled with
            choices, opportunities, and dreams. Agents at the forefront of this
            journey are not just professionals; they are trusted partners who
            ensure that every step is marked by expertise, integrity, and a
            commitment to creating lasting impact.So pinacle is the best.
          </p>
        </div>
        <div
          className="text-center text-neutral-500 align-middle"
          style={{ paddingTop: "15px" }}
        >
          <ul
            className="flex justify-center"
            style={{ ...makestyle, listStyleType: "none", padding: 0 }}
          >
            <li style={{ ...makestyle, color: "#696970", marginRight: "20px" }}>
              Company
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  Carrers
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  About Us
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  For partners
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Terms
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Annual returns
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Privacy Policy
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Contact Us
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Unsuscribe
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Merger hearing advertisement
                </li>
              </ul>
            </li>
            <li
              style={{
                ...makestyle,
                color: "#696970",
                marginLeft: "10px",
                paddingLeft: "100px",
              }}
            >
              Partner Sites
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <a href="https://www.proptiger.com/?gclid=CjwKCAjw6eWnBhAKEiwADpnw9s-Xn2KTomyvyKBz3CxdrF2UnePdQy-ha80tuF2NIUF9MizHM3wR9xoCoHcQAvD_BwE&utm_campaign=Brand_City&utm_medium=cpc&utm_source=google">
                    Proptiger
                  </a>
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  <a href="https://www.makaan.com/?gclid=CjwKCAjw6eWnBhAKEiwADpnw9s-Xn2KTomyvyKBz3CxdrF2UnePdQy-ha80tuF2NIUF9MizHM3wR9xoCoHcQAvD_BwE&utm_campaign=Brand_City&utm_medium=cpc&utm_source=google">
                    Makkan
                  </a>
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  <a href="https://www.realestate.com.au/?gclid=CjwKCAjw6eWnBhAKEiwADpnw9s-Xn2KTomyvyKBz3CxdrF2UnePdQy-ha80tuF2NIUF9MizHM3wR9xoCoHcQAvD_BwE&utm_campaign=Brand_City&utm_medium=cpc&utm_source=google">
                    realestate.com.au
                  </a>
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  <a href="https://www.realtor.com/?gclid=CjwKCAjw6eWnBhAKEiwADpnw9s-Xn2KTomyvyKBz3CxdrF2UnePdQy-ha80tuF2NIUF9MizHM3wR9xoCoHcQAvD_BwE&utm_campaign=Brand_City&utm_medium=cpc&utm_source=google">
                    realtor.com
                  </a>
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  <a href="https://www.99.co/?gclid=CjwKCAjw6eWnBhAKEiwADpnw9s-Xn2KTomyvyKBz3CxdrF2UnePdQy-ha80tuF2NIUF9MizHM3wR9xoCoHcQAvD_BwE&utm_campaign=Brand_City&utm_medium=cpc&utm_source=google">
                    {" "}
                    99.co
                  </a>
                </li>
              </ul>
            </li>
            <li
              style={{
                ...makestyle,
                color: "#696970",
                marginRight: "20px",
                paddingLeft: "100px",
              }}
            >
              Explore
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  News
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Home Loans
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Sitemap
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  International
                </li>
              </ul>
            </li>
            <li
              style={{ ...makestyle, color: "#696970", paddingLeft: "100px" }}
            >
              Contact
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  {" "}
                  <a
                    href="https://www.instagram.com/Jnanesh ps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{
                        width: "18px",
                        height: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <a
                    href="https://www.facebook.com/your_facebook_page_here"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{
                        width: "18px",
                        height: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <a href="tel:9019008540">
                    <FontAwesomeIcon
                      icon={faPhoneSolid}
                      style={{
                        width: "18px",
                        height: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <a href="mailto:jnaneshps5@gmail.com">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{
                        fontSize: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <a
                    href="https://twitter.com/your_twitter_username_here"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{
                        width: "18px",
                        height: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div style={{ marginTop: "20px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Give us your feedback
            </h3>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>
              We value your opinion! Rate your experience with us.
            </p>
            <div>
              {[1, 2, 3, 4, 5].map((rating) => (
                <span
                  key={rating}
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                  onClick={() => {
                    setSelectedRating(rating);
                    togglePopup();
                  }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    color={rating <= selectedRating ? "gold" : "gray"}
                  />
                </span>
              ))}
            </div>
          </div>
          {isPopupVisible && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
              }}
            >
              <h4>Feedback Form</h4>
              <textarea
                rows={4}
                cols={50}
                placeholder="Enter your feedback"
              ></textarea>
              <button onClick={togglePopup}>Submit</button>
            </div>
          )}

          <div className="text-left">
            <a
              data-component="Link"
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={scrollToTop}
            >
              <span style={{ color: "black" }}>
                Back To Top
                <Image
                  width={50}
                  height={20}
                  src="/to.png"
                  alt="Arrow"
                  style={{ transform: "rotate(0deg) ", paddingLeft: "20px" }}
                />
              </span>
              <span
                style={{
                  alignItems: "center",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  display: "flex",
                  height: "32px",
                  justifyContent: "center",
                  width: "32px",
                }}
              >
                <i
                  style={{
                    height: "16px",
                    width: "16px",
                    backgroundImage: "/top.png",
                  }}
                ></i>
              </span>
            </a>
          </div>

          <div
            className="text-center text-neutral-500"
            style={{ paddingTop: "10px" }}
          >
            Copyright © 2023.All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
