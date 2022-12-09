 let $buttons = document.querySelectorAll("button");
 let ui = document.querySelector(".userEntry");
 let hasilakhir = document.querySelector(".hasilakhir");
 let opPressed = false;

 let nilaisatu = [];
 let nilaidua = [];
 var operator = [];
 let hasil = 0;


 [...$buttons].map(x => {
     x.addEventListener("click", function (e) {

         switch (this.innerHTML) {
             case "AC":
                 clearDisplay();
                 break;
             case "DEL":
                 removeNumber();
                 break;
             case "+/-":
                 makeNegative();
                 break;
             case "=":
                 makeCalculation();
                 break;    
             case "+":
                 operator.splice(0, 1, this.innerHTML)
                 console.log(operator);

                 storeValue();
                 break;
             case "*":
                 operator.splice(0, 1, this.innerHTML)
                 console.log(operator);

                 storeValue();
                 break;
             case "/":
                 operator.splice(0, 1, this.innerHTML)
                 console.log(operator);

                 storeValue();
                 break;
             case "-":
                 operator.splice(0, 1, this.innerHTML);
                 console.log(operator);
                 storeValue();
                 break;
             default:
                  if (nilaisatu.length >12) {
                     alert("Kata Amir gak boleh lebih dari 13 angka");
                 }

                  else {

                     nilaisatu.push(this.innerText);
                     ui.textContent = nilaisatu.join("");
                     console.log(nilaisatu);

                 }
                 break;
             case ".":
                 if (nilaisatu.includes(".")) {
                     alert("You cannot use anymore decimals");
                 } else {
                     nilaisatu.push(this.innerText);
                     ui.textContent = nilaisatu.join("");

                 }
                 break;

         }

     })
 })




 function clearDisplay() {

     ui.textContent = "";
     hasilakhir.textContent = ""
     nilaisatu = [];
     nilaidua = [];
     operator = [];
 }

 function removeNumber(e) {

     nilaisatu.pop();
     ui.textContent = nilaisatu.join("");
 }


 function makeNegative() {

     if (nilaisatu.length < 1) {
         return false;
     }else if(nilaisatu[0] == "-") {
         nilaisatu.shift()

     } else {
         nilaisatu.unshift("-")

     }
     ui.textContent = nilaisatu.join("");
 }

 function makeCalculation() {

     if (nilaidua.length > 0 && operator.length!==0) {
//         //hasil = nilaidua.concat(operator, nilaisatu).join("");
         hasil = eval(nilaidua + operator + nilaisatu.join(""));
         hasilakhir.textContent = "";
         hasilakhir.textContent = eval(hasil).toFixed(2);
         ui.textContent = "";
         nilaidua = eval(hasil);
         nilaisatu = [];
//         //operator = [];

     } else if (operator.length == 0) {

         alert("invalid nilai tidak dapat dihitung");
        
     }

     else {
//         //hasil = nilaidua.concat(operator, nilaisatu).join
         hasil = hasil = eval(nilaidua + operator + nilaisatu.join(""));

         console.log("final answer");
         console.log(hasil);
         hasilakhir.textContent = "";
         ui.textContent = "";
         hasilakhir.textContent = eval(hasil).toFixed(2);
//         //operator = [];
         nilaidua = eval(hasil);
         nilaisatu = [];



     }


 

    
 }

 function storeValue() {




         if (nilaisatu.length == 0 && nilaidua.length==0) {
             return false;
         } else if (nilaidua.length > 0) {
             hasilakhir.textContent = nilaidua + " " + operator;
          

            
         }else if(nilaidua.length==0) {
             nilaidua.push(nilaisatu.join(""));
             nilaisatu = [];
             ui.textContent = "";
             hasilakhir.textContent = "";
             hasilakhir.textContent = nilaidua + " " + operator

            
     }
         hasilakhir.textContent = nilaidua + " " + operator;

       
        
 }
