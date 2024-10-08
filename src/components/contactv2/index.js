import Divider from "../divider/divider";
import Heading from "../heading/heading";
import Icon from "../icon/icon";
import SectionWrapper from "../sectionWrapper";

const Contact = ({ setCmdText, hoverAction, animationFlag }) => {
  return (
    <SectionWrapper hoverAction={hoverAction}>
      <Heading
        iconUrl="/assets/contact.svg"
        subtitle="You can reach me via the following:"
      >
        Contact
      </Heading>
      <Divider />
      <div className="flex w-max gap-x-3.5">
        <div className="w-full">
          <img src="/assets/display-profile.png" className="w-24 h-24" />
        </div>
        <div className="w-full">
          <div>
            <div className="text-sm">Email:</div>
            kimc.penalfor@gmail.com
          </div>
          <div className="mt-2">
            <div className="text-sm">Mobile:</div>
            +639260797073
          </div>
          <div className="mt-2">
            <div className="text-sm">Socials:</div>
            <div className="mt-1">
              <div className="flex gap-x-2">
                <Icon
                  onHoverStart={() =>
                    setCmdText("> Jump to my facebook profile")
                  }
                  src="/assets/facebook_dark.svg"
                  url="https://web.facebook.com/kcpenaflor11"
                />
                <Icon
                  onHoverStart={() => setCmdText("> Jump to my github page")}
                  src="/assets/github_dark.svg"
                  url="https://github.com/Clientrace"
                />
                <Icon
                  onHoverStart={() => setCmdText("> View my linkedin page")}
                  src="/assets/linkedin_dark.svg"
                  url="https://www.linkedin.com/in/kcpenaflor"
                />
                <Icon
                  onHoverStart={() => setCmdText("> Visit my instagram")}
                  src="/assets/instagram_dark.svg"
                  url="https://www.instagram.com/kcpenaflor/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
