
const show = document.querySelector(".show");
const btn = document.querySelector(".btn");

function tablas(){
	const mult = prompt("ingrese un numero a multiplicar");

		for(let i=1;i<=10;i++){
	
			show.innerHTML += `<p style='color:maroon'> la multiplicacion de ${mult} x ${i} es ${mult*i} </p> <br>`;
		}
}

btn.addEventListener("click", tablas);


/*ESTO ES PARA NODE JS*/
/*
var num; 
process.stdout.write("ingrese un numero a multiplicar");
 
 process.stdin.on('numero', function(numero){
	 
	 for(let i=1;i<=10;i++){
	
	let res = process.stdout.write(`la multiplicacion de ${numero} x ${i} es ${numero*i} `)
	 
};
*/
