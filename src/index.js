module.exports = function toReadable (number) {
  const numberStr = number.toString();
  const numberLength = number.toString().length;
 let oneDigit = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
 let twoDigit = ['0', '1','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

 const twoDigitFun = function (num) {
   if (num.toString().length === 1) {
   return oneDigit[num];
 } else if (num.toString().length === 2 && num <= 19) {
   return oneDigit[num];
 } else if (num.toString().length === 2 && num> 19) {
   if (num.toString()[1] === '0') {
     return (twoDigit[(num.toString()[0])])
   } else {
     return (twoDigit[(num.toString()[0])] +" "+ oneDigit[(num.toString()[1])]);
     }
   }
 };

 if (numberLength <= 2) {
   return twoDigitFun(number);
 } else if (numberLength > 2) {
   if(numberStr[1] === '0' && numberStr[2] === '0') {
     return oneDigit[(numberStr[0])] + ' hundred';
   } else if(numberStr[1] === '0') {
     return oneDigit[(numberStr[0])] + ' hundred ' + oneDigit[(numberStr[2])];
   } else {
     let newNum = numberStr.slice(1,3)
     return oneDigit[(numberStr[0])] + ' hundred '+ twoDigitFun(newNum);
   }
 }
}
