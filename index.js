function binaryAgent(str) {
    var newBin = str.split(" ");
var binCode = [];
let stringAnswer =document.getElementById('stringAnswer');

for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  let answer=binCode.join(" ");
  stringAnswer.innerText = answer;
  }

  function stringAgent(str){
    var strArr = str.split(/(?=[a-z0-9%;,.\s])/i);
    var binCode = [];
    var binAnswer = document.getElementById('binAnswer');

    for (i = 0; i < strArr.length; i++) {
        binCode.push(strArr[i].charCodeAt(0).toString(2));
      }
      let answer=binCode.join(" ");
      binAnswer.innerHTML = answer;
  }