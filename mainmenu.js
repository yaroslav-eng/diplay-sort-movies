import React from 'react';

export default props => (
	<div>
		<h1>Main Menu</h1>
		<ul className="list-group">
			{props.items.map((item, i) => (
				<li key={i} className="list-group-item">
					<a href="#" onClick={e => props.onItemSelect(item.id)}>
						{item.title}
					</a>
				</li>
			))}
		</ul>
	</div>
)
