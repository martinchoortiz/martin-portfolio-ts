import styles from "./HeroStyles.module.css";
import martin_image from "../../assets/martin_image.jpg";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import linkedinLightIcon from "../../assets/linkedin-light.svg";
import linkedinDarkIcon from "../../assets/linkedin-dark.svg";
import mailLightIcon from "../../assets/mail-light-48.png";
import mailDarkIcon from "../../assets/mail-dark-48.png";
import { useTheme } from "../../common/ThemeContex";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sunIcon : moonIcon;
  const linkedinIcon = theme === "light" ? linkedinLightIcon : linkedinDarkIcon;
  const mailIcon = theme === "light" ? mailLightIcon : mailDarkIcon;

  return (
    <section id="hero" className={styles.container} tabIndex={-1}>
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
        <h1>Martin Ortiz</h1>
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
          <a href="mailto:ortizsuarezma@gmail.com">
            <img src={mailIcon} alt="Mail icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about technology and process improvement, I always look
          forward to generating value by designing and applying digital tools.
        </p>
        <a
          href="https://drive.google.com/file/d/1qV24w2rBVQcigGFHHxxECq89kdSBdVqj/view?usp=sharing"
          target="_blank"
        >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
