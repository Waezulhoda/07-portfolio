import  {skills,projects}  from "./data.js";

const skillsEl=document.querySelector('.skills')

const projectsEl=document.querySelector('.projects')

const skillHtml=skills.map((skill)=>{
    return `
    <div class='skill'>
        <h2>${skill.name}</h2>
        <h3>${skill.experience} Years of Experience</h3>
    </div>`
}).join('')

const projectsHTML=projects.map((project)=>{
    return `
    <div class='project'>
        <img src="${project.image}" alt="${project.name}">
        <h2>${project.name}</h2>
        <div class='techs'>${project.techs.map((tech)=>{
            return `<h3>${tech}<h3>`
        }).join('')}</div>
        <div class='project-details'>
            <a href='${project.preview}'>VIEW PROJECT</a>
            <a href='${project.code}'>VIEW CODE</a>
        </div>
    </div>`
})

skillsEl.innerHTML=skillHtml
projectsEl.innerHTML=projectsHTML