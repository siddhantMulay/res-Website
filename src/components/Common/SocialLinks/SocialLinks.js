
import React from 'react';
import './SocialLinks.css';
import LineIcon from 'react-lineicons';

function SocialLinks() {
    return <div className="socialLinks">
        <a href='/#'>
            <LineIcon name="facebook-filled" />
        </a>
        <a href='/#'>
            <LineIcon name="twitter-filled" />
        </a>
        <a href='/#'>
            <LineIcon name="pinterest" />
        </a>
    </div>;
}

export default SocialLinks;