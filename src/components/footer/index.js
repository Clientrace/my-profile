
import Icon from "../icon/icon";

const Footer = () => {
  return <div className="w-full flex justify-center p-20">
    <div className="flex w-fit px-12 gap-x-4">
      <img src="/assets/profile.jpeg" className="w-24 h-24" />
      <div className="w-full">
        <div>
          Kim Clarence Peñaflor
        </div>
        <div className="text-gray-600 text-sm">Full Stack Software Engineer</div>
        <div className="mt-1">
          <div className="flex gap-x-2">
            <Icon
              onHoverStart={() => setCmdText("> Jump to my facebook profile")}
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
}


export default Footer;

