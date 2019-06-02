$.getJSON('http://localhost:3000/users', function(json) {
json.forEach(element => {
    var courses = '';
    element.courses.forEach(el => {
        courses += `${el} `
    });
    document.getElementById('studentsTable').innerHTML += `
    <tr><td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.lname}</td>
        <td>${courses}</td>
        <td>${element.city}</td>
    `
    });
});
$.getJSON('http://localhost:3000/teachers', function(json) {
json.forEach(element => {
    var courses = '';
    element.courses.forEach(el => {
        courses += `${el} `
    });
    document.getElementById('teachersTable').innerHTML += `
    <tr><td>${element.name}</td>
        <td>${element.lname}</td>
        <td>${courses}</td>
        <td>${element.salary}</td>
    `
    });
});

function delTeacherRequest(){
    $.ajax({
        url: 'http://localhost:3000/teachers', 
        data: {
            'name': document.getElementById('TeacherNameDel').value
        },
        type: 'DELETE',
        success: function(result){
            console.log('deleted');
        }
    });
}

function delStudentRequest(){
    $.ajax({
        url: 'http://localhost:3000/users', 
        data: {
            'name': document.getElementById('StudentNameDel').value
        },
        type: 'DELETE',
        success: function(result){
            console.log('deleted');
        }
    });
}

function editStudentRequest(){
    $.ajax({
        url: 'http://localhost:3000/users', 
        data: {
            'oldName': document.getElementById('oldName').value,
            'newName': document.getElementById('newName').value
        },
        type: 'PUT',
        success: function(result){
            console.log('sent');
        }
    });
}

function editTeacherCoursesRequest(){
    $.ajax({
        url: 'http://localhost:3000/teachers/courses', 
        data: {
            'name': document.getElementById('teachersNameEdit').value,
            'courses': document.getElementById('newCourses').value
        },
        type: 'PUT',
        success: function(result){
            console.log('sent');
        }
    });
}

function editTeacherSalaryRequest(){
    $.ajax({
        url: 'http://localhost:3000/teachers/salary', 
        data: {
            'name': document.getElementById('teachersNameEdit').value,
            'salary': document.getElementById('newSalary').value
        },
        type: 'PUT',
        success: function(result){
            console.log('sent');
        }
    });
}