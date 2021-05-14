import ajax from './ajax';
import React from 'react';
import Loader from './loader';
import Navigation from "./Navigation";

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: [],
			errMessage: '',
			loading: true
		};
	}
	
	componentDidMount() {
		ajax('programming-languages', 
			data => this.setState({languages: data, loading: false}),
			errMessage => this.setState({errMessage, loading: false})
		);
	}
	
	render() {
		return (
			<div>
				<Navigation onClick={this.props.onBackClick}/>
				<h1>Programming Languages</h1>
				<Loader show={this.state.loading} />
				
				<ul className="list-group">
					{this.state.languages.map((lang,i) => (
						<li className="list-group-item" key={i}>{lang}</li>
					))}
				</ul>
				
				<div className={'alert alert-danger' + (this.state.errMessage ? '' : ' hidden')}>
					{this.state.errMessage}
				</div>
			</div>
		);
	}
}
