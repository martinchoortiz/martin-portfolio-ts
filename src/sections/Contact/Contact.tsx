import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/xnnqddno" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden tabIndex={1}>
            Name
          </label>
          <input
            className="show-caret"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden tabIndex={2}>
            Email
          </label>
          <input
            className="show-caret"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden tabIndex={3}>
            Message
          </label>
          <textarea
            className="show-caret"
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="hover" tabIndex={4}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
