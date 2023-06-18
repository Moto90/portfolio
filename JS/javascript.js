// script.js

// Typing effect for the introduction
const typingText = document.getElementById('typing-text');
const words = ['Hello!', 'Welcome!', 'Bonjour!'];
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}
window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex++;
    if (wordIndex === words.length) wordIndex = 0;
    setTimeout(type, 500);
  }
}
// Get the navbar element
const navbar = document.querySelector('.navbar');

// Get the initial offset position of the navbar
const sticky = navbar.offsetTop;

// Function to add the "sticky" class to the navbar when scrolling
function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
type();
// // about me section //




// prevBtn.addEventListener('click', () => {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = 0;
//   }
//   slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
// });

// nextBtn.addEventListener('click', () => {
//   const maxSlideIndex = slider.children.length - 4; // Subtract the number of visible items
//   slideIndex++;
//   if (slideIndex > maxSlideIndex) {
//     slideIndex = maxSlideIndex;
//   }
//   slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
// });


// Listen for the "scroll" event and call the stickNavbar function
window.addEventListener('scroll', stickNavbar);


// Get the project items
const projectItems = document.querySelectorAll('.project-item');

// Get the popup container, popup image, and description
const popupContainer = document.getElementById('popup-container');
const popupImage = document.querySelector('.popup-image');
const popupDescription = document.querySelector('.popup-description');

// Get the pagination buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Open the popup with the selected project images and description
function openPopup(project) {
  let imageIndex = 0;

  // Update the popup image source and description
  popupImage.src = project.images[imageIndex];
  popupDescription.textContent = project.description;

  // Show the popup container
  popupContainer.style.display = 'block';

  // Previous button event listener
  prevBtn.addEventListener('click', () => {
    imageIndex--;
    if (imageIndex < 0) {
      imageIndex = project.images.length - 1;
    }
    popupImage.src = project.images[imageIndex];
  });

  // Next button event listener
  nextBtn.addEventListener('click', () => {
    imageIndex++;
    if (imageIndex >= project.images.length) {
      imageIndex = 0;
    }
    popupImage.src = project.images[imageIndex];
  });

  // Close popup event listener
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
}

// Project data
const projects = [
  {
    name: 'Project 1',
    description: 'This website and application called AllGear Services as a college project Coded and developed using C# ASP.NET. This application is designed to be used by workshop employees to register vehicle details such as name, type, and model. Users can then select the desired services, and the application will calculate the total price based on the selected services.',
    images: ['media/Project 1/1.jpg', 'media/Project 1/2.jpg', 'media/Project 1/3.jpg', 'media/Project 1/4.jpg', 'media/Project 1/5.jpg', 'media/Project 1/6.jpg'],
  },
  {
    name: 'Project 2',
    description: 'this website and application! It was meticulously crafted as a college project from the ground up, utilizing the power of HTML, CSS, and JavaScript. This interactive platform offers a range of helpful services to enhance your productivity and organization. With the seamless integration of technology, you can efficiently manage your tasks, create agendas, and design personalized schedules. The three core services provided are: Todo List: Keep track of your tasks and stay organized with a dynamic todo list. Agenda Maker: Plan your days effectively by creating and managing agendas tailored to your needs. Schedule Creator: Design a customized schedule that aligns with your commitments and preferences. You can even print it out for quick reference. We believe in the power of technology to simplify our lives and empower us to achieve our goals. Explore the features, unlock your productivity potential, and experience the seamless integration of form and function. Embrace the possibilities that this website and application offer, and make the most of your time, effortlessly!',
    images: ['media/Todo Website/1.jpg', 'media/Todo Website/2.jpg', 'media/Todo Website/3.jpg', 'media/Todo Website/4.jpg',
     'media/Todo Website/5.jpg', 'media/Todo Website/6.jpg', 'media/Todo Website/7.jpg', 'media/Todo Website/8.jpg', 'media/Todo Website/9.jpg'],
  },
  {
    name: 'Project 3',
    description: 'This cutting-edge application and website has been meticulously crafted using PHP, a powerful serverside language. It stands as a compact and sleek calculator designed specifically for managing bank accounts.',
    images: ['media/Deposit calculator php/1.jpg', 'media/Deposit calculator php/2.jpg', 'media/Deposit calculator php/3.jpg', 'media/Deposit calculator php/4.jpg',
     'media/Deposit calculator php/5.jpg', 'media/Deposit calculator php/6.jpg', 'media/Deposit calculator php/7.jpg', 'media/Deposit calculator php/8.jpg'],
  },
  {
    name: 'Project 4',
    description: 'This remarkable website represents a small-scale online store, conceptualized as a non-real business for a college project. Meticulously hand-coded using HTML, CSS, and Javascript, it showcases the perfect fusion of creativity and technical finesse.',
    images: ['media/Rocket Mobile Store/1.jpg', 'media/Rocket Mobile Store/2.jpg', 'media/Rocket Mobile Store/3.jpg', 'media/Rocket Mobile Store/4.jpg',
     'media/Rocket Mobile Store/5.jpg'],
  },
  // Add more project data as needed
];



// Attach click event listeners to each project item
projectItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    openPopup(projects[index]);
  });
  const navLinks = document.querySelectorAll('nav ul li a');

  // Add event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Remove "active" class from all links
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
  
      // Add "active" class to the clicked link
      link.classList.add('active');
    });
  });

  
});
 

