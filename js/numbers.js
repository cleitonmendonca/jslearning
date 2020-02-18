function binaryToDecimal(binary){
			var decimal = 0;
			for (var index = binary.length - 1; index >= 0; index--) {
				decimal += parseInt(binary[index] * Math.pow(2, (binary.length-1) - index));
			}
			return decimal;
		}

		function decimalToBinary(decimal){
			var binary = "";
			while(decimal > 0){
				binary = decimal%2 + binary;				
				decimal = Math.floor(decimal/2);
			}
			return binary;
		}

		function fatorial (number){
			if(number < 2){
				return 1;
			}else
			{
				return number * fatorial(number - 1);
			}
		}