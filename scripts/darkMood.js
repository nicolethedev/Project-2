//Grabbing elements:
const darkMood=document.querySelector('.dark-mood');
const navLinks = document.querySelectorAll('.navBar a');
const darkMoodSvg=document.querySelector('.dark-mood svg');
const hamburgerText=document.querySelector('.hamburger-content .text');
const hamburgerSvg=document.querySelector('.hamburger-content svg');

//color changes variables:
const darkFont='#fbf6ee';
const darkBg='#1b1b2c';
const lightFont='#e10e2b';
const lightBg='#FBF6EE';
let mood='light';

//Function:
darkMood.addEventListener('click',changeMood);
console.log('Inside the darkMood file!');
// console.log('HERE!');

function changeMood(){
    
    if(mood ==='light'){
        document.body.style.backgroundColor = darkBg; document.body.style.color = darkFont; 
        
        navLinks.forEach(link => link.style.setProperty('color', darkFont, 'important'));
        // darkMoodSvg.style.fill=darkFont;
        darkMoodSvg.style.setProperty('fill', darkFont, 'important');
        hamburgerText.style.setProperty('color',darkFont,'important');
        hamburgerSvg.style.setProperty('fill',darkFont,'important');

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

        mood = 'light'; 
        console.log('mood is: ', mood); }

    
}