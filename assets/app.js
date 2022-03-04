/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import '/node_modules/bootstrap/dist/css/bootstrap.css'

require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');


// Animation title color shelf
let titleShelf = document.querySelectorAll(".shelf p");

/*
Generate a random colors
*/
function rainbowColor() {
    let color = '';
    for(let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 256).toString(16);
        color += (random.length ===  1 ? "0" + random : random);
    }
    return "#" + color;
}

// for each letter
for(let i = 0, letter = titleShelf.length; i < letter; ++i) {
    let time = 300;
    titleShelf[i].addEventListener('mouseover', function () {
        setTimeout(function () {
            let b = titleShelf[i].textContent;
            titleShelf[i].innerHTML = '';

            for(let a = 0, letters = b.length; a < letters; ++a) {
                // Create a span
                let span = document.createElement('span');
                titleShelf[i].appendChild(span);
                span.textContent = b[a];
                span.style.color = rainbowColor() ;
                titleShelf[i].style.fontWeight = 'bold';
                titleShelf[i].style.fontSize = "50px";

            }
        }, time);
        time = time + 500;
    })

}