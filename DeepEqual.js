function deepEqual(x, y) {
	var cmp;
	
	if (typeof x == "object" && typeof y == "object") {
		if (x !== null && y !== null) {
			if (x.length === y.length) {
				for( var prop in x) {
					cmp = deepEqual(x[prop], y [prop]);
					if (!cmp) return false;
				}	
			}
			else return false;	
		}
		else if (x == null && y == null) 
			return true;
		else return false;
		}
	else if ( x === y) 
		cmp = true;
	else return false;
return cmp;
};


var obj = {here: {is: "an"}, object: 2}; 
console.log(deepEqual(obj, obj));
// > true
console.log(deepEqual(obj, {here: 1, object: 2}));
// > false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// > true
console.log(deepEqual(null, null));
console.log(deepEqual(null, obj));
// > false
console.log(deepEqual(1, 1));
console.log(deepEqual(1, 2));
