let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    document.getElementById('result').innerText = `Winner is ${currentPlayer}`;
    document.getElementById('result').className = 'result winner';
    return;
  }

  if (!arr.some((e) => e === null)) {
    document.getElementById('result').innerText = `Draw!!`;
    document.getElementById('result').className = 'result draw';
    return;
  }
}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}