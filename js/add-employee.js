// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
    "use strict"

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let width = 800;
    let height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width,height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));
        
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    let btn = window.document.getElementById('cancel');
    btn.addEventListener('click', () => {
        window.close();
    });

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    const $ = (id) => document.getElementById(id);

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
        let userID          = $("id");
        let userName        = $("name");
        let userExt         = $("extension");
        let userEmail       = $("email");
        let userDepartment  = $("department");

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
   let submitForm = window.document.getElementById('submit');
   submitForm.addEventListener('click', (e) => {
         e.preventDefault()

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
        userID          = userID.value;
        userName        = userName.value;
        userExt         = userExt.value;
        userEmail       = userEmail.value;
        userDepartment  = userDepartment.value;

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
        let output = window.opener.document.getElementById('loginDetails');

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
        output.innerHTML = `ID: ${userID} <br> Name: ${userName} <br> Extension: ${userExt} <br> Email ${userEmail} <br>Department: ${userDepartment}`
// CLOSE THE POPUP
        window.close();
    });
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
});