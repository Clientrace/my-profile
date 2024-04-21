
import styles from './topnav.module.scss';
import { Nav, Navbar } from 'react-bootstrap';


const NavItem = ({active, name, link}) => {
  return (
    <div>
      <Nav.Link href={link}>
        { name }
      </Nav.Link>
    </div>
  )
}


const TopNav = ({pageIndex, showBrand=false}) => {
  const navList = [
    { title: 'Reboot', link: '/' }
  ]
  return <div className={styles['mainBody']}>
    <Navbar expand="lg" variant="dark" className="mr-auto">
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      {showBrand && <Navbar.Brand className={styles['brand']}>
        <img src='/assets/logo.svg' alt="main logo"/>
        Kim Clarence Penaflor
      </Navbar.Brand>}
      <Navbar.Collapse>
        <Nav activeKey={pageIndex} className="ms-auto">
          {
            navList.map((data, index)=>{
              return <NavItem key={`navitem-${index}`} name={data['title']} link={data['link']}/>
            })
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
}

export default TopNav;


