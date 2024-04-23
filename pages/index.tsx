import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <header>
            <p className=" text-sm text-thiha-blue mb-5 hover:underline">
              <Link
                href="https://en.wikipedia.org/wiki/2021_Myanmar_coup_d%27%C3%A9tat"
                target="_blank"
              >
                See what's happening in Myanmar 🇲🇲
              </Link>
            </p>
            <h1 className="text-2xl">
              Hello, I am Thiha Swan Htet, a fullstack developer based in
              Singapore 🇸🇬
            </h1>
            <p>
              Currently building{" "}
              <Link
                className={styles.link}
                href={"https://schedjuice.com"}
                target="_blank"
              >
                Schedjuice
              </Link>
              , and NodeJS developer at{" "}
              <Link
                className={styles.link}
                href={"https://skubbs.com/"}
                target="_blank"
              >
                Skubbs
              </Link>
              .
            </p>
          </header>
          <main className="space-y-4">
            <section>
              <h3 className={styles.link} id="about-me">
                <Link href="#about-me">About me ✨</Link>
              </h3>
              <div className="flex justify-between gap-3 max-md:flex-col">
                <div className="space-y-2">
                  <p>
                    I am a {new Date().getFullYear() - 2004}-year-old
                    self-taught programmer from Myanmar. My passion for data and
                    automation drove me to become obsessed with programming. I
                    enjoy creating apps that automate tedious tasks.
                  </p>
                  <p>
                    Apart from coding, I also have a personality. I love reading
                    history (especially Burmese and Bronze Age Mesopotamian
                    history), curating{" "}
                    <Link
                      href="https://open.spotify.com/user/aaxwc7qnsxrlsz4zh9k3odu38?si=91e2e325f70d4aa2"
                      className={styles.link}
                    >
                      Spotify playlists
                    </Link>
                    , and playing grand strategy games (currently obsessed with{" "}
                    <Link
                      href="https://civilization.2k.com/"
                      className={styles.link}
                    >
                      Civ6
                    </Link>
                    ).
                  </p>
                  <p>Also, I hate ChatGPT.</p>
                </div>
                <div className="">
                  <Image
                    src="/me.jpeg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="my-photo"
                    style={{ width: "100%", height: "auto" }}
                  ></Image>
                  <p className="  text-sm italic text-center py-1">
                    Thiha Swan Htet
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3 className={styles.link} id="about-gf">
                <Link href="#about-gf">About my girlfriend ❤️</Link>
              </h3>
              <div className="flex justify-between gap-3 max-md:flex-col">
                <div className="space-y-2">
                  <p>
                    My girlfriend, Wine Su Waddy, is a full-time emotional
                    support specialist for Thiha Swan Htet (me). Apart from her
                    full-time job, she is also interning at{" "}
                    <Link
                      className={styles.link}
                      href="https://www.kdb.co.kr/BZCOWS00N01.act?wcmsPath=/hmp/ch/gm/yg/CHGMYG5500.html&GmBrnId=YG&_mnuId=IHIHGM2141&GmMlngTc=en&jobNotice=Y"
                      target="_blank"
                    >
                      Korea Development Bank
                    </Link>
                    , and a part-time English language teacher at{" "}
                    <Link
                      href="https://teachersucenter.com"
                      className={styles.link}
                      target="_blank"
                    >
                      Teacher Su International School
                    </Link>{" "}
                    (where I am also the Head of Technology).
                  </p>
                  <p>
                    She also enjoys eating (any food is fine as long as it is
                    edible), ordering clothes online, taking photos of herself
                    (90% of my iCloud storage is full of her photos), and
                    yapping.
                  </p>
                </div>
                <div className="">
                  <Image
                    src="/gf.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="my-photo"
                    style={{ width: "100%", height: "auto" }}
                  ></Image>
                  <p className="  text-sm italic text-center py-1">
                    My girlfriend, Wine Su Waddy
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h3 className={styles.link} id="things-I-have-worked-on">
                <Link href="#things-I-have-worked-on">
                  Things I've worked on 💡
                </Link>
              </h3>
              <div className="space-y-3">
                <p>
                  I design scalable systems, take charge of the entire application stack, manage tech team,
                  and assume overall leadership in all things technical{" "}
                  <Link
                    target="_blank"
                    href="https://multitechmyanmar.com"
                    className={styles.link}
                  >
                    at the company I co-founded
                  </Link>
                  .
                </p>
                <p>
                  I was a lead programmer/architect for{" "}
                  <Link
                    href="https://suconnect.teachersucenter.com"
                    className={styles.link}
                    target="_blank"
                  >
                    SuConnect
                  </Link>
                  , an LMS for a local education institute, now used by over
                  10000 users.
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
                </p>{" "}
              </div>
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
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
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
                tinker around with various technologies.
              </p>
              <p>
                I have experimented with neural networks and machine learning
                technologies, worked with websockets for real-time applications,
                and created physics engines and{" "}
                <Link
                  href="https://rogue-like.thiha.net/"
                  target="_blank"
                  className={styles.link}
                >
                  various mini-games
                </Link>
                .
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
