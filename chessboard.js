var size = 8;
var chessboard = "";

for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    if ((x + y) % 2 == 0)
      chessboard += " ";
    else
      chessboard += "#";
  }
  chessboard += "\n";
}

console.log(chessboard);
