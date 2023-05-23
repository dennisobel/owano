import React, { useState } from "react";
import { Link } from "react-router-dom";
import Attorneys from "../../api/attorneys";

const Attorney = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isActive, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAttorneys, setFilteredAttorneys] = useState([]);

  const toggleClass = (Id) => {
    setActive(Id === isActive ? null : Id);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = Attorneys.filter((attorney) => 
      {
        const nameArray = attorney.name.split(' ');
        const firstName = nameArray[0];
        const lastName = nameArray[nameArray.length - 1];
        const fullName = `${firstName} ${lastName}`.toLowerCase()
        
        // return fullName === query.toLowerCase();
        return firstName.toLowerCase() === query.toLowerCase() || lastName.toLowerCase() === query.toLowerCase();
        
      }
    );
    setFilteredAttorneys(filtered);
  };

  const attorneys = searchQuery ? filteredAttorneys : [];

  return (
    <section className="wpo-team-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="wpo-section-title">
              <h2>Meet Our Most Talented & Qualified Attorneys</h2>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="wpo-section-title">
              <p>
                We really care about our people and have the 'Investor in
                People' T-Shirt to prove it. Well, it's a plaque on the wall
                really, but you know what we mean.
              </p>
            </div>
          </div>
        </div>

        <div className="wpo-team-wrap">
          <div className="row">
            <div className="col-lg-12">
              <div className="wpo-team-search">
                <input
                  type="text"
                  placeholder="Search attorney"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
          <div className="row">
            {attorneys.length > 0 ? (
            attorneys.map((attorney, aitem) => (
              <div className="col col-lg-3 col-md-6 col-12" key={aitem}>
                <div className="wpo-team-item">
                  <div className="wpo-team-img">
                    <img src={attorney.AtImg} alt="" />
                    <div
                      className={`social ${
                        isActive === attorney.Id ? "active" : ""
                      }`}
                    >
                      <ul>
                        <li
                          className="switch"
                          onClick={() => toggleClass(attorney.Id)}
                        >
                          <i className="ti-plus"></i>
                        </li>
                        <li className="on">
                          <Link
                            to={{ pathname: attorney.social }}
                            target="_blank"
                          >
                            <i className="ti-linkedin"></i>
                          </Link>
                        </li>
                        {/* <li className="on"><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                          <li className="on"><Link to="/"><i className="ti-instagram"></i></Link></li> */}
                      </ul>
                    </div>
                  </div>
                  <div className="wpo-team-text">
                    <h2>
                      <Link
                        onClick={ClickHandler}
                        to={`/attorneys-single/${attorney.Id}`}
                      >
                        {attorney.name}
                      </Link>
                    </h2>
                    <span>{attorney.title}</span>
                  </div>
                </div>
              </div>
            ))):(
                <></>
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attorney;
