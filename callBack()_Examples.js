//callback() Example1
function abc (a, b, callback) {
  return callback(a,b);
}
function Division(a, b) {
  return a/b;
}
function addition(a, b) {
  return a+b;
}
alert("The result is: "+ abc(2,3, Division));

//Callback() Example2
callback("Swaroop", function (){
    console.log("Scribbling something purposely :P");
  });
  
  function callback (a,b) {
    console.log(a);
    b();
  }

//Callback() Example3
var Student = {
    fullDetails: "Empty",
    data: function (Name, City, Age) //Full details of the student Object
    {
      this.data = "Name is "+ Name + ", he is from " + City+ " and his age is "+ Age;
    } 
  };
  function Display (Name, City, Age, callBack){
    callBack( Name, City, Age);
  }
  
  Display("Swaroop", "Kurnool", "25", Student.data);
  console.log(window.data);


//Callback() Example4
var Breakingbad = {
  Character: function(firstname, lastname) {
    this.cast= "Firstname is " + firstname +" and LastName is "+ lastname;
  }
};
function CharData(firstname, lastname, callBackfunc, TVseries) {  
  callBackfunc.apply(TVseries, [firstname, lastname]);
}
CharData ("Walter", "White", Breakingbad.Character, Breakingbad); 
CharData ("Jesse", "Pinkman", Breakingbad.Character); 
console.log(Breakingbad.cast);
console.log(window.cast);
