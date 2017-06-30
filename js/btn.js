window.onload = function() {

	var btn = document.querySelector( '.btn' );

	var btnFront = btn.querySelector( '.btn-front' ),
		btnYes = btn.querySelector( '.btn-back .yes' ),
		btnNo = btn.querySelector( '.btn-back .no' );

	btnFront.addEventListener( 'click', function( event ) {
		btn.classList.add( 'is-open' );
	} );

	btnYes.addEventListener( 'click', function( event ) {
		btn.classList.remove( 'is-open' );
	} );

	btnNo.addEventListener( 'click', function( event ) {
		btn.classList.remove( 'is-open' );
	} );
};
