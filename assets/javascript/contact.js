// Initialize Firebase
var config = {
    apiKey: "AIzaSyDnZoyAbIeiZs58A4rEqrZ7Qv8nFtfIobw",
    authDomain: "contact-me-bab2c.firebaseapp.com",
    databaseURL: "https://contact-me-bab2c.firebaseio.com",
    projectId: "contact-me-bab2c",
    storageBucket: "https://contact-me-bab2c.firebaseio.com/",
    messagingSenderId: "72571586031"
};
firebase.initializeApp(config);

var contactData = firebase.database();
console.log(contactData);

// Populate firebase database with initial data.
$("#submit").on("click", function(event) {
    event.preventDefault();

    var companyName = $("#companyName").val().trim();
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var comments = $("#comments").val().trim();

    // Creates local "temporary" object for holding contact data
    var newContact = {
        companyName: companyName,
        name: name,
        email: email,
        phone: phone,
        comments: comments,
    };

    console.log(newContact.companyName);
    console.log(newContact.name);
    console.log(newContact.email);
    console.log(newContact.phone);
    console.log(newContact.comments);

    contactData.ref().push(newContact);

    //Alert
    alert("Your information was successfully added!");

    //empty the form.
    $("#companyName").val("");
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#comments").val("");

    return true;

});

contactData.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());
  
    // // Store everything into a variable.
    // var tCompanyName = childSnapshot.val().companyName;
    // var tName = childSnapshot.val().name;
    // var tEmail = childSnapshot.val().email;
    // var tPhone = childSnapshot.val().phone;
    // var tComments = childSnapshot.val().comments;
});

