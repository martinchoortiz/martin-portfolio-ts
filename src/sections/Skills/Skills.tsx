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
        <SkillList skillName="Optimization" srcImg={checkMarkIcon} />
        <SkillList skillName="Simulation" srcImg={checkMarkIcon} />
        <SkillList skillName="Problem Solving" srcImg={checkMarkIcon} />
        <SkillList skillName="TeamWork" srcImg={checkMarkIcon} />
        <SkillList skillName="Software Development" srcImg={checkMarkIcon} />
      </div>
      <hr className={styles.hr} />
      <div className={styles.skillList}>
        <SkillList skillName="Java" srcImg={checkMarkIcon} />
        <SkillList skillName="Python" srcImg={checkMarkIcon} />
        <SkillList skillName="SQL" srcImg={checkMarkIcon} />
        <SkillList skillName="Git" srcImg={checkMarkIcon} />
      </div>
    </section>
  );
}

export default Skills;
