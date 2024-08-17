import styles from "./HeroStyles.module.css";
import martin_image from "../../assets/martin_image.jpg";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import linkedinLightIcon from "../../assets/linkedin-light.svg";
import linkedinDarkIcon from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContex";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const linkedinIcon = theme === "light" ? linkedinLightIcon : linkedinDarkIcon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={martin_image} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Martin
          <br />
          Ortiz
        </h1>
        <h2>
          {" "}
          Industrial Engineer and
          <br />
          Operations Research Analyst
        </h2>
        <span>
          <a href="https://www.linkedin.com/in/ortiz-martin/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about technology and process improvement, I always look
          forward to generating value by designing and applying digital tools.
        </p>
        <a
          href="https://1drv.ms/b/s!Apl8nX-baR6rhaUi54ZEd1CFtijNog?e=DvY4Wi"
          target="_blank"
        >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
