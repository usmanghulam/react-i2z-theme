import React, { Component } from 'react';
import $ from 'jquery';
class header extends Component {
    componentDidMount(){
        var autoSwitch = true;
        $('.slide').first().addClass('active');
        $('.slide').hide();
        $('.active').show();

        if(autoSwitch == true){
                setInterval(()=>{
                $('.active').removeClass('active').addClass('oldActive');
                if($('.oldActive').is(':last-Child')){
                    $('.slide').first().addClass('active');
                }
                else{
                    $('.oldActive').next().addClass('active');
                }
                $('.slide').fadeOut(1);
                $('.oldActive').removeClass('oldActive');     
                $('.active').fadeIn(1);
                    },4000)
                }
    }
    render() {
        return (
            <div id="header">
                <div className="videoParent">

                    {/* Slider Media Query */}

                    <video className="is-hidden--sm-down headerVideos" preload="none" 
                    playsInline autoPlay muted loop 
                    src="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/intro/intechnic.mp4" 
                    poster="https://cdn2.hubspot.net/hubfs/439788/intechnic_2017/assets/videos/intro/intechnic.jpg?noresize">
                    </video>

                    {/* Slider Media Query */}
                    <div className="Slidercontainer">
                        <div className="">
                            <div className="slider">
                                 <div className="slide">
                                     <img src="./Images/06.jpg" /> 
                                 </div>
                                 <div className="slide">
                                    <img src="./Images/02.jpg" /> 
                                 </div>
                                 <div className="slide">
                                    <img src="./Images/04.jpg" /> 
                                 </div>
                                 <div className="slide">
                                    <img src="./Images/01.jpg" /> 
                                 </div>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <div className="">
                        <div className="insideVideo">
                            <div className="insideHeading">
                                <span>Ultimate</span><br />
                                <span>Digital</span><br />
                                <span>Experiences</span><br />
                            </div>
                            <br/>
                            <div className="insideParagraph">
                                <p>to acquire, retain, and delight your clients</p>
                            </div>
                            <div className="insidebutton">
                                <div className="btn-group headerButton hidden-xs">
                                    <button className="btn" type="button">Strategy</button>
                                    <button className="btn " type="button">User Experience</button>
                                    <button className="btn " type="button">Web Design</button>                                    
                                    <button className="btn " type="button">Digital Marketing</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default header;