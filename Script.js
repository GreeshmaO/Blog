document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully");
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Form validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        
        if (name === "" || email === "" || phone === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }
        
        alert("Form submitted successfully! We will get back to you soon.");
        form.reset();
    });
});
