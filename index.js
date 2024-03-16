var idCardList = [];
var phoneList = [];

document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var degree = document.getElementById("degree").value;
    var college = document.getElementById("college").value;
    var totalmarks = document.getElementById("totalmarks").value;
    var obtainedmarks = document.getElementById("obtainedmarks").value;
    var idcard = document.getElementById("idcard").value;
    var phone = document.getElementById("phone").value;

    if (idCardList.includes(idcard) || phoneList.includes(phone)) {
      alert(
        "ID card or phone number already exists. Please enter unique details."
      );
      return;
    }

    idCardList.push(idcard);
    phoneList.push(phone);
    var educationTable = document.getElementById("educationTable");
    var newRow = educationTable.insertRow(-1);

    var fieldCell = newRow.insertCell(0);
    var valueCell = newRow.insertCell(1);

    fieldCell.innerHTML = "Name";
    valueCell.innerHTML = name;

    newRow = educationTable.insertRow(-1);
    fieldCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);

    fieldCell.innerHTML = "Age";
    valueCell.innerHTML = age;

    newRow = educationTable.insertRow(-1);
    fieldCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);

    fieldCell.innerHTML = "Gender:";
    valueCell.innerHTML = gender;

    newRow = educationTable.insertRow(-1);
    fieldCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);

    fieldCell.innerHTML = "Degree:";
    valueCell.innerHTML = degree;

    newRow = educationTable.insertRow(-1);
    fieldCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);

    fieldCell.innerHTML = "College:";
    valueCell.innerHTML = college;

    newRow = educationTable.insertRow(-1);
    fieldCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);

    fieldCell.innerHTML = "Total Marks:";
    valueCell.innerHTML = totalmarks;

    newRow = educationTable.insertRow(-1);
    fieldCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);

    fieldCell.innerHTML = "Obtained Marks:";
    valueCell.innerHTML = obtainedmarks;

    fieldCell.innerHTML = "I'd Crad";
    valueCell.innerHTML = idcard;

    newRow = educationTable.insertRow(-1);
    fieldCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);

    fieldCell.innerHTML = "Phone Number";
    valueCell.innerHTML = idcard;

    newRow = educationTable.insertRow(-1);
    fieldCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);

    var student = {
      name: name,
      dob: dob,
      age: age,
      gender: gender,
      degree: degree,
      college: college,
      totalmarks: totalmarks,
      obtainedmarks: obtainedmarks,
      idcard: idcard,
      phone: phone,
    };

    console.log(student);

    document.getElementById("studentForm").reset();
  });
