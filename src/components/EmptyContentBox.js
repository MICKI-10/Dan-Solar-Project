import { useMemo } from "react";
import "./EmptyContentBox.css";

const EmptyContentBox = ({
  iondiamond,
  qualityAndReliability,
  weAreCommittedToDeliverin,
  propHeight,
  propDisplay,
}) => {
  const weAreCommittedStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div className="empty-content-box">
      <div className="rectangle-group">
        <div className="frame-item" />
        <img className="iondiamond-icon" alt="" src={iondiamond} />
      </div>
      <div className="quality-and-reliability-parent">
        <h3 className="quality-and-reliability">{qualityAndReliability}</h3>
        <div className="we-are-committed" style={weAreCommittedStyle}>
          {weAreCommittedToDeliverin}
        </div>
      </div>
    </div>
  );
};

export default EmptyContentBox;
