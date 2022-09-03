
var swiper = new Swiper(".slide-content", {
    // slidesPerView: 3,
    spaceBetween: 25,
    // slidesPerGroup: 1,
    centerSlide: "true",
    loop: false,
    // direction: vertical,
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3
      }
    }
  });













// moduleWeeks 

let found1 = document.querySelector(".found1")
let found1open = document.querySelector("#found1open")
let found1close = document.querySelector("#found1close")

let found2 = document.querySelector(".found2")
let found2open = document.querySelector("#found2open")
let found2close = document.querySelector("#found2close")


let MSK = document.querySelector(".MSK")
let MSKopen = document.querySelector('#MSKopen')
let MSKclose = document.querySelector("#MSKclose")


let resp = document.querySelector(".resp")
let respopen = document.querySelector('#respopen')
let respclose = document.querySelector("#respclose")


let cardio = document.querySelector(".cardio")
let cardioopen = document.querySelector("#cardioopen")
let cardioclose = document.querySelector("#cardioclose")





// the foundation 1

found1open.addEventListener("click", function(){
  // e.stopPropagation()
  // e.preventDefault()
  // e.composedPath()
  found1.classList.add("activejs")
  console.log("found1") 
  found1open.style.display = "none"
  found1close.style.display = "block"
})

found1close.addEventListener("click", function(){
  // e.stopPropagation()
  // e.preventDefault()
  // e.composedPath()
  found1.classList.remove("activejs")
  console.log("found1") 
  found1open.style.display = "block"
  found1close.style.display = "none"
})


// the foundation 2

found2open.addEventListener("click", function(e){
  // e.stopPropagation()
  e.preventDefault()
  // e.composedPath()
  found2.classList.add("activejs")
  console.log("found1") 
  found2open.style.display = "none"
  found2close.style.display = "block"
})

found2close.addEventListener("click", function(){
  // e.stopPropagation()
  // e.preventDefault()
  // e.composedPath()
  found2.classList.remove("activejs")
  console.log("found1") 
  found2open.style.display = "block"
  found2close.style.display = "none"
})

// the MSK system

MSKopen.addEventListener("click", function(){
  // e.stopPropagation()
  // e.preventDefault()
  // e.composedPath()
  MSK.classList.add("activejs")
  console.log("MSK") 
  MSKopen.style.display = "none"
  MSKclose.style.display = "block"
})

MSKclose.addEventListener("click", function(){
  // e.stopPropagation()
  // e.preventDefault()
  // e.composedPath()
  MSK.classList.remove("activejs")
  console.log("MSK") 
  MSKopen.style.display = "block"
  MSKclose.style.display = "none"
})



// the respiratory system

respopen.addEventListener("click", function(){
  // e.stopPropagation()
  // e.preventDefault()
  // e.composedPath()
  resp.classList.add("activejs")
  console.log("resp") 
  respopen.style.display = "none"
  respclose.style.display = "block"
})

respclose.addEventListener("click", function(){
  // e.stopPropagation()
  // e.preventDefault()
  // e.composedPath()
  resp.classList.remove("activejs")
  console.log("resp") 
  respopen.style.display = "block"
  respclose.style.display = "none"
})



// the cardiovascular system

cardioopen.addEventListener("click", function(){
  // e.stopPropagation()
  // e.preventDefault()
  // e.composedPath()
  cardio.classList.add("activejs")
  console.log("cardio") 
  cardioopen.style.display = "none"
  cardioclose.style.display = "block"
})

cardioclose.addEventListener("click", function(){
  // e.stopPropagation()
  // e.preventDefault()
  // e.composedPath()
  cardio.classList.remove("activejs")
  console.log("cardio") 
  cardioopen.style.display = "block"
  cardioclose.style.display = "none"
})





let weeks = document.querySelectorAll(".weekcontainer > .week")
let weeksArray = Array.from(weeks)

let subjects = document.querySelectorAll(" .sub > .name")
let subjectsArray = Array.from(subjects)


let info = document.querySelectorAll(" .sub > .info")
let infoArray = Array.from(info)

let seminarInfo = document.querySelectorAll(".seminar")
let seminarInfoArray = Array.from(seminarInfo)

console.log(seminarInfoArray)
// make name of sub none
subjectsArray.forEach((sub) => {
  sub.style.display = "none"
});

// make info of sub none

infoArray.forEach((info) => {
  info.style.display = "none"
})

seminarInfoArray.forEach((seminarInfo) => {
  seminarInfo.style.display = "none"
})


// action on week name

weeksArray.forEach((week) => {

  // on week name click

    week.addEventListener("click", function (){
      
      // select sub to close them on week name click
        let sub = this.parentElement.lastElementChild.children
        let subArray = Array.from(sub)

          subArray.forEach((sub) => {
          sub.lastElementChild.classList.remove("displayFlex")

    }) 

    // move arrow

    let openArrow = this.firstElementChild
    openArrow.classList.toggle("rotate")

    if (openArrow.classList.contains("rotate")){

      // style for arrow
      openArrow.style.color = "#333"
      openArrow.style.transition = ".3s ease"
    }

    // add or remove activejs
    document.querySelectorAll(this.dataset.name).forEach((name) => {
      // if (el.classList.contain("activejs"))
      name.classList.toggle("displayFlex")
    })
  })
})


//  action on sub name

subjectsArray.forEach((subName) => {

  // on sub name click
  subName.addEventListener("click", function (){

    // add or remove displayFlex

    document.querySelectorAll(this.dataset.info).forEach((info) => {
      // if (info.classList.contain("displayFlex"))
      
      info.classList.toggle("displayFlex")
    })
  })
})








// weeksArray.forEach((ele) => {
//   ele.addEventListener("click", (e) => {
//     let week1found1 = document.querySelectorAll(e.currentTarget.dataset.cont)
//     let week1found1Array = Array.from(week1found1)
//     console.log(week1found1Array)
//     for (let i = 0; i < week1found1Array.length; i++){
//       week1found1Array[i].style.display = "block"
//     }
//     console.log("12")

//     // document.querySelector(e.currentTarget.dataset.cont).style.display = "block"
//   });
// });

// subjectsArray.forEach((ele) => {
//   ele.addEventListener("click", function(e){
//     let infoo = document.querySelectorAll(e.currentTarget.dataset.cont)
//     let infooArray = Array.from(infoo)
//     for (i = 0; i < infooArray.length; i++){
//       infooArray[i].style.display = "flex"
//     }
//   })
// })

// console.log((weeks.style.display = "block"))