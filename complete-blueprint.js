// =====================================
// NumeroWise Complete Blueprint
// =====================================

const API_URL =
"https://script.google.com/macros/s/AKfycbzo7ud09rlXlVX2YCnT11HD_zRv-U8yyT3b4EgTm5CXaskf952DPAKAAGuYLBUQRk5ywQ/exec";

const form =
document.getElementById("blueprintForm");

const loading =
document.getElementById("loadingSection");

const reportSection =
document.getElementById("reportSection");

const reportContent =
document.getElementById("reportContent");

const copyBtn =
document.getElementById("copyBtn");

form.addEventListener("submit", generateReport);

async function generateReport(e){

e.preventDefault();

const name =
document.getElementById("name").value.trim();

const dob =
document.getElementById("dob").value;

const language =
document.getElementById("language").value;

const country =
document.getElementById("country").value;  

if(name===""){

alert("Please enter your full name.");

return;

}

if(dob===""){

alert("Please select your Date of Birth.");

return;

}

loading.style.display="block";

reportSection.style.display="none";

try{

const response =
await fetch(API_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name,

dob:dob,

language:language,

country: country  

})

});

const data =
await response.json();

loading.style.display="none";

if(data.success){

reportContent.innerHTML =
formatReport(data.report);

reportSection.style.display="block";

window.scrollTo({

top:reportSection.offsetTop,

behavior:"smooth"

});

}else{

alert(data.message);

}

}catch(error){

loading.style.display="none";

alert("Unable to connect with NumeroWise Server.");

console.log(error);

}

}

function formatReport(report){

return report

.replace(/\n/g,"<br>");

}

copyBtn.addEventListener("click",function(){

const text =
reportContent.innerText;

navigator.clipboard.writeText(text);

alert("Report copied successfully.");

});
