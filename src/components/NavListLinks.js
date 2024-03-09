import { Button } from "@mui/material";
import "./NavListLinks.css";

const NavListLinks = () => {
  return (
    <section className="nav-list-links">
      <img
        className="social-media-logos"
        alt=""
        src="/social-media-logos.svg"
      />
      <div className="divider-line">
        <div className="divider-line-child" />
        <img
          className="divider-line-item"
          loading="eager"
          alt=""
          src="/group-39466.svg"
        />
        <div className="contact-sec-main">
          <div className="wrapper-detail">
            <img className="detail-icon" alt="" src="/detail.svg" />
          </div>
          <div className="email-location-message">
            <div className="twitter-icon">
              <h1 className="switch-to-solar-container">
                <span>
                  <p className="blank-line">&nbsp;</p>
                  <p className="switch-to-solar">
                    Switch to solar and embrace a brighter future.
                  </p>
                </span>
              </h1>
              <div className="empower-lives-with-container">
                <span className="empower-lives-with-container1">
                  <p className="empower-lives-with">
                    Empower Lives with Solar energy.
                  </p>
                  <p className="illuminate-the-darkness">
                    Illuminate the Darkness.
                  </p>
                  <p className="one-panel-at">One Panel at a Time</p>
                </span>
              </div>
            </div>
            <div className="control-of-your">100% control of your energy.</div>
          </div>
          <div className="about-link-master">
            <Button
              className="button-rent"
              disableElevation={true}
              color="primary"
              size="medium"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#fff",
                borderRadius: "8px",
                "&:hover": { background: "#fff" },
                height: 44,
              }}
            >
              Go solar Now
            </Button>
            <button className="frame-content">
              <div className="learn-more">Learn More</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavListLinks;
