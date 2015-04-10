/*
Recursive funciton to convert an element's type. Mainly for SEO purposes.
Usage: <span data-glb-convertelement='{"targetelem":"img", "attributes": {"class":"img","src":"img/imgsrc.png","alt":"alt text","height":"55","width":"55"}}'></span>
Note: Works for nested elements that need to be converted.
*/

/*convert elements trigger*/
gjs.triggerConvertElements = function(){
	gjs.doc.find('[data-glb-convertelement]').each(function(e){
		gjs.convertElements( $(this) );
	});
}

/*convert elements function*/
gjs.convertElements = function($this){
	var data = $this.data('glb-convertelement'),
		target = data.targetelem,
		$newElem = $('<' + target + '>'),
		attrs = data.attributes,
		$html = $this.html();

	if(typeof data == 'object') {
		$.each( attrs, function( k, v ) {
			if ( k && v) {
				$newElem.attr(k, v);
			}
		});

		$newElem.append($html);
		$this.after($newElem).remove();

		$newElem.find('[data-glb-convertelement]').each(function(e){
			gjs.convertElements( $(this) );
		});
	}
}