function isEven(x){
	var num = Math.abs(x); // To fix function for usage with negative numbers

	if (num == 1) { 
		return false;
	} else if (num == 0) {
		return true;
	} else {
		return isEven(num - 2);
	}
}

// Your code here.
console.log(isEven(50)); // > true
console.log(isEven(75)); // > false
console.log(isEven(-1)); // > ?? false