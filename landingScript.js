 //alert for redirecting to portals

 // document.querySelector('.btn-customer').addEventListener('click', function() {
 //     alert('Redirecting to Patient Portal...');
 //     // In a real application, this would redirect to the patient login/dashboard
 // });

 // document.querySelector('.btn-doctor').addEventListener('click', function() {
 //     alert('Redirecting to Doctor Portal...');
 //     // In a real application, this would redirect to the doctor login/dashboard
 // });


 //for scrolling effect

 window.addEventListener('scroll', function() {
     const header = document.querySelector('header');
     if (window.scrollY > 50) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 })

 document.querySelectorAll('nav a').forEach(function(link) {
     link.addEventListener('click', function(event) {
         event.preventDefault();
         var targetId = this.getAttribute('href');
         var target = document.querySelector(targetId);

         if (target) {
             var navbarHeight = 75; // replace with your real height!
             var topPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

             window.scrollTo({
                 top: topPosition,
                 behavior: 'smooth'
             });
         }
     });
 });