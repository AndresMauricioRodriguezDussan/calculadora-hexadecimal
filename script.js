function analyzeBytes() {
	// Obtiene el valor del área de texto y lo convierte en un arreglo de bytes
	var hexString = document.getElementById("hex-input").value;

	// Obtiene la posición del byte y la cantidad de bytes a obtener
	var bytePos = parseInt(document.getElementById("byte-pos").value);
	var byteQty = parseInt(document.getElementById("byte-qty").value);

	// Obtiene el arreglo de bytes seleccionado
	var selectedBytes = hexString.slice(bytePos, bytePos + byteQty);

	var byteArr = selectedBytes.match(/.{1,2}/g);

	// Obtiene la forma de análisis seleccionada por el usuario
	var analysisType = document.getElementById("analysis-type").value;

	// Convierte el arreglo de bytes a la forma de análisis seleccionada
	var result;
	if (analysisType === "decimal") {
		result = byteArr.map(hex => parseInt(hex, 16));
		result.join("");
	
	} else if (analysisType === "hexadecimal") {
		result = byteArr.join("");

	} else if (analysisType === "ipv4") {
		// Verifica que se hayan seleccionado cuatro bytes para una dirección IPv4
		if (byteArr.length !== 4) {
		result = "No se ha seleccionado una dirección IPv4 válida";
		} else {
		result = byteArr.map(hex => parseInt(hex, 16));
		result = byteArr.join(".");
		}
	}
	// Muestra el resultado en el área de texto correspondiente
	document.getElementById("result").innerHTML = result;
}


