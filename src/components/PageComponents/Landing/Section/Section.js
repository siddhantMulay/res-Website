
import React, { Component } from 'react';
import './Section.css';
import LineIcon from 'react-lineicons';

class Section extends Component {

    render() {
        const { title, desc, hasVideo, img, secTitle, download, secImg, suggested } = this.props;
        const style = {
            backgroundImage: `url(${img})`
        }
        const titleInfo = title ? title : secTitle

        return (
            <div className={`section ${suggested ? 'suggested' : null}`} style={style}>
                <img src={img} alt="" className={`sectionImg ${hasVideo ? 'vid' : null}`} />

                <div className={`${title ? 'title' : 'secTitle'} text`}>
                    <span>{titleInfo}</span>
                </div>

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

                {download ?
                    <button className="downloadContainer">
                        <LineIcon name="download" />
                        <span className="text">Download PDF</span>
                    </button>
                    : null}

            </div>
        )
    }
}

export default Section;