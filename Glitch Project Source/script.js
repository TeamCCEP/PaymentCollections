$(document).ready(function () {

//call the method passing in the query string.
var jsonQuery = parseQueryString(window.location.search);

//if we have a populated json object, 
if( jsonQuery ) {
  //if we have name as a json path in the json object and it's populated.
  if(jsonQuery.waId){
    //use jquery to load the value into the name
    waId = jsonQuery.waId;
  }
  if(jsonQuery.charge){
    //use jquery to load the value into the name
    $('#charge').text(jsonQuery.charge);
    $('#noCharge').hide();
  }
  if(jsonQuery.order){
    //use jquery to load the value into the name
    $('#order').text(jsonQuery.order);
  }
}

else {
  $('#noCharge').show();
}

var formEnter = $('#form-enter');

formEnter.click(function (){
  
  $.ajax({
    url: 'https://hooks.us.webexconnect.io/events/',
    type: 'POST',
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({
      "waId" : waId
    })
  })
  .done(function (data) {
  console.log('Woo')

  });
  var completeMessage = $('#complete-message'); completeMessage.show();
  var postOrder = $('#preOrder'); postOrder.hide();
  $('#prePaid').hide();
  $('#paid').show();
  });
});