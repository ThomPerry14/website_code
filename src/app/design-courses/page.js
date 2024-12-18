import { fetchDesign, fetchDesignSearch } from "@/app/lib/db";
import Design from '../Components/Design.jsx'

export const metadata = {
    title: "Design Courses | Cantor College",
    description: "Information about our design courses",
  };


  const DesignCourses = async ({searchParams}) => {
    const search = await searchParams
    const searchVal = search.searchVal
    const courseType = search.courseType 
    let courses

    if (searchVal && courseType){
      courses = await fetchDesignSearch(searchVal)
    }
    else {
      courses = await fetchDesign()
    }
    
    return (
      <div>
           <Design courses={courses} />
      </div>
    );

};

export default DesignCourses;
