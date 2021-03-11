import React from 'react';
import '../../App.css'
import stadium from '../../images/stad.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    let { banner } = props;
    if (banner === null) {
        banner = stadium
    }
    const headerStyle = {
        width: '100%', height: '50vh', margin: 'auto'
    }
    return (
        <div>
            <img src={banner} style={headerStyle} alt='Banner image' fluid />
        </div>
    );
};

export default Header;