import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from "../../images/testimonial/img-1.jpg";
import ts2 from "../../images/testimonial/img-2.jpg";
import ts3 from "../../images/testimonial/img-3.jpg";

class Testimonial extends Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    const testimonial = [
      {
        tsImg: ts1,
        Des: "”Great experience overall having Michael Owano as my Advocate. Michael understands his client, very insightful and is an expert in his field. Truly a professional and marvelous individual.”",
        Title: "Aaron A",
        Sub: "Corporate Commercial Client",
      },
      {
        tsImg: ts2,
        Des: "He worked tirelessly to make sure that the truth was told and presented it perfectly. Though we faced challenges, Mr. Owano did not falter. His thorough research provided us the pathway we needed to rise to victory. I will only recommend Owano & Associates Law as I have never been nor have I ever seen anyone treated better.",
        Title: "Kimingi J",
        Sub: "Criminal Litigation Client",
      },
      {
        tsImg: ts3,
        Des: "My experience with Owano & Associates was excellent. My Advocate, Mr. Owano, gave my case all the time and attention that was needed to be successful in court. I very much appreciate the knowledge and support I received through Owano & Associates Law Firm.",
        Title: "Milind P",
        Sub: "Divorce & Family Law Client",
      },
      {
        tsImg: ts3,
        Des: "Hands down the best law firm out there. They stuck through a very difficult divorce and child custody case with me. They look out for your best interests and have your back the entire time. Thank you again Owano & Associates for absolutely everything.",
        Title: "Lydia S",
        Sub: "Divorce & Family Law Client",
      },
    ];
    return (
      <section className="wpo-testimonials-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12">
              <div className="wpo-section-title">
                <h2>What Our Clients Say About Us</h2>
                <p>
                  Our team is comprehensive, strategic, one step ahead, and a
                  powerful opponent. When you hire our firm to manage your case,
                  you have hired a team of legal advocates who care, who will
                  keep you informed, who will fight for you, and be the voice
                  you need to represent you against the opposing party and their
                  attorneys. Our peers recommend us, our clients recommend us,
                  and we are confident that soon you will too.
                  
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="wpo-testimonial-wrap owl-carousel">
                <Slider {...settings}>
                  {testimonial.map((tesmnl, tsm) => (
                    <div className="wpo-testimonial-item" key={tsm}>
                      <p>{tesmnl.Des}</p>
                      <div className="wpo-testimonial-info">
                        {/* <div className="wpo-testimonial-info-img">
                                                    <img src={tesmnl.tsImg} alt="" />
                                                </div> */}
                        <div className="wpo-testimonial-info-text">
                          <h5>{tesmnl.Title}</h5>
                          <span>{tesmnl.Sub}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
