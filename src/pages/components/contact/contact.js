
import Divider from "../divider/divider";
import style from "./contact.module.scss";
import Heading from "../heading/heading";
import Subheading from "../subheading/subheading";
import Icon from "../icon/icon";


const Contact = ({setCmdText}) => {
  return (
    <div className={style['mainBodyContainer']}>
      <div className={style['body']}>
        <Heading>
          Contact
        </Heading>
        <div className={style['container']}>
          <div className={style['content']}>
            <Subheading>
              You can reach me via the following:
            </Subheading>
            <Divider/>
            <div className={style['contactList']}>
              <div>
                Email: kimc.penaflor@gmail.com
              </div>
              <div>
                Mobile: +639260797073
              </div>
              <div>
                Socials:
                <div className={style['socials']}>
                  <Icon onHoverStart={()=>setCmdText("> Jump to my facebook profile")} src="/assets/facebook_dark.svg" url="https://web.facebook.com/kcpenaflor11"/>
                  <Icon onHoverStart={()=>setCmdText("> Jump to my github page")} src="/assets/github_dark.svg" url="https://github.com/Clientrace"/>
                  <Icon onHoverStart={()=>setCmdText("> View my linkedin page")} src="/assets/linkedin_dark.svg" url="https://www.linkedin.com/in/kcpenaflor"/>
                  <Icon onHoverStart={()=>setCmdText("> Visit my instagram")} src="/assets/instagram_dark.svg" url="https://www.instagram.com/kcpenaflor/"/>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Contact;



