function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    to: document.getElementById("to").value,
    event: document.getElementById("EventName").value,
    mailType: document.getElementById("MailType").value,
    ticketID: document.getElementById("TicketID").value
  };

  let serviceId, templateId;

  switch (parms.mailType) {
    case "Event 1":
      serviceId = "service_ek6qh6c";
      templateId = "template_bcjk6hc";
      break;
    case "Event 2":
      serviceId = "service_ek6qh6c";
      templateId = "template_cecrowa";
      break;
    default:
      console.error("Invalid mail type selected.");
      return;
  }

  emailjs.send(serviceId, templateId, parms)
  .then(function(response) {
    console.log("SUCCESS!", response.status, response.text);
    alert(`Email sent successfully to ${parms.to}`);
  }, function(error) {
    console.error("FAILED...", error);
    alert("Failed to send the email. Please try again.");
  });
}