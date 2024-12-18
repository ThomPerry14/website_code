"use client"

import { useState } from 'react'
import Search from './Search.jsx'
import Link from 'next/link.js'
import './Computing.css'

const Computing = (params) => {
    const [courseList, setCourseList] = useState("")
    const {courses} = params
    
    if (courses.length > 0){
      
      return (
        <div>
          <br/>
             <Search type="Computing"/> 
             <main>
            {courses.map((courses, index) => (
              <section key={index}>
                  <h4>{courses.CourseAwardName}</h4>
                  <h2 className="Title"><Link href={`computing-courses/${courses.CourseTitle}`}>{courses.CourseTitle}</Link></h2>
                  <div className="Tags">
                      <h4>{courses.CourseType}</h4>
                      <h4>{courses.ModeOfAttendance}</h4>
                      <h4>{courses.StudyLength}</h4>
                      <h4>{courses.UcasPoints} UCAS Points</h4>
                  </div>
                  <p>{courses.CourseSummary}</p>
              </section>
          ))}
          </main>
        </div>
      );
    }
    else {
      return(
        <div>
          <br/>
            <Search type="Computing"/>
            <main>
              <div className="Empty">
                <h3>There are no courses that fit that search</h3>
              </div>
            </main>
          </div>
      )
    }
    

};

export default Computing;
