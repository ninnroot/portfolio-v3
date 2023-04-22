import Link from "next/link";
import styles from "../styles/Home.module.css";
import MyCodeBlock from "../components/MyCodeBlock";

export default function Utilitas() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.banner}>
        

        </div> */}

      <div className={styles.innerContainer}>
        <header>
          <h1 className={`${styles.title}`}>
            Thoughts behind django-utilitas' architectural decisions.
          </h1>
          <p
            style={{
              padding: 0,
              margin: 0,
              color: "#ACACAC",
              fontSize: "13px",
            }}
          >
            - Thiha Swan Htet. <br />
            date written: 22.4.2023
          </p>
        </header>
        <main className={styles.body}>
          <h3 className={styles.link} id="foreword">
            <Link href="#foreword">Foreword</Link>
          </h3>
          <p>
            First of all, about this document. This is written more for me and
            less for the public. The purpose of this document is to serve as a
            reference when I definitely will forget some things in the future.
            Because, gradually, django-utilitas is gaining more and more
            features and it's getting harder for me to keep track of them all in
            my tiny little brain.
          </p>
          <p>
            This also is to observe back in the future; what I was thinking in
            2023 (at the time of writing), and how I would have improved over
            the years.
          </p>

          <p>
            And of course, this will also prove very useful for any curious
            minds learning Django or who wants to make a library/package of
            their own.
          </p>
          <section>
            <h3 className={styles.link} id="some-useless-non-technical-facts">
              <Link href="#some-useless-non-technical-facts">
                Some useless non-technical facts
              </Link>
            </h3>
            <p>
              Why the name Django Utilitas? <br />
              <br /> Well, my library got a lot of utility (i.e., very useful)
              thus, wanted to name something that contains some essence of
              "utility". Hence, I used Google Translate and came across the
              Latin translation "utilitas", and since there wasn't a package
              with the same name out there, I used it.
            </p>
            <p>
              <br />
              Why I created django-utilitas. <br />
              <br />I love the DRY principle; obsessed even. I do a lot of
              backend works, mainly building REST APIs. And, it got repetitive
              after some time. You have seen most of the things and life got
              boring. So I wondered, "is there a better way to do this?".
            </p>
            <p>
              And, of course there is, but should it be done? Experiences taught
              me that being DRY is not the only factor in producing good-quality
              code. Too much abstraction is a bad thing.
            </p>
            <p>
              Building <code>django-utilitas</code> was easy. I already knew
              what kind of functionalities and features I wanted. However,
              providing a user-friendly interface was very hard. Reducing
              abstractions, and demystifying complex interfaces and pieces of
              codes was (and still is) a constant battle between me and{" "}
              <code>django-utilitas</code>.{" "}
            </p>
            <p>
              <br />
              Where I use django-utilitas. <br />
              <br />
              Utilitas does not have a proper documentation. Thus, no one uses
              it (as of now). However it is compatible for most use cases and
              can save the developer a lot of time. I use Utilitas in all my
              Django projects because it makes setting up a project so much
              easier and faster.
            </p>
          </section>

          <section>
            <h3 className={styles.link} id="technical-stuffs">
              <Link href="#technical-stuffs">Technical stuffs</Link>
            </h3>
            <p>
              Ok, this is the interesting bit. I will be talking about every
              file, class and function.
            </p>

              <h4 className={styles.link} id="exception_handler.py">
                <Link href="#exception_handler.py">exception_handler.py</Link>
              </h4>
              <MyCodeBlock>
{`from rest_framework.views import Response, exception_handler


def custom_handler(exc, ctx):
    response = exception_handler(exc, ctx)
    custom_response = {"isError": True}
    if hasattr(exc, "status_code"):
        custom_response["details"] = response.data

        return Response(custom_response, status=exc.status_code)

    return response`}                
              </MyCodeBlock>
                
              <p>
                sfon
              </p>
          </section>

          <section>
            <h3 className={styles.link} id="about-me">
              <Link href="#about-me">About me ✨</Link>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              ducimus sint. Rem earum fugiat, alias accusamus rerum labore sequi
              similique distinctio harum ullam architecto temporibus numquam
              illo consequatur non deserunt.
            </p>
          </section>

          <section>
            <h3 className={styles.link} id="about-me">
              <Link href="#about-me">About me ✨</Link>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              ducimus sint. Rem earum fugiat, alias accusamus rerum labore sequi
              similique distinctio harum ullam architecto temporibus numquam
              illo consequatur non deserunt.
            </p>
          </section>

          <section>
            <h3 className={styles.link} id="about-me">
              <Link href="#about-me">About me ✨</Link>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              ducimus sint. Rem earum fugiat, alias accusamus rerum labore sequi
              similique distinctio harum ullam architecto temporibus numquam
              illo consequatur non deserunt.
            </p>
          </section>

          <section>
            <h3 className={styles.link} id="about-me">
              <Link href="#about-me">About me ✨</Link>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              ducimus sint. Rem earum fugiat, alias accusamus rerum labore sequi
              similique distinctio harum ullam architecto temporibus numquam
              illo consequatur non deserunt.
            </p>
          </section>

          <section>
            <h3 className={styles.link} id="about-me">
              <Link href="#about-me">About me ✨</Link>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              ducimus sint. Rem earum fugiat, alias accusamus rerum labore sequi
              similique distinctio harum ullam architecto temporibus numquam
              illo consequatur non deserunt.
            </p>
          </section>

          <section>
            <h3 className={styles.link} id="about-me">
              <Link href="#about-me">About me ✨</Link>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              ducimus sint. Rem earum fugiat, alias accusamus rerum labore sequi
              similique distinctio harum ullam architecto temporibus numquam
              illo consequatur non deserunt.
            </p>
          </section>

          <section>
            <h3 className={styles.link} id="about-me">
              <Link href="#about-me">About me ✨</Link>
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
              ducimus sint. Rem earum fugiat, alias accusamus rerum labore sequi
              similique distinctio harum ullam architecto temporibus numquam
              illo consequatur non deserunt.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
