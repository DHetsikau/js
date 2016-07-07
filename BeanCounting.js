function countBs(s){
	var n = 0;
	for (var i = 0; i < s.length; i++) {
		if (s.charAt(i) === "B")
			n++;
	}
	return n;
}

function countChar(s, c){
	var n = 0;
	for (var i = 0; i < s.length; i++) {
		if (s.charAt(i) === c)
			n++;
	}
	return n;
}