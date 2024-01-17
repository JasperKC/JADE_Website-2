import './Navbar.css'
function NavigationBar(){
    return(
        <>
        <nav>
            <div class="topnav">
            <ul id="navibar">
                <li><h1 id = "nameTag">Jasper Kra-Caskey</h1></li>
                <li><a href="#/Home">Home</a></li>
                <li><a href="#/About">About</a></li>
                <li><a href="#/Contact">Contact</a></li>
            </ul>
            </div>
        </nav>
        </>
    )
}
export default NavigationBar