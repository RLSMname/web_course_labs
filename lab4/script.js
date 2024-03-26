const backgroundButton = document.querySelector(".background-button")
backgroundButton.addEventListener("click", changeBackground)

let backgroundIndex = 1
const backgrounds = ["img1.jpg", "img2.webp", "img3.jpg", "img4.jpg", "img5.jpg"]
function changeBackground(){
    console.log("changed background")
    document.body.style.backgroundImage = "url('" + backgrounds[backgroundIndex] + "')";
    backgroundIndex = (backgroundIndex + 1) % backgrounds.length; 
}


function randomHexColorCode(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

let partyMode = false

const partyButton = document.querySelector(".party-button")
partyButton.addEventListener("click", () => {partyMode = !partyMode})

const linkButton = document.querySelector(".link-button")
linkButton.addEventListener("click", () => changeLinkColorAndShape(partyMode))


function changeLinkColorAndShape(mode){
    console.log("link button clicked")
    

    let links = document.querySelectorAll(".link")
    console.log(links)
    
    let color = randomHexColorCode()


    links.forEach(link => {

        if(mode) {
            color = randomHexColorCode()
        }

        link.style.color = color
    });
    
}