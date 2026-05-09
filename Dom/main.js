// Selecting Elements)
const Header = document.getElementById("Header");
console.log(Header);
const image = document.querySelector(".image");
console.log(image);
const button = document.querySelectorAll("button");
console.log(button);

// Changing Content
Header.innerHTML = "Nur Abdi Adan"
console.log(Header)
////////////////////////////
const hobies = document.querySelector(".hobies");
const newElement = document.createElement("p");
newElement.innerHTML = "Hobby-ga aan jeclahay waa akhriska buugaagta."
hobies.appendChild(newElement)
console.log(newElement)

// (Changing Attributes)
const alt = document.querySelector("alt")
function changeimage(){
image.setAttribute("src" , "https://images.unsplash.com/photo-1777432033552-5b34be22ae46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D")
}
// Changing Style & Classes
function BadalcolorkaQoralka(){
Header.style.color = "blue"
}
// dark and light mode
function DarkMode(){
    document.body.style.backgroundColor = "#0F172A"
    document.body.style.color = "white"
}
function lightMode(){
    document.body.style.backgroundColor = "#F5F5F5"
    document.body.style.color = "black"
}
// Creating & Appending
function kudarSkillCusub(){
        // add skill
    const list_Skills = document.querySelector(".list-Skills")
    const New_li = document.createElement("li");
    New_li.innerText = "AI Engineering"
    list_Skills.appendChild(New_li)
}


// 7. Casharkii 6-aad: Dhacdooyinka (Event Listeners) 
//    Ciwaankaan wali magaarin pro i.a lkn cooming soon waye