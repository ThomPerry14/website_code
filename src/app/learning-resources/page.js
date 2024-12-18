import Styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: "Learning Resources | Cantor College",
  description: "Information about our provided resources",
}

const Resources = () => {

    return (
        <main className={Styles.Main}>
            <section className={Styles.Section2}>
              <h2>Rules Governing the Use of the Library and Resource Centre</h2>
              <p>
                All students and staff of the College are entitled to register as members of the Library and Resource Centre and to use the facilities for the purpose of their course of study or College employment. 
                <br/><br/>Membership may also be extended to other individuals and to persons nominated from other organisations:  a fee is usually charged.  
                <br/><br/>Access to the Library and Resource Centre for study purposes may be made available to non-members by arrangement. 
                Details are available in the External Services leaflet.
                <br/><br/>Use of facilities implies acceptance of the Library and Resource Centre rules printed below.  
                These are designed to protect the interests of all users of Library and Resource Centre and to ensure that the College operates within the law and can carry out its functions efficiently and effectively.  
                The Library and Resource Centre rules apply in principle to all sites, including workstation rooms and site libraries, 
                notwithstanding some variations in practice in the site libraries. 
                <br/><br/>Admission to the Library and Resource Centre is conditional upon observation of the rules and the staff are empowered to enforce them. 
                Breaches of the rules may be dealt with by specific Library and Resource Centre Disciplinary Action (see below), 
                including the withdrawal of some access, and if appropriate by invoking the College’s Regulations for Students, 
                in the case of students, or in the case of staff through the appropriate College procedures as set out in the Staff Handbook. 
              </p>
            </section>
            <section className={Styles.Section}>
                <h3>Rules</h3>
                <h4>Access:</h4>
                <ul>
                    <li>The use of Library and Resource Centre facilities is normally limited to use for the educational and other purposes of the College.</li>
                    <li>All individuals wishing to become members of the Library and Resource Centre must comply with the registration procedures.  These include an undertaking to abide by Library and Resource Centre rules.</li>
                    <li>Individuals or organisations who are not eligible for membership but have good reason to use the Library and Resource Centre  may be admitted, by arrangement, for purposes of study only. Procedures for seeking admission are outlined in the External Services leaflet. Non-members must sign the Visitors' Book on each visit, and may be required to produce written identification.  Study use does not include access to the College's Academic Network.</li>
                    <li>ID cards issued by the College are not transferable from one person to another.  The person named on each card is responsible for all items borrowed on it and is liable for the cost of replacement of the card or items borrowed on it in the event of loss or damage.</li>
                    <li>Users of the Library and Resource Centre are reminded that they must be willing to show  ID cards or other identification when requested to do so by College staff.</li>
                </ul>

                <h4>Use of Facilities</h4>

                <ul>
                    <li>The Library and Resource Centre is not responsible for loss of, or damage to, the personal belongings of its users and visitors.  Users must take reasonable precautions against theft of their belongings, and must not leave belongings unattended even for a very short period. Study tables/PCs may not be reserved by depositing clothing or private property on the adjacent seat.  Articles left unattended may be removed by staff but will be returned on request at the Reception Desk.</li>
                    <li>All users are required to conduct themselves quietly throughout the Library and Resource Centre and conversation between users must be kept to a minimum.  No conversation is permitted in those areas designated as ‘Silent’ areas.</li>
                    <li>Personal stereos may not be used in the Library and Resource Centre.</li>
                    <li>Mobile phones must be turned off in all Library and Resource Centre study areas. Their use is permitted in the enclosed stair wells of the Main Site building.</li>
                    <li>Users should not make use of mains electrical supplies to power their own equipment, including external storage devices,  unless the equipment has been tested and confirmed as meeting the required Health & Safety standards.  Written evidence of such compliance will be required.</li>
                </ul>
            </section>
        </main>

                )}

                export default Resources