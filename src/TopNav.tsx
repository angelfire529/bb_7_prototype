import React from 'react';


interface TopNavProps {}

const TopNav: React.FC<TopNavProps> = () =>  {
    return <header className="navbar navbar-dark dark-bg ">
    <span className="mega-dropdown">
        <a data-toggle="dropdown" href="javascript: Void(0)"><i className="icon_grid-3x3 poppers"></i></a>
    
        <ul className="dropdown-menu mega-dropdown-menu row">
            <li className="col-sm-3">
                <ul>
                    <li className="dropdown-header">Manufacturing Intelligence</li>
                    <li><a href="#">Dashboards</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Alerts</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">Paperless Manufacturing</li>
                    <li><a href="#">Paperless Forms</a></li>
                    <li><a href="#">Assembly</a></li>
                    <li><a href="#">Form Administration</a></li>
                </ul>
            </li>
            <li className="col-sm-3">
                <ul>
                    <li className="dropdown-header">Failure Analysis</li>
                    <li><a href="#">FA Records</a></li>
                    <li><a href="#">CAPA</a></li>
                    <li><a href="#">Reports</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">Return Analysis</li>
                    <li><a href="#">RMA Records</a></li>
                    <li><a href="#">Reports</a></li>
                </ul>
            </li>
            <li className="col-sm-3">
                <ul>
                    <li className="dropdown-header">Operations</li>
                    <li><a href="#">Process Control</a></li>
                    <li><a href="#">Geneology</a></li>
                    <li><a href="#">Reports</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">Quality Analytics</li>
                    <li><a href="#">Coloured Headers</a></li>
                    <li><a href="#">Primary Buttons & Default</a></li>
                    <li><a href="#">Calls to action</a></li>
                </ul>
            </li>
            <li className="col-sm-3">
                <ul>
                    <li className="dropdown-header">Administration</li>
                    <li><a href="#">Data Sources</a></li>
                    <li><a href="#">Users and Security</a></li>
                    <li><a href="#">Custom Lists</a></li>
                </ul>
            </li>
    
        </ul>
    
    </span>
    </header>
}

export default TopNav;