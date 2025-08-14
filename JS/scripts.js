// Ensure smooth scrolling to sections when navbar links are clicked
document.querySelectorAll('.nav-links a').forEach(navLink => {
  navLink.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = navLink.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

 //!--Check if name is already saved in localStorage, if yes, show the home page directly
window.onload = function() {
  const userName = localStorage.getItem("userName");

  if (userName) {
    document.getElementById("greetingMessage").textContent = `Hi ${userName}, Welcome To Website`;
    document.getElementById("namePage").style.display = "none"; // Hide name input page
  } else {
    document.getElementById("namePage").style.display = "block"; // Show name input page
  }
};

function saveName() {
  const name = document.getElementById("userName").value;
  if (name) {
    localStorage.setItem("userName", name);
    document.getElementById("greetingMessage").textContent = `Hi ${name}, Welcome To Website`;
    document.getElementById("namePage").style.display = "none"; // Hide name input page
  }

  // After name submission, scroll to the home section
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const message = document.getElementById("message").value;
  
  // Update greeting message
  document.getElementById("greetingMessage").textContent = `Hi ${name}, Welcome To Website`;

  // Display input data on the right side
  document.getElementById("respName").textContent = name;
  document.getElementById("respDob").textContent = dob;
  document.getElementById("respGender").textContent = gender;
  document.getElementById("respMessage").textContent = message;
  
  // After form submission, scroll to the message section
  document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
});
