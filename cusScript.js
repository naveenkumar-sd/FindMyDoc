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


 document.addEventListener("DOMContentLoaded", function() {
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

     // Handle hash navigation (like #sign-up-page)
     if (window.location.hash) {
         const pageId = window.location.hash.substring(1); // remove "#"
         showPage(pageId);
     } else {
         showPage("home-page"); // default
     }
 });


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