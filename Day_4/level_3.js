let month = prompt("Enter a month");
let new_month = month.toLowerCase();
let date = new Date();
let year = date.getFullYear();

switch (new_month) {
  case "january":
    console.log(`${month} has 31 days`);
    break;

  case "february":
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      console.log(`${month} has 29 days`);
    } else {
      console.log(`${month} has 28 days`);
    }
    break;

  case "march":
    console.log(`${month} has 31 days`);
    break;

  case "april":
    console.log(`${month} has 30 days`);
    break;

  case "may":
    console.log(`${month} has 31 days`);
    break;

  case "june":
    console.log(`${month} has 30 days`);
    break;

  case "july":
    console.log(`${month} has 31 days`);
    break;

  case "august":
    console.log(`${month} has 31 days`);
    break;

  case "september":
    console.log(`${month} has 30 days`);
    break;

  case "ocotober":
    console.log(`${month} has 31 days`);
    break;

  case "november":
    console.log(`${month} has 30 days`);
    break;

  case "december":
    console.log(`${month} has 31 days`);
    break;
}


function compare()
{
    int sanfoundry=1;
    char javascript=1;
    if(sanfoundry.tostring()===javascript)
        return true;
    else 
        return false;
}