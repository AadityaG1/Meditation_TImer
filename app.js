// // Timer Functionality
// let timer;
// let timeInSeconds = 300;
// let isTimerRunning = false;

// document.getElementById("start-timer").addEventListener("click", startTimer);
// document.getElementById("pause-timer").addEventListener("click", pauseTimer);
// document.getElementById("reset-timer").addEventListener("click", resetTimer);
// document.getElementById("time-range").addEventListener("input", updateTimer);

// function startTimer() {
//   if (!isTimerRunning) {
//     isTimerRunning = true;
//     timer = setInterval(() => {
//       timeInSeconds--;
//       if (timeInSeconds <= 0) {
//         clearInterval(timer);
//         isTimerRunning = false;
//         alert("Meditation session completed.");
//         stopSoundscape(); // Stop the soundscape
//         stopBreathingExercise(); // Stop the breathing exercise
//       }
//       updateTimerDisplay();
//     }, 1000);
//   }
// }

// function pauseTimer() {
//   clearInterval(timer);
//   isTimerRunning = false;
// }

// function resetTimer() {
//   clearInterval(timer);
//   timeInSeconds = document.getElementById("time-range").value * 60;
//   updateTimerDisplay();
//   isTimerRunning = false;
// }

// function updateTimer() {
//   timeInSeconds = document.getElementById("time-range").value * 60;
//   updateTimerDisplay();
// }

// function updateTimerDisplay() {
//   const minutes = Math.floor(timeInSeconds / 60);
//   const seconds = timeInSeconds % 60;
//   document.getElementById("time-display").textContent = `${minutes
//     .toString()
//     .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
// }

// // Breathing Exercise
// let isBreathing = false;

// document
//   .getElementById("start-breathing")
//   .addEventListener("click", startBreathing);




// function startBreathing() {
//   if (!isBreathing) {
//     isBreathing = true;
//     breatheIn();
//   }
// }

// function breatheIn() {
//   if (isBreathing) {
//     document.getElementById("breathing-circle").style.transform = "scale(1.5)";
//     document.getElementById("breathing-instructions").textContent = "Inhale";
//     breathingTimeout = setTimeout(() => breatheOut(), 4000);
//   }
// }

// function breatheOut() {
//   if (isBreathing) {
//     document.getElementById("breathing-circle").style.transform = "scale(1)";
//     document.getElementById("breathing-instructions").textContent = "Exhale";
//     breathingTimeout = setTimeout(() => breatheIn(), 4000);
//   }
// }

// function stopBreathingExercise() {
//   isBreathing = false; // Stop the breathing exercise loop
//   clearTimeout(breathingTimeout); // Clear the ongoing timeout to stop the circle
//   document.getElementById("breathing-circle").style.transform = "scale(1)"; // Reset circle size
//   document.getElementById("breathing-instructions").textContent = ""; // Clear instructions
// }




// // Soundscape Functionality
// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// let rainGain, forestGain, wavesGain;

// document
//   .getElementById("play-soundscape")
//   .addEventListener("click", playSoundscape);
// document
//   .getElementById("stop-soundscape")
//   .addEventListener("click", stopSoundscape);
// document
//   .getElementById("rain-volume")
//   .addEventListener("input", updateRainVolume);
// document
//   .getElementById("forest-volume")
//   .addEventListener("input", updateForestVolume);
// document
//   .getElementById("waves-volume")
//   .addEventListener("input", updateWavesVolume);

// async function playSoundscape() {
//   const rainBuffer = await loadAudio("audio/rain.mp3"); // Replace with actual URL
//   const forestBuffer = await loadAudio("audio/forest.mp3"); // Replace with actual URL
//   const wavesBuffer = await loadAudio("audio/beats.mp3"); // Replace with actual URL

//   rainGain = createGainNode(
//     rainBuffer,
//     document.getElementById("rain-volume").value
//   );
//   forestGain = createGainNode(
//     forestBuffer,
//     document.getElementById("forest-volume").value
//   );
//   wavesGain = createGainNode(
//     wavesBuffer,
//     document.getElementById("waves-volume").value
//   );
// }

// function stopSoundscape() {
//   if (rainGain) rainGain.gain.setValueAtTime(0, audioContext.currentTime);
//   if (forestGain) forestGain.gain.setValueAtTime(0, audioContext.currentTime);
//   if (wavesGain) wavesGain.gain.setValueAtTime(0, audioContext.currentTime);
// }

// function updateRainVolume() {
//   if (rainGain)
//     rainGain.gain.setValueAtTime(this.value, audioContext.currentTime);
// }

// function updateForestVolume() {
//   if (forestGain)
//     forestGain.gain.setValueAtTime(this.value, audioContext.currentTime);
// }

// function updateWavesVolume() {
//   if (wavesGain)
//     wavesGain.gain.setValueAtTime(this.value, audioContext.currentTime);
// }

// async function loadAudio(url) {
//   const response = await fetch(url);
//   const arrayBuffer = await response.arrayBuffer();
//   return await audioContext.decodeAudioData(arrayBuffer);
// }

// function createGainNode(buffer, volume) {
//   const source = audioContext.createBufferSource();
//   source.buffer = buffer;
//   const gainNode = audioContext.createGain();
//   gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
//   source.connect(gainNode).connect(audioContext.destination);
//   source.loop = true;
//   source.start(0);
//   return gainNode;
// }

// // // JavaScript to control soundscapes and breathing exercises

// // // Replace with your Google Drive links
// // const rainAudio = new Audio(
// //   "https://drive.google.com/file/d/1yW-NL3QfvCHNiUeln7wHUYdSsFQiqPo7/view?usp=sharing"
// // );
// // const forestAudio = new Audio(
// //   "https://drive.google.com/file/d/1EcJwqSwPGZAzc8z3TLOzqvS8w9zRLP1v/view?usp=drive_link"
// // );
// // const wavesAudio = new Audio(
// //   "https://drive.google.com/file/d/1rlOUouFfZ2F1iPb1-udJCPbnM2Q37y9b/view?usp=drive_link"
// // );

// // const soundscapes = {
// //   rain: rainAudio,
// //   forest: forestAudio,
// //   waves: wavesAudio,
// // };

// // document
// //   .getElementById("rain")
// //   .addEventListener("click", () => playSound("rain"));
// // document
// //   .getElementById("forest")
// //   .addEventListener("click", () => playSound("forest"));
// // document
// //   .getElementById("waves")
// //   .addEventListener("click", () => playSound("waves"));

// // function playSound(type) {
// //   stopAllSounds(); // Stop any currently playing sounds
// //   soundscapes[type].play();
// // }

// // function stopAllSounds() {
// //   Object.values(soundscapes).forEach((audio) => {
// //     audio.pause();
// //     audio.currentTime = 0;
// //   });
// // }

// // // Add event listener for the timer
// // let countdown;
// // document
// //   .getElementById("start-timer")
// //   .addEventListener("click", () => startTimer(300)); // 5 minutes

// // function startTimer(duration) {
// //   let timer = duration,
// //     minutes,
// //     seconds;
// //   countdown = setInterval(() => {
// //     minutes = parseInt(timer / 60, 10);
// //     seconds = parseInt(timer % 60, 10);

// //     minutes = minutes < 10 ? "0" + minutes : minutes;
// //     seconds = seconds < 10 ? "0" + seconds : seconds;

// //     document.getElementById("timer").textContent = minutes + ":" + seconds;

// //     if (--timer < 0) {
// //       clearInterval(countdown);
// //       stopAllSounds(); // Automatically stop sounds when the timer expires
// //     }
// //   }, 1000);
// // }

// // document.getElementById("stop-timer").addEventListener("click", () => {
// //   clearInterval(countdown);
// //   stopAllSounds();
// //   document.getElementById("timer").textContent = "00:00";
// // });



// Timer Functionality
let timer;
let timeInSeconds = 300;
let isTimerRunning = false;
let breathingTimeout;

document.getElementById("start-timer").addEventListener("click", startTimer);
document.getElementById("pause-timer").addEventListener("click", pauseTimer);
document.getElementById("reset-timer").addEventListener("click", resetTimer);
document.getElementById("time-range").addEventListener("input", updateTimer);

function startTimer() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    timer = setInterval(() => {
      timeInSeconds--;
      if (timeInSeconds <= 0) {
        clearInterval(timer);
        isTimerRunning = false;
        stopAllActivities(); // Automatically stop everything
        alert("Meditation session completed.");
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  timeInSeconds = document.getElementById("time-range").value * 60;
  updateTimerDisplay();
  isTimerRunning = false;
}

function updateTimer() {
  timeInSeconds = document.getElementById("time-range").value * 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  document.getElementById("time-display").textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Breathing Exercise
let isBreathing = false;

document
  .getElementById("start-breathing")
  .addEventListener("click", startBreathing);

function startBreathing() {
  if (!isBreathing) {
    isBreathing = true;
    breatheIn();
  }
}

function breatheIn() {
  if (isBreathing) {
    document.getElementById("breathing-circle").style.transform = "scale(1.5)";
    document.getElementById("breathing-instructions").textContent = "Inhale";
    breathingTimeout = setTimeout(() => breatheOut(), 4000);
  }
}

function breatheOut() {
  if (isBreathing) {
    document.getElementById("breathing-circle").style.transform = "scale(1)";
    document.getElementById("breathing-instructions").textContent = "Exhale";
    breathingTimeout = setTimeout(() => breatheIn(), 4000);
  }
}

function stopBreathingExercise() {
  isBreathing = false;
  clearTimeout(breathingTimeout);
  document.getElementById("breathing-circle").style.transform = "scale(1)";
  document.getElementById("breathing-instructions").textContent = "";
}

// Soundscape Functionality
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let rainGain, forestGain, wavesGain;

document
  .getElementById("play-soundscape")
  .addEventListener("click", playSoundscape);
document
  .getElementById("stop-soundscape")
  .addEventListener("click", stopSoundscape);
document
  .getElementById("rain-volume")
  .addEventListener("input", updateRainVolume);
document
  .getElementById("forest-volume")
  .addEventListener("input", updateForestVolume);
document
  .getElementById("waves-volume")
  .addEventListener("input", updateWavesVolume);

async function playSoundscape() {
  const rainBuffer = await loadAudio('audio/rain.mp3');
  const forestBuffer = await loadAudio('audio/forest.mp3');
  const wavesBuffer = await loadAudio('audio/beats.mp3');

  rainGain = createGainNode(
    rainBuffer,
    document.getElementById("rain-volume").value
  );
  forestGain = createGainNode(
    forestBuffer,
    document.getElementById("forest-volume").value
  );
  wavesGain = createGainNode(
    wavesBuffer,
    document.getElementById("waves-volume").value
  );
}

function stopSoundscape() {
  if (rainGain) rainGain.gain.setValueAtTime(0, audioContext.currentTime);
  if (forestGain) forestGain.gain.setValueAtTime(0, audioContext.currentTime);
  if (wavesGain) wavesGain.gain.setValueAtTime(0, audioContext.currentTime);
}

function updateRainVolume() {
  if (rainGain)
    rainGain.gain.setValueAtTime(this.value, audioContext.currentTime);
}

function updateForestVolume() {
  if (forestGain)
    forestGain.gain.setValueAtTime(this.value, audioContext.currentTime);
}

function updateWavesVolume() {
  if (wavesGain)
    wavesGain.gain.setValueAtTime(this.value, audioContext.currentTime);
}

async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return await audioContext.decodeAudioData(arrayBuffer);
}

function createGainNode(buffer, volume) {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  source.connect(gainNode).connect(audioContext.destination);
  source.loop = true;
  source.start(0);
  return gainNode;
}

// Function to stop everything when the session ends
function stopAllActivities() {
  stopSoundscape(); // Stop the soundscape
  stopBreathingExercise(); // Stop the breathing exercise
}
