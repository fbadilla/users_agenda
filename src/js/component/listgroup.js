import React from "react";
const ModalUser = props => (
	<div
		className="modal fade"
		id={"exampleModalLong" + props.user.id}
		tabIndex="-1"
		role="dialog"
		aria-labelledby="exampleModalLongTitle"
		aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLongTitle">
						{props.user.company.name}
					</h5>
					<button
						type="button"
						className="close"
						data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">...</div>
				<div className="modal-footer">
					<button
						type="button"
						className="btn btn-secondary"
						data-dismiss="modal">
						Close
					</button>
					<button type="button" className="btn btn-primary">
						Save changes
					</button>
				</div>
			</div>
		</div>
	</div>
);
export default ModalUser;
