import Link from 'next/link'
import Styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: "Design | Cantor College",
  description: "Information about our facilities",
}

const Design = () => {

    return (
        <main className={Styles.Main}>
            <section className={Styles.Section2}>
              <h2>Design Courses</h2>
              <p>
                The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
                The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.
                You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.
              </p>
              <h3><Link href="/design-courses">Browse Courses</Link></h3>
            </section>
            <section className={Styles.Images}>
              <Image src="/images/art.jpeg" alt="gallery" width="1000" height="500"/>
              <Image src="/images/painting.jpg" alt="canvas painting" width="1000" height="500"/>
              <Image src="/images/spraypaint.jpeg" alt="spray painting" width="1000" height="500"/>
            </section>
        </main>

    )}

    export default Design