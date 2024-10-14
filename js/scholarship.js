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

// Loop from zero to the one minus the number of checkbox button selections
for (counter = 0;  counter < form.checkbox.length; counter++)
{

// If a checkbox has been selected it will return true
// (If not it will return false)
if (form.checkbox[counter].checked)
{ checkbox_choices = checkbox_choices + 1; }

}


if (checkbox_choices > 3 )
{
// If there were more than three selections made display an alert box 
msg="You're limited to only three selections.\n"
msg=msg + "You have made " + checkbox_choices + " selections.\n"
msg=msg + "Please remove " + (checkbox_choices-3)  + " selection(s)."
alert(msg)
return (false);
}


if (checkbox_choices < 3 )
{
// If there were less then selections made display an alert box 
alert("Please make three selections. \n" + checkbox_choices + " entered so far.")
return (false);
}

    if (scholarshipPercentage > 0) {
        alert(`Congratulations! You are eligible for a ${scholarshipPercentage}% scholarship.`);
    } else {
        alert("Sorry, you are not eligible for a scholarship.");
    }

}
