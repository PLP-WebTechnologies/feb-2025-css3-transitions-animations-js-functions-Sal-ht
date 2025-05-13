// Change hero text
function changeWelcomeText() {
  const heading = document.querySelector('.hero-content h1');
  heading.textContent = 'You’re Protected with SalGuard!';
}

// Highlight about section
function highlightAbout() {
  const aboutSection = document.getElementById('about');
  aboutSection.style.backgroundColor = '#d0f0f6';
  aboutSection.style.border = '2px solid #0077b6';
}

// Add service
function addService() {
  const ul = document.querySelector('#services ul');
  const newItem = document.createElement('li');
  newItem.textContent = 'Cybersecurity Protection';
  ul.appendChild(newItem);
}

// Double click secret
document.getElementById('secretBtn').addEventListener('dblclick', () => {
  document.getElementById('secretMessage').classList.remove('hidden');
});

// Keypress detection
document.getElementById('keyInput').addEventListener('keyup', (e) => {
  document.getElementById('keyDisplay').textContent = e.key;
});

// Accordion logic
document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Image slideshow
const galleryImg = document.getElementById('galleryImg');
const images = [
  'images/insur.jpg',
  'images/insur1.jpeg',
  'images/insur2.jpeg',
];
let currentIndex = 0;

// Function to show image
function showImage(index) {
  galleryImg.src = images[index];
}

// Auto-slide every 2 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 2000); // 2000ms = 2s

// Manual override
document.getElementById('nextImg').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Form validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');
  let isValid = true;

  emailError.textContent = '';
  passwordError.textContent = '';

  if (!email.value.includes('@')) {
    emailError.textContent = 'Enter a valid email address.';
    isValid = false;
  }

  if (password.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});

// Real-time feedback
document.getElementById('email').addEventListener('input', function () {
  const error = document.getElementById('emailError');
  error.textContent = this.value.includes('@') ? '' : 'Invalid email';
});

// Scroll animations
const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));


/**
 * Stores and retrieves user preferences using localStorage,
 * and triggers an animation on user interaction.
 * 
 * @param {string} storageKey - Key to store in localStorage
 * @param {HTMLElement} element - The element to animate
 * @param {string} triggerEvent - The event to listen for (e.g., 'click', 'dblclick')
 * @param {string} animationClass - The CSS class that defines the animation
 */
function applyAnimatedPreference(storageKey, element, triggerEvent, animationClass) {
  // Check localStorage and apply animation class if already triggered
  if (localStorage.getItem(storageKey) === 'true') {
    element.classList.add(animationClass);
  }

  // Event listener to trigger animation and save preference
  element.addEventListener(triggerEvent, () => {
    element.classList.remove(animationClass);       
    void element.offsetWidth;                      
    element.classList.add(animationClass);        

    localStorage.setItem(storageKey, 'true');      
  });
}
