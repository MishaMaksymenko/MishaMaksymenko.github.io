document.addEventListener("DOMContentLoaded", function() {
	field();
});

var nodeTypes = ['', 'ELEMENT_NODE', 'ATTRIBUTE_NODE', 'TEXT_NODE', 'CDATA_SECTION_NODE', 'ENTITY_REFERENCE_NODE', 'ENTITY_NODE', 'PROCESSING_INSTRUCTION_NODE', 'COMMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_TYPE_NODE', 'DOCUMENT_FRAGMENT_NODE', 'NOTATION_NODE']

function findBySelectot(selector) {
	if ( typeof selector === 'string' ) {
		var elem = document.querySelectorAll(selector);
		var elemAmount = elem.length;
		
		if ( !elemAmount ) { return undefined };

		if ( elemAmount === 1) { return elem[0] };

		return elem;	
	}

	return nodeTypes[selector.nodeType];
}

function findNode(selector) {
	var elem = document.querySelector(selector);
	if ( !elem ) { return undefined };
	return elem;
}

function insertAfter(element, prevSibling) {
	var parent = element.parentNode;
	var nextSibling = prevSibling.nextSibling;
	parent.insertBefore(element, nextSibling);
}

function atributeHandler(element, attrName, attrValue) {
	if ( attrValue === undefined ) {
		return element.getAttribute(attrName);
	}
	return element.setAttribute(attrName, attrValue)
}

function field() {
	var field = document.createElement('div');
	var block = document.createElement('div');
	field.style.cssText="width: 400px; height: 400px; border: 1px solid #000;";
	block.style.cssText="float: left; width: 50px; height: 50px;";

	var blockBlack = block.cloneNode();
	blockBlack.style.background = '#000';

	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
				var blockNew = blockBlack.cloneNode();
			} else {
				var blockNew = block.cloneNode();	
			}
			field.appendChild(blockNew)
		}	
	};

	document.body.appendChild(field);
}