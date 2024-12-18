"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import './Search.css'

const Search = (params) => {
    const router = useRouter()
    const [searchVal, setSearchVal] = useState("")
    const {type} = params

    return(
        <div className="container">
           <h2 >Search for Courses</h2>
        <form onSubmit={(e) => {
            setSearchVal(e.target.value)
            e.preventDefault()
            if (type == "Computing"){
                router.push(`/computing-courses?searchVal=${searchVal}&courseType=${type}`)
            }
            if (type == "Art and design"){
                router.push(`/design-courses?searchVal=${searchVal}&courseType=${type}`)
            }
        }}>
        <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)}placeholder='Search Courses...'/>
        <button type="submit">Search</button>
        </form>
       </div> 
    )
}


export default Search