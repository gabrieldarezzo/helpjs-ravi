var numeros = new Array();

document.getElementById('btn-add').addEventListener('click', function() {
	var numero = document.getElementById('numero').value;
	numeros[numeros.length] = parseInt(numero);
	console.log(numeros);	
	atualizaListagem(numeros);
});



// var tdd = new Array(1,5,20,33);
// atualizaListagem(tdd);

document.getElementById('numeros').addEventListener('click', function(e) {
	//Garante que foi clicado o 'li'
	if(e.target && e.target.nodeName == "LI") {
		var li = e.target;
		this.removeChild(e.target); 
	}
});




//Apaga a lista e exibe novamente de acordo com o array....
function atualizaListagem(arr){
	var ul = document.getElementById("numeros");
	//Limpa os nomes
	ul.innerHTML = '';
	
	for(i in arr){
		var li = document.createElement("li");
		var el = document.createTextNode(arr[i]);
		li.appendChild(el);
		ul.appendChild(li);
	}
}




