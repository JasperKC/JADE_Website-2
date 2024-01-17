import shoebill from "../pictures/shoebill03.jpg"
import './About.css'
export default function About(){
    return(
    <ab>
    <h1 id = "abTitle">About</h1>
    <div id = "abTotal">
        <div id = "bioTotal">
            <p id = "abPar">Jasper Kra-Caskey is a first-year undergraduate student at Columbia University in the City of New York currently planning on double-majoring in CS and Math. Besides Math and CS, he is also academically interested in Machine/Deep Learning, Moral Philosophy, and Sustainability/Environmental Studies. Outside of school, Jasper loves to spend time outdoors rock-climbing, hiking, backpacking, and skiing. He also loves to create music, something he (briefly) explored during HS when he was a paid quartet gig singer.</p>
        </div>
        <img id = "stork" src= {shoebill} alt="Shoebill Stork"></img>
    </div>
    </ab>
    )
}