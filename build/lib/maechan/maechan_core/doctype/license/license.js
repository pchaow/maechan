// Copyright (c) 2023, SE and contributors
// For license information, please see license.txt

function findExtra(key,list_extra){
    for (i = 0; i < list_extra.length; i++) {
        let x = list_extra[i];
        if (x.key == key) {
           return x;
        }
    }
    return null;
}

function findValue(key, list_extra) {

    let x = findExtra(key,list_extra)
    if(x!=null){
        return x.value
    }
    return null
    
}

frappe.ui.form.on('License', {
    refresh(frm) {
        // your code here
        // frm.set_df_property("license_type", "read_only", frm.is_new() ? 0 : 1);

    },
    btn_dialog_extra(frm) {
        console.log(frm.doc.license_type)
        if (frm.doc.license_type) {
            frappe.db.get_doc("LicenseType", frm.doc.license_type).then(r => {
                let licenseType = r;
                fields = []
                licenseType.details.forEach(x => {
                    let defaultValue = findValue(x.key, frm.doc.license_extra);
                    console.log("DEFAULT", defaultValue)
                    let f = {
                        label: x.key,
                        fieldname: x.key,
                        fieldtype: x.datatype,
                        options: x.options,
                        default: defaultValue
                    }
                    fields.push(f)

                })

                let d = new frappe.ui.Dialog({
                    title: 'Enter details',
                    fields: fields,
                    size: 'small', // small, large, extra-large 
                    primary_action_label: 'Submit',
                    primary_action(values) {
                        console.log(values);
                        frm.doc.license_extra.forEach(x => {
                            x.value = values[x.key]
                        })
                        d.hide();
                        frm.refresh_fields("license_extra");
                    }
                });

                d.show();
            })

        }





    },
    license_type(frm) {

        frm.clear_table("license_extra")

        frappe.db.get_doc("LicenseType", frm.doc.license_type)
            .then(r => {

                r.details.forEach(x => {
                    console.log(x)

                    extraDetails = frm.add_child("license_extra");
                    extraDetails.key = x.key

                })

                frm.refresh_fields("license_extra");
            })
    }
})