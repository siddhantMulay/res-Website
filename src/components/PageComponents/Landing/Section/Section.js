
import React, { Component } from 'react';
import './Section.css';

class Section extends Component {

    render() {
        const { title, desc, hasVideo, img, secTitle, download, secImg } = this.props;
        const style = {
            backgroundImage: `url(${img})`
        }
        const titleInfo = title ? title : secTitle

        return (
            <div className="section" style={style}>
                <div className={`${title ? 'title' : 'secTitle'} text`}>
                    <span>{titleInfo}</span>
                </div>
                <img src={img} alt="" className="sectionImg" />
                {desc ?
                    <div className="desc">
                        {desc}
                    </div>
                    : null}
                {hasVideo ?
                    <div className="vidContainer">
                        <div className="playButton"></div>
                    </div>
                    : null}
                    
                {secImg ?
                    <div className="secImgContainer">
                        <img src={secImg} alt="" className="secImg" />
                    </div>
                    : null}

            </div>
        )
    }
}

export default Section;