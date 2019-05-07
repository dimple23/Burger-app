$(document).ready(function() {

  // bind event listener to form submit
  $("#burger-form").on("submit", function(e) {

    e.preventDefault();

    // package up form data for req.body purposes
    const burgerData = {
      name: $("#name-input").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData // req.body
    })
    .then(function() {
      // reload the page
      location.reload();
    })
    .catch(err => console.log(err));

  });

  // update cat
  $(".update-burger").on("click", function() {
    // read back cat's id and sleepy status
    const burgerId = $(this).attr("data-id");
    const devorted= $(this).attr("data-devorted")

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "PUT",
      data: {
        devorted : devorted
      } // req.body
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

  $(".delete-burger").on("click", function() {
    // get cat's id
    const Id = $(this).attr("data-id");

    $.ajax({
      url: `/api/burgers/${Id}`,
      method: "DELETE"
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

});