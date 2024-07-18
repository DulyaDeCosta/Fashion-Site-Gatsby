import React from 'react';
import '../styles/styles.scss';

const CardSection = () => {
  return (
    <div className="container my-5">
      <div className="text-center my-4">
        <h2>We make your dream dress a reality.</h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 my-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Wedding Frocks</h5>
              <p className="card-text">Designed to brighten the most important day of your life, our wedding frocks simply adorn you.</p>
              <a href="/wedding-frocks" className="btn btn-outline-dark">View Collection</a>
            </div>
            <picture>
              <source srcSet="/images/wf-lg.jpg" media="(min-width: 1200px)" />
              <source srcSet="/images/wf-md.jpg" media="(min-width: 992px)" />
              <img src="/images/wf-sm.jpg" alt="Wedding Frocks" className="card-img-bottom" />
            </picture>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 my-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Wedding Frocks</h5>
              <p className="card-text">Designed to brighten the most important day of your life, our wedding frocks simply adorn you.</p>
              <a href="/wedding-frocks" className="btn btn-outline-dark">View Collection</a>
            </div>
            <picture>
              <source srcSet="/images/wf-lg.jpg" media="(min-width: 1200px)" />
              <source srcSet="/images/wf-md.jpg" media="(min-width: 992px)" />
              <img src="/images/wf-sm.jpg" alt="Wedding Frocks" className="card-img-bottom" />
            </picture>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 my-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Wedding Frocks</h5>
              <p className="card-text">Designed to brighten the most important day of your life, our wedding frocks simply adorn you.</p>
              <a href="/wedding-frocks" className="btn btn-outline-dark">View Collection</a>
            </div>
            <picture>
              <source srcSet="/images/wf-lg.jpg" media="(min-width: 1200px)" />
              <source srcSet="/images/wf-md.jpg" media="(min-width: 992px)" />
              <img src="/images/wf-sm.jpg" alt="Wedding Frocks" className="card-img-bottom" />
            </picture>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 my-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Wedding Frocks</h5>
              <p className="card-text">Designed to brighten the most important day of your life, our wedding frocks simply adorn you.</p>
              <a href="/wedding-frocks" className="btn btn-outline-dark">View Collection</a>
            </div>
            <picture>
              <source srcSet="/images/wf-lg.jpg" media="(min-width: 1200px)" />
              <source srcSet="/images/wf-md.jpg" media="(min-width: 992px)" />
              <img src="/images/wf-sm.jpg" alt="Wedding Frocks" className="card-img-bottom" />
            </picture>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CardSection;
