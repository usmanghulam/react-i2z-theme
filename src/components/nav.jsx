import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
class nav extends Component {
    componentDidMount(){
        //SIde Navbar Scroll
        $('.navicon').click(()=>{
            console.log('working')
            $('.NavScroll').css({
                left: '0',
                clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 0 50%, 0% 0%)'
            })
        })

        $('.cancelNav').click(()=>{
            console.log('working')
            $('.NavScroll').css({
                left: '-100%',
                clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 50%, 0% 0%)'
            })
        })

        //WIndon Scroll Effect
        $(window).scroll(()=>{
            if($('.navbar').offset().top>50){
                $('.navbar-fixed-top').addClass('NavbarScroll').removeClass('navbarClass');
            }   
            else{
                $('.navbar-fixed-top').removeClass('NavbarScroll').addClass('navbarClass');
            }
        })

    } // Component Did Mount
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top navbarClass">
                    <div className="container">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                                <i className="fas fa-bars navicon" style={{paddingRight:'20px'}}></i>
                            <span className="logo">
                                <span>i</span>
                                <span>2</span>
                                <span>z</span>
                                <span>tech</span>
                            </span>
                        </div>
                    </div>
                    </div>
                </nav>



                {/* Slide Navbar Scroll */}
                <div className="NavScroll ">
                    <div className="navContainer">
                        <div className="timeIcon">
                            <i className="fas fa-times cancelNav"></i>
                        </div>
                        <div className="navUl">
                            <ul className="list-unstyled">
                                <li><Link to="/">Strategy</Link></li>
                                <li><Link to="/">UX</Link></li>
                                <li><Link to="/">Web Design</Link></li>
                                <li><Link to="/">Marketing</Link></li>
                                <li><Link to="/">Result</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Contact</Link></li>
                                <hr style={{marginLeft: '-10%'}}/>
                                <li><Link to="/">Blog</Link></li>
                            </ul>
                        </div>
                        <br />
                        <div className="rightArrowP">
                            <i className="fas fa-arrow-right rightArrow"></i>
                            <div className="rightArrowRight">Start Getting Results</div>
                        </div>
                    </div>
                </div>





                {/* Navbar Dot Target */}
                <div className="navDotParent">
                    <ul className="navDotul">
                        <li><Link to="/header"></Link></li>
                        <li><Link to="/"></Link></li>
                        <li><Link to="/"></Link></li>
                        <li><Link to="/"></Link></li>
                        <li><Link to="/"></Link></li>
                        <li><Link to="/"></Link></li>
                        <li><Link to="/"></Link></li>
                        <li><Link to="/"></Link></li>
                    </ul>
                </div>  
            </div>  
        )
    }
}

export default nav;