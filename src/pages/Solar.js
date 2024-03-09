import NavListLinks from "../components/NavListLinks";
import ContactLinkMaster from "../components/ContactLinkMaster";
import TransformingCommunitiesOneS from "../components/TransformingCommunitiesOneS";
import Dashiconslocation from "../components/Dashiconslocation";
import LinkList from "../components/LinkList";
import FrameTextColor from "../components/FrameTextColor";
import FrameComponent from "../components/FrameComponent";
import SendMessageFrame from "../components/SendMessageFrame";
import FooterNavList from "../components/FooterNavList";
import FootersV from "../components/FootersV";
import "./Solar.css";

const Solar = () => {
  return (
    <div className="solar">
      <section className="main-banner" />
      <NavListLinks />
      <div className="kia-sorento-sx-at-4wd-suv-angu" />
      <ContactLinkMaster />
      <TransformingCommunitiesOneS />
      <Dashiconslocation />
      <LinkList />
      <FrameTextColor />
      <div className="placeholder-text-sample">
        <h1 className="our-previous-work">Our previous work..</h1>
      </div>
      <FrameComponent />
      <SendMessageFrame />
      <FooterNavList />
      <FootersV />
    </div>
  );
};

export default Solar;
