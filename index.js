const amt = document.getElementById("amt");
const balance = document.getElementById("balance-num");
const goodName = document.getElementById("expen");
const status = document.getElementById("status");

function dater() {

  const time = new Date();
  const today = time.getDate();  
  const month = time.getMonth();
  const year = time.getFullYear();

  let currentMonth;

  switch(month) {
    case 0:
    currentMonth = "Jan";
    break;

    case 1:
    currentMonth = "Feb";
    break;

    case 2:
    currentMonth = "Mar";
    break;

    case 3:
    currentMonth = "Apr";
    break;

    case 4:
    currentMonth = "May";
    break;

    case 5:
    currentMonth = "Jun";
    break;

    case 6:
    currentMonth = "Jul";
    break;

    case 7:
    currentMonth = "Aug";
    break;

    case 8:
    currentMonth = "Sep";
    break;

    case 9:
    currentMonth = "Oct";
    break;

    case 10:
    currentMonth = "Nov";
    break;

    case 11:
    currentMonth = "Dec";
    break;
  }
 
  const thisDay = currentMonth + " " + today;
  document.getElementById("today").textContent = thisDay;
  document.getElementById("year").textContent = year;
}

dater();

/*Transactioning*/

 class expenditure{
    constructor(name,amount,type) {
   this.name = name;
   this.amount = amount;
   this.type = type
    }
 }

 const transactions = [];
 let i = 0;


  
function totalIncome() {
   const incomes = transactions.filter(p=> p.type == "income");
  const allIncome = incomes.map(p=> p.amount);
  const total = allIncome.reduce((a,b)=> a+b,0);

  return total;
  
}


function totalExpenses() {
   const expenses = transactions.filter(p=> p.type == "expense");
   const allExpenses = expenses.map(p=> p.amount);
  const total = allExpenses.reduce((a,b)=> a+b,0);

  return total;

}

function calBalance() {
  const balance = totalIncome() - totalExpenses();

  return balance;
}


function financialHealth(val) {

if(val <= 0) {
  status.textContent = "CRITICAL";
  status.style.color = "red";
 }

else if(val >= 1 && val <= 499) {
  status.textContent = "FAIR";
  status.style.color = "pink";
 }
 
 else if(val >= 500 && val <= 999) {
  status.textContent = "GOOD";
  status.style.color = "Yellow";
 }

  else if(val >= 1000) {
  status.textContent = "EXCELLENT";
  status.style.color = "green";
 }


}

 function transactionHistory() {
  const recents = transactions;
   const hostage = recents.at(-1);

   const {name,amount} = hostage;

  return [name,amount];  
    
  
 }



 
 function addIncome () {
  const name = goodName.value;
  const amount = Number(document.getElementById("amt").value);
  const transaction = new expenditure(name,amount,"income");

  transactions.push(transaction);

 document.getElementById("tot-inc").textContent = "$" + totalIncome();   

 balance.textContent = "$" + calBalance();

  financialHealth(calBalance());



document.getElementById("recents").insertAdjacentHTML("afterbegin",`<span class="draft"><p class="exp">${transactionHistory()[0]}</p> <p class="pricee">+${transactionHistory()[1]}</p></span>`);
document.querySelector(".recents .pricee").style.color = "green";

amt.value = "";
goodName.value = "";

}


function addExpense() {
    const name = goodName.value;
  const amount = Number(document.getElementById("amt").value);
  const transaction = new expenditure(name,amount,"expense");
  transactions.push(transaction);
    
 document.getElementById("tot-exp").textContent = "$" + totalExpenses();  
 
  balance.textContent = "$" + calBalance();

   financialHealth(calBalance());

 document.getElementById("recents").insertAdjacentHTML("afterbegin",`<span class="draft"><p class="exp">${transactionHistory()[0]}</p> <p class="pricee">-${transactionHistory()[1]}</p></span>`);


amt.value = "";
goodName.value = "";
  
}




