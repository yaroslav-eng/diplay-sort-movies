import React from "react";

const Navigation = (props) => {
    return (
        <div>
            <nav className="panel">
                <ul className="nav nav-pills panel-body">
                    <li>
                        <button type="button" onClick={props.onClick} className="btn btn-primary">Back</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;