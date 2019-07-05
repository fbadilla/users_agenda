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
				<div className="modal-body">
					<h4>Usuario</h4>
					<h6>
						<u>{props.user.username}</u>
					</h6>
					<h4>Email</h4>
					<h6>
						<email>
							<u>{props.user.email}</u>
						</email>
					</h6>
					<h4>ciudad</h4>
					<h6>
						<u>{props.user.address.city}</u>
					</h6>
					<h4>sitio web</h4>
					<h6>
						<u>{props.user.website}</u>
					</h6>
				</div>
				<div className="modal-footer">
					<button
						type="button"
						className="btn btn-secondary"
						data-dismiss="modal">
						Cerrar
					</button>
				</div>
			</div>
		</div>
	</div>
);
export default ModalUser;
