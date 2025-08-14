document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const message = document.getElementById("message").value;
  
  // Update Greeting message
  document.getElementById("greetingMessage").textContent = `Hi ${name}, Welcome To Website`;
  
  // Display input data on the right side (Current Input)
  document.getElementById("respName").textContent = name;
  document.getElementById("respDob").textContent = dob;
  document.getElementById("respGender").textContent = gender;
  document.getElementById("respMessage").textContent = message;

  console.log("Name:", name);
  console.log("Dob:", dob);
  console.log("Gender:", gender);
  console.log("Message:", message);  
});
