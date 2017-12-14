//generando el numero random


$('#sendNumber').click(function(){

  numeroCel();
})
$('#listo').click(function(){

   checkCode();
})
var numeroCel= function(){
  var phoneNumber = $("#icon_telephone").val().length;
    if (phoneNumber == 9) {
      //añadir atributos href a el boton
      $("#sendNumber").attr("href", "veryfy.html");

      
    } else {
      alert("ERROR! \n Ingresa un numero Valido,\n de 9 digitos");
      $("#sendNumber").removeAttr("href");
    }
    randomCode();
   
}


//FUNCIONES
var code = (0);
var randomCode = function(){
  var phoneNumber = $("#icon_telephone").val().length;
  
  if(phoneNumber == 9){
    code += (Math.round(Math.random()*900)+99);
    alert("Su codigo es  \n " + code);

  }

}
console.log(code);

//Veryficar CODIGO
var checkCode = function(){
  var firstNum = $(".in-code").eq(0).val();
  var secondNum = $(".in-code").eq(1).val();
  var thirtNum = $(".in-code").eq(2).val();
  var codeTotal = firstNum + secondNum + thirtNum;
  console.log(codeTotal);
  if(codeTotal == code){
      $("#listo").attr("href", "index.html");
    } else {
      $("#listo").removeAttr("href");
      alert("Código erróneo");
      $(".in-code").val("");
      $(".in-code").eq(0).focus();
    }
}