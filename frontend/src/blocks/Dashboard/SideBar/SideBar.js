import React from "react";
import "./SideBar.css";
import {Home, Timeline, Person, Store} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import SearchUserOps from "../searchUserOps/SearchUserOps";
import Statistics from "../Statistics/Statistics";

const SideBar =()=>{
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                {/*if you want to add another menu (with title and items),
                 copy the block below named sidebarMenu*/}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <Home className="sidebarIcon"/> <Link to="/Dashboard">Home</Link>
                        </li>
                        <li className="sidebarItem">
                            <Timeline className="sidebarIcon"/> <Link to="/Dashboard/Statistics">Statistics</Link>
                        </li>
                        <li className="sidebarItem">
                            <Person className="sidebarIcon"/> <Link to="/Dashboard/SearchUserOps">Search by user</Link>
                        </li>
                        <li className="sidebarItem">
                            <SearchIcon className="sidebarIcon"/> <Link to="/Dashboard/SearchOpById">Lookup operation by ID</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar