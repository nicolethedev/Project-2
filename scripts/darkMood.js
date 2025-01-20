//Grabbing elements:
const darkMood=document.querySelector('.dark-mood');
const navContainer=document.querySelector('.nav-container');
const navLinks = document.querySelectorAll('.nav-item a');
const ourSources= document.querySelectorAll('.out-source a');
const darkMoodSvg=document.querySelector('.dark-mood svg');
const hamburgerText=document.querySelector('.hamburger-content .text');
const hamburgerBars=document.querySelectorAll('.bar');
const viewService=document.querySelector('.view-services');
const viewServiceLine=document.querySelector('.services-link a');
const serviceBullet=document.querySelectorAll('.bullet-point');
const getInTouch=document.querySelector('.get-in-touch-link');
const hrElements=document.querySelectorAll('hr');
const awards = document.querySelector('.awards');
const connect = document.querySelector('.connect');
const footer = document.querySelector('.footer');



// console.log('HERE!');

//color changes variables:
const darkFont='#fbf6ee';
const darkBg='#1b1b2c';
const darkBgService = '#252541';
const lightBgService = '#F93756';
const lightFont='#e10e2b';
const lightBg='#FBF6EE';
const bulletC='#252541';
const darkHr = darkFont;
const lightHr = lightFont;
let mood='light';

//Function:
darkMood.addEventListener('click',changeMood);
console.log('Inside the darkMood file!');

function changeMood(){
    
    if(mood ==='light'){
        document.body.style.backgroundColor = darkBg; 
        document.body.style.color = darkFont; 
        navContainer.style.backgroundColor=darkBg;
        navLinks.forEach(link => link.style.setProperty('color', darkFont, 'important'));
        // darkMoodSvg.style.fill=darkFont;
        darkMoodSvg.style.setProperty('fill', darkFont, 'important');
        hamburgerText.style.setProperty('color',darkFont,'important');
        hamburgerBars.forEach(bar=>{ bar.style.setProperty('background-color',darkFont,'important');});
        ourSources.forEach(source=>{ source.style.color=darkFont});
        viewService.style.setProperty('color',darkFont,'important');
        viewServiceLine.style.setProperty('border-bottom-color',darkFont,'important');

        getInTouch.style.setProperty('color',darkFont,'important');
        getInTouch.style.setProperty('border-bottom-color',darkFont,'important');
        serviceBullet.forEach(bullet => { bullet.style.setProperty('color', bulletC, 'important'); });
        hrElements.forEach(hr => hr.style.setProperty('background-color', darkHr, 'important')); 
        awards.style.backgroundColor=darkBgService;
        connect.style.backgroundColor=darkBgService;
        footer.style.backgroundColor=darkBgService;

        mood = 'dark'; 
        console.log('mood is: ', mood);
    }else{
        // console.log('Mood was dark and will change to light!');
        document.body.style.setProperty('background-color', lightBg, 'important');
        document.body.style.setProperty('color', lightFont, 'important'); 
        navContainer.style.backgroundColor=lightBg;
        ourSources.forEach(source=>{ source.style.color=lightFont});

        darkMoodSvg.style.setProperty('fill', lightFont, 'important');
        hamburgerText.style.setProperty('color',lightFont,'important');
        hamburgerBars.forEach(bar=>{bar.style.setProperty('background-color',lightFont,'important')});
        navLinks.forEach(link => link.style.setProperty('color', lightFont, 'important'));

        viewService.style.setProperty('color',lightFont,'important');
        viewServiceLine.style.setProperty('border-bottom-color',lightFont,'important');
        getInTouch.style.setProperty('color',lightFont,'important');
        getInTouch.style.setProperty('border-bottom-color',lightFont,'important');
        serviceBullet.forEach(bullet => { bullet.style.setProperty('color', lightFont, 'important'); });
        hrElements.forEach(hr => hr.style.setProperty('background-color', lightHr, 'important'));
        awards.style.backgroundColor=lightBgService;
        connect.style.backgroundColor=lightBgService;
        footer.style.backgroundColor=lightBgService;

        mood = 'light'; 
        console.log('mood is: ', mood); }

}