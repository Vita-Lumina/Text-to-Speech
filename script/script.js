document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('speak-button');
    var stopImage = document.getElementById('stop-speaking');
    var textarea = document.getElementById('text-input');
    var utterance = null; // Variável para armazenar a instância de SpeechSynthesisUtterance

    image.addEventListener('click', function() {
    var text = textarea.value;
    speak(text);
    });

    stopImage.addEventListener('click', function() {
    stopSpeech();
    });

    function speak(text) {
    if ('speechSynthesis' in window) {
        utterance = new SpeechSynthesisUtterance(text);
        var voices = window.speechSynthesis.getVoices();
        var voiceName = 'Microsoft Maria - Portuguese (Brazil)'; // Nome da voz desejada
        var selectedVoice = voices.find(function(voice) {
        return voice.name === voiceName;
        });
        if (selectedVoice) {
        utterance.voice = selectedVoice;
        window.speechSynthesis.speak(utterance);
        } else {
        console.log('Voz não encontrada: ' + voiceName);
        }
    } else {
        console.log('API de síntese de fala não é suportada pelo navegador.');
    }
    }

    function stopSpeech() {
    if (utterance) {
        window.speechSynthesis.cancel();
    }
    }
});
