// MLB CODING CHALLENGE
// Steven Hendricks
// Oct 2, 2018

window.onload = function() {


//MEMBER ARRAY
  var give = ['Jeff', 'Tony', 'Caroline', 'Cindy', 'Wes', 'Tina', 'Christine', 'Penelope', 'Pat', 'Stevo', 'Jasper', 'Rose', 'Howard'];


//ADD A MEMBER
  add.onclick = function() {
    var nameInput = document.getElementById('name');
    // preventDefault();
    give.push(nameInput.value)
    // return false
    console.log(nameInput.value);
    console.log(give);

  };

  var receive = give.concat();
  var peopleWrap = document.getElementById('peopleWrap');
  var people = document.getElementById('people');
  var choose = document.getElementById('choose');
  var result = document.getElementById('result');
  var close = document.getElementById('close');


//PULLDOWN LIST
  function drawList() {
    people.innerHTML = '<option value="">What is your Name?</option>';
    for (var i = give.length - 1; i >= 0; i--) {
      var option = document.createElement('option');
      option.value = i;
      option.innerHTML = give[i];
      people.appendChild(option);
    }
  }

  drawList();

//CHOOSE A PERSON
  function selectPerson(person) {
    var name = give[person];
    var nameIndex = receive.indexOf(name);

    if (nameIndex >= 0) {
      receive.splice(nameIndex, 1);
    }
    var recipient = Math.floor((Math.random() * receive.length));
    var recipientName = receive[recipient];

    receive.splice(recipient, 1);
    give.splice(person, 1);

    if (nameIndex >= 0) {
      receive.push(name);
    }
    result.innerHTML = "<h2>" + name + ", you're gifting to " + recipientName + "!</h2>";
    close.innerHTML = "Reset for next year";
    if (give.length > 0) {
      drawList();
    }
  }

  choose.onclick = function() {
    if (people.value) {
      selectPerson(people.value);
    }
  };


//CLEANUP
  close.onclick = function() {
    result.innerHTML = "";
    close.innerHTML = "";
    if (give.length == 0) {
      peopleWrap.parentNode.removeChild(peopleWrap);
      choose.parentNode.removeChild(choose);
      close.innerHTML = "";
    }
  };
}
