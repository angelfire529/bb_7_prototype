import React, { CSSProperties } from 'react';

const headerStyle: CSSProperties = {
    zIndex: 999
}

const logo: CSSProperties = {
    color: '#fed189',
    fontWeight: 300,
    fontSize: '22px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    position: 'absolute',
    left: '55px'
}

const lite = {
    color: '#00a0df',
}

interface TopNavProps {}

const TopNav: React.FC<TopNavProps> = () =>  {
    return <header className="navbar navbar-dark dark-bg " style={headerStyle}>
    <span className="mega-dropdown">
        <a className="waffle" data-toggle="dropdown" href="javascript: Void(0)"><i className="icon_grid-3x3 poppers"></i></a>
    
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
    <a style={logo} href="#">
        Black
        <span style={lite}>Belt 7.0</span>
    </a>
    </header>
}

export default TopNav;