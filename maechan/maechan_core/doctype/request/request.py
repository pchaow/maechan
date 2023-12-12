# Copyright (c) 2023, SE and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Request(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF
		from maechan.maechan_core.doctype.attachment.attachment import Attachment
		from maechan.maechan_core.doctype.checklist.checklist import CheckList
		from maechan.maechan_core.doctype.checklistdetail.checklistdetail import CheckListDetail
		from maechan.maechan_core.doctype.licenseapprovehistory.licenseapprovehistory import LicenseApproveHistory
		from maechan.maechan_core.doctype.requestdetail.requestdetail import RequestDetail

		applicant_age: DF.Data | None
		applicant_amphur: DF.Link | None
		applicant_distict: DF.Link | None
		applicant_moo: DF.Data | None
		applicant_name: DF.Data | None
		applicant_nationality: DF.Data | None
		applicant_no: DF.Data | None
		applicant_province: DF.Link | None
		applicant_road: DF.Data | None
		applicant_soi: DF.Data | None
		applicant_tel: DF.Data | None
		approve_history: DF.Table[LicenseApproveHistory]
		approve_state: DF.Literal["\u0e2a\u0e23\u0e49\u0e32\u0e07", "\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32", "\u0e23\u0e2d\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34", "\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34", "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01", "\u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38"]
		attachment_extra: DF.Table[Attachment]
		checklist_comment: DF.Data | None
		checklist_date: DF.Data | None
		checklist_extra: DF.Table[CheckListDetail]
		checklist_list: DF.Table[CheckList]
		date: DF.Date | None
		house_no: DF.Link | None
		house_tel: DF.Data | None
		request_extra: DF.Table[RequestDetail]
		request_type: DF.Link | None
		signature_entrepreneur: DF.AttachImage | None
		signature_officer: DF.AttachImage | None
		workflow_state: DF.Literal["\u0e23\u0e2d\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23", "\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e44\u0e21\u0e48\u0e04\u0e23\u0e1a", "\u0e23\u0e2d\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48", "\u0e44\u0e21\u0e48\u0e1c\u0e48\u0e32\u0e19", "\u0e23\u0e2d\u0e2d\u0e2d\u0e01\u0e43\u0e1a\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15", "\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"]
	# end: auto-generated types
	pass