console.log("hello ")

// start header
// main page only open linkers 
let openLinksMainPage =document.querySelector("header .links .icon i")
let linksMainPage = document.querySelector("header .links ul")
let lists = linksMainPage.children
let listsArray = Array.from(lists)

openLinksMainPage.onclick = function(){
    linksMainPage.classList.toggle("open")
    openLinksMainPage.classList.toggle("rotate")
}

listsArray.forEach((list) => {
    list.addEventListener("click", () => {
        linksMainPage.classList.toggle("open")
        openLinksMainPage.classList.toggle("rotate")
    })
})
// close linker

// open nav
let openNav = document.querySelector("header .mobile")
let closeNav = document.querySelector("header nav ul li #close")
let nav = document.querySelector("header nav ul")


openNav.onclick = function(){
    nav.classList.add("open")
}

closeNav.onclick = function(){
    nav.classList.remove("open")
}
// close nav

// end header



// contact 

// let btn = document.getElementById("btn")

// btn.addEventListener("click", function(e){
//     e.preventDefault()
// })
//     var name = document.getElementById("name").value
//     var email = document.getElementById("email").value
//     var subject = document.getElementById("subject").value
//     var message = document.getElementById("message").value


//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "phareohm44@gmail.com",
//         Password : "scuzzjpfzhenjdic",
//         To : 'phareohm44@gmail.com',
//         From : email,
//         Subject : subject,
//         Body : message + name
//     }).then(
//       message => alert(message)
//     )
// 


