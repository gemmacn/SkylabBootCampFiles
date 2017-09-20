/* Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1 */



function between(x1, x2){
	var numbers = [];

	if ( x2<x1) {
		return -1
	}

		for(var i=x1; i<x2; i++){
			numbers.push(i);
			
		}

		return numbers;
	}


/* Write a function that writes in the console the multiplication table (from 1 to 10)*/

function tabla(){

var result = '\n';
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}
}

/* Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter*/

 function mult (val){
 	 var result = '';
 	for( var i =1; i<11;i++){
 		result += (i*val) + ' ';
 	}
 	return result
 };

 /* Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them*/

 function multiples (){
 var mult = '';
 	 for (var i = 0; i < 500; i += 23) {
    		
      mult +=i + ' ';
  }

  return mult
 }

 /*Define a function max() that takes two numbers as arguments and returns the largest of them.
  Use the if-then-else construct available in Javascript.*/


  function compare(x,y){
  	if (x>y){
  		console.log(x);
  	}
  	else{
  		console.log(y)
  	}
  }

  /* Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.*/

  function maxOfThree(x,y,z){
  	if (x>y && x>z){
  		return x;
  	}

  	else if (y>x && y>z) {
  		return y;
  	}
  	else if (z>x && z> y){
  		return z;
  	}

  }

/*Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise*/

function vowel(letra){


	var arrVocales = ['a','e','i','o','u'];

	for ( i=0; i<=arrVocales.length;i++){
		if ( letra === arrVocales[i]){
			return true;
		}
		else{
			return false
		}
	}


}

/* Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". 
Give the function the name getRGB() and test it with this code*/

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16), //ParseInt Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
    	return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
    	return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    var colors={
    	Black: '#000000',
    	White: '#FFFFFF',
    	Red: '#FF0000',
    	Green:'#00FF00',
    	Blue: '#0000FF',
    }

    for (var i = 0 in colors){
    	if(hex === colors[i]){
    		console.log (colors[i].key);
    	}
    }

 

hexToRGB('#FF0000', 0.5);


