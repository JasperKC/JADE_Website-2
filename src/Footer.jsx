import './Footer.css'
import insta from "./pictures/instagram_icon.png"
import linkedin from "./pictures/linkedin_icon.png"
import spotify from "./pictures/spotify_icon.png"

function Footer(){
    return(
        <>
        <foot>
            <footer className="footer">
                <div class="flex">
                    <div class="fixInsta">
                        <a href="https://www.instagram.com/jasperkc_/" target="_blank">
                            <img src={insta} alt="Insta Icon" width="31" height="31"/>
                        </a>
                    </div>
                    <a href="https://www.linkedin.com/in/jasper-kra-caskey-5875312a3/" target="_blank">
                        <img src={linkedin} alt="LinkedIn Icon" width="35" height="35"/>
                    </a>
                    <a href="https://open.spotify.com/user/m1vw32ve7mm333cgt6keapvc0?si=d7d76bef90b14a5c" target="_blank">
                        <img src={spotify} alt="Spotify Icon" width="35" height="35"/>
                    </a>
                    <a id = "resumeLink" href= "https://docs.google.com/document/d/14IZxU35UlBBXUh4O09NWEZM0YgUzlo1B0D3QmPSbTTc/edit?usp=sharing" target ="_blank">Resume</a>
                </div>
            </footer>
        </foot>
        </>
    )
}

export default Footer