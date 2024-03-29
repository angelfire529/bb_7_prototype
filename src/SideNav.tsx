import React, { CSSProperties } from 'react'

const carrot: CSSProperties = {
    color: 'white'
}

interface SideNavProps { }

const SideNav: React.FC<SideNavProps> = () => {
    return (
        <aside>
            <div className="nav-collapse">
                <ul className="sidebar-menu">
                    <li className="sub-menu">
                        <div className="toggle-nav">
                            <i className="arrow_carrot-2left" style={carrot}></i>
                        </div>
                    </li>
                    <li className="active">
                        <a className="" href="#">
                            <i className="icon_house_alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideNav