// Base de datos de palabras por nivel
const gameData = {
  1: {
    name: "Principiante",
    words: [
      {
        word: "gato",
        image:"imagenes/gato.svg",
        hint: "Animal doméstico que dice 'miau'",
      },
      {
        word: "casa",
        image:"imagenes/casa.svg",
        hint: "Lugar donde vives con tu familia",
      },
      {
        word: "sol",
        image:"imagenes/sol.svg",
        hint: "Estrella que nos da luz y calor",
      },
      {
        word: "perro",
        image: "imagenes/perro.svg",
        hint: "Animal doméstico que dice 'guau' y mueve la cola",
      },
      {
        word: "flor",
        image: "imagenes/flor.svg",
        hint: "Planta bonita y colorida que huele bien",
      },
      {
        word: "agua",
        image: "imagenes/agua.svg",
        hint: "Líquido transparente que bebemos",
      },
      {
        word: "luna",
        image: "imagenes/luna.svg",
        hint: "Satélite que vemos en el cielo de noche",
      },
      {
        word: "pez",
        image: "imagenes/pez.svg",
        hint: "Animal que vive en el agua y nada",
      },
      {
        word: "árbol",
        image: "imagenes/arbol.svg",
        hint: "Planta grande con hojas verdes y tronco",
      },
      {
        word: "pelota",
        image: "imagenes/pelota.svg",
        hint: "Objeto redondo para jugar deportes",
      },
    ],
  },
  2: {
    name: "Intermedio",
    words: [
      {
        word: "mariposa",
        image: "imagenes/mariposa.svg",
        hint: "Insecto colorido que vuela de flor en flor",
      },
      {
        word: "bicicleta",
        image: "imagenes/bicicleta.svg",
        hint: "Vehículo de dos ruedas que se mueve pedaleando",
      },
      {
        word: "computadora",
        image: "imagenes/computadora.svg",
        hint: "Máquina electrónica para trabajar y jugar",
      },
      {
        word: "teléfono",
        image: "imagenes/telefono.svg",
        hint: "Aparato para hablar con personas lejos",
      },
      {
        word: "refrigerador",
        image: "imagenes/refrigerador.svg",
        hint: "Electrodoméstico que mantiene los alimentos fríos",
      },
      {
        word: "elefante",
        image: "imagenes/elefante.svg",
        hint: "Animal grande y gris con una trompa larga",
      },
      {
        word: "cocodrilo",
        image: "imagenes/cocodrilo.svg",
        hint: "Reptil verde que vive en el agua con dientes grandes",
      },
      {
        word: "automóvil",
        image: "imagenes/automovil.svg",
        hint: "Vehículo de cuatro ruedas para transportarse",
      },
      {
        word: "helicoptero",
        image: "imagenes/helicoptero.svg",
        hint: "Vehículo que vuela con hélices giratorias",
      },
      {
        word: "dinosaurio",
        image: "imagenes/dinosaurio.svg",
        hint: "Animal prehistórico muy grande que ya no existe",
      },
    ],
  },
  3: {
    name: "Avanzado",
    words: [
      {
        word: "extraterrestre",
        image: "imagenes/extraterrestre.svg",
        hint: "Ser de otro planeta que visita la Tierra",
      },
      {
        word: "microscopio",
        image: "imagenes/microscopio.svg",
        hint: "Instrumento para ver cosas muy pequeñas",
      },
      {
        word: "arquitectura",
        image: "imagenes/arqui.svg",
        hint: "Arte y ciencia de diseñar edificios",
      },
      {
        word: "biodiversidad",
        image: "imagenes/biodivers.svg",
        hint: "Variedad de vida en la naturaleza",
      },
      {
        word: "metamorfosis",
        image: "imagenes/metamor.svg",
        hint: "Proceso de transformación de un ser vivo",
      },
      {
        word: "fotosíntesis",
        image: "imagenes/fotosint.jpeg",
        hint: "Proceso por el cual las plantas producen su alimento",
      },
      {
        word: "filosofía",
        image: "imagenes/filosofia.svg",
        hint: "Estudio del conocimiento y la sabiduría",
      },
      {
        word: "paleontología",
        image: "imagenes/paleontologia.svg",
        hint: "Ciencia que estudia los fósiles y dinosaurios",
      },
      {
        word: "astronauta",
        image: "imagenes/atronauta.svg",
        hint: "Persona que viaja al espacio exterior",
      },
      {
        word: "tecnología",
        image:"imagenes/tecnologia.svg",
        hint: "Aplicación de la ciencia para crear herramientas útiles",
      },
    ],
  },
};

// Mensajes de incentivo con rimas
const encouragementMessages = [
  "¡Muy bien! Como una estrella brillante, ¡sigues adelante! ⭐",
  "¡Excelente! Tu sabiduría crece como el río que fluye 🌊",
  "¡Fantástico! Como el sol que ilumina, tu mente fascina ☀️",
  "¡Perfecto! Eres como una flor que siempre quiere crecer 🌸",
  "¡Increíble! Tu inteligencia vuela como mariposa bella 🦋",
  "¡Genial! Como el viento suave, tu aprendizaje no se acabe 🌬️",
  "¡Magnífico! Brillas más que la luna en el cielo nocturno 🌙",
  "¡Espectacular! Tu mente es un jardín donde las ideas van a brillar 🌺",
  "¡Maravilloso! Como el arcoíris después de la lluvia, tu progreso se construye 🌈",
  "¡Extraordinario! Eres un explorador del saber, ¡sigue así sin parar! 🧭",
];

// Estado del juego
let currentLevel = 1;
let currentWordIndex = 0;
let score = 0;
let correctAnswers = 0;
let totalQuestions = 0;
let currentStreak = 0;
let hintsUsed = 0;
let levelProgress = 0;
let currentWord = null;

// Elementos del DOM
const elements = {
  currentLevel: document.getElementById("currentLevel"),
  levelName: document.getElementById("levelName"),
  score: document.getElementById("score"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  correctAnswersEl: document.getElementById("correctAnswers"),
  totalQuestionsEl: document.getElementById("totalQuestions"),
  accuracy: document.getElementById("accuracy"),
  streak: document.getElementById("streak"),
  wordImage: document.getElementById("wordImage"),
  wordInput: document.getElementById("wordInput"),
  feedback: document.getElementById("feedback"),
  levelSelector: document.getElementById("levelSelector"),
};

// Función para normalizar texto (remover acentos y convertir a minúsculas)
function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u")
    .replace(/ñ/g, "n")
    .trim();
}

// Función para verificar ortografía básica
function checkSpelling(input, correct) {
  const normalizedInput = normalizeText(input);
  const normalizedCorrect = normalizeText(correct);

  if (normalizedInput === normalizedCorrect) {
    return { isCorrect: true, suggestion: null };
  }

  // Verificar errores comunes
  const distance = levenshteinDistance(normalizedInput, normalizedCorrect);
  const threshold = Math.max(1, Math.floor(normalizedCorrect.length * 0.2));

  if (distance <= threshold) {
    return {
      isCorrect: false,
      suggestion: `¿Quisiste decir "${correct}"?`,
      isClose: true,
    };
  }

  return { isCorrect: false, suggestion: null, isClose: false };
}

// Algoritmo de distancia de Levenshtein para detectar errores de escritura
function levenshteinDistance(str1, str2) {
  const matrix = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i += 1) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= str2.length; j += 1) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }

  return matrix[str2.length][str1.length];
}

// Cargar nueva palabra
function loadNewWord() {
  const levelData = gameData[currentLevel];
  if (!levelData) return;

  currentWord = levelData.words[currentWordIndex];
  elements.wordImage.src = currentWord.image;
  elements.wordImage.alt = `Imagen de ${currentWord.word}`;
  elements.wordInput.value = "";
  elements.wordInput.classList.remove("correct", "incorrect");
  elements.wordInput.focus();

  updateProgress();
}

// Verificar respuesta
function checkAnswer() {
  if (!currentWord) return;

  const userInput = elements.wordInput.value.trim();
  if (!userInput) {
    showFeedback("¡Escribe algo primero! 📝", "hint");
    return;
  }

  const spellCheck = checkSpelling(userInput, currentWord.word);
  totalQuestions++;

  if (spellCheck.isCorrect) {
    // Respuesta correcta
    correctAnswers++;
    currentStreak++;

    const points = calculatePoints();
    score += points;

    elements.wordInput.classList.add("correct");

    const message =
      encouragementMessages[
        Math.floor(Math.random() * encouragementMessages.length)
      ];
    showFeedback(`${message} (+${points} puntos)`, "success");

    createParticles();

    setTimeout(() => {
      nextWord();
    }, 2000);
  } else if (spellCheck.isClose) {
    // Respuesta cercana con sugerencia
    currentStreak = 0;
    elements.wordInput.classList.add("incorrect");
    showFeedback(`¡Casi lo tienes! ${spellCheck.suggestion} 🤔`, "error");

    setTimeout(() => {
      elements.wordInput.classList.remove("incorrect");
    }, 1000);
  } else {
    // Respuesta incorrecta
    currentStreak = 0;
    elements.wordInput.classList.add("incorrect");
    showFeedback(
      `La respuesta correcta es "${currentWord.word}". ¡Sigue intentando! 💪`,
      "error"
    );

    setTimeout(() => {
      elements.wordInput.classList.remove("incorrect");
      nextWord();
    }, 3000);
  }

  updateStats();
}

// Calcular puntos basado en dificultad y racha
function calculatePoints() {
  let basePoints = currentLevel * 10;
  let streakBonus = Math.min(currentStreak * 5, 50);
  let hintPenalty = hintsUsed * 2;

  return Math.max(5, basePoints + streakBonus - hintPenalty);
}

// Mostrar pista
function showHint() {
  if (!currentWord) return;

  hintsUsed++;
  showFeedback(`💡 Pista: ${currentWord.hint}`, "hint");

  // Mostrar algunas letras
  const word = currentWord.word;
  let hint = "";
  for (let i = 0; i < word.length; i++) {
    if (i === 0 || i === word.length - 1 || Math.random() < 0.3) {
      hint += word[i];
    } else if (word[i] === " ") {
      hint += " ";
    } else {
      hint += "_";
    }
  }

  setTimeout(() => {
    showFeedback(`🔤 Ayuda con las letras: ${hint}`, "hint");
  }, 2000);
}

// Saltar palabra
function skipWord() {
  if (!currentWord) return;

  totalQuestions++;
  currentStreak = 0;

  showFeedback(
    `La palabra era "${currentWord.word}". ¡Mejor suerte la próxima vez! ⏭️`,
    "hint"
  );

  setTimeout(() => {
    nextWord();
  }, 2000);

  updateStats();
}

// Siguiente palabra
function nextWord() {
  const levelData = gameData[currentLevel];
  currentWordIndex++;
  levelProgress++;

  if (currentWordIndex >= levelData.words.length) {
    // Nivel completado
    if (currentLevel < 3) {
      levelCompleted();
    } else {
      gameCompleted();
    }
  } else {
    loadNewWord();
  }
}

// Nivel completado
function levelCompleted() {
  const accuracy =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  showFeedback(
    `🎉 ¡Nivel ${currentLevel} completado! Precisión: ${accuracy}%. ¡Avanzando al siguiente nivel! 🚀`,
    "success"
  );

  setTimeout(() => {
    currentLevel++;
    currentWordIndex = 0;
    levelProgress = 0;
    hintsUsed = 0;

    updateLevelInfo();
    loadNewWord();

    showFeedback(
      `🎯 ¡Bienvenido al Nivel ${currentLevel}! Los desafíos se vuelven más emocionantes 🌟`,
      "success"
    );
  }, 3000);
}

// Juego completado
function gameCompleted() {
  const accuracy =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  showFeedback(
    `🏆 ¡FELICIDADES! Has completado todos los niveles con ${accuracy}% de precisión. ¡Eres un campeón de las palabras! 👑`,
    "success"
  );

  setTimeout(() => {
    if (confirm("¿Te gustaría reiniciar el juego?")) {
      resetGame();
    }
  }, 4000);
}

// Mostrar/ocultar selector de niveles
function toggleLevelSelector() {
  const selector = elements.levelSelector;
  selector.classList.toggle("active");
}

// Seleccionar nivel
function selectLevel(level) {
  currentLevel = level;
  currentWordIndex = 0;
  levelProgress = 0;
  hintsUsed = 0;

  updateLevelInfo();
  loadNewWord();
  toggleLevelSelector();

  showFeedback(
    `🎯 ¡Nivel ${level} seleccionado! ${gameData[level].name} 🌟`,
    "success"
  );
}

// Actualizar información del nivel
function updateLevelInfo() {
  elements.currentLevel.textContent = currentLevel;
  elements.levelName.textContent = gameData[currentLevel].name;

  // Actualizar botones de nivel
  document.querySelectorAll(".level-btn").forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === currentLevel);
  });
}

// Actualizar progreso
function updateProgress() {
  const levelData = gameData[currentLevel];
  const totalWords = levelData.words.length;
  const progress = (levelProgress / totalWords) * 100;

  elements.progressFill.style.width = `${progress}%`;
  elements.progressText.textContent = `${levelProgress}/${totalWords}`;
}

// Actualizar estadísticas
function updateStats() {
  elements.score.textContent = score;
  elements.correctAnswersEl.textContent = correctAnswers;
  elements.totalQuestionsEl.textContent = totalQuestions;
  elements.streak.textContent = currentStreak;

  const accuracy =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;
  elements.accuracy.textContent = `${accuracy}%`;
}

// Mostrar retroalimentación
function showFeedback(message, type) {
  elements.feedback.textContent = message;
  elements.feedback.className = `feedback ${type}`;
}

// Crear partículas de celebración
function createParticles() {
  const container = document.querySelector(".floating-particles");

  for (let i = 0; i < 6; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 0.5 + "s";
    particle.style.animationDuration = 2 + Math.random() + "s";

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 3000);
  }
}

// Reiniciar juego
function resetGame() {
  currentLevel = 1;
  currentWordIndex = 0;
  score = 0;
  correctAnswers = 0;
  totalQuestions = 0;
  currentStreak = 0;
  hintsUsed = 0;
  levelProgress = 0;

  updateLevelInfo();
  updateStats();
  loadNewWord();

  showFeedback(
    "¡Bienvenido de nuevo! Observa la imagen y escribe la palabra correcta 🌟",
    "success"
  );
}

// Event listeners
elements.wordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

elements.wordInput.addEventListener("input", () => {
  elements.wordInput.classList.remove("correct", "incorrect");
});

// Cerrar selector de niveles al hacer clic fuera
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".level-selector") &&
    !e.target.closest('button[onclick="toggleLevelSelector()"]')
  ) {
    elements.levelSelector.classList.remove("active");
  }
});

// Animaciones adicionales
function addFloatingAnimation() {
  const container = document.querySelector(".floating-particles");

  setInterval(() => {
    if (Math.random() < 0.1) {
      // 10% de probabilidad cada segundo
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDuration = 3 + Math.random() * 2 + "s";

      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove();
        }
      }, 5000);
    }
  }, 1000);
}

// Inicializar juego
function initGame() {
  updateLevelInfo();
  updateStats();
  loadNewWord();
  addFloatingAnimation();
}

// Iniciar el juego cuando se carga la página
document.addEventListener("DOMContentLoaded", initGame);
