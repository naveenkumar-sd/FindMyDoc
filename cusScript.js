 // mobile toggle
 document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
     document.querySelector('.user-actions').classList.toggle('active');
     document.querySelector('.nav-links').classList.toggle('active');

 });


 // Simple page navigation
 document.querySelectorAll('.nav-link').forEach(link => {
     link.addEventListener('click', function(e) {
         e.preventDefault();

         // Remove active class from all links
         document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

         // Add active class to clicked link
         this.classList.add('active');

         // Hide all pages
         document.querySelectorAll('.page').forEach(page => {
             page.classList.remove('active');
         });

         // Show the selected page
         const pageId = this.getAttribute('data-page') + '-page';
         document.getElementById(pageId).classList.add('active');
     });
 });

 // Search functionality
 document.querySelector('.search-btn').addEventListener('click', function() {
     const state = document.getElementById('state').value;
     const district = document.getElementById('district').value;
     const location = document.getElementById('location').value;

     if (state && district && location) {
         // Navigate to search page
         document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
         document.querySelector('[data-page="search"]').classList.add('active');

         document.querySelectorAll('.page').forEach(page => {
             page.classList.remove('active');
         });

         document.getElementById('search-doctors-page').classList.add('active');
     } else {
         alert('Please select state, district and enter your location to search for doctors.');
     }
 });


 //signup form and login form navigation
 document.addEventListener("DOMContentLoaded", function() {

     // Handle hash navigation (like #sign-up-page)
     if (window.location.hash) {
         const pageId = window.location.hash.substring(1); // remove "#"
         showPage(pageId);
     } else {
         showPage("home-page"); // default
     }
 });

 const pages = document.querySelectorAll(".page");

 function showPage(pageId) {
     pages.forEach(p => p.classList.remove("active"));
     const target = document.getElementById(pageId);
     if (target) target.classList.add("active");
 }

 // Handle clicks on nav-links
 document.querySelectorAll(".nav-link").forEach(link => {
     link.addEventListener("click", function(e) {
         e.preventDefault();
         const pageId = this.getAttribute("data-page") + "-page";
         showPage(pageId);
     });
 });


 //  user info logo

 const name = "Naveen";

 const userId = document.getElementById('user-info');

 userId.innerHTML = `
    <i class="fa-solid fa-user"></i>
    <p>${name}</p>
`


 //form validation

 const signUpForm = document.querySelector('.signup-form');
 const signupBtn = document.querySelector('.btn-signup');

 signupBtn.addEventListener('click', (e) => {


     e.preventDefault();

     const inputsError = ['fullname', 'email', 'phone', 'password', 'confirm-password'];
     let isValid = true;

     const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
     const phonePattern = /^\d{10}$/;


     inputsError.forEach(id => {
         const input = document.getElementById(id);

         if (!input.value.trim()) {
             isValid = false;
             input.classList.add('input-error');
         } else {
             input.classList.remove('input-error');

             if (id == 'email' && !emailPattern.test(input.value.trim())) {
                 isValid = false;
                 input.classList.add('input-error');
             }

             if (id === 'phone' && !phonePattern.test(input.value.trim())) {
                 isValid = false;
                 input.classList.add('input-error');
             }

             if (id === 'password' && !passwordPattern.test(input.value.trim())) {
                 isValid = false;
                 input.classList.add('input-error');
             }

         }

     });

     const password = document.getElementById('password').value.trim();
     const confirmPassword = document.getElementById('confirm-password').value.trim();
     if (password !== confirmPassword) {
         isValid = false;
         document.getElementById('confirm-password').classList.add('input-error');
     }

     if (isValid) {
         signUpForm.reset();
     }

 });

 //  login page validation



 const loginForm = document.querySelector('.login-form');

 loginForm.addEventListener('submit', function(e) {
     e.preventDefault();

     const emailInput = document.getElementById('email-login');
     const passwordInput = document.getElementById('password-login');

     const email = emailInput.value.trim();
     const password = passwordInput.value.trim();

     const userActions = document.getElementById('user-actions');
     const userInfo = document.querySelector('.user-info');

     // Simple email regex pattern
     const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

     let isValid = true;

     // Reset previous error classes
     emailInput.classList.remove('input-error');
     passwordInput.classList.remove('input-error');

     if (!email) {
         isValid = false;
         emailInput.classList.add('input-error');
     } else if (!emailPattern.test(email)) {
         isValid = false;
         emailInput.classList.add('input-error');
     }

     if (!password) {
         isValid = false;
         passwordInput.classList.add('input-error');
     }

     if (isValid) {
         // Proceed with login logic (e.g., API call)
         // On success, navigate to home page or show home section
         showPage('home-page'); // Your SPA page switch function
         userActions.classList.add('activeUser');
         userInfo.classList.remove('activeUser');
     }
 });



 //for fetch datas from api

 //  fetch('https://jsonplaceholder.typicode.com/users')
 //      .then(res => res.json())
 //      .then(data => {

 //          console.log(data);

 //          const stateSelect = document.getElementById('state');
 //          // To avoid duplicate cities, use a Set
 //          const cities = new Set();
 //          data.forEach(user => {
 //              cities.add(user.address.city);
 //          });
 //          // Clear any existing options except the first
 //          stateSelect.innerHTML = '<option value="">Select State</option>';
 //          cities.forEach(city => {
 //              const option = document.createElement('option');
 //              option.value = city;
 //              option.textContent = city;
 //              option.id = city;
 //              stateSelect.appendChild(option);
 //          });
 //      })
 //      .catch(error => console.log(error));



 // for appointment from validation

 const appointments = [
     { name: "Dr. Gopi", specialization: "Cardiologist", date: "October 15, 2023", time: "10:30 AM", status: "upcoming" },
     { name: "Dr. Sabareesh", specialization: "Dermatologist", date: "September 28, 2023", time: "2:15 PM", status: "completed" },
     { name: "Dr. Naveen", specialization: "Orthopedic Surgeon", date: "September 15, 2023", time: "11:00 AM", status: "upcoming" }
 ];

 const container = document.querySelector("#appointments-page .container");

 function renderAppointments(data) {
     container.innerHTML = '<h2 class="page-title">My Appointments</h2>'; // reset content, keep title

     data.forEach(app => {
         const card = document.createElement("div");
         card.className = "appointment-card";

         const info = document.createElement("div");
         info.className = "appointment-info";
         info.innerHTML = `
        <h3>${app.name}</h3>
        <p>${app.specialization}</p>
        <p><i class="fas fa-calendar"></i> ${app.date} | <i class="fas fa-clock"></i> ${app.time}</p>
      `;

         const statusDiv = document.createElement("div");
         statusDiv.className = `appointment-status status-${app.status}`;
         statusDiv.textContent = app.status;

         card.appendChild(info);
         card.appendChild(statusDiv);

         container.appendChild(card);
     });
 }

 // Initially render
 renderAppointments(appointments);



 // Example doctor data, you can replace it with API data
 const doctors = [{
         name: "Dr. James Wilson",
         specialty: "Pediatrician",
         distance: "2 km away",
         rating: "4.9 (136 reviews)",
         consultation: "$80",
         availability: "Available Today"
     },
     {
         name: "Dr. Emily Chen",
         specialty: "Dermatologist",
         distance: "4 km away",
         rating: "4.7 (98 reviews)",
         consultation: "$120",
         availability: "Available Tomorrow"
     },
     {
         name: "Dr. David Lee",
         specialty: "Cardiologist",
         distance: "5 km away",
         rating: "4.8 (112 reviews)",
         consultation: "$150",
         availability: "Available on Monday"
     },
     {
         name: "Dr. Maria Garcia",
         specialty: "Neurologist",
         distance: "6 km away",
         rating: "4.9 (87 reviews)",
         consultation: "$180",
         availability: "Available on Tuesday"
     }
 ];

 const doctorsGrid = document.getElementById('doctors-grid');
 doctorsGrid.innerHTML = ''; // Clear existing content if any

 doctors.forEach(doctor => {
     const card = document.createElement('div');
     card.className = 'doctor-card';

     card.innerHTML = `
      <div class="doctor-image"><i class="fas fa-user-md"></i></div>
      <div class="doctor-info">
        <h3 class="doctor-name">${doctor.name}</h3>
        <p class="doctor-specialty">${doctor.specialty}</p>
        <div class="doctor-details">
          <div class="doctor-detail"><i class="fas fa-map-marker-alt"></i><span>${doctor.distance}</span></div>
          <div class="doctor-detail"><i class="fas fa-star rating"></i><span>${doctor.rating}</span></div>
        </div>
        <div class="doctor-detail"><i class="fas fa-money-bill"></i><span>Consultation: ${doctor.consultation}</span></div>
        <div class="doctor-detail"><i class="fas fa-clock"></i><span>${doctor.availability}</span></div>
        <button class="btn btn-cta" style="width: 100%; margin-top: 15px;">Book Appointment</button>
      </div>
    `;

     doctorsGrid.appendChild(card);
 });


 //  for Events page
 const events = [{
         title: "Health Camp",
         description: "Free Diabetes Screening",
         date: "June 15, 2023",
         time: "10:00 AM - 4:00 PM",
         content: "Community health center for free diabetes screening and consultation."
     },
     {
         title: "Webinar",
         description: "Advances in Cardiology",
         date: "July 20, 2023",
         time: "3:00 PM - 5:00 PM",
         content: "Online webinar discussing recent advances in cardiology treatments."
     }
 ];

 const eventsGrid = document.getElementById('events-grid');
 eventsGrid.innerHTML = ''; // Clear existing content if any

 events.forEach(event => {
     const card = document.createElement('div');
     card.className = 'card event-card';

     card.innerHTML = `
        <div class="event-header">
            <h3>${event.title}</h3>
            <p>${event.date} | ${event.time}</p>
        </div>
        <div class="event-body">
            <p>${event.content}</p>
        </div>
        <div class="event-button">
            <button class="btn btn-cta">Register</button>
        </div>
    `;

     eventsGrid.appendChild(card);
 });



 //  for profile section
 const profileData = {
     name: "Sabareesh",
     email: "Sabareesh.johnson@example.com",
     phone: "9876543210",
     dob: "January 15, 1985",
     gender: "Female",
     address: [
         "123 Main Street",
         "Los Angeles, CA 90001",
         "United States"
     ]
 };

 function renderProfile(profile) {
     const container = document.getElementById('profile-container');

     const profileSection = document.createElement('div');
     profileSection.className = 'profile-section';

     profileSection.innerHTML = `
      <div class="profile-header">
        <div class="profile-img"><i class="fas fa-user"></i></div>
        <div class="profile-info">
          <h2>${profile.name}</h2>
          <p>${profile.email}</p>
        </div>
      </div>

      <div class="profile-details">
        <div class="detail-card">
          <h3>Personal Information</h3>
          <p><strong>Phone:</strong> ${profile.phone}</p>
          <p><strong>Date of Birth:</strong> ${profile.dob}</p>
          <p><strong>Gender:</strong> ${profile.gender}</p>
        </div>

        <div class="detail-card">
          <h3>Address</h3>
          ${profile.address.map(line => `<p>${line}</p>`).join('')}
        </div>
      </div>
    `;

    container.appendChild(profileSection);
  }

  renderProfile(profileData);