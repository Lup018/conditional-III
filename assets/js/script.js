/* Catch the button that makes event */
let button = document.getElementById( 'button' );
/* This button generate event */
button.addEventListener('click', () =>{
    /* Catch inputs and his values */
    selectOne = document.getElementById( 'select-1' ).value;
    selectTwo = document.getElementById( 'select-2' ).value;
    selectThree = document.getElementById( 'select-3' ).value;
    /* Join value's inputs*/
    let selectOption = selectOne + selectTwo + selectThree;
    /* This paragraph appear when event happens */
    textConfirm = document.getElementById( 'confirm-text' );
    /* First password and here it shows the password is correct */
    if( selectOption == '911' ){
        textConfirm.innerHTML = 'Password correcto'
    /* Second password and here it show the password is correct */
    }else if ( selectOption == '714' ) {
        textConfirm.innerHTML = 'Password correcto'
    /* Here it shows the password isn't correct */
    } else {
        textConfirm.innerHTML = 'Password incorrecto'
    }
})
