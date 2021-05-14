import React from 'react';
import ReactDOM from 'react-dom';
import LangList from './languages';
import MovieList from './Movies';
import MainMenu from './mainmenu';

class Application extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			pageId: 'mainmenu'
		};
		
		this._onItemSelect = this._onItemSelect.bind(this);
		this._onBackClick = this._onBackClick.bind(this);
	}
	
	_onItemSelect(itemId) {
		this.setState({pageId: itemId});
	}
	
	_onBackClick() {
		this.setState({pageId: 'mainmenu'});
	}
	
	render() {
		let menuItems = [
			{id: 'lang', title: 'Programming Languages'},
			{id: 'movies', title: 'Movies'}
		];
		
		return (
			<div className="container">
				{this.state.pageId == 'mainmenu' ? <MainMenu items={menuItems} onItemSelect={this._onItemSelect} /> : ''}
				{this.state.pageId == 'lang' ? <LangList onBackClick={this._onBackClick} /> : ''}
				{this.state.pageId == 'movies' ? <MovieList onBackClick={this._onBackClick} /> : ''}
			</div>
		);
	}
}


ReactDOM.render(<Application />, document.getElementById('main-container'));
