import styles from "./SkillsStyles.module.css";
import checkMarkDarkIcon from "../../assets/checkmark-dark.svg";
import checkMarkLightIcon from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContex";

function Skills() {
  const { theme, toggleTheme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkLightIcon : checkMarkDarkIcon;

  return (
    <section id="skills" className={styles.container} tabIndex={-1}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList skillName="Engineering" srcImg={checkMarkIcon} />
        <SkillList skillName="Data Science" srcImg={checkMarkIcon} />
        <SkillList skillName="Optimization" srcImg={checkMarkIcon} />
        <SkillList skillName="Simulation" srcImg={checkMarkIcon} />
        <SkillList skillName="Automation" srcImg={checkMarkIcon} />
        <SkillList skillName="Supply Chain" srcImg={checkMarkIcon} />
      </div>
      <hr className={styles.hr} />
      <div className={styles.skillList}>
        <SkillList skillName="Problem Solving" srcImg={checkMarkIcon} />
        <SkillList skillName="Team Work" srcImg={checkMarkIcon} />
        <SkillList skillName="Software Development" srcImg={checkMarkIcon} />
        <SkillList skillName="Client Management" srcImg={checkMarkIcon} />
        <SkillList skillName="Project Management" srcImg={checkMarkIcon} />
        <SkillList
          skillName="Adaptability and Flexibility"
          srcImg={checkMarkIcon}
        />
        <SkillList skillName="Analytical Thinking" srcImg={checkMarkIcon} />
        <SkillList
          skillName="Curiosity and Continuous Learning"
          srcImg={checkMarkIcon}
        />
        <SkillList skillName="Communication" srcImg={checkMarkIcon} />
      </div>
      <hr className={styles.hr} />
      <div className={styles.skillList}>
        <SkillList skillName="Java" srcImg={checkMarkIcon} />
        <SkillList skillName="Python" srcImg={checkMarkIcon} />
        <SkillList skillName="SQL" srcImg={checkMarkIcon} />
        <SkillList skillName="JavaScript" srcImg={checkMarkIcon} />
        <SkillList skillName="Git/GitHub" srcImg={checkMarkIcon} />
        <SkillList skillName="Anylogic" srcImg={checkMarkIcon} />
        <SkillList skillName="UiPath RPA" srcImg={checkMarkIcon} />
        <SkillList skillName="PowerBI" srcImg={checkMarkIcon} />
        <SkillList
          skillName="Or-Tools (Optimization Engine)"
          srcImg={checkMarkIcon}
        />
        <SkillList
          skillName="IBM Cplex (Optimization Engine)"
          srcImg={checkMarkIcon}
        />
      </div>
    </section>
  );
}

export default Skills;
