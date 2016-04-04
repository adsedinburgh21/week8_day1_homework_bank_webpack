var Bank = require('./bank/bank.js');
var sampleAccounts = require('./sample.json');
var Account = require('./bank/account.js')



window.onload = function(){
  console.log("webpack app started");
  var bank = new Bank();
  for( var accountData of sampleAccounts){
    bank.addAccount( new Account( accountData ) );
  }

  var totalDisplay = document.getElementById('total');
  totalDisplay.innerText = "Total Cash in Bank: £" + bank.totalCash();

  var totalPersonal = document.getElementById('total_personal');
  totalPersonal.innerText = "Total Cash in Personal Accounts: £" + bank.totalCash("personal");

  var totalBusiness = document.getElementById('total_business');
  totalBusiness.innerText = "Total Cash in Business Accounts: £" + bank.totalCash("business");

  var personalList = document.getElementById("personal_accounts");
  var allPersonalAccounts = bank.filteredAccounts("personal");
  for( var account of allPersonalAccounts ){
    var li = document.createElement("li");
    li.innerText = account.owner + ": £" + account.amount;
    personalList.appendChild(li);
  }

  var businessList = document.getElementById("business_accounts");
  var allBusinessAccounts = bank.filteredAccounts("business")
  for( var account of allBusinessAccounts ){
    var li = document.createElement("li");
    li.innerText = account.owner + ": £" + account.amount;
    businessList.appendChild(li);
  }


};

