import Styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Home | Cantor College",
  description: "Cantor Home",
}

export default function Home() {
  return (
    <main className={Styles.Container}>
      <div className={Styles.About}>
        <h2>About Us</h2>
        <p>
          Cantor College was established in 1989 to specialize in Computing and Design. 
          At Cantor College, we want to give students the education they need to achieve their career aims, 
          leaving them equipped with the knowledge, skills and experience to succeed. 
          Cantor College gives you the opportunities that can give you the edge when you enter the world of work, 
          through our teaching and our links to some of the world's leading researchers and employers. 
          Our students have gone on to successful careers in a wide range of industries across the globe. 
          Whatever your ambitions, our learning and support can help to get the most out of your time with Cantor College, 
          both as a student and in your future career.
        </p>
      </div>
      <section className={Styles.Parent}>
        <div className={Styles.Facilities}>
          <Image src="/images/facilities.jpg" alt="cantor logo" width="1080" height="720"/>
          <h2>Our Facilities</h2>
          <p>
            The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.
            Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.</p>
          <h3><Link href="/facilities">Find out more</Link></h3>
        </div>
        <div className={Styles.Business}>
        <Image src="/images/business.jpg" alt="cantor logo" width="1080" height="720"/>

          <h2>Partner with Cantor College</h2>
          <h3>Unlock Expertise, Innovation, and Growth</h3>
          <p>
          At Cantor College, we believe in the power of collaboration between education and industry. 
          Our College offers a range of specialized services designed to support businesses in achieving their goals.
          </p>
          <h3><Link href="/business">Find out more</Link></h3>
        </div>
        <div className={Styles.Computing}>
        <Image src="/images/coding.jpg" alt="cantor logo" width="1080" height="720"/>

          <h2>Our Computing Courses</h2>
          <h3>Tackle the future, stay ahead</h3>
          <p>Teaching undergraduate and postgraduate courses in a wide range of specialisms, 
            including computer science, 
            software development, information systems, 
            networking and software engineering. </p>
            <h3><Link href="/computing">Find out more</Link></h3>
        </div>
        <div className={Styles.Design}>
        <Image src="/images/design.jpg" alt="cantor logo" width="1080" height="720"/>

          <h2>Our Creative Courses</h2>
          <h3>Design, Innovate, and Explore</h3>
          <p>The College's art and design courses don't just train you, they promote alternative ways of thinking, 
            making and communicating; they provide you with space, 
            tools and inspiration to develop your creative practice and a clear career path. </p>
            <h3><Link href="/design">Find out more</Link></h3>
        </div>
      </section>
      <div className={Styles.Contact}>
      <h2>How to find us:</h2>
      <h3><Link href="/contact">Click Here</Link></h3>

      </div>
  </main>
  );
}