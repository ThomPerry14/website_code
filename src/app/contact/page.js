import Styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
    title: "Find Us | Cantor College",
    description: "Where to find us",
  };

const Contact = () => {
    return(
        <main className={Styles.Container}>
        <div className={Styles.Parent}>
        <Image src="/images/map.jpg" alt="map of hallam" width="1000" height="500"/>
        <div className={Styles.Main}>
        <br/><br/>
        <h2>Where to find us:</h2>
        <p>Cantor College</p>
        <p>Main Street</p>
        <p>Sheffield</p>
        <p>SC4 2BB</p>
        <p>Tel: (01321) 2340 235</p>
        <p>Fax: (01321) 2340 236</p>
        <p>Email: info@cantorcollege.ac.uk</p>
        </div>
        </div>
        </main>
    )
}

export default Contact