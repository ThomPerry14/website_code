import Styles from './page.module.css'

export const metadata = {
    title: "Staff | Cantor College",
    description: "Information for our Staff",
  }

const Staff = () => {

    return(
        <main className={Styles.Main}>
            <h2>Information for Staff</h2>
            <div className={Styles.Parent}>
                <section className={Styles.Section1}>
                    <h3>News</h3>
                    <p>
                        Cantor College recently hosted the Software Engineering student of the year awards.
                        Shortlisted candidates from around the country attended the one day event.
                    </p>
                </section>
                <section className={Styles.Section1}>
                    <h3>Academic Registry</h3>
                    <p>
                        For academic regulations, assessment, awards, student records and course validation.
                    </p>
                </section>
                <section className={Styles.Section1}>
                    <h3>Catering Services</h3>
                    <p>
                        Cantor College has a cafeteria where you can get hot food and drinks.<br/>
                        Contact the Catering Services regarding on and off-site catering.
                    </p>
                </section>
                <section className={Styles.Section1}>
                    <h3>Financial Services</h3>
                    <p>
                        The financial team based on the 2nd Floor are responsible for all 
                        areas of student finance as well as College budgeting
                    </p>
                </section>
                <section className={Styles.Section1}>
                    <h3>Information Systems Services</h3>
                    <p>
                    The ISS team delivers the College’s computing facilities including all hardware and software.
                    <br/>They also run the staff helpdesk.
                    </p>
                </section>
                <section className={Styles.Section1}>
                    <h3>Marketing Services</h3>
                    <p>
                        The Marketing Team will help promote events and new courses. 
                        They will help with press release preparation.
                    </p>
                </section>
                <section className={Styles.Section1}>
                    <h3>Personnel Services</h3>
                    <p>
                        All staff pay and conditions enquiries should be directed to the 
                        Personnel Services team on the 3rd floor.
                    </p>
                </section>
                <section className={Styles.Section1}>
                    <h3>Facilities</h3>
                    <p>
                        The facilities are responsible for the general care and maintenance of the College. 
                        All enquiries via the main helpdesk.   
                    </p>
                </section>
            </div>
        </main>
    )
}

export default Staff