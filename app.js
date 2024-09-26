const educatorInfo = [{
  id:1,
  name:"Jonas Schiedtman",
  course:"Full Stack web development",
  langauge:"English",
  url:'./img/4.jpg'
},
{
  id:2,
  name:"Maximilian Schuwrzmuller",
  course:"Full Stack web development",
  langauge:"German",
  url:'./img/2.jpg'
},
{
  id:3,
  name:"Hitesh Chaudhary",
  course:"Full Stack web development",
  langauge:"Hindi",
  url:'./img/3.jpg'
},
{
  id:4,
  name:"Andrew Ng",
  course:"machine Learning",
  langauge:"English",
  url:'./img/1.jpg'
},
{
  id:5,
  name:"Stephen Macklore",
  course:"Block Chain Development",
  langauge:"English",
  url:'./img/5.jpg'
},
{
  id:6,
  name:"Ahmed Burse",
  course:"java Development",
  langauge:"Arabic",
  url:'./img/3.jpg'
},
{ id:7,
  name:"Hamza Robertson",
  course:"Machine Learning",
  langauge:"Arabic",
  url:'./img/6.jpg'
},
{
  id:8,
  name:"Mohamamd mustaliq ",
  course:"Block Chain Development",
  langauge:"Arabic",
  url:'./img/1.jpg'
},
{
  id:9,
  name:"Thomas Muller",
  course:"Machine Learning",
  langauge:"German",
  url:'./img/4.jpg'
}
]


window.addEventListener('scroll',()=>{
     let scrollY = window.scrollY;
     let totalHeight = document.body.scrollHeight - window.innerHeight;
     let percentScrolled = (scrollY/totalHeight) * 100;
     let translateX = (percentScrolled / 5) * -4;
     document.querySelector('.container').style.transform = `translateX(${translateX}%)`;
   })
   
   
 ////////////////////////////////////  SECTION -2 ////////////////////

 const closeBtn = document.getElementById('close-btn');
 const infoDiv = document.getElementById('sec-info');
 const resetBtn = document.getElementById('original-btn');
 const techList = document.querySelectorAll('li');


 closeBtn.addEventListener('click',(e)=>{
  infoDiv.style.display="none";
 },false);

 const teacherDisplay = document.getElementById('rest-display-section');
 const eduInfos = educatorInfo.map(teacher=>{
  return `
   <div class="info-of-teacher">
                <figure>
                  <div class="img-container-sec">
                  <img src="${teacher.url}" alt="">
                  </div>
               <p class="fig-text">
                <b class="edu-name">${teacher.name}</b> <br>
                <span class="edu-tech">${teacher.course}</span> <br>
                <span class="edu-lang">${teacher.langauge}</span>
               </p>
                </figure>
              </div>`;
          
 }).join('');
 teacherDisplay.innerHTML=eduInfos;
resetBtn.addEventListener('click',(evt)=>{
  techList.forEach(list=>{
    list.classList.remove('active-li');
  })

  const eduInfos = educatorInfo.map(teacher=>{
    return `
     <div class="info-of-teacher">
                  <figure>
                    <div class="img-container-sec">
                    <img src="${teacher.url}" alt="">
                    </div>
                 <p class="fig-text">
                  <b class="edu-name">${teacher.name}</b> <br>
                  <span class="edu-tech">${teacher.course}</span> <br>
                  <span class="edu-lang">${teacher.langauge}</span>
                 </p>
                  </figure>
                </div>`;
            
   }).join('');
   teacherDisplay.innerHTML=eduInfos;
},false)
 // filter wale-sections
 const hindi = document.getElementById('hindi');
 const english = document.getElementById('english');
 const arabic = document.getElementById('arabic');
 const german = document.getElementById('german');
 const french = document.getElementById('french');

function filterEducatorLang(language){
  const filteredArrray= educatorInfo.filter((element)=>  element.langauge ===language);
  return filteredArrray;
}
function generateEducatorHTML(educators) {
  return educators.map(teacher => {
    return `<div class="info-of-teacher">
                <figure>
                  <div class="img-container-sec">
                    <img src="${teacher.url}" alt="${teacher.name}">
                  </div>
                  <p class="fig-text">
                    <b class="edu-name">${teacher.name}</b> <br>
                    <span class="edu-tech">${teacher.course}</span> <br>
                    <span class="edu-lang">${teacher.langauge}</span>
                  </p>
                </figure>
              </div>`;
  }).join(''); // Join the array into a single HTML string
}
 hindi.addEventListener('click',(evt)=>{
  techList.forEach(each=>{
    each.classList.remove('active-li');
  })
  hindi.classList.add('active-li');
  teacherDisplay.innerHTML=``;
  const filterLang = filterEducatorLang("Hindi");
  const finalHindi = generateEducatorHTML(filterLang);
  teacherDisplay.innerHTML = finalHindi;
 },false);

english.addEventListener('click',(evt)=>{
  techList.forEach(each=>{
    each.classList.remove('active-li');
  })
  english.classList.add('active-li');
  teacherDisplay.innerHTML=``;
  const filterLang = filterEducatorLang("English");
  const finalEnglish = generateEducatorHTML(filterLang);
  teacherDisplay.innerHTML = finalEnglish;
},false);

arabic.addEventListener('click',(evt)=>{
  techList.forEach(each=>{
    each.classList.remove('active-li');
  })
  arabic.classList.add('active-li');
  teacherDisplay.innerHTML=``;
  const filterLang = filterEducatorLang("Arabic");
  const finalArabic = generateEducatorHTML(filterLang);
  teacherDisplay.innerHTML = finalArabic;
},false);

german.addEventListener('click',(evt)=>{
  techList.forEach(each=>{
    each.classList.remove('active-li');
  })
  german.classList.add('active-li');
  teacherDisplay.innerHTML=``;
  const filterLang = filterEducatorLang("German");
  const finalGerman = generateEducatorHTML(filterLang);
  teacherDisplay.innerHTML = finalGerman;

},false);

french.addEventListener('click',(evt)=>{
  techList.forEach(each=>{
    each.classList.remove('active-li');
  })
  french.classList.add('active-li');
  teacherDisplay.innerHTML=``;
  const filterLang = filterEducatorLang("French");
  const finalFrench = generateEducatorHTML(filterLang);
  teacherDisplay.innerHTML = finalFrench;
})

/// TECHNOLOGY-FILTER

 const fullStack = document.getElementById('fullstack');
 const java = document.getElementById('java');
 const AiMl = document.getElementById('ai_ml');
 const blackChain = document.getElementById('blockchain');

 function filterTechnology(tech){
  const filteredArray = educatorInfo.filter((item) =>{
    return item.course === tech;
  });
  return filteredArray;
 }

 function techHTMLCollection(educator){
  return educator.map(teacher=>{
    return `<div class="info-of-teacher">
    <figure>
      <div class="img-container-sec">
        <img src="${teacher.url}" alt="${teacher.name}">
      </div>
      <p class="fig-text">
        <b class="edu-name">${teacher.name}</b> <br>
        <span class="edu-tech">${teacher.course}</span> <br>
        <span class="edu-lang">${teacher.langauge}</span>
      </p>
    </figure>
  </div>`
  }).join(' ');
 }
 fullStack.addEventListener('click',function(evt){
  techList.forEach(each=>{
    each.classList.remove('active-li');
  })
  fullStack.classList.add('active-li');
  teacherDisplay.innerHTML=``;
  const filterTech = filterTechnology("Full Stack web development");
  const FinalDev = techHTMLCollection(filterTech);
  teacherDisplay.innerHTML = FinalDev;
 },false);

 java.addEventListener('click',function(evt){
  techList.forEach(each=>{
    each.classList.remove('active-li');
  })
  java.classList.add('active-li');
  teacherDisplay.innerHTML=``;
  const filterTech = filterTechnology("java Development");
  const FinalDev = techHTMLCollection(filterTech);
  teacherDisplay.innerHTML = FinalDev;
 },false);

 AiMl.addEventListener('click',function(evt){
  techList.forEach(each=>{
    each.classList.remove('active-li');
  })
  AiMl.classList.add('active-li');
  teacherDisplay.innerHTML=``;
  const filterTech = filterTechnology("Machine Learning");
  const FinalDev = techHTMLCollection(filterTech);
  teacherDisplay.innerHTML = FinalDev;
 },false);

 blackChain.addEventListener('click',function(evt){
  techList.forEach(each=>{
    each.classList.remove('active-li');
  })
  blackChain.classList.add('active-li');
  teacherDisplay.innerHTML=``;
  const filterTech = filterTechnology("Block Chain Development");
  const FinalDev = techHTMLCollection(filterTech);
  teacherDisplay.innerHTML = FinalDev;
 },false);



 ///// section 2 changed started /////
 const courses = [
  {
      id: "1",
      Name: "React JS",
      Educator: "Jonas Schiedtmann",
      language: "English",
      url:'./img/4.jpg',
      link: "https://www.udemy.com/course/the-ultimate-react-course/?couponCode=OF83024C"
  },
  {
      id: "2",
      Name: "JavaScript",
      Educator: "Hitesh Chaudhary",
      language: "Hindi",
      url:'./img/1.jpg',
      link: "https://www.youtube.com/watch?v=Hr5iLG7sUa0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"
  },
  {
      id: "3",
      Name: "Machine Learning",
      Educator: "Ahmed Tallem",
      language: "Arabic",
      url:'./img/3.jpg',
      link: "https://www.pw.live/career-option/artificial-intelligence-and-machine-learning7"
  },
  {
      id: "4",
      Name: "Java Development",
      Educator: "Abdul Bari",
      language: "English",
      url:'./img/2.jpg',
      link: "https://www.udemy.com/course/java-se-programming/?couponCode=OF83024C"
  },
  {
      id: "5",
      Name: "Node.js",
      Educator: "Maximilian Schwurzmuller",
      language: "German",
      url:'./img/5.jpg',
      link: "https://www.udemy.com/course/nodejs-the-complete-guide/?couponCode=OF83024C"
  },
  {
      id: "6",
      Name: "Docker",
      Educator: "Maximilian Schwurzmuller",
      language: "English",
      url:'./img/1.jpg',
      link: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/?couponCode=OF83024C"
  }
];

const courseRender = document.getElementById('course-render-list');
const renderedCourse = courses.map((course)=>{
  return `
     <div id="course-information">
              <figure class="course-fig-tag">
                <img src="${course.url}" alt="">
                <p class="course-name">${course.Name}</p>
                <p class="course-educator-name">${course.Educator}</p>
                <p class="course-language-name">${course.language}</p>
                <a id="course-link" target="_blank" href="${course.link}">LINK</a>
              </figure>
            </div> 
  `
}).join(" ");
courseRender.innerHTML = renderedCourse;

const inputField = document.getElementById('input-form');
inputField.addEventListener('input',()=>{
  const searchTerm = inputField.value.toLowerCase();
  const filteredData = courses.filter(el=>{
    return el.Name.toLowerCase().includes(searchTerm);
  });
  courseRender.innerHTML=``;
  const filtered = filteredData.map((course)=>{
    return `
     <div id="course-information">
              <figure class="course-fig-tag">
                <img src="${course.url}" alt="">
                <p class="course-name">${course.Name}</p>
                <p class="course-educator-name">${course.Educator}</p>
                <p class="course-language-name">${course.language}</p>
                <a id="course-link" target="_blank" href="${course.link}">LINK</a>
              </figure>
            </div> 
    `
  }).join(" ");
  courseRender.innerHTML= filtered;

},false);

const trendingBoxList = document.getElementById('trending-course-list');
const trendingBtn = document.querySelector('.trending');
let trueFalse = false;
trendingBtn.addEventListener('click',(evt)=>{
  trueFalse = !trueFalse;
  if(trueFalse){
    trendingBoxList.style.display="block";
  }
  else{
    trendingBoxList.style.display="none";
  }
},false);

//4th-section bg changer
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const pink = document.getElementById('pink');
const fourthSection = document.getElementById('fourth-section');

function changeBg(color){
 fourthSection.style.backgroundColor=color;
}
green.addEventListener('click',(e)=>{
  changeBg('#7fbcbc');
},false);
yellow.addEventListener('click',(e)=>{
  changeBg('#e3a018');
},false);
pink.addEventListener('click',(e)=>{
  changeBg('#ff69b4');
},false);

const dragInfo = document.getElementById('drag-infos');
const lists = document.querySelectorAll('#tech-box');
const aboveBox = document.getElementById('to-drag-end');
const lowerBox = document.getElementById('tech-names-to-drag');

for(list of lists){
  list.addEventListener('dragstart',(evt)=>{
    dragInfo.innerText=``;
    let selected = evt.target;
    aboveBox.addEventListener('dragover',function(evt){
      evt.preventDefault();
    });
    aboveBox.addEventListener('drop',(evt)=>{
      aboveBox.appendChild(selected);
      selected=null;
    },false);

    lowerBox.addEventListener('dragover',function(evt){
      evt.preventDefault();
    });
    lowerBox.addEventListener('drop',(evt)=>{
      lowerBox.appendChild(selected);
      selected=null;
    },false);

  },false)
}

const myNameDiv = document.getElementById('img-name-hover');
const linkedIn = document.getElementsByClassName('linkedIn');
const yt = document.getElementsByClassName('Youtube');
const ig = document.getElementsByClassName('instagram');
const tw = document.getElementsByClassName('twitter');

function courserChange(input){
  let html = document.getElementsByTagName('html')[0];
  html.style.course=`url('./img/last-section/${input}'),auto`;
}

function courserOriginal(){
  let html = document.getElementsByTagName('html')[0];
  html.style.cursor = 'auto';
}

