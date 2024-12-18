import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
    
    return (
        <div>
            <nav>
                <menu>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/computing-courses">Computing Courses</Link></li>
                    <li><Link href="/design-courses">Design Courses</Link></li>
                    <li><Link href="/students">Students</Link></li>
                    <li><Link href="/staff">Staff</Link></li>
                    <li><Link href="/learning-resources">Learning Resources</Link></li>
                    
                </menu>
            </nav>
        </div>
    )
}

export default Navbar