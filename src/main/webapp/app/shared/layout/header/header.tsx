import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
// tslint:disable-next-line
const close = require('../../../../content/images/close.png');
// tslint:disable-next-line
const lock = require('../../../../content/images/lock.png');
// tslint:disable-next-line
const usFlag = require('../../../../content/images/us_flag_small.png');
// tslint:disable-next-line
const iconDot = require('../../../../content/images/icon-dot-gov.svg');
// tslint:disable-next-line
const iconHttps = require('../../../../content/images/icon-https.svg');
// tslint:disable-next-line
const sbaLogo = require('../../../../content/images/sba-logo.svg');

const Header = () => {
  return (
    <div style={{ background: '#ffffff' }}>
      <section className="usa-banner" aria-label="Official government website">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img className="usa-banner__header-flag" src={usFlag} alt="U.S. flag" />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text">An official website of the United States Government</p>
                <p className="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>
              </div>
              <button className="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner">
                <span className="usa-banner__button-text">Here’s how you know</span>
              </button>
            </div>
          </header>
          <div className="usa-banner__content usa-accordion__content" id="gov-banner" hidden>
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img className="usa-banner__icon usa-media-block__img" src={iconDot} alt="Dot gov" />
                <div className="usa-media-block__body">
                  <p>
                    <strong>
                      Official websites use .gov
                            </strong>
                    <br />
                        A <strong>.gov</strong> website belongs to an official government organization in the United States.

                        </p>
                </div>
              </div>
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img className="usa-banner__icon usa-media-block__img" src={iconHttps} alt="Https" />
                <div className="usa-media-block__body">
                  <p>
                    <strong>
                      Secure .gov websites use HTTPS
                            </strong>
                    <br />
                        A <strong>lock</strong> (
                            <span />
                    <img src={lock} alt="A locked padlock" />
                            ) or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.

                        </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="usa-nav-container" style={{ background: '#ffffff' }}>
        <div className="usa-nav-container" >
          <div className="usa-navbar desktop:maxw-card height-auto flex-align-right">
            <div className="logo">
              <Link to="/">
                <img src={sbaLogo} alt="SBA logo" />
              </Link>
              <span className="usa-sr-only">Home</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
