$(document).ready(function() {
  $("form#new-place").submit(function(event) {



    var inputtedCountry = $("input#new-country").val();
    var inputtedState   = $("input#new-state").val();
    var inputtedCity    = $("input#new-city").val();
    var newPlace = { country: inputtedCountry, state: inputtedState, city: inputtedCity, highlights: [] };
    $("#new-place").each(function() {
      var inputtedActivity = $(this).find("input.new-activity").val();
      var inputtedSight = $(this).find("input.new-sight").val();
      var newHighlight = { sight: inputtedSight, activity: inputtedActivity };
      newPlace.highlights.push(newHighlight);
debugger;
    });

    $('ul#places').append("<li><span class='place'>" + newPlace.country + " " + newPlace.state + " " + newPlace.city + "</li></span>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.country + " " + newPlace.city);
      $(".country").text(newPlace.country);
      $(".state").text(newPlace.state);
      $(".city").text(newPlace.city);
      $("ul#highlights").text("");
      newPlace.highlights.forEach(function(act) {
        $("ul#highlights").append("<li>" + act.sight + " " + act.activity + "</li>");
      });
    });

    event.preventDefault();
  });
});

// $(document).ready(function() {
//     $("#add-address").click(function() {
    // $("#new-addresses").append('<div class="new-address">' +
    //                              '<div class="form-group">' +
    //                                '<label for="new-street">Street</label>' +
    //                                '<input type="text" class="form-control new-street">' +
    //                              '</div>' +
    //                              '<div class="form-group">' +
    //                                '<label for="new-city">City</label>' +
    //                                '<input type="text" class="form-control new-city">' +
    //                              '</div>' +
    //                              '<div class="form-group">' +
    //                                '<label for="new-state">State</label>' +
    //                                '<input type="text" class="form-control new-state">' +
    //                              '</div>' +
    //                            '</div>');
//   });
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//
//   var inputtedFirstName = $('input#new-first-name').val();
//   var inputtedLastName = $('input#new-last-name').val();
//
//
//   var newContact = {firstName: inputtedFirstName, lastName: inputtedLastName, addresses: []};
//    $(".new-address").each(function() {
//     var inputtedStreet = $(this).find("input.new-street").val();
//     var inputtedCity = $(this).find("input.new-city").val();
//     var inputtedState = $(this).find("input.new-state").val();
//     var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
//     newContact.addresses.push(newAddress);
//   });
//
//
//   $('ul#contacts').append("<li><span class='contact'>" + newContact.firstName + ", " + newContact.lastName + ", " + newContact.address + "</span></li>");
//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//       $(".address").text(newContact.address);
//       $("ul#addresses").text("")
//       newContact.addresses.forEach(function(address) {
//       $("ul#addresses").append("<li>" + address.street + " " + address.city + " " + address.state + "</li>");
//       });
//     });
//
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input#new-address").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
//   });
//
//
// });
