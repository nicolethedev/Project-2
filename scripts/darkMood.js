//Grabbing elements:
const darkMood=document.querySelector('.dark-mood');
const navLinks = document.querySelectorAll('.navBar a');
const darkMoodSvg=document.querySelector('.dark-mood svg');
const hamburgerText=document.querySelector('.hamburger-content .text');
const hamburgerSvg=document.querySelector('.hamburger-content svg');
const viewService=document.querySelector('.view-services');
const viewServiceLine=document.querySelector('.services-link a');
const serviceBullet=document.querySelectorAll('.bullet-point');
const getInTouch=document.querySelector('.get-in-touch-link');

// console.log('HERE!');

//color changes variables:
const darkFont='#fbf6ee';
const darkBg='#1b1b2c';
const lightFont='#e10e2b';
const lightBg='#FBF6EE';
const bulletC='#252541';
let mood='light';

//Function:
darkMood.addEventListener('click',changeMood);
console.log('Inside the darkMood file!');

function changeMood(){
    
    if(mood ==='light'){
        document.body.style.backgroundColor = darkBg; document.body.style.color = darkFont; 
        
        navLinks.forEach(link => link.style.setProperty('color', darkFont, 'important'));
        // darkMoodSvg.style.fill=darkFont;
        darkMoodSvg.style.setProperty('fill', darkFont, 'important');
        hamburgerText.style.setProperty('color',darkFont,'important');
        hamburgerSvg.style.setProperty('fill',darkFont,'important');

        viewService.style.setProperty('color',darkFont,'important');
        viewServiceLine.style.setProperty('border-bottom-color',darkFont,'important');

        getInTouch.style.setProperty('color',darkFont,'important');
        getInTouch.style.setProperty('border-bottom-color',darkFont,'important');
        serviceBullet.forEach(bullet => { bullet.style.setProperty('color', bulletC, 'important'); });

        mood = 'dark'; 
        console.log('mood is: ', mood);
    }else{
        // console.log('Mood was dark and will change to light!');
        document.body.style.setProperty('background-color', lightBg, 'important');
        document.body.style.setProperty('color', lightFont, 'important'); 
        darkMoodSvg.style.setProperty('fill', lightFont, 'important');
        hamburgerText.style.setProperty('color',lightFont,'important');
        hamburgerSvg.style.setProperty('fill',lightFont,'important');
        navLinks.forEach(link => link.style.setProperty('color', lightFont, 'important'));

        viewService.style.setProperty('color',lightFont,'important');
        viewServiceLine.style.setProperty('border-bottom-color',lightFont,'important');
        getInTouch.style.setProperty('color',lightFont,'important');
        getInTouch.style.setProperty('border-bottom-color',lightFont,'important');
        serviceBullet.forEach(bullet => { bullet.style.setProperty('color', lightFont, 'important'); });

        mood = 'light'; 
        console.log('mood is: ', mood); }

}