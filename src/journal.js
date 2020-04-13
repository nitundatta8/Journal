export function Entry(title,body){
  this.title = title;
  this.body = body;
}

//var entry = new Entry("Rugs", "Rugs can be made of wool, silk, cotton, jute, or synthetic fibers.");
Entry.prototype.countWords = function(){
  var str =this.body;
  var strArray = str.split(" ");
  return strArray.length;
};

