import frappe
from frappe.query_builder import DocType,Order
from maechan.maechan_core.doctype.license.license import License
from maechan.maechan_core.doctype.house.house import House

@frappe.whitelist(allow_guest=True)
def list_watergates(test) :
    request = frappe.form_dict
    waterGates = frappe.db.get_all("WaterGate", fields='*')
    frappe.response['message']  = waterGates