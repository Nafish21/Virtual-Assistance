let btn=document.querySelector("#btn")
let content=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-MB"
    window.speechSynthesis.speak(text_speak)

}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load' ,()=>{
    wishMe()
})