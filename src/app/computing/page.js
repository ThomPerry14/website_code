import Link from 'next/link'
import Styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: "Computing | Cantor College",
  description: "Information about our facilities",
}

const Computing = () => {

    return (
        <main className={Styles.Main}>
            <section className={Styles.Section2}>
              <h2>Computing Courses</h2>
              <p>
                The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.
                The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.
                The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.

              </p>
              <h3><Link href="/computing-courses">Browse Courses</Link></h3>
            </section>
            <section className={Styles.Images}>
              <Image src="/images/facilities2.jpg" alt="computer lab" width="1000" height="500"/>
              <Image src="/images/computing2.jpg" alt="video game lab" width="1000" height="500"/>
              <Image src="/images/coding3.jpg" alt="image of code" width="1000" height="500"/>
            </section>
        </main>

    )}

    export default Computing