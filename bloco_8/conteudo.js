const wakeUp = () => console.log('Acordando!!');
const haveBreakfast = () => console.log('Bora tomar café!!');
const goSleep = () => console.log('Partiu dormir!!');

const doingThing = (func) => func();

doingThing(wakeUp);
doingThing(haveBreakfast);
doingThing(goSleep);
