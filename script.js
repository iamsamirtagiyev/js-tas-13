const body = document.querySelector("body")

//Container -> Start
let container = document.createElement("div")
container.className = "container"
body.append(container)
//Container -> End

//Nav -> Start
let nav = document.createElement("nav")
container.append(nav)
//Nav -> End

//Logo -> Start
let logo = document.createElement("div")
logo.className = "logo"
logo.textContent = "Samir"
nav.append(logo)
//Logo -> End

//Menu -> Start
let menu = document.createElement("ul")
menu.className = "menu"
nav.append(menu)

let list1 = document.createElement("li")
let link1 = document.createElement("a")
link1.href = "#"
link1.textContent = "Home"
list1.append(link1)
menu.append(list1)

let list2 = document.createElement("li")
let link2 = document.createElement("a")
link2.href = "#"
link2.textContent = "Resume"
list2.append(link2)
menu.append(list2)

let list3 = document.createElement("li")
let link3 = document.createElement("a")
link3.href = "#"
link3.textContent = "Projects"
list3.append(link3)
menu.append(list3)

let list4 = document.createElement("li")
let link4 = document.createElement("a")
link4.href = "#"
link4.textContent = "Contact"
list4.append(link4)
menu.append(list4)
//Menu -> End

//Section1 -> Start
let section1 = document.createElement("section")
section1.className = "section1"
container.append(section1)

let topDiv = document.createElement("div")
topDiv.className = "top"
section1.append(topDiv)

let span = document.createElement("span")
span.textContent = "DESIGN · DEVELOPMENT · MARKETING"
topDiv.append(span)

let p = document.createElement("p")
p.textContent = "I can help your business to"
topDiv.append(p)

let h1 = document.createElement("h1")
h1.textContent = "Get online and grow fast"
topDiv.append(h1)

let buttons = document.createElement("div")
buttons.className = "buttons"
topDiv.append(buttons)

let resumeBtn = document.createElement("button")
resumeBtn.textContent = "Resume"
buttons.append(resumeBtn)

let projectsBtn = document.createElement("button")
projectsBtn.textContent = "Projects"
buttons.append(projectsBtn)

let bottomDiv = document.createElement("div")
bottomDiv.className = "bottom"
section1.append(bottomDiv)

let image = document.createElement("div")
image.className = "image"
bottomDiv.append(image)

let img = document.createElement("img")
img.src = "./profile.png"
image.append(img)
//Section1 -> End

//Section2 -> Start
let section2 = document.createElement("section")
section2.className = "section2"
container.append(section2)

let h11 = document.createElement("h1")
h11.textContent = "About Me"
section2.append(h11)

let p1 = document.createElement("p")
p1.textContent = "My name is Start Bootstrap and I help brands grow."
section2.append(p1)

let p2= document.createElement("p")
p2.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?"
section2.append(p2)

let icons = document.createElement("div")
icons.className = "icons"
section2.append(icons)

let twitter = document.createElement("i")
twitter.className = "bx bxl-twitter"
icons.append(twitter)

let linkedin = document.createElement("i")
linkedin.className = "bx bxl-linkedin"
icons.append(linkedin)

let github = document.createElement("i")
github.className = "bx bxl-github"
icons.append(github)
//Section2 -> End

//Footer -> Start
let footer = document.createElement("footer")
container.append(footer)

let div = document.createElement("div")
div.textContent = "Copyright © Your Website 2023"
footer.append(div)

let right = document.createElement("div")
footer.append(right)

let span1 = document.createElement("span")
span1.textContent = "privacy"
right.append(span1)

let span2 = document.createElement("span")
span2.textContent = "privacy"
right.append(span2)

let span3 = document.createElement("span")
span3.textContent = "privacy"
right.append(span3)
//Footer -> End