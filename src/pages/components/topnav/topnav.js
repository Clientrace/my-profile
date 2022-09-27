
import styles from './topnav.module.scss';


const NavItem = ({active, name, link}) => {
  return (
    <div>
      <a href={link}>{ name }</a>
    </div>
  )
}


const TopNav = () => {
  const navList = [
    { title: 'About Me', link: '/' }
  ]
  return <div className={styles['mainBody']}>
    About Me
  </div>
}

export default TopNav;


