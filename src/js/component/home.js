import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import ModalUser from "./listgroup.js";
//create your first component7];

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				this.setState({ users: data });
			});
	}
	render() {
		let lista = this.state.users.map((item, i) => {
			return (
				<div key={i}>
					<a
						key={i}
						href=""
						className="list-group-item list-group-item-action "
						data-toggle="modal"
						data-target={"#exampleModalLong" + item.id}>
						{item.company.name}
					</a>
					<ModalUser user={item} />
				</div>
			);
		});
		return <div className="list-group">{lista}</div>;
	}
}
