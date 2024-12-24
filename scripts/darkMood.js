//Grabbing elements:
const darkMood=document.querySelector('.dark-mood');
const header=document.querySelector('header');
const navLinks = document.querySelectorAll('.navBar a');
const darkFont='#fbf6ee';
const darkBg='#1b1b2c';
const lightFont='#e10e2b';
const lightBg='#FBF6EE';
let mood='light';
darkMood.addEventListener('click',changeMood);
console.log('Inside the darkMood file!');

function changeMood(){
    // console.log('Inside the function!');

    if(mood ==='light'){
        // console.log('Mood was light and will change to dark!');
        document.body.style.backgroundColor = darkBg; document.body.style.color = darkFont; header.style.color = darkFont; 
    
        navLinks.forEach(link => link.style.setProperty('color', darkFont, 'important'));
        mood = 'dark'; 
        console.log('mood is: ', mood);
    }else{
        // console.log('Mood was dark and will change to light!');
        document.body.style.setProperty('background-color', lightBg, 'important');
        document.body.style.setProperty('color', lightFont, 'important'); 
        navLinks.forEach(link => link.style.setProperty('color', lightFont, 'important'));
        mood = 'light'; 
        console.log('mood is: ', mood); }

    
}