let title = document.getElementById('header-container');
title.style.backgroundColor = '#4CB069';

let emergencyTasks = document.querySelector('.emergency-tasks');
let emergencyTitles = document.querySelectorAll('.emergency-tasks h3');

emergencyTasks.style.backgroundColor = '#EE9F84';

for (let title of emergencyTitles) {
  title.style.backgroundColor = '#A500F3';
}


let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
let noEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');

noEmergencyTasks.style.backgroundColor = '#F4DB5E';

for (let title of noEmergencyTitles) {
  title.style.backgroundColor = '#232525';
}
