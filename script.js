var formDataGlobal = {};
var topics=0

const arr = [
    {id: 1, date: "09-06-2021", status: "Present", topicsCovered: "conditions"},
    {id: 2, date: "10-06-2021", status: "Present", topicsCovered: "AR"},
    {id: 3, date: "13-06-2021", status: "Present", topicsCovered: "loops"},
    {id: 4, date: "15-06-2021", status: "Present", topicsCovered: "arrays"}
]

const assessment_info = [
    {id:4884,type:"Assignment-1", submitted:"No", submissionDate:"22-06-2021", grade:"--NA--"},
    {id:4884,type:"Assignment-2", submitted:"No", submissionDate:"20-06-2021", grade:"--NA--"},
    {id:4884,type:"Assignment-3", submitted:"Yes", submissionDate:"18-06-2021", grade:95},
    {id:4884,type:"Assignment-4", submitted:"Yes", submissionDate:"12-06-2021", grade:95},
    {id:4884,type:"Assignment-5", submitted:"Yes", submissionDate:"01-06-2021", grade:95}
]

const personalInfo = {
    id:'28',
    first_name:'Tiago',
    emailId:'tiago147@gmail.com',
    gender:'Male',
    age:'10 Years',
    Country:'India',
    timeZone:'GMT+5:30',
    courseName:'Future-Tech',
    courseInfo:'Link',
    ageGrade:'11-14 years',
    numberOfSessions:'11',
    durationOfSession:'60 Minutes',
    hoursPerWeek:'3 hours',
    dor:'24-06-2021',
    sessionsCompleted:'13',
    missedSessions:'0',
    sessionsResheduled:'0'
}

for (i=0;i<assessment_info.length;i++){
    
        let date = assessment_info[i].submissionDate.slice(0,2)
        let month = assessment_info[i].submissionDate.slice(3,5)
        let year = assessment_info[i].submissionDate.slice(6,10)
        assessment_info[i].submissionDate=`${year}-${month}-${date}`
    
    
}


window.onload = function(){
    const attendenceDiv = document.getElementById('attendenceDiv')
    const dateOfSessionDiv= document.getElementById('dateOfSessionDiv')
    const topicsCoveredDiv = document.getElementById('topicsCoveredDiv')
    const learningOutcomeValue= document.getElementById('learningOutcomeValue')

    const typeDiv = document.getElementById('typeDiv')
    const submittedDiv = document.getElementById('submittedDiv')
    const submissionDateDiv = document.getElementById('submissionDateDiv')
    const gradeDiv = document.getElementById('gradeDiv')

    // personal information
    const fullName=document.getElementById('inputName')
    const emailId=document.getElementById('inputEmail')
    const gender=document.getElementById('inputGender')
    const age=document.getElementById('inputAge')
    const inputCountry=document.getElementById('inputCountry')
    const inputTimezone=document.getElementById('inputTimezone')

    // course information
    const courseName=document.getElementById('inputCourseName')
    const courseInformation=document.getElementById('courseInformation')
    const ageGrade=document.getElementById('inputAgeGrade')
    const numberOfSessions=document.getElementById('inputNumberOfSessions')
    const durationOfSession=document.getElementById('inputDurationPerSession')
    const hoursPerWeekInput=document.getElementById('hoursPerWeekInput')
    const dor=document.getElementById('inputDateOfReport')
    const sessionsCompletedInput=document.getElementById('sessionsCompletedInput')
    const missedSessionsInput= document.getElementById('missedSessionsInput')
    const sessionsResheduledInput=document.getElementById('sessionsResheduledInput')
     let date = personalInfo.dor.slice(0,2)
    let month = personalInfo.dor.slice(3,5)
    let year = personalInfo.dor.slice(6,10)
    let dateOfReport =`${year}-${month}-${date}`
    fullName.setAttribute('value',personalInfo.first_name)
    emailId.setAttribute('value',personalInfo.emailId)
    gender.setAttribute('value',personalInfo.gender)
    age.setAttribute('value',personalInfo.age)
    inputCountry.setAttribute('value',personalInfo.Country)
    inputTimezone.setAttribute('value',personalInfo.timeZone)
    courseName.setAttribute('value',personalInfo.courseName)
    courseInformation.setAttribute('value',personalInfo.courseInfo)
    ageGrade.setAttribute('value',personalInfo.ageGrade)
    numberOfSessions.setAttribute('value',personalInfo.numberOfSessions)
    durationOfSession.setAttribute('value',personalInfo.durationOfSession)
    hoursPerWeekInput.setAttribute('value',personalInfo.hoursPerWeek)
    dor.setAttribute('value',dateOfReport)
    sessionsCompletedInput.setAttribute('value',personalInfo.sessionsCompleted)
    missedSessionsInput.setAttribute('value',personalInfo.missedSessions)
    sessionsResheduledInput.setAttribute('value',personalInfo.sessionsResheduled)

    
  
    for (i=0; i<arr.length; i++){
        topics++
        // dynamic addition attendence fields
        let span = document.createElement('span')
        span.setAttribute('id',`attendenceStatus${i+1}`)
        span.innerHTML=`<select id="status${i}" style="height: 24px;">
                             <option value="--Status--">--Status--</option>
                             <option value="Present" selected>Present</option>
                             <option value="Absent">Absent</option>
                        </select>`
        attendenceDiv.appendChild(span)

        // dynamic addition of date of session fields
        
            let date = arr[i].date.slice(0,2)
            let month = arr[i].date.slice(3,5)
            let year = arr[i].date.slice(6,10)
            arr[i].date=`${year}-${month}-${date}`
        
        span = document.createElement('span')
        span.setAttribute('id',`dateOfSession${i+1}`)
        span.innerHTML=`<input type="date" value="${arr[i].date}" name="date" id="date${i+1}">`
        dateOfSessionDiv.appendChild(span)


        // dynamic addition of topics coverd section
        span = document.createElement('span')
        span.classList.add('inner-text')
        span.innerHTML=`<input type="text" name="topicCovered${i+1}" id="topicCovered${i+1}" value="${arr[i].topicsCovered}" style="height: 24px;">
        <div class="error" id="topicsCoveredError${i+1}"><div>`
        topicsCoveredDiv.appendChild(span)
    }


    for (i=0;i<assessment_info.length;i++){
        // dynamic addition of type field
        let span = document.createElement('span')
        span.classList.add('type')
        span.innerHTML=`<input type="text" value="${assessment_info[i].type}" id="type${i+1}">`
        typeDiv.appendChild(span)

        // dynamic additon of submitted field
        span = document.createElement('span')
        span.classList.add('submitted')
        span.innerHTML=`<input type="text" value="${assessment_info[i].submitted}" id="submitted${i+1}">`
        submittedDiv.appendChild(span)

        // dynamic addition of submission date div field 
        span = document.createElement('span')
        span.classList.add('submission-date')
        span.innerHTML=`<input type="date" value="${assessment_info[i].submissionDate}" name="" id="submissionDate${i+1}">`
        submissionDateDiv.appendChild(span)
        
        

        // dynamic addition of gradeDiv field
        span = document.createElement('span')
        span.classList.add('grade')
        
            span.innerHTML=`<input type="text" value="${assessment_info[i].grade}" name="grade${i+1}" id="grade${i+1}">`
            gradeDiv.appendChild(span)
    }


}


function submit(){
  const dor=document.getElementById('inputDateOfReport')
  const emailId=document.getElementById('inputEmail')
    id = window.location.href;
    var fullId = id.substring(id.indexOf("=", 52) + 1, id.indexOf("ok", 53));
    // var fullId = 28

    for (i=0;i<arr.length;i++){
      var topicsCovered=document.getElementById(`topicCovered${i+1}`)
      var topicsCoveredError=document.getElementById(`topicsCoveredError${i+1}`)
      if (topicsCovered.value.length<35){
        topics--
        topicsCoveredError.classList.remove('active')
      }
    }
    if (topics!==0){
      alert('Topics Covered length should be less then 35 characters')
    }
    if (topics==0){

      formDataGlobal["lms_id"] = fullId;
      formDataGlobal['dor']=dor.value;
      formDataGlobal["email"]=emailId.value;
      formDataGlobal['country']= inputCountry.value
      formDataGlobal['time_zone']= inputTimezone.value
      formDataGlobal['hoursPerWeek'] = hoursPerWeekInput.value
      formDataGlobal['noOfSessionCompleted']=sessionsCompletedInput.value
      formDataGlobal['noOfMissedSession']=missedSessionsInput.value
      formDataGlobal['noOfSessionRescheduled']=sessionsResheduledInput.value
      formDataGlobal['learningOutcome']=learningOutcomeValue.value
  
      // saving the data of the dynamic attendence field in the formDataGlobal object
      var attendence =[]
      for (i=0; i<arr.length; i++){
          var date = document.getElementById(`date${i+1}`).value
          var status = document.getElementById(`status${i}`)
          var topicsCovered = document.getElementById(`topicCovered${i+1}`)
         
  
          let year = date.slice(0,4)
        let month = date.slice(5,7)
        let dateActual= date.slice(8,9+1)
        
         date=`${dateActual}-${month}-${year}`
  
          let attendenceObj={
              attendeceId:i+1,
              date:date,
              status:status.value,
              topicsCovered:topicsCovered.value
          }
          attendence.push(attendenceObj)
      }
      formDataGlobal['attendence'] = attendence
      
      assesments=[]
      for (i=0;i<assessment_info.length; i++){
          var type = document.getElementById(`type${i+1}`).value
          var submitted = document.getElementById(`submitted${i+1}`).value
          var submissionDate=document.getElementById(`submissionDate${i+1}`).value
          
              let year = submissionDate.slice(0,4)
              let month = submissionDate.slice(5,7)
              let date = submissionDate.slice(8,10)
              submissionDate=`${date}-${month}-${year}`
          
          
      
          var grade = document.getElementById(`grade${i+1}`).value
  
          var assesment={
              id:assessment_info[i].id,
              type:type,
              completion_status:submitted,
              completed_on:submissionDate,
              score:grade
          }
  
          assesments.push(assesment)
  
      }
      formDataGlobal['assessment_info']=assesments
  
     console.log(formDataGlobal); 
  
     register(formDataGlobal)
        .then((data) => {
          console.log("promise completed", data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
}


async function register(formDataGlobal) {
    document.getElementById('loader').style.display='block'
    console.log("what we need", formDataGlobal);
    var response = await fetch(
      "URL",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataGlobal),
      }
    );
    response.text().then((text) => {
      
      var data = JSON.parse(text);
      if (data.status == 200) {
      //  document.getElementById('loader').style.display='none'
        console.log("created successfully");
        // window.location.href=`https://theakshaycoder.github.io/Edit-and-export-report-card-page/?id=${fullId}ok`
      }
      // container[0].innerHTML = `<iframe src="${data.reportcardUrl}" frameborder="0"></iframe>`
      
      console.log(data);
    });
  }