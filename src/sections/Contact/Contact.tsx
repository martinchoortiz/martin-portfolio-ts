import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/xnnqddno" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            className="show-caret"
            type="text"
            name="full_name"
            id="full_name"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            className="show-caret"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="phone" hidden>
            Phone
          </label>
          <input
            className="show-caret"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            pattern="^\+?[0-9]*$"
            title="Phone number should only contain numbers and an optional leading +"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
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
        <button type="submit" className="hover">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
