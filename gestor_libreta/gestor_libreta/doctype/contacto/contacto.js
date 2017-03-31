// Copyright (c) 2017, Frappe and contributors
// For license information, please see license.txt
/*
frappe.ui.form.on('Contacto', {
	refresh: function(frm) {

	}
});

*/

frappe.ui.form.on("Telefono", "validate", function(frm) {

var value = frm.doc.phone_number
var pattern = new RegExp("(^[0-9]{3} [0-9]{3} [0-9]{4})$");
var result = pattern.test(value);

   if (pattern.test(value)==false) {

	alert("invalid");
       validated = false;
   }

});





