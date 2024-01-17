import './Home.css'
import shoebill from "../pictures/shoebill03.jpg"
import modelPic from "../pictures/modelingIm.jpeg"
import LV from "../pictures/lvPic.jpg"
import AOS from "aos";
import tutor from "../pictures/tutorIm.jpeg"
import precipice from "../pictures/thePrecipe.jpg"
import rock from "../pictures/rockClimb.jpeg"
import "aos/dist/aos.css"
import { useState, useEffect} from 'react'
export default function Home(){

    const[greeting, setGreeting] = useState('Hi');
    const greetings = ['Hello',"Hola",'Ciao','Bonjour','Hallo',"Shalom"]
    let currentIndex = 0;
    useEffect(() => {
    const intervalId = setInterval(() => {
    setGreeting(greetings[currentIndex]);
    currentIndex = (currentIndex + 1) % greetings.length;
  }, 1500);
  return () => clearInterval(intervalId);
}, []);
    AOS.init({
        offset:250,
        duration:1000
        });
    return(
    <div>
    <div id = "HelloScreen">
        <h1 id = "Hello">{greeting}</h1>
        <hr/>
        <h2 id = "yearTag">A Year in Review</h2>
        </div>
    <main class="container">
        <section class ="card">
        <a href = "https://contest.comap.com/undergraduate/contests/mcm/instructions.php" target="_blank">
        <img src={modelPic} alt = ""></img>
        </a>
        <div>
            <h3>CUMMW and MCM</h3>
            <p class = "normPar">In January/February 2024, Jasper participated in the Columbia Undergraduate Math Modeling Workshop, a workshop focused on equipping undergraduate with math modeling and statistical skills. In this workshop, his team built multiple Deep Learning models as well as performed regression analysis. This ultimately prepared him and his team to participate in the Mathematical Contest for Modeling in February 2024.</p>
        </div>
        </section>
        <section class ="card" data-aos="fade-left">
        <a href = "https://www.cc-seas.columbia.edu/jade" target="_blank">
        <img src = {LV} alt = ""></img>
        </a>
        <div>
            <h3>JADE</h3>
            <p class = "normPar">In January 2024, Jasper participated in JADE Columbia, a week-long program focused on immersion into the tech space and web-development. In 2024, JADE visited Google, Meta, Microsoft, USV, Viam, IBM Quantum, and many more companies. In this program, Jasper improved his skills in Github, JavaScript, Html, and CSS. He also networked with Founders, CEOS, SWEs, and many other people across the tech industry.</p>
        </div>
        </section>
        <section class ="card" data-aos="fade-right">
        <a href = "https://www.communityimpact.columbia.edu/content/one-one-tutoring" target="_blank">
        <img src = {tutor} alt = ""></img>
        </a>
        <div>
            <h3>One-to-One Tutoring</h3>
            <p class = "normPar">Starting in September 2023, Jasper began One-to-One tutoring through Columbia Community Impact. One-to-one tutoring connected him with a student from a student from Harlem, who he worked with over the course of the year to improve test and homework scores as well as study habits.</p>
        </div>
        </section>
        <section class ="card" data-aos="fade-left">
        <a href = "https://perec.columbia.edu/rock-climbing" target="_blank">
        <img src = {rock} alt = ""></img>
        </a>
        <div>
            <h3>Extracurriculars</h3>
            <p class = "normPar">At Columbia, Jasper has enjoyed involving himself in clubs and extracurriculars whenever he has time. In addition to those explicitly mentioned above, Jasper has joined the Ski Racing team, the Rock Climbing Team, and the Chess Club. In the Spring of 2024, he also hopes to join some pre-professional clubs and to involve himself in music clubs on campus.</p>
        </div>
        </section>
        <section class ="card" data-aos="fade-right">
        <a href = "https://www.amazon.com/Precipice-Existential-Risk-Future-Humanity/dp/031648492X/ref=asc_df_031648492X/?tag=hyprod-20&linkCode=df0&hvadid=459638379039&hvpos=&hvnetw=g&hvrand=219034347983912308&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9067609&hvtargid=pla-929797146366&psc=1&mcid=b2debda18db53fae93d0cae0a186addf&gclid=CjwKCAiA44OtBhAOEiwAj4gpOa3dWZ1OyxKAhKT68Q5y_T4LkulT2Y6j2hD7HBw-Vyj2bHkvBBJDkxoC6E4QAvD_BwE" target="_blank">
        <img src = {precipice} alt = "" ></img>
        </a>
        <div>
            <h3>Recommendations</h3>
            <p class = "normPar">Over the last year, Jasper has read many books he's enjoyed. For non-fiction, Jasper has especially enjoyed The Precipice by Toby Ord, The Omnivore's Dilemna by Michael Pollan, and Orientalism by Edward Said (maybe enjoy is the wrong word, but he thinks it's important). For fiction, Jasper enjoyed Dune by Frank Herbert and finally finishing the Three Body Problem trilogy by Cixin Liu.</p>
        </div>
        </section>
        <section id = "card-1" class ="card" data-aos="fade-left">
        <div id = "ifra">
            <iframe id = "specialiframe" src="https://open.spotify.com/embed/playlist/2q1vxaI1kfubQBuZmFxrg8?utm_source=generator&theme=0" width="40%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div>
            <h3>Music</h3>
            <p class = "normPar">Over the course of JADE, Jasper collected a playlist of songs that were playing during the program. This list has been compiled by Jasper and other members of the </p>
        </div>
        </section>
    </main>
    </div>
    )
}
