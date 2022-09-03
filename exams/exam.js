
// fetch exams cards
let myreq_exam = new XMLHttpRequest()
myreq_exam.open("GET", "../exams/json/exams.json")
myreq_exam.send()

// get exams cards
myreq_exam.onload = function(){
    let exams = JSON.parse(this.responseText)
    add_exam(exams)
}

// add cards
function add_exam (exams) {
    let out = "";
    for (let i = 0; i < exams.length; i++){
        let content = document.querySelector(`.${exams[i].moduleName} .content`)
        out = `
         <div class="exam-card">
        <div class="exam-name">
            <h3></h3> 
            </div> <hr>
        <div class="exam-info">
            <div class="detail">
                <span>topic:</span> <span class="topic subinfo"></span>
            </div>
            <div class="detail">
                <span>questions\` number:</span> <span class="nums subinfo"></span>
            </div>
            <div class="detail">
                time: <span class="time subinfo"></span>
            </div>
            <div class="detail ">
                your score: <span class="score subinfo"> --</span>
            </div>
        </div> <hr>
        <div class="exam-foot">
            <div class="btn" id="${exams[i].id}${i + 1}">start</div>
            <span>done<i class="fa-solid fa-check"></i></span>
        </div>
    </div> `
    content.insertAdjacentHTML("beforeend", out)
}



    // add a spicific test

    let my_tests = document.querySelectorAll(".btn")
    // console.log(my_tests)

    my_tests.forEach((test) => {

        test.addEventListener("click", (e) => {

            // get test URL
            alert("this is under construction")
            let test_url = `${e.currentTarget.id}.json`
            // console.log(test_url)

            // hide exams card
            // hide_exams ()

            // get test
            // get_test(test_url)

        })
    })


function get_test(testURL){

    let myreq_test = new XMLHttpRequest()
    myreq_test.open("GET", `json/tests/${testURL}`)
    myreq_test.send()


    myreq_test.onload = function(){
        if(this.readyState === 4 && this.status === 200){

            let test = JSON.parse(this.responseText)
            console.log(test)
        
        // add test to page
        add_test(test)
        
        }
    }
}





}

// function hide exam
function hide_exams (){
    let exams_container = document.querySelector('.exams-container')
    exams_container.classList.remove("activejs")
    document.querySelector(".titleStudy").style.display = "none"
}

function add_test(test) {
    
}








