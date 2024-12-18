import { fetchDesignDetails } from "@/app/lib/db.js"
import Styles from './page.module.css'
import Image from "next/image"

const CourseDetails = async ({params}) => {
    const {CourseTitle} = await params;
    let title = CourseTitle.replaceAll("%20", " ")
    title = title.replaceAll("%2C",",")
    const courseDetails = await fetchDesignDetails(title);
    console.log(title)
    if (courseDetails == null){
      return (<div></div>)
    }
      return (
      <div className={Styles.Container}>
        <div className={Styles.Title}>
          <div>
          <Image src="/images/design.jpg" alt="cantor logo" width="1080" height="1000"/>
          </div>
          <div>
          <h2>{courseDetails.CourseTitle}</h2>
          </div>
            <div className={Styles.Tags}>
              <h4>{courseDetails.CourseType}</h4>
              <h4>{courseDetails.ModeOfAttendance}</h4>
              <h4>{courseDetails.StudyLength}</h4>
              <h4>{courseDetails.UcasPoints} UCAS Points</h4>
            </div>
            <div className={Styles.Description}>
            <p>{courseDetails.CourseSummary}</p>
            </div>
            <br/>
          </div>
        </div>
    );
  }
  export default CourseDetails