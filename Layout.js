
import Navbar from './Navbar'
export default function Layout({children}){
return(
<div>
<header>
<h1>Amrutha Platinum Towers</h1>
<p>Bengaluru, India | 398 Flats</p>
</header>
<Navbar/>
<div className="container">{children}</div>
</div>
)}
