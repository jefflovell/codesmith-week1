function leetspeak(str) {
	var myStr = str;
	var finalStr = new String();
	var regex = /h4¢k3\|2/g;

	for (var i = 0; i < myStr.length; i++){
		if(myStr[i] === "a" || myStr[i] === "A") {
			finalStr += "4";
		}else if(myStr[i] === "b" || myStr[i] === "B") {
				finalStr += "ß";
		}else if(myStr[i] === "c" || myStr[i] === "C") {
				finalStr += "¢";
		}else if(myStr[i] === "d" || myStr[i] === "D") {
				finalStr += "[)";
		}else if(myStr[i] === "e" || myStr[i] === "E") {
				finalStr += "3";
		}else if(myStr[i] === "f" || myStr[i] === "F") {
			finalStr += "ƒ";
		}else if(myStr[i] === "g") {
			finalStr += "G";
		}else if(myStr[i] === "H") {
			finalStr += "h";
		}else if(myStr[i] === "i" || myStr[i] === "I") {
			finalStr += "!";
		}else if(myStr[i] === "l" || myStr[i] === "L") {
			finalStr += "1";
		}else if(myStr[i] === "m" || myStr[i] === "M") {
			finalStr += "|V|";
		}else if(myStr[i] === "n" || myStr[i] === "N") {
			finalStr += "И";
		}else if(myStr[i] === "o" || myStr[i] === "O") {
			finalStr += "0";
		}else if(myStr[i] === "p" || myStr[i] === "P") {
			finalStr += "[]D";
		}else if(myStr[i] === "r" || myStr[i] === "R") {
			finalStr += "|2";
		}else if(myStr[i] === "s" || myStr[i] === "S") {
			finalStr += "$";
		}else if(myStr[i] === "t" || myStr[i] === "T") {
			finalStr += "†";
		}else if(myStr[i] === "u" || myStr[i] === "U") {
			finalStr += "µ";
		}else if(myStr[i] === "v" || myStr[i] === "V") {
			finalStr += "\/";
		}else if(myStr[i] === "w" || myStr[i] === "W") {
			finalStr += "\/\/";
		}else if(myStr[i] === "x" || myStr[i] === "X") {
			finalStr += "}{";
		}else if(myStr[i] === "y" || myStr[i] === "Y") {
			finalStr += "Ч";
		}else if(myStr[i] === "z" || myStr[i] === "Z") {
			finalStr += "2";
		}else{
			finalStr += myStr[i];
		}	
	};
	finalStr = finalStr.replace(regex,"h4x0|2");
	return finalStr;
}

function capVowels(str) {
	var myStr = str;
	var finalStr = new String();

	for (var i = 0; i < myStr.length; i++){
		if(myStr[i] === "a") {
			finalStr += "A";
		}else if(myStr[i] === "e") {
				finalStr += "E";
		}else if(myStr[i] === "i") {
				finalStr += "I";
		}else if(myStr[i] === "o") {
				finalStr += "O";
		}else if(myStr[i] === "u") {
				finalStr += "U";
		}else{
			finalStr += myStr[i];
		}	
	};
	return finalStr;
}

function reverseChunk(arr){

}