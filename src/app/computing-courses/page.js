import { fetchComputing, fetchComputingSearch } from "@/app/lib/db";
import Computing from '../Components/Computing.jsx'

export const metadata = {
    title: "Computing Courses | Cantor College",
    description: "Information about our computing courses",
  }


  const ComputingCourses = async ({searchParams}) => {
    const search = await searchParams
    const searchVal = search.searchVal
    const courseType = search.courseType 
    let courses

    if (searchVal && courseType){
      courses = await fetchComputingSearch(searchVal)
    }
    else {
      courses = await fetchComputing()
    }
    
    return (
      <div>
           <Computing courses={courses} />
      </div>
    );

};

export default ComputingCourses;
