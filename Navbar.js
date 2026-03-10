
import Link from 'next/link'
export default function Navbar(){
return(
<nav>
<Link href="/">Home</Link>
<Link href="/dashboard">Dashboard</Link>
<Link href="/financials">Financials</Link>
<Link href="/vendors">Vendors</Link>
<Link href="/residents">Residents</Link>
<Link href="/activities">Activities</Link>
<Link href="/notifications">Notifications</Link>
<Link href="/futureplans">Future Plans</Link>
<Link href="/timeline">Timeline</Link>
</nav>
)}
