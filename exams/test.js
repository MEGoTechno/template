let myreq = new XMLHttpRequest()
myreq.open("GET", "../exams/json/exams.json")
myreq.send()

myreq.onload = function(){
    let exams = JSON.parse(this.responseText)
    console.log(exams)
    add_exam(exams)
}


function add_exam (exams) {
    let out = "";
    for (let i = 0; i < exams.length; i++){
        console.log(exams[i].moduleName)
        let content = document.querySelector(`.${exams[i].moduleName} .content`)
        out = `
         <div class="exam-card">
        <div class="exam-name">
            <h3>${exams[i].examName}</h3> 
            </div> <hr>
        <div class="exam-info">
            <div class="detail">
                <span>topic:</span> <span class="topic subinfo">${exams[i].topic}</span>
            </div>
            <div class="detail">
                <span>questions number:</span> <span class="nums subinfo">${exams[i].nums}</span>
            </div>
            <div class="detail">
                time: <span class="time subinfo">${exams[i].time}</span>
            </div>
            <div class="detail ">
                your score: <span class="score subinfo"> --</span>
            </div>
        </div> <hr>
        <div class="exam-foot">
            <div class="btn" id="">start</div>
            <span>done<i class="fa-solid fa-check"></i></span>
        </div>
    </div> `
    console.log(out)
    content.insertAdjacentHTML("beforeend", out)
}
}


// fetch("../exams/json/exams.json")
// .then (function(response) {
//     // console.log(response)
//     return response.json()
// })
// .then(function(exams){
//     for (let exam of exams){
//     console.log(exam)
// }})





// request for exams cards
let exam_request = new XMLHttpRequest()

exam_request.open("GET", "../exams/json/exams.json", true)
exam_request.send()

exam_request.onload = function(){
    let exams = JSON.parse(exam_request.responseText)
    console.log(exams)
    let exams_number = exams.length

    add_data_exam(exams)
}

// append exams to main page
function add_data_exam(exams) {

    console.log(`.${exams[0].moduleName}`)
    for(let i = 1; i <= exams.length; i++){
        let n = i - 1;
        console.log(n)


        // build card

        let content = document.querySelector(`.${exams[n].moduleName} .content`)
        // start exam head >>>>>>
        let exam_card = document.createElement("div")
        let exam_nam = document.createElement("div")
        let exam_nam_element = document.createElement("h3")
        let exam_nam_text = document.createTextNode(`${exams[n].examName}`)
        let hr = document.createElement("hr")

        // add classes
        exam_card.classList.add("exam-card")
        exam_nam.classList.add("exam-name")
        // append to content
        content.appendChild(exam_card)
        exam_card.appendChild(exam_nam)
        exam_nam.appendChild(exam_nam_element)
        exam_nam.appendChild(hr)
        exam_nam_element.appendChild(exam_nam_text)
        // end exam head >>>>>>>>>>>>


        // start exam info >>>>>>>>>>>>
        let exam_info = document.createElement("div")
        let detail1 = document.createElement("div")
        let detail2 = document.createElement("div")
        let detail3 = document.createElement("div")
        let detail4 = document.createElement("div")
        let span1 = document.createElement("span")
        let span2 = document.createElement("span")
        let span3 = document.createElement("span")
        let span4 = document.createElement("span")
        let topic = document.createTextNode("topic:")
        let exams_number = document.createTextNode("question`s number:")
        let time = document.createTextNode(`time:`)
        let score = document.createTextNode("score:")

        // add classes
        exam_info.classList.add("exam-info")
        detail1.classList.add("detail")
        detail2.classList.add("detail")
        detail3.classList.add("detail")
        detail4.classList.add("detail")


        let span_topic = document.createElement("span")
        let span_nums = document.createElement("span")
        let span_time = document.createElement("span")
        let span_score = document.createElement("span")
        span_topic.className = ("topic subinfo")
        span_nums.className = ("nums subinfo")
        span_time.className = ("time subinfo")
        span_score.className = ("score subinfo")


        let topic_nam = document.createTextNode(`${exams[n].topic}`)
        let topic_nums = document.createTextNode(`${exams[n].nums}`)
        let topic_time = document.createTextNode(`${exams[n].time}`)

        // append info 
        exam_card.appendChild(exam_info)
        exam_info.appendChild(detail1)
        detail1.appendChild(span1)
        span1.appendChild(topic)
        detail1.appendChild(span_topic)
        span_topic.appendChild(topic_nam)

        exam_info.appendChild(detail2)
        detail2.appendChild(span2)
        span2.appendChild(exams_number)
        detail2.appendChild(span_nums)
        span_nums.appendChild(topic_nums)

        exam_info.appendChild(detail3)
        detail3.appendChild(span3)
        span3.appendChild(time)
        detail3.appendChild(span_time)
        span_time.appendChild(topic_time)
        
        exam_info.appendChild(detail4)
        detail4.appendChild(span4)
        span4.appendChild(score)
        detail4.appendChild(span_score)
        // end info
        
    }
}