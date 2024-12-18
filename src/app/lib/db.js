import mysql from "mysql2/promise";

// connect to the database
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });

  const fetchComputing = async () => {
      try {
        const query = "select * from courselist where CourseSubject = 'Computing'"; 
        const [rows] = await connection.execute(query); 
        return rows;
      } catch (error) {
        console.error("Database Error:", error); 
        throw new Error("Failed to fetch data.");
      }   
  };

  const fetchComputingSearch = async (searchVal) => {
    try {
      let query = "SELECT * FROM courselist WHERE CourseTitle LIKE ? AND CourseSubject = 'Computing'"
      const likeSearchVal = `%${searchVal}%`
      const [rows] = await connection.execute(query,[likeSearchVal])
      return rows
    }
    catch(error) {
      console.error("Database Error", error)
      throw new Error("Failed to fetch data.")
    }
  }

  const fetchComputingDetails = async (CourseTitle) => {
    try {

        const query = "SELECT * FROM courselist WHERE CourseTitle = ?"; 
        const [rows] = await connection.execute(query, [CourseTitle]); 
        return rows[0] || null;
    } catch (error) {
      console.error("Database Error:", error); 
      throw new Error("Failed to fetch data.");
    }
  };

  const fetchDesign = async () => {
    try {
      const query = "select * from courselist where CourseSubject = 'Art and design'"; 
      const [rows] = await connection.execute(query); 
      return rows;
    } catch (error) {
      console.error("Database Error:", error); 
      throw new Error("Failed to fetch data.");
    }   
  };

  const fetchDesignDetails = async (CourseTitle) => {
    try {

        const query = "SELECT * FROM courselist WHERE CourseTitle = ?"; 
        const [rows] = await connection.execute(query, [CourseTitle]); 
        return rows[0] || null;
    } catch (error) {
      console.error("Database Error:", error); 
      throw new Error("Failed to fetch data.");
    }
  };

  const fetchDesignSearch = async (searchVal) => {
    try {
      let query = "SELECT * FROM courselist WHERE CourseTitle LIKE ? AND CourseSubject = 'Art and design'"
      const likeSearchVal = `%${searchVal}%`
      const [rows] = await connection.execute(query,[likeSearchVal])
      return rows
    }
    catch(error) {
      console.error("Database Error", error)
      throw new Error("Failed to fetch data.")
    }
  }




  export { fetchComputing, fetchComputingDetails, fetchDesign, fetchDesignDetails , fetchComputingSearch, fetchDesignSearch};