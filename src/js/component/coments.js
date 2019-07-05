import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import ModalUser from "./listgroup.js";
//create your first component7];

export class Comentarios extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: []
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/comments")
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				this.setState({ comments: data });
			});
	}
	render() {
		let lista = this.state.comments.map((item, i) => {
			return (
				<div className="col-3" key={i}>
					<div className="card border-success mb-3">
						<div className="card-header bg-transparent border-success">
							{item.email}
						</div>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">{item.body}</p>
							<div className="card-footer bg-transparent border-success">
								{"comentario nº:" + item.id}
							</div>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className="container center">
				<div className="row">{lista}</div>
			</div>
		);
	}
}
