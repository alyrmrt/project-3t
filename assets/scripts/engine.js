let p_X_Score = 0;
let p_O_Score = 0;
let ties = 0;
let turn = 'X';



function checkForWin(val) {
  if ($('.row-1 .box.' + val).length === 3
  || $('.row-2 .box.' + val ).length === 3
  || $('.row-3 .box.' + val).length === 3
  || $('.col-1.' + val).length === 3
  || $('.col-2' + val).length === 3
  || $('.col-3' + val).length === 3
  || ($('#1').hasClass(val)
      && $('#5').hasClass(val)
      && $('#9').hasClass(val))
  || ($('#3').hasClass(val)
      && $('#5').hasClass(val)
      && $('#7').hasClass(val))

  || ($('#2').hasClass(val)
        && $('#5').hasClass(val)
        && $('#8').hasClass(val))

    || ($('#3').hasClass(val)
          && $('#6').hasClass(val)
          && $('#9').hasClass(val))
     )
// I should not remove
 {
//  $('.box').empty();
//   $('.X').removeClass('X');
//  $('.O').removeClass('O')

   return true

  }
  }



  function checkTie(){
    if ($('.X').length + $('.O').length === 9){
  //   $('.box').empty();
  //   $('.X').removeClass('X');
  //   $('.O').removeClass('O')
      ties++
      $('#ties').text(ties)

    }
  }



        $('.box').click(function(){
            if (turn === 'X' && !$(this).text()) {
              $(this).text('X')
              $(this).addClass('X')
              turn = 'O'
              if(checkForWin('X')) {
                p_X_Score++;
                $('#X_Score').text(p_X_Score);
              } else checkTie()
              } else if (!$(this).text()){
                $(this).text('0')
                $(this).addClass('O')
                turn = 'X'
                if(checkForWin('O')) {
                  p_O_Score++;
                  $('#O_Score').text(p_O_Score);
                } else checkTie()

              }

            $('#turn').text(turn)

          })


module.exports = {

}
