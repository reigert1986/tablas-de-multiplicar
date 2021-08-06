function tablas(){
	const mult = prompt("ingrese un numero a multiplicar");

		for(let i=1;i<=10;i++){
	
		let res = document.write(`<p style='color:maroon'> la multiplicacion de ${mult} x ${i} es ${mult*i} </p> <br>`)
		}
}
tablas();


/*ESTO ES PARA NODE JS*/
/*
var num; 
process.stdout.write("ingrese un numero a multiplicar");
 
 process.stdin.on('numero', function(numero){
	 
	 for(let i=1;i<=10;i++){
	
	let res = process.stdout.write(`la multiplicacion de ${numero} x ${i} es ${numero*i} `)
	 
};
*/
