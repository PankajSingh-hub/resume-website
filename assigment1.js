// Show selected page
function showPage(page) {
  $(".page").hide();

  $("#" + page).show();

  // Scroll to top
  $("html, body").scrollTop(0);
}

// Contact form
function sendMessage() {
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  if (name == "" || email == "" || message == "") {
    $("#result").text("Please fill all the fields.");
  } else {
    $("#result").text(
      "Thank you " + name + "! Your message has been received.",
    );

    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
  }
}
