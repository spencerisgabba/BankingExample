import lax from 'lax.js';
import Headroom from "headroom.js";



const header = document.querySelector("header");

const headroom = new Headroom(header);
headroom.init();

window.onload = function () {
    lax.setup()

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
};