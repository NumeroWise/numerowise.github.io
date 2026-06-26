// =====================================
// NumeroWise Complete Blueprint
// =====================================

const API_URL =
"https://script.google.com/macros/s/AKfycbzo7ud09rlXlVX2YCnT11HD_zRv-U8yyT3b4EgTm5CXaskf952DPAKAAGuYLBUQRk5ywQ/exec";

const form =
document.getElementById("blueprintForm");

const loading =
document.getElementById("loadingSection");

form.addEventListener("submit", generateReport);

async function generateReport(e){

e.preventDefault();

const name =
document.getElementById("name").value.trim();

const dob =
document.getElementById("dob").value;

const email =
document.getElementById("email").value.trim();

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

if(email===""){
alert("Please enter your email address.");
return;
}

if(country===""){
alert("Please select your country.");
return;
}

loading.style.display="block";

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
email:email,
language:language,
country:country

})

});

const data =
await response.json();

console.log(data);
alert(JSON.stringify(data));
  
loading.style.display="none";

if(data.success){

alert(
"✅ Your Premium Blueprint has been generated successfully.\n\nPlease check your Email Inbox (and Spam folder if needed)."
);

// Reset form
form.reset();

// Redirect after 2 seconds
setTimeout(function(){

window.location.href="premium-reports.html";

},2000);

}
else{

alert(data.message);

}

}
catch(error){

loading.style.display="none";

alert("Unable to connect with NumeroWise Server.");

console.log(error);

}

}
