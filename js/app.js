(function(){
	function init(){
		function binaryToDecimal(binary){
			var decimal = 0;
			for (var index = binary.length - 1; index >= 0; index--) {
				decimal += parseInt(binary[index] * Math.pow(2, (binary.length-1) - index));
			}
			return decimal;
		}

		console.log(binaryToDecimal("1010101"));	
	}

	window.addEventListener('load', init, false);
}());