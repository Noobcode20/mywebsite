// custom cursor
document.addEventListener("DOMContentLoaded", function () {
  const customCursor = document.querySelector(".custom-cursor");
  const trailCircle = document.createElement("div");
  trailCircle.classList.add("trail-circle");
  document.body.appendChild(trailCircle);

  let isHoveringClickableItem = false;

  function updateCursorAndTrail(e) {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    customCursor.style.left = e.clientX + scrollX + "px";
    customCursor.style.top = e.clientY + scrollY + "px";
    customCursor.style.opacity = 1;

    setTimeout(() => {
      const trailSize = isHoveringClickableItem ? 50 : 30;
      const offsetX = (trailSize - 8) / 2;
      const offsetY = (trailSize - 8) / 2;

      trailCircle.style.width = trailSize + "px";
      trailCircle.style.height = trailSize + "px";
      trailCircle.style.left = e.clientX - offsetX + scrollX + "px";
      trailCircle.style.top = e.clientY - offsetY + scrollY + "px";
    }, 75);
  }

  function handleMouseLeave() {
    customCursor.style.opacity = 0;
    trailCircle.style.opacity = 0; // Hide the trail circle on mouse leave
  }

  function handleMouseEnter() {
    customCursor.style.opacity = 1;
    trailCircle.style.opacity = 1; // Show the trail circle on mouse enter
  }

  customCursor.style.opacity = 0;
  trailCircle.style.opacity = 0;

  document.addEventListener("mousemove", function (e) {
    updateCursorAndTrail(e);
  });

  document.addEventListener("mouseleave", handleMouseLeave);
  document.addEventListener("mouseenter", handleMouseEnter);

  const clickableItems = document.querySelectorAll(".clickable-item");

  clickableItems.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      isHoveringClickableItem = true;
    });

    item.addEventListener("mouseleave", function (e) {
      isHoveringClickableItem = false;
    });
  });

  document.addEventListener("mousemove", function (e) {
    updateCursorAndTrail(e);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');

  $('#navbarNav').on('show.bs.collapse', function () {
    header.style.width = '90%';
  });

  $('#navbarNav').on('hidden.bs.collapse', function () {
    header.style.width = ''; // Reset to default width
  });
});

//typing animaitons
const wordsToType = ["Designer !", "Programmer !", "Developer !", "Student !"];
let currentWordIndex = 0;
let currentCharIndex = 0;

const typingContainer = document.getElementById('typing-text');

function typeWriter() {
  if (currentCharIndex < wordsToType[currentWordIndex].length) {
    typingContainer.innerHTML += wordsToType[currentWordIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(deleteText, deleteSpeed);
  }
}

function deleteText() {
  if (currentCharIndex > 0) {
    typingContainer.innerHTML = wordsToType[currentWordIndex].substring(0, currentCharIndex - 1);
    currentCharIndex--;
    setTimeout(deleteText, typingSpeed);
  } else {
    // Word is deleted, move to the next word
    currentWordIndex = (currentWordIndex + 1) % wordsToType.length;
    setTimeout(typeWriter, typingSpeed);
  }
}

const typingSpeed = 100; // Adjust typing speed (milliseconds per character)
const deleteSpeed = 2000; // Adjust delete speed (milliseconds)

typeWriter();
