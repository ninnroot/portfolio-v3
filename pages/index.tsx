import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.banner}>
        <p className={styles.link}>
          <Link
            href="https://en.wikipedia.org/wiki/2021_Myanmar_coup_d%27%C3%A9tat"
            target="_blank"
          >
            See what's happening in Myanmar 🇲🇲
          </Link>
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <header>
            <h1 className={`${styles.title}`}>Hello, I am Thiha Swan Htet</h1>
            <h2 className={styles.title}>
              A fullstack developer based in Singapore
            </h2>
            <p
              style={{ padding: 0, margin: 0, color: "grey", fontSize: "13px" }}
            >
              Currently interning as a fullstack developer at a Malaysian
              company, <br /> And working on several freelance projects.
            </p>
          </header>
          <main className={styles.body}>
            <section>
              <h3 className={styles.link} id="about-me">
                <Link href="#about-me">About me ✨</Link>
              </h3>
              <p>
                I am an 18-year-old self-taught programmer from Myanmar. My
                passion for data and automation drove me to become obsessed with
                programming. I enjoy creating apps that automate tedious tasks.
              </p>
              <p>
                I have been coding for over 3 years now. Despite my expertise of
                the full development process, the backend space is where I
                thrive.
              </p>
            </section>
            <section>
              <h3 className={styles.link} id="things-I-have-worked-on">
                <Link href="#things-I-have-worked-on">
                  Things I've worked on 💡
                </Link>
              </h3>
              <p>
                I was a lead programmer/architect for{" "}
                <Link
                  href="https://suconnect.teachersucenter.com"
                  className={styles.link}
                  target="_blank"
                >
                  SuConnect
                </Link>
                , an LMS for a local education institute, now used by over 5000
                users.
              </p>
              <p>
                I am the author of{" "}
                <Link
                  href="https://github.com/ninnroot/utilitas"
                  className={styles.link}
                  target="_blank"
                >
                  django-utilitas
                </Link>
                , a feature-rich Django package with many read-to-use classes.
              </p>
            </section>
            <section>
              <h3 className={styles.link} id="where-I-excel">
                <Link href="#where-I-excel">Where I excel 🤓</Link>
              </h3>
              <p>
                I am extremely good at designing scalable, flexible and
                maintainable backend systems.{" "}
                <Link
                  href="https://github.com/ninnroot/duwin_backend/blob/master/core/schemas.py"
                  target="_blank"
                  className={styles.link}
                >
                  My obsession with the DRY principle
                </Link>{" "}
                leads me to write very robust applications.
              </p>
              <div>
                <p>I am excellent in these technologies:</p>
                <div className={styles.iconContainer}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />

                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />

                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                </div>
              </div>
            </section>
            <section>
              <h3 className={styles.link} id="what-else-am-I-good-at">
                <Link href="#what-else-am-I-good-at">
                  What else am I good at? 🤔
                </Link>
              </h3>
              <p>
                I study computer science because I want to know how things
                function. This constant pursuit of knowledge has lead me to
                tinker around with various technologies
              </p>
              <p>
                I have experimented with neural networks and machine learning
                technologies, worked with websockets for real-time applications,
                and created physics engines and various mini-games.
              </p>
            </section>

            <div
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "white",
                height: "2px",
              }}
            ></div>

            <footer className={styles.footer}>
              <h3>Contacts</h3>
              <div className={styles.contactsContainer}>
                <p>
                  Github:{" "}
                  <Link
                    className={styles.link}
                    href="https://github.com/ninnroot"
                    target="_blank"
                  >
                    ninnroot
                  </Link>
                </p>
                <p>
                  Email:{" "}
                  <Link
                    className={styles.link}
                    href="mailto:misterjames.thiha@gmail.com"
                    target="_blank"
                  >
                    misterjames.thiha@gmail.com
                  </Link>
                </p>
                <p>
                  LinkedIn:{" "}
                  <Link
                    className={styles.link}
                    href="https://linkedin.com/in/thiha-swan-htet"
                    target="_blank"
                  >
                    Thiha Swan Htet
                  </Link>
                </p>
              </div>
              <p
                style={{
                  textAlign: "center",
                  padding: "0",
                  margin: "0",
                  marginTop: "5px",
                }}
              >
                &copy; thiha.net {new Date().getFullYear()}
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
