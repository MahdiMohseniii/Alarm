
const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');
const setAlarmBtn = document.querySelector('button');
let alarmTime , alarmState = 'noset';
const ringtone = new Audio('../fourth/Ringtone27.mp3');
const content = document.querySelector('.content');

for (let i = 23; i >= 0; i--) {
    let value = i < 10 ? '0' + i : i;
    let option = `<option value="${value}">${value}</option>`;
    selectMenu[0].insertAdjacentHTML('beforeend', option);
}

for (let i = 59; i >= 0; i--) {
    let value = i < 10 ? '0' + i : i;
    let option = `<option value="${value}">${value}</option>`;
    selectMenu[1].insertAdjacentHTML('beforeend', option);
}

setInterval( ()=>{
   let date = new Date();
   let h =date.getHours();
   let m =date.getMinutes();
   let s =date.getSeconds();

   h = h < 10 ? '0' + h :h;
   m = m < 10 ? '0' + m :m;
   s = s < 10 ? '0' + s :s;

   timeBox.innerHTML = `${h}:${m}:${s}`;
   if(alarmTime == `${h}:${m}`){
      ringtone.play();
      ringtone.loop = true;
   }

},1000)

// setAlarmBtn.addEventListener('click',(event)=>{
//    event.preventDefault();
//    alarmTime =`${selectMenu[0].value}:${selectMenu[1].value}`
//    if(alarmTime.includes('Hour') ||alarmTime.includes('Minute')){
//       return alert('زمان هشدار را به درستی وارد کنید')
//    }
//    content.classList.add('disable')
// })
 
setAlarmBtn.addEventListener('click', () => {
   
   alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
   if (alarmTime.includes('Hour') || alarmTime.includes('Minute')) {
       return alert('زمان هشدار را به درستی وارد کنید');
   }
   checkState(alarmState)

});
function checkState(state){
   if(state == 'noset'){
      content.classList.add('disable');
   setAlarmBtn.innerText = 'clear Alarm';
   alarmState = 'set'

   }
   else{
      content.classList.remove('disable');
      alarmTime = ''
      ringtone.pause()
      alarmState = 'noset'
      setAlarmBtn.innerText = 'set Alarm';
   }
}







