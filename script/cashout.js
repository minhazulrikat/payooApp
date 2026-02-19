document.getElementById("Cashout-btn").addEventListener("click", function () {
  const agentNumber = document.getElementById("agent-number").value;
  const cashoutAmount = document.getElementById("amount-input").value;
  const pinNumber = document.getElementById("cashout-pin").value;
  const balanceAmount = document.getElementById("balance");
  const balance = balanceAmount.innerText;

  let newBalance = Number(balance) - Number(cashoutAmount);
console.log(agentNumber.length, typeof(agentNumber.length))

if (agentNumber.length !== 11) {
    alert("invalid agent number");
    return;
  }

  if (newBalance < 0) {
    alert("invalid amount");
    return;
  }
  
  if (pinNumber == "1234") {
    alert("cashout succesfull");
    balanceAmount.textContent = newBalance;
  } else {
    alert("wrong pin number");
    return;
  }
});
console.log("hello world");
