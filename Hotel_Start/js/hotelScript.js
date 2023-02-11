//write your scripts here

function calculate() {
  let rate = 100;

  let firstName = document.getElementById("customername").value.toUpperCase();
  let numNights = document.getElementById("nights").value;

  let total = numNights * rate;
  availableRooms = document.getElementById("rooms").value;

  document.getElementById("details").innerHTML =
    firstName +
    "<br>" +
    availableRooms +
    "<br>" +
    "Total cost of your stay is £" +
    total;

  if (numNights >= 7 && numNights <= 14) {
    discount = total * 0.1;
    discountTotal = total - total * 0.1;
    document.getElementById("details").innerHTML =
      firstName +
      "<br>" +
      availableRooms +
      "<br>" +
      numNights +
      " nights @ " +
      "£" +
      rate +
      " per night" +
      "<br>" +
      "Cost of stay " +
      " " +
      "£" +
      total +
      "-" +
      " " +
      "£" +
      discount +
      " discount!!!" +
      "<br>" +
      "Total cost now is " +
      "£" +
      discountTotal;
  } else if (numNights >= 14) {
    discount = total * 0.15;
    discountTotal = total - total * 0.15;
    document.getElementById("details").innerHTML =
      firstName +
      "<br>" +
      availableRooms +
      "<br>" +
      numNights +
      " nights @ " +
      "£" +
      rate +
      " per night" +
      "<br>" +
      "Cost of stay " +
      " " +
      "£" +
      total +
      "-" +
      " " +
      "£" +
      discount +
      " discount!!!" +
      "<br>" +
      "Total cost now is " +
      "£" +
      discountTotal;
  }

  document.getElementById("details").style.display = "block";
}

function roomchanged() {
  let room = document.getElementById("rooms").value;

  switch (room) {
    case "Single Room":
      document.getElementById("photo").src = "images/single.jpg";
      break;
    case "Twin Room":
      document.getElementById("photo").src = "images/twin.jpg";
      break;
    case "Double Room":
      document.getElementById("photo").src = "images/double.jpg";
      break;
    case "Triple Room":
      document.getElementById("photo").src = "images/triple.jpg";
      break;
    case "Superior Double Room":
      document.getElementById("photo").src = "images/superior.jpg";
      break;
    default:
      document.getElementById("photo").src = "images/hotel.jpg";
  }
}

document.getElementById("Book").addEventListener("click", calculate);

document.getElementById("rooms").addEventListener("change", roomchanged);
