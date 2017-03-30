// Copyright (c) 2017, Frappe and contributors
// For license information, please see license.txt
/*
frappe.ui.form.on("Telefono", "contacto", 
	 function(frm) {
		frappe.call({
			"method": "frappe.client.get",
			args: {
				doctype: "Conctato",
				name: frm.doc.contacto
			},
			callback: function (data) {
				frappe.model.set_value(frm.doctype,
				frm.docname, 
				"phone_number",
				data.message.full_name)
				
			}
				
		})


frappe.ui.form.on('Telefono', {
	refresh: function(frm) {


	}
});
	});*/















