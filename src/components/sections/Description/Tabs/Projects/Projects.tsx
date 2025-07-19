import styles from "./Projects.module.css";
import { projects } from "../../../../../data/Projects/projectsData";
import { useLanguage } from "../../../../../context/LanguageContext";

const Projects = () => {
  const { language } = useLanguage();
  const currentProjects = projects[language];

  return (
    <div className={styles.projectsGrid}>
      {currentProjects.map((project) => (
        <div key={project.title} className={styles.projectCard}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
          />
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
