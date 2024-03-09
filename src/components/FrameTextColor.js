import EmptyContentBox from "./EmptyContentBox";
import "./FrameTextColor.css";

const FrameTextColor = () => {
  return (
    <section className="frame-text-color">
      <div className="our-dream-team">
        <img
          className="send-feedback-icon"
          loading="eager"
          alt=""
          src="/rectangle-23792@2x.png"
        />
        <div className="john-doe-placeholder1">
          <div className="exampleemailexamplecom">
            <div className="empty-content-box1">
              <div className="info-box">
                <img className="info-box-child" alt="" src="/group-34@2x.png" />
                <img
                  className="mdiprofessional-hexagon-icon"
                  loading="eager"
                  alt=""
                  src="/mdiprofessionalhexagon.svg"
                />
              </div>
              <div className="info-box1">
                <h3 className="expertise-and-experience">
                  Expertise and Experience
                </h3>
                <div className="with-years-of">
                  With years of experience in the solar industry, we have
                  developed deep expertise in designing and installing solar
                  panel systems.
                </div>
              </div>
            </div>
            <EmptyContentBox
              iondiamond="/iondiamond.svg"
              qualityAndReliability="Quality and Reliability"
              weAreCommittedToDeliverin="We are committed to delivering top-notch quality in every aspect of our work."
            />
            <EmptyContentBox
              iondiamond="/mdienvironment.svg"
              qualityAndReliability="Commitment to the Environment"
              weAreCommittedToDeliverin="We are passionate about creating a sustainable future. By choosing us, you are actively contributing to reducing carbon emissions and promoting clean energy."
              propHeight="unset"
              propDisplay="inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameTextColor;
