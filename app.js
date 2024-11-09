//variables globales 


const textoInput = document.getElementById('texto')
const vocesSelect = document.getElementById('voces')
const rateInput = document.getElementById('rate')
const pitchInput = document.getElementById('pitch')
const volumeInput = document.getElementById('volume')
const hablarButton = document.getElementById('hablar')
const detenerButton = document.getElementById('detener')
const rateValue = document.getElementById('rateValue')
const pitchValue = document.getElementById('pitchValue')
const volumeValue = document.getElementById('volumeValue')


let utterance = new SpeechSynthesisUtterance()


function cargarVoces() {
  const voces = speechSynthesis.getVoices()
  vocesSelect.innerHTML = ''

  voces.forEach((voz,index)=>{
      const option = document.createElement('option')
      option.value = index
      option.textContent = `${voz.name} (${voz.lang})`
      vocesSelect.appendChild(option)
  })


  if(voces.length > 0){
      
      utterance.voice = voces[0]
  }
}



vocesSelect.addEventListener('change', () => {
    const voces = speechSynthesis.getVoices()
    utterance.voice = voces[vocesSelect.value]

})


rateInput.addEventListener('input', () => {
    rateValue.textContent = rateInput.value
    utterance.rate = rateInput.value
})


pitchInput.addEventListener('input', () => {
    pitchValue.textContent = pitchInput.value
    utterance.pitch = pitchInput.value
})


volumeInput.addEventListener('input', () => {
    volumeValue.textContent = volumeInput.value
    utterance.volume = volumeInput.value
})



hablarButton.addEventListener('click', () => {
  if(textoInput.value) {
    utterance.text = textoInput.value
    speechSynthesis.speak(utterance)
  }else{

    alert("Por favor escribe algo para hablar")
  }

})


detenerButton.addEventListener('click', () => {
  speechSynthesis.cancel()
})

speechSynthesis.onvoiceschanged = cargarVoces

window.addEventListener('load',cargarVoces)
