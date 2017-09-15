// step 2 send the number from the input to the server. This is an event that we send to the server. The event is called 'vote' in this case.
$(function () {
    // step 1 connects the server to the client
    let socket = io();
    // end of step 1
    $('form').submit(function(){
         let votes = { 
            inputNumber: $('#inputNumber').val(),
            selectLokal: $('#selectLokal').val(),
            selectParti: $('#selectParti').val(),
            vasa: $('#vasa').val(),
            masthug: $('#masthug').val(),
            gardsten: $('#gardsten').val(),
            kortedala: $('#kortedala').val() 
         };
        socket.emit('submit', votes);
    });
// end of step 2 
            // step 3 include the number(message that we sent) on the page
            socket.on('submit', (votes) => {
                              
              console.log(votes.selectLokal);
              console.log(votes.selectParti);
    
                
              var lokal =  votes.selectLokal;
              let voteList = [];
    
                
              switch(lokal) {

                  case "vasakyrkan":
                    $('#vasa').append($('<span>').text((votes.selectParti) + (votes.inputNumber)));
                      /*voteList.push(votes.inputNumber);
                      let sum = voteList.reduce((a, b) => a + b, 0);
                      console.log(sum);*/

                  break;

                  case "masthuggskyrkan":
                    $('#masthug').append($('<span>').text((votes.selectParti) + (votes.inputNumber)));
                  break; 
                      
                  case "gårdstenskyrkan":
                    $('#gardsten').append($('<span>').text((votes.selectParti) + (votes.inputNumber)));
                  break;
                      
                  case "kortedalakyrka":
                    $('#kortedala').append($('<span>').text((votes.selectParti) + (votes.inputNumber)));
                  break;   
                      
                  case null:
                      alert("Du glömde välja vallokal eller/och parti  :)");
                      break;
    
              }  
                
            console.log(voteList);

              })  
            // end of step 3
    });

    //    });


