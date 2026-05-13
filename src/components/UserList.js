import React from "react";
import { Link, useParams } from "react-router-dom";

let UserList = () => {

    return (
        <div>
            <h1>User List</h1>
            <ul>
                <li><Link to='/user/1'>Leanne Graham</Link></li>
                <li><Link to='/user/2'>Ervin Howell</Link></li>
                <li><Link to='/user/3'>Clementine Bauch</Link></li>
                <li><Link to='/user/4'>Patricia Lebsack</Link></li>
                <li><Link to='/user/5'>Chelsey Dietrich</Link></li>       
                <li><Link to='/user/6'>Mrs. Dennis Schulist</Link></li>
                <li><Link to='/user/7'>Kurtis Weissnat</Link></li>
                <li><Link to='/user/8'>Nicholas Runolfsdottir V</Link></li>
                <li><Link to='/user/9'>Glenna Reichert</Link></li>
                <li><Link to='/user/10'>Clementina DuBuque</Link></li>
            </ul>
        </div>
    )
}

export default UserList