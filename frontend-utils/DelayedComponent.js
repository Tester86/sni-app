import React from "react";

class DelayedComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hidden: true };
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ hidden: false });
		}, 2500);
	}
	render() {
		return this.state.hidden ? <></> : this.props.children;
	}
}

export default DelayedComponent;
