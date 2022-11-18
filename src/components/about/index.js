import React from "react";
import abimg from "../../images/michael.JPG";
import sign from "../../images/signature.jpg";

const About = (props) => {
  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="wpo-about-content">
                <div className="wpo-section-title">
                  <h2>
                    We are here to protect your rights and serve your needs with experience
                  </h2>
                </div>
                <div className="wpo-about-content-inner">

                  <p>
                    When we say “protecting your rights serving your needs”, we
                    mean it. Through years of experience and sectoral expertise,
                    we’ve become one of the few industry leaders in legal
                    solutions provider, which are not only the back bone of our
                    business but also the trigger of our growth into new
                    challenges. Our main differentiators are based on constant
                    innovation and strategic expansion. Owing to such mindset,
                    we have confidently marched towards new market and service
                    expansions; successfully proved ourselves in various areas
                    of law;{" "}
                  </p>
                  <p>
                    Please feel free to explore our website, to learn more about
                    who we are and what we do. Get to know us and our services,
                    and let us know what we can do for you.
                  </p>
                  <p>We are looking forward to working with you.</p>
                  <div className="signeture">
                    <h4>Michael Owano</h4>
                    <p>Managing Partner</p>
                    <span><img src={sign} alt=""/></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
