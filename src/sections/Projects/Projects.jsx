import React from "react";
import styles from "./ProjectStyles.module.css";
import fitness from "../../assets/fitness-automation.png";
import letscook from "../../assets/lets-cook.png";
import ProjectCard from "../../common/ProjectCard";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">{t("projects.Projects")}</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fitness}
          link="https://github.com/Scapter/Fitness-Otomasyonu?tab=readme-ov-file"
          h3="Fitness Automation"
          p={t("projects.FitnessProject")}
        />
        <ProjectCard
          src={letscook}
          link="https://play.google.com/store/apps/details?id=com.Alteq.CookCade"
          h3="Lets Cook"
          p="Lets Cook App"
        />
      </div>
    </section>
  );
}

export default Projects;
