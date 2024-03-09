import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./FooterNavList.css";

const FooterNavList = () => {
  return (
    <section className="footer-nav-list1">
      <div className="contact">
        <img className="contact-child" alt="" src="/group-39464@2x.png" />
        <div className="contact-us-page">
          <div className="contact-us-page-child" />
          <div className="thank-you-frame">
            <h1 className="contact-us1">Contact Us</h1>
            <div className="send-button">
              <div className="thank-you-for">
                Thank you for your interest in Dan Solar. We look forward to
                helping you embrace the power of solar energy and providing you
                with outstanding service.
              </div>
            </div>
            <div className="contact-info">
              <div className="email-input">
                <div className="message-sender-node">
                  <div className="example-email-address">
                    <img
                      className="circummobile-3-icon"
                      loading="eager"
                      alt=""
                      src="/circummobile3.svg"
                    />
                    <b className="send-button-node">0987654321</b>
                  </div>
                  <div className="nav-list-link-master">
                    <img
                      className="mdi-lightemail-icon"
                      loading="eager"
                      alt=""
                      src="/mdilightemail.svg"
                    />
                    <h3 className="wwwdansolarcom">www.DanSolar.com</h3>
                  </div>
                </div>
                <div className="message-sender-node1">
                  <div className="carbonphone-parent">
                    <img
                      className="carbonphone-icon"
                      loading="eager"
                      alt=""
                      src="/carbonphone.svg"
                    />
                    <b className="b1">+1234567890</b>
                  </div>
                  <div className="fluentfax-20-regular-parent">
                    <img
                      className="fluentfax-20-regular-icon"
                      loading="eager"
                      alt=""
                      src="/fluentfax20regular.svg"
                    />
                    <b className="b2">12345</b>
                  </div>
                </div>
              </div>
              <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4751.102378913323!2d38.8294804!3d9.0236454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b4d4edea511%3A0x64d206dc3a577468!2sDan%20Energy%20Research%20and%20Development%20PLC!5e1!3m2!1sen!2set!4v1708686168254!5m2!1sen!2set"
                width="508"
                height="230"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Responsive Google Map"
              ></iframe>
            </div>
      
            </div>
          </div>
          <div className="contact-form-footer">
            <div className="contact-container">
              <div className="send-us-a-container">
                <span>
                  <p className="send-us-a">Send us a message,</p>
                  <p className="we-will-reply">
                    we will reply as soon as we can.
                  </p>
                </span>
              </div>
              <div className="group-frame">
                <TextField
                  className="thank-you-message"
                  placeholder="Miki Maraki"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#0f7193" },
                    "& .MuiInputBase-root": {
                      height: "46px",
                      borderRadius: "5px",
                    },
                    "& .MuiInputBase-input": { color: "rgba(1, 90, 120, 0.6)" },
                  }}
                />
              </div>
              <TextField
                className="contact-icon-placeholder"
                placeholder="example@gmail.com"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#0f7193" },
                  "& .MuiInputBase-root": {
                    height: "46px",
                    borderRadius: "5px",
                  },
                  "& .MuiInputBase-input": { color: "rgba(1, 90, 120, 0.6)" },
                  width: "271px",
                }}
              />
            </div>
            <div className="frame-content1">
              <textarea
                className="link-master-nav-list"
                placeholder="SAY AS YOU....."
                rows={12}
                cols={14}
              />
            </div>
            <div className="nav-list-component">
              <Button
                className="social-media-icon-group"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20",
                  background: "#0f7193",
                  borderRadius: "5px",
                  "&:hover": { background: "#0f7193" },
                  height: 46,
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterNavList;
