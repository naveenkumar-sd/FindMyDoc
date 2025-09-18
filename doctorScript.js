 // Page Navigation
 function showPage(pageId) {
     // Hide all pages
     document.querySelectorAll('.page-content').forEach(page => {
         page.style.display = 'none';
     });

     // Show selected page
     document.getElementById(`${pageId}-page`).style.display = 'block';

     // Update page title
     const titles = {
         'home': 'Dashboard',
         'profile': 'Profile Management',
         'appointments': 'Appointment Management',
         'events': 'Event Management',
         'settings': 'Settings'
     };
     document.getElementById('page-title').textContent = titles[pageId];

     // Update active menu item
     document.querySelectorAll('.sidebar-menu a').forEach(item => {
         item.classList.remove('active');
     });
     event.currentTarget.classList.add('active');
 }

 // Auth Functions
 function showSignup() {
     document.getElementById('login-form').style.display = 'none';
     document.getElementById('signup-form').style.display = 'block';
 }

 function showLogin() {
     document.getElementById('signup-form').style.display = 'none';
     document.getElementById('login-form').style.display = 'block';
 }

 function login() {
     // Simple validation
     const email = document.getElementById('login-email').value;
     const password = document.getElementById('login-password').value;

     if (email && password) {
         document.getElementById('auth-container').style.display = 'none';
         document.getElementById('dashboard-container').style.display = 'flex';
     } else {
         alert('Please enter both email and password');
     }
 }



 function logout() {
     document.getElementById('dashboard-container').style.display = 'none';
     document.getElementById('auth-container').style.display = 'flex';
     showLogin();
 }

 // Modal Functions
 function showModal(modalId) {
     document.getElementById(`${modalId}-modal`).style.display = 'flex';
 }

 function closeModal(modalId) {
     document.getElementById(`${modalId}-modal`).style.display = 'none';
 }

 // Time slot selection
 document.querySelectorAll('.time-slot').forEach(slot => {
     slot.addEventListener('click', function() {
         this.classList.toggle('selected');
     });
 });

 //signup checking
 const signUpForm = document.getElementById('signup-form');

 function signup() {
     // Note: the form div is visible via display:block when active
     const inputsError = ['signup-name', 'signup-email', 'signup-password', 'signup-confirm'];
     let isValid = true;

     const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

     inputsError.forEach(id => {
         const input = document.getElementById(id);
         if (!input.value.trim()) {
             isValid = false;
             input.classList.add('input-error');
         } else {
             input.classList.remove('input-error');

             if (id === 'signup-email' && !emailPattern.test(input.value.trim())) {
                 isValid = false;
                 input.classList.add('input-error');
             }

             if (id === 'signup-password' && !passwordPattern.test(input.value.trim())) {
                 isValid = false;
                 input.classList.add('input-error');
             }
         }
     });

     const password = document.getElementById('signup-password').value.trim();
     const confirmPassword = document.getElementById('signup-confirm').value.trim();

     if (password !== confirmPassword) {
         isValid = false;
         document.getElementById('signup-confirm').classList.add('input-error');
     } else {
         document.getElementById('signup-confirm').classList.remove('input-error');
     }

     if (isValid) {
         // Clear inputs after success
         inputsError.forEach(id => {
             document.getElementById(id).value = '';
             document.getElementById(id).classList.remove('input-error');
         });

         alert('Sign up successful!');

     } else {
         alert('Please correct the highlighted fields.');
     }
 }