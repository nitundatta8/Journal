export function Entry(title,body){
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function(){
  var str =this.body;
  var strArray = str.split(" ");
  return strArray.length;
};

Entry.prototype.getTeaser = function () {
  var str = this.body;
  var strArray = str.split(" ");
  var i=0;
  var teaser = "";
  for (strArray[i]; i<8; i++) {
    teaser += (strArray[i] + " ");
  }
  console.log(teaser)
  return teaser;
};

Entry.prototype.CountLetters = function() {
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var str = this.body;
  var characterString = str.split("");
  var i = 0;
  var vowelsInString = [];
  var consonantsInString = [];
  for (characterString[i]=0; i<characterString.length; i++) {
    if (vowels.includes(characterString[i])) {
      vowelsInString.push(characterString[i]);  
    }
    else if (consonants.includes(characterString[i])) {
      consonantsInString.push(characterString[i]); 
    }
  }
  return  "Vowels In String: "+ vowelsInString.length +" Consonants In String: " + consonantsInString.length;
};
