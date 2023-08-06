// Get Planets button
const mercury = document.getElementById("mercury");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturn = document.getElementById("saturn");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");
const pluto = document.getElementById("pluto");

// Get UI Elements
const threeDViewer = document.getElementById("3d-viewer");
const contentHeader = document.getElementById("content-header");
const content = document.getElementById("content");
const sourceLink = document.getElementById("source-link");
const infoCards = document.getElementById("info-cards");
const dayLength = document.getElementById("day-length");
const yearLength = document.getElementById("year-length");
const gravity = document.getElementById("gravity");
const avrTemp = document.getElementById("avr-temp");

function changeToMercury() {
    console.log("Mercury chosen");

    // Remove underline from the rest 
    mercury.style.textDecoration = "none"
    venus.style.textDecoration = "none"
    earth.style.textDecoration = "none"
    mars.style.textDecoration = "none"
    jupiter.style.textDecoration = "none"
    saturn.style.textDecoration = "none"
    uranus.style.textDecoration = "none"
    neptune.style.textDecoration = "none"
    pluto.style.textDecoration = "none"

    // Underline selection
    mercury.style.textDecoration = "1.5pt underline";

    // Change content
    contentHeader.textContent = "Mercury";
    threeDViewer.src = "./3d-models/mercury.glb"
    content.textContent = "The smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days."
    sourceLink.href = "https://solarsystem.nasa.gov/mercury"

    dayLength.textContent = "4222.6 hrs.";
    yearLength.textContent = "88 days";
    gravity.textContent = "3.7";
    avrTemp.textContent = "167";
}

function changeToVenus() {
    console.log("Venus chosen");

    // Remove underline from the rest 
    mercury.style.textDecoration = "none"
    venus.style.textDecoration = "none"
    earth.style.textDecoration = "none"
    mars.style.textDecoration = "none"
    jupiter.style.textDecoration = "none"
    saturn.style.textDecoration = "none"
    uranus.style.textDecoration = "none"
    neptune.style.textDecoration = "none"
    pluto.style.textDecoration = "none"

    // Underline selection
    venus.style.textDecoration = "1.5pt underline";

    // Change content
    contentHeader.textContent = "Venus";
    threeDViewer.src = "./3d-models/venus.glb"
    content.textContent = "Spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system."
    sourceLink.href = "https://solarsystem.nasa.gov/venus"

    dayLength.textContent = "2802 hrs.";
    yearLength.textContent = "225 days";
    gravity.textContent = "8.9";
    avrTemp.textContent = "464";
}

function changeToEarth() {
    console.log("Earth chosen");

    // Remove underline from the rest 
    mercury.style.textDecoration = "none"
    venus.style.textDecoration = "none"
    earth.style.textDecoration = "none"
    mars.style.textDecoration = "none"
    jupiter.style.textDecoration = "none"
    saturn.style.textDecoration = "none"
    uranus.style.textDecoration = "none"
    neptune.style.textDecoration = "none"
    pluto.style.textDecoration = "none"

    // Underline selection
    earth.style.textDecoration = "1.5pt underline";

    // Change content
    contentHeader.textContent = "Earth";
    threeDViewer.src = "./3d-models/earth-clouds.glb"
    content.textContent = "Our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface."
    sourceLink.href = "https://solarsystem.nasa.gov/earth"

    dayLength.textContent = "24 hrs.";
    yearLength.textContent = "356 days";
    gravity.textContent = "9.8";
    avrTemp.textContent = "15";
}

function changeToMars() {
    console.log("Mars chosen");

    // Remove underline from the rest 
    mercury.style.textDecoration = "none"
    venus.style.textDecoration = "none"
    earth.style.textDecoration = "none"
    mars.style.textDecoration = "none"
    jupiter.style.textDecoration = "none"
    saturn.style.textDecoration = "none"
    uranus.style.textDecoration = "none"
    neptune.style.textDecoration = "none"
    pluto.style.textDecoration = "none"

    // Underline selection
    mars.style.textDecoration = "1.5pt underline";

    // Change content
    contentHeader.textContent = "Mars";
    threeDViewer.src = "./3d-models/mars.glb"
    content.textContent = "Is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was – billions of years ago – wetter and warmer, with a thicker atmosphere."
    sourceLink.href = "https://solarsystem.nasa.gov/mars"

    dayLength.textContent = "24.7 hrs.";
    yearLength.textContent = "687 days";
    gravity.textContent = "3.7";
    avrTemp.textContent = "-65";
}

function changeToJupiter() {
    console.log("Jupiter chosen");

    // Remove underline from the rest 
    mercury.style.textDecoration = "none"
    venus.style.textDecoration = "none"
    earth.style.textDecoration = "none"
    mars.style.textDecoration = "none"
    jupiter.style.textDecoration = "none"
    saturn.style.textDecoration = "none"
    uranus.style.textDecoration = "none"
    neptune.style.textDecoration = "none"
    pluto.style.textDecoration = "none"

    // Underline selection
    jupiter.style.textDecoration = "1.5pt underline";

    // Change content
    contentHeader.textContent = "Jupiter";
    threeDViewer.src = "./3d-models/jupiter.glb"
    content.textContent = "Is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth."
    sourceLink.href = "https://solarsystem.nasa.gov/jupiter"

    dayLength.textContent = "9.9 hrs.";
    yearLength.textContent = "4,333 days";
    gravity.textContent = "23.1";
    avrTemp.textContent = "-110";
}

function changeToSaturn() {
    console.log("Saturn chosen");

    // Remove underline from the rest 
    mercury.style.textDecoration = "none"
    venus.style.textDecoration = "none"
    earth.style.textDecoration = "none"
    mars.style.textDecoration = "none"
    jupiter.style.textDecoration = "none"
    saturn.style.textDecoration = "none"
    uranus.style.textDecoration = "none"
    neptune.style.textDecoration = "none"
    pluto.style.textDecoration = "none"

    // Underline selection
    saturn.style.textDecoration = "1.5pt underline";

    // Change content
    contentHeader.textContent = "Saturn";
    threeDViewer.src = "./3d-models/saturn.glb"
    content.textContent = "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's. "
    sourceLink.href = "https://solarsystem.nasa.gov/saturn"

    dayLength.textContent = "10.7 hrs.";
    yearLength.textContent = "10,759 days";
    gravity.textContent = "9.0";
    avrTemp.textContent = "-140";
}

function changeToUranus() {
    console.log("Uranus chosen");

    // Remove underline from the rest 
    mercury.style.textDecoration = "none"
    venus.style.textDecoration = "none"
    earth.style.textDecoration = "none"
    mars.style.textDecoration = "none"
    jupiter.style.textDecoration = "none"
    saturn.style.textDecoration = "none"
    uranus.style.textDecoration = "none"
    neptune.style.textDecoration = "none"
    pluto.style.textDecoration = "none"

    // Underline selection
    uranus.style.textDecoration = "1.5pt underline";

    // Change content
    contentHeader.textContent = "Uranus";
    threeDViewer.src = "./3d-models/uranus.glb"
    content.textContent = "Seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side."
    sourceLink.href = "https://solarsystem.nasa.gov/uranus"

    dayLength.textContent = "17.2 hrs.";
    yearLength.textContent = "30,687 days";
    gravity.textContent = "8.7";
    avrTemp.textContent = "-195";
}

function changeToNeptune() {
    console.log("Neptune chosen");

    // Remove underline from the rest 
    mercury.style.textDecoration = "none"
    venus.style.textDecoration = "none"
    earth.style.textDecoration = "none"
    mars.style.textDecoration = "none"
    jupiter.style.textDecoration = "none"
    saturn.style.textDecoration = "none"
    uranus.style.textDecoration = "none"
    neptune.style.textDecoration = "none"
    pluto.style.textDecoration = "none"

    // Underline selection
    neptune.style.textDecoration = "1.5pt underline";

    // Change content
    contentHeader.textContent = "Neptune";
    threeDViewer.src = "./3d-models/neptune.glb"
    content.textContent = "The eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations. "
    sourceLink.href = "https://solarsystem.nasa.gov/neptune"

    dayLength.textContent = "16.1 hrs.";
    yearLength.textContent = "60,190 days";
    gravity.textContent = "11.0";
    avrTemp.textContent = "-200";
}

function changeToPluto() {
    console.log("Pluto chosen");

    // Remove underline from the rest 
    mercury.style.textDecoration = "none"
    venus.style.textDecoration = "none"
    earth.style.textDecoration = "none"
    mars.style.textDecoration = "none"
    jupiter.style.textDecoration = "none"
    saturn.style.textDecoration = "none"
    uranus.style.textDecoration = "none"
    neptune.style.textDecoration = "none"
    pluto.style.textDecoration = "none"

    // Underline selection
    pluto.style.textDecoration = "1.5pt underline";

    // Change content
    contentHeader.textContent = "Pluto";
    threeDViewer.src = "./3d-models/pluto.glb"
    content.textContent = "Pluto is a complex and mysterious world with mountains, valleys, plains, craters, and maybe glaciers. Discovered in 1930, Pluto was long considered our solar system's ninth planet. But after the discovery of similar intriguing worlds deeper in the distant Kuiper Belt, icy Pluto was reclassified as a dwarf planet."
    sourceLink.href = "https://solarsystem.nasa.gov/pluto"

    dayLength.textContent = "153.3 hrs.";
    yearLength.textContent = "90,560 days";
    gravity.textContent = "0.7";
    avrTemp.textContent = "-225";
}

let hamMenuIsOpen;

function hamburgerMenu() {
    const hamStart = document.getElementById("ham-start");
    const hamOpened = document.getElementById("ham-opened");
    const hamClosed = document.getElementById("ham-closed");

    const planetsSelection = document.getElementById("planets-selection");

    hamStart.style.display = "none";

    if (!hamMenuIsOpen) {
        hamOpened.style.display = "block"
        hamClosed.style.display = "none"
        hamMenuIsOpen = true;

        planetsSelection.style.display = "block";
    } else {
        hamOpened.style.display = "none"
        hamClosed.style.display = "block"
        hamMenuIsOpen = false;

        planetsSelection.style.display = "none";
    }
}