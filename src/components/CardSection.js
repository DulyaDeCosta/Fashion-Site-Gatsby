import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/CardSection.scss'

const CardSection = () => {
  return (
    <div className="container card-section-container">
      <div className="card bg-white border-0">
        <div className="card-title text-center my-3 font-satisfy font-size-lg font-italic">We make your dream dress a reality.</div>
        <div className="row">
          {/* Wedding Frocks */}
          <div className="col-sm-12 col-md-6 my-3">
            <div className="card border-0">
              <div className="card-title text-center text-uppercase">Wedding Frocks</div>
              <div className="card-body">
                <p className="card-text font-weight-light">Designed to brighten the most important day of your life, our wedding frocks simply adorn you.</p>
                <div className="text-center">
                  <a href="/wedding-frocks" className="btn btn-padded btn-outline-dark text-uppercase">View Collection</a>
                </div>
                <StaticImage src="../images/wf-sm.jpg" alt="Wedding Frocks" layout="fullWidth" placeholder="blurred" className="card-image" />
              </div>
            </div>
          </div>
          {/* Home Coming Frocks */}
          <div className="col-sm-12 col-md-6 my-3">
            <div className="card border-0">
              <div className="card-title text-center text-uppercase">Home Coming Frocks</div>
              <div className="card-body">
                <p className="card-text font-weight-light">Each frock tells a unique story. What would you like yours to say?</p>
                <div className="text-center">
                  <a href="/home-coming-frocks" className="btn btn-padded btn-outline-dark text-uppercase">View Collection</a>
                </div>
                <StaticImage src="../images/1.jpg" alt="Home Coming Frocks" layout="fullWidth" placeholder="blurred" className="card-image" />
              </div>
            </div>
          </div>
          {/* Going Away Frocks */}
          <div className="col-sm-12 col-md-6 my-3">
            <div className="card border-0">
              <div className="card-title text-center text-uppercase">Frocks for Going Aways</div>
              <div className="card-body">
                <p className="card-text font-weight-light">Leave your old life behind in style.</p>
                <div className="text-center">
                  <a href="/going-away-frocks" className="btn btn-padded btn-outline-dark text-uppercase">View Collection</a>
                </div>
                <StaticImage src="../images/2.jpg" alt="Going Away Frocks" layout="fullWidth" placeholder="blurred" className="card-image" />
              </div>
            </div>
          </div>
          {/* Pre-shoot Dresses */}
          <div className="col-sm-12 col-md-6 my-3">
            <div className="card border-0">
              <div className="card-title text-center text-uppercase">Pre-shoot dresses</div>
              <div className="card-body">
                <p className="card-text font-weight-light">Add colour to your photos with our pre-shoot dress collection.</p>
                <div className="text-center">
                  <a href="/pre-shoot-dresses" className="btn btn-padded btn-outline-dark text-uppercase">View Collection</a>
                </div>
                <StaticImage src="../images/ps-sm.jpg" alt="Pre-shoot dresses" layout="fullWidth" placeholder="blurred" className="card-image" />
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br>
      </div>
    </div>
  );
}

export default CardSection;
