// WhatsApp Enroll Button Functionality
document.getElementById("enrollBtn").addEventListener("click", () => {
  // your number with country code (without +)
  const phoneNumber = "917004849500";
  const message = "Hello! I want to enroll in Skill Center courses.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
});
