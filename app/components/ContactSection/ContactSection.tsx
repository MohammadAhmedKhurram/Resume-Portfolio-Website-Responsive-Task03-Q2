import Image from "next/image";
import ContactForm from "./ContactForm";
import Styles from "@/app/components/Styles/Icon.module.css";
import Link from "next/link";
import SecStyles from "@/app/components/Styles/ContactSec.module.css";

export default function Contact() {
  return (
    <>
      <div className={SecStyles.div}>
        <div className={SecStyles.secondDiv}>
          <div className={SecStyles.thirdDiv}>
            <h1 className={SecStyles.h1}>Contact Me</h1>
            <p className={SecStyles.p}>I&apos;m here to help you!</p>

            <div className={SecStyles.fourthDiv}>
              <Image
                src="/contactform.pngs/email.jpg"
                alt="email"
                width={76}
                height={76}
                className={SecStyles.image}
              />
              <div className={SecStyles.fifthDiv}>
                <h3 className={SecStyles.h3}>E-Mail</h3>
                <p className={SecStyles.secondP}>ahmedkhurram1000@gmail.com</p>
              </div>
            </div>

            <div className={SecStyles.sixthDiv}>
              <Image
                src="/contactform.pngs/phone.jpg"
                alt="phone"
                width={76}
                height={76}
                className={SecStyles.image}
              />
              <div className={SecStyles.fifthDiv}>
                <h3 className={SecStyles.h3}>Phone</h3>
                <p className={SecStyles.secondP}>+92 314 2028044</p>
              </div>
            </div>

            <div className={SecStyles.seventhDiv}>
              <h2 className={SecStyles.h2}>Get Connected</h2>
              <div className={SecStyles.EighthDiv}>
                <Link
                  href="https://www.linkedin.com/in/muhammad-ahmed-1581a0279/"
                  target="_blank"
                >
                  <Image
                    className={`${Styles.rotate} ${SecStyles.connectImg}`}
                    src="/icons8-linkedin.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href="https://github.com/MohammadAhmedKhurram"
                  target="_blank"
                >
                  <Image
                    className={`${Styles.rotate} ${SecStyles.connectImg00}`}
                    src="/icons8-github2.svg"
                    alt="GitHub"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href="https://www.npmjs.com/~ahmedkhurram"
                  target="_blank"
                >
                  <Image
                    className={`${Styles.rotate} ${SecStyles.connectImg00}`}
                    src="/icons8-npm.svg"
                    alt="NPM"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className={SecStyles.ninthDiv}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
