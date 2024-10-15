function scholarshipCheck() {
    const cgpa = parseFloat(document.getElementById('cgpa').value);
    let scholarshipPercentage;
    
    switch (true) {
        case (cgpa > 9.5):
            scholarshipPercentage = 30;
            break;
        case (cgpa > 9):
            scholarshipPercentage = 20;
            break;
        case (cgpa > 8.5):
            scholarshipPercentage = 10;
            break;
        default:
            scholarshipPercentage = 0;
            break;
    }

    const form = document.getElementById('form')
    
var checkbox_choices = 0;

for (counter = 0;  counter < form.checkbox.length; counter++)
{

if (form.checkbox[counter].checked)
{ 
    scholarshipPercentage += 5;
}

}

    if (scholarshipPercentage > 0) {
        alert(`Congratulations! You are eligible for a ${scholarshipPercentage}% scholarship.`);
    } else {
        alert("Sorry, you are not eligible for a scholarship.");
    }

}
