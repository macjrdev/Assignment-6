// HANDLE THE LOAD EVENT OF THE WINDOW
    window.addEventListener('load', () => {
        "use strict"
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    let btn = window.document.getElementById('btnAddEmployee');
    btn.addEventListener('click', () => {
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open('add-employee.html', 'Add Employee', 'width=1000,height=600');
    });
});
