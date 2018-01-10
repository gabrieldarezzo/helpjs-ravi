var frutas = new Array('Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr');

for(i in frutas){
  var ul = document.getElementById("nomes");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(frutas[i]));
  ul.appendChild(li);
}