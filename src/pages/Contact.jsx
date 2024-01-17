import './Contact.css' 
import columbia from "../pictures/columbia_campus.jpeg"
import AOS from "aos";
import "aos/dist/aos.css"

export default function Contact(){
    AOS.init({
        duration:1000
        });
    return(
    <div class="contCon">
        <section id ="cardSec" data-aos="fade-up" >
            <div id = "sect">
            <form action="https://formspree.io/f/myyrzjej" method="post" id = "formCon">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required></input>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
            </form>
            </div>
                <p id = "conPar">Alternatively, consider contacting me on LinkedIn or Instagram, which are both linked in the bottom bar.</p>
        </section>
    </div>
    )
}