import './Contact.css' 
import columbia from "../pictures/columbia_campus.jpeg"
export default function Contact(){
    return(
    <div id = "conTot">
        {/* <h1 id = 'conTag'>How to Contact Me:</h1> */}
        <img src={columbia} alt="Columbia Campus-view" width="100%" />
        <div id = 'conAll'>
            <div id = 'conTemp'>
                <div id = 'conType'>
                    <div id = "conSocTot">
                        <h3 id = "socTag">Connect on social media:</h3>
                        <p id = 'conSocPar'>To connect with Jasper on social media, you can message him on <a href="https://www.linkedin.com/in/jasper-kra-caskey-5875312a3/" target="_blank">Linkedin</a> or<a href="https://www.instagram.com/jasperkc_/" target="_blank"> Instagram</a>.</p>
                    </div>
                    <div id = "conEmailTot">
                        <h3 id = "emailTag">Connect through email:</h3>
                        <p id = 'conEmailPar'>To connect with Jasper through email, feel to reach out to him at <a href="mailto:bjk2168@columbia.edu">bjk2168@columbia.edu.</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}