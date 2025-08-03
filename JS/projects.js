// projects.js

// Project data array - contains all project details and image paths
const projects = [
    {
      name: 'All Gear for Car Services',
      description: 'An ASP.NET application designed for efficient vehicle service tracking, pricing, and seamless workshop management. This project was a major undertaking, demonstrating a strong grasp of ASP.NET MVC architecture, database integration, and object-oriented programming principles.',
      images: [
        'media/Project 1/1.jpg',
        'media/Project 1/2.jpg',
        'media/Project 1/3.jpg',
        'media/Project 1/4.jpg',
        'media/Project 1/5.jpg',
        'media/Project 1/6.jpg'
      ],
    },
    {
      name: 'Plan Everything',
      description: 'A web application for creating and managing to-do lists, generating agendas, and creating printable schedules, built with HTML, CSS, and JavaScript. This project focused on front-end functionality and user experience, utilizing vanilla JavaScript to handle all interactive elements without external libraries.',
      images: [
        'media/Todo Website/1.jpg',
        'media/Todo Website/2.jpg',
        'media/Todo Website/3.jpg',
        'media/Todo Website/4.jpg',
        'media/Todo Website/5.jpg',
        'media/Todo Website/6.jpg',
        'media/Todo Website/7.jpg',
        'media/Todo Website/8.jpg'
      ],
    },
    {
      name: 'Algonquin Bank Calculator',
      description: 'A PHP application developed to calculate deposits and interest, demonstrating robust backend logic and financial computation. The project was built with a clean separation of concerns between the PHP backend and the HTML/CSS frontend.',
      images: [
        'media/Deposit calculator php/1.jpg',
        'media/Deposit calculator php/2.jpg',
        'media/Deposit calculator php/3.jpg',
        'media/Deposit calculator php/4.jpg',
        'media/Deposit calculator php/5.jpg',
        'media/Deposit calculator php/6.jpg',
        'media/Deposit calculator php/7.jpg',
        'media/Deposit calculator php/8.jpg'
      ],
    },
    {
      name: 'Rocket Mobile Store',
      description: 'A static website simulating a modern tech retail store, meticulously coded using HTML, CSS, and JavaScript to showcase front-end development skills. It was designed to be fully responsive, providing an optimal viewing experience across a wide range of devices.',
      images: [
        'media/Rocket Mobile Store/1.jpg',
        'media/Rocket Mobile Store/2.jpg',
        'media/Rocket Mobile Store/3.jpg',
        'media/Rocket Mobile Store/4.jpg',
        'media/Rocket Mobile Store/5.jpg'
      ],
    },
    {
      name: 'Automation project',
      description: 'Automates new staff account registration using Power Automate in Microsoft 365. It checks if a personal email is already registered, creates a new organization email with license assignment, handles duplicate names with numbering, and sends confirmation or duplicate notification emails automatically.',
      images: [
        'media/Automation project/1.jpg',
        'media/Automation project/2.jpg',
        'media/Automation project/3.jpg',
        'media/Automation project/4.jpg'
      ],
    },
    {
      name: 'Cloud-Virtual-Machine-Deployment',
      description: 'demonstrates the creation, configuration, and secure remote access of virtual machines (VMs) in **Amazon Web Services (AWS EC2)** and **Microsoft Azure** using SSH key-based authentication. The lab simulates real-world infrastructure deployment scenarios across cloud platforms.',
      images: [
        'media/Cloud-Virtual-Machine-Deployment/Picture1.png',
        'media/Cloud-Virtual-Machine-Deployment/Picture2.png',
        'media/Cloud-Virtual-Machine-Deployment/Picture3.png',
        'media/Cloud-Virtual-Machine-Deployment/Picture4.png',
        'media/Cloud-Virtual-Machine-Deployment/Picture5.png',
        'media/Cloud-Virtual-Machine-Deployment/Picture6.png'
      ],
    },
    {
      name: 'Cybersecurity-Project-Portfolio',
      description: 'contains a collection of cybersecurity lab activities and projects completed as part of my practical learning in web application security. It includes vulnerable web applications, offensive security exercises, and defensive hardening measures implemented on both Windows and Ubuntu systems.',
      images: [
        'media/Cybersecurity-Project-Portfolio/4.jpg',
        'media/Cybersecurity-Project-Portfolio/5.jpg',
        'media/Cybersecurity-Project-Portfolio/6.jpg',
        'media/Cybersecurity-Project-Portfolio/7.jpg',
        'media/Cybersecurity-Project-Portfolio/8.jpg',
        'media/Cybersecurity-Project-Portfolio/9.jpg',
        'media/Cybersecurity-Project-Portfolio/Cross site tracking (XST).jpg',
        'media/Cybersecurity-Project-Portfolio/Database backdoor.jpg',
        'media/Cybersecurity-Project-Portfolio/Numerical SQL injection.jpg',
        'media/Cybersecurity-Project-Portfolio/Reflected XSS Attacks.jpg',
        'media/Cybersecurity-Project-Portfolio/Stored XSS Attacks.jpg',
        'media/Cybersecurity-Project-Portfolio/String SQL injection.jpg',
        'media/Cybersecurity-Project-Portfolio/Blind SQL injection.jpg'
      ],
    },
    {
      name: 'Employ-industry-standards-and-best-practice-guidelines-as-System-Admin',
      description: 'Use various features of Azure AD to create Azure Active Directory (Azure AD) users, create custom Azure Role Based Access Control (RBAC) roles, and assign these roles to Azure AD users.',
      images: [
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/1.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/2.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/3.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/4.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/5.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/6.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/7.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/8.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/9.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/10.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/11.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/12.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/13.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/14.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/15.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/16.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/17.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/18.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/19.png',
        'media/Employ-industry-standards-and-best-practice-guidelines-as-System-Admin/20.png'
      ],
    },
    {
      name: 'Operational-Teams-within-the-Cloud',
      description: 'Create a virtual network, including resources in the network, and then create a peering connection with a pre-created virtual network.',
      images: [
        'media/Operational-Teams-within-the-Cloud/1.png',
        'media/Operational-Teams-within-the-Cloud/2.png',
        'media/Operational-Teams-within-the-Cloud/3.png',
        'media/Operational-Teams-within-the-Cloud/4.png',
        'media/Operational-Teams-within-the-Cloud/5.png',
        'media/Operational-Teams-within-the-Cloud/6.png',
        'media/Operational-Teams-within-the-Cloud/7.png',
        'media/Operational-Teams-within-the-Cloud/8.png',
        'media/Operational-Teams-within-the-Cloud/9.png'
      ],
    },
    {
      name: 'raspberrypi-homelab',
      description: 'A comprehensive home lab setup using Raspberry Pi, featuring a full Linux server with Apache, Samba, FTP, and robust firewall and IDS configurations on Ubuntu Server. This hands-on project deepened my understanding of system administration, network security, and server management.',
      images: [
        'media/raspberrypi-homelab/1.jpg',
        'media/raspberrypi-homelab/apache.png',
        'media/raspberrypi-homelab/2.jpg',
        'media/raspberrypi-homelab/3.jpg',
        'media/raspberrypi-homelab/4.jpg',
        'media/raspberrypi-homelab/5.jpg',
        'media/raspberrypi-homelab/6.jpg',
        'media/raspberrypi-homelab/7.jpg',
        'media/raspberrypi-homelab/8.jpg'
      ],
    },
  ];

  let currentProjectIndex = 0;
  let currentImageIndex = 0;

  const projectCards = document.querySelectorAll('.project-card');
  const popupContainer = document.getElementById('project-popup');
  const closeButton = document.querySelector('.close-popup');
  const popupImage = document.getElementById('popup-image');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  function openPopup(projectId) {
    currentProjectIndex = projectId;
    currentImageIndex = 0;
    updatePopupContent();
    popupContainer.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevents scrolling behind the pop-up
  }

  function closePopup() {
    popupContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function updatePopupContent() {
    const project = projects[currentProjectIndex];
    popupImage.src = project.images[currentImageIndex];
    popupTitle.textContent = project.name;
    popupDescription.textContent = project.description;
  }

  function showNextImage() {
    const project = projects[currentProjectIndex];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updatePopupContent();
  }

  function showPrevImage() {
    const project = projects[currentProjectIndex];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updatePopupContent();
  }

  // Event Listeners
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.getAttribute('data-project-id'));
      openPopup(projectId);
    });
  });

  closeButton.addEventListener('click', closePopup);
  prevBtn.addEventListener('click', showPrevImage);
  nextBtn.addEventListener('click', showNextImage);

  // Close popup on backdrop click
  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
      closePopup();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (popupContainer.classList.contains('active')) {
      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'Escape') {
        closePopup();
      }
    }
  });