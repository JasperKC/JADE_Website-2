import headshot from "../pictures/jasperHeadshot.jpeg"
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css"
export default function About(){
    AOS.init({
        duration:1500
        });
    return(
    <div class="contAb">
        <section class ="card" id = "card0" data-aos="fade-up">
        <img id = "hsPic" src={headshot} alt = "Headshot"></img>
        <div>
            <h1 id = "abTitle">About</h1>
            <p id = "abPar">Jasper Kra-Caskey is a first-year undergraduate student at Columbia University in the City of New York currently planning on double-majoring in CS and Math. Besides Math and CS, he is also academically interested in Machine/Deep Learning, Moral Philosophy, and Sustainability/Environmental Studies. Outside of school, Jasper loves to spend time outdoors rock-climbing, hiking, backpacking, and skiing. He also loves to create music, something he (briefly) explored during HS when he was a paid quartet gig singer.</p>
        </div>
        </section>
    </div>
    )
}