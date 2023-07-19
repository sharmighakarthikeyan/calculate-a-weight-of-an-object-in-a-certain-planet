//object 

const space = {
    mercury:
    {
        gravity:0.38,
        image:"mercury.png"
    },
    venus:{
        gravity:0.91,
        image:"venus.png"
    },
    earth:{
        gravity:1.0,
        image:"earth.png"
    },
    mars:{
        gravity:0.38,
        image:"mars.png"
    },
    jupiter:{
        gravity:2.34,
        image:"jupiter.png"
    },
    saturn:{
        gravity:0.93,
        image:"saturn.png"
    },
    uranus:{
        gravity:0.92,
        image:"uranus.png"
    },
    neptune:{
        gravity:1.12,
        image:"neptune.png"
    }
}

const input = document.getElementById("input");
const select = document.getElementById("select");
const button = document.getElementById("button");
const container = document.querySelector(".container");



const UI = (img,text) => {

    // creating img tag 
    let image = document.createElement("img");
   
    image.src = `images/${img}`;
// create a design for img so use className
    image.className="design"
    // creating a p tag
    let p = document.createElement("p");

  // adding p tag text content


  //1.  p.textContent = text;
//2. let textnode = document.createTextNode(text)
//p.append(textnode)

p.innerText=text;


      // create a class or assigning class
    p.className = "big"

// container to add image and p 
    container.append(image);
    container.append(p);

}

button.addEventListener("click",function(){
    let imgSrc;
  
    imgSrc = space[select.value].image;

    // formula
    let weight;
    weight =Number(input.value) * space[select.value].gravity;


    UI(imgSrc,weight);
    console.log(weight)
})