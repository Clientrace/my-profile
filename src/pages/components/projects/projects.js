
import Divider from '../divider/divider';
import Heading from '../heading/heading';
import Subheading from '../subheading/subheading';
import styles from './projects.module.scss';
import ProjectCard from '../projectCard/projectCard';

const Card = ({name, bg, children}) => {
  return <div className={styles['card']}>
    <ProjectCard name={name} bg={bg}>
      { children }
    </ProjectCard>
  </div>
}


const Projects = () => {
  return (
    <div className={styles['mainBodyContainer']}>
      <div className={styles['body']}>
        <Heading iconUrl="/assets/folder.svg">Projects</Heading>
        <div className={styles['container']}>
          <div className={styles['content']}>
            <Subheading>Personal Projects</Subheading>
            I have worked on a lot of pet projects, some are publicly viewable on my github account.
            <Divider/>
            <div className={styles['projectList']}>
              <ProjectCard name="Friday Bot"
                tech={['python']}
                subtitle="A Facebook Chatbot"/>

              <ProjectCard name="Inxscape" 
                tech={['python']}
                subtitle="Headless Web CMS Tool"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Projects;
