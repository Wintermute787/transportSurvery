$(document).ready(function(){
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
      $("#work-responses").show();

      $("input:checkbox[name=work-transportation]:checked").each(function(){

        var workTransportationMode = $(this).val();
        var capitalWorkTransportation = workTransportationMode.toUpperCase();
        $('#work-responses').append(capitalWorkTransportation + "<br>");

      });

      $("#fun-responses").show();
      $("input:checkbox[name=fun-transportation]:checked").each(function(){
        var funTransportationMode = $(this).val();
        var capitalFunTransportationMode = funTransportationMode.toUpperCase();
        $('#fun-responses').append(capitalFunTransportationMode + "<br>");
      });
        $('#transportation_survey').hide();
    });
  });
