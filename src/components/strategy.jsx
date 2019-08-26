import React, { Component } from 'react';
import $ from 'jquery';
class strategy extends Component {
    componentDidMount(){
        $('.showTexhheading').click(()=>{
            $('.toggleHideShow').slideToggle(500).siblings().slideUp();
        })
    }
    render() {
        return (
            <div>
            <section className="strategy hidden-sm hidden-xs">
                <div className="row" style={{margin:"0", padding: "0"}}>
                    <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
                        <h1>Strategy</h1>
                        <div className="outsideDiv effectBefore">
                            <img src="./Images/strategy.jpg" className="img-responsive effectBefore" />
                        </div>
                    </div>
                </div>
                <div className="row" style={{margin:'0',padding:'0'}}>
                    <div className="leftDiv col-md-2 col-md-offset-3 hidden-sm hidden-xs">
                        <p>When it comes to the success of your website, app or software, strategy is everything. It’s the foundation for your success. It’s do or die.
                        <br/><br/> We understand business. That's why we begin every project with a workshop — crafting a one-of-a-kind, unique strategy that is designed to help you win.</p>
                            <br/><br/>
                            <div className="rightArrowP">
                                <i className="fas fa-arrow-right rightArrow"></i>
                                <div className="rightArrowRight">Start with a winning Strategy</div>
                            </div>
                    </div>
                        <div className="col-md-3 col-md-offset-1 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 rightULDiv">
                            <ul className="list-unstyled text-center">
                                <div className="row">
                                    <div className="col-sm-6 col-md-12 col-xs-12">
                                        <li><i className="far fa-dot-circle"></i>Strategy Blueprints</li>
                                        <hr />
                                        <li><i className="fa fa-search-plus"></i>Market Research</li>
                                        <hr />
                                        <li><i className="fas fa-flag-checkered"></i>Customer Interviews</li>
                                        <hr />
                                        <li><i className="fas fa-person-booth"></i>Buyer Personas</li>
                                        <hr />
                                    </div>
                                    <div className="col-sm-6 col-md-12 col-xs-12">
                                        <li><i className="fab fa-pagelines"></i>Customer Journeys</li>
                                        <hr />
                                        <li><i className="fas fa-chart-line"></i>Competitive Analysis</li>
                                        <hr />
                                        <li><i className="fas fa-chart-bar"></i>SWOT Analysis</li>
                                        <br/><br/><br/><br/>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div className="leftDiv col-sm-5 col-sm-offset-3 col-xs-8 col-xs-offset-2 hidden-md hidden-lg">
                            <p>When it comes to the success of your website, app or software, strategy is everything. It’s the foundation for your success. It’s do or die.
                            <br/><br/> We understand business. That's why we begin every project with a workshop — crafting a one-of-a-kind, unique strategy that is designed to help you win.</p>
                            <br/><br/>
                                <div className="rightArrowP">
                                    <i className="fa fa-long-arrow-right rightArrow"></i>
                                    <div className="rightArrowRight">Start with a winning Strategy</div>
                                </div>
                        </div>
                </div>
            </section>

            {/* SM XS Div SHOW when wo open this site on sm or xs this section will be run */}
            
            <section className="strategy hidden-md hidden-lg">
            <div className="showTexhheading">
                <h1>Strategy</h1>

            </div>


            <div className="toggleHideShow">

            <div className="row" style={{margin:"0", padding: "0"}}>
                <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
                    <div className="outsideDiv effectBefore">
                        <img src="./Images/strategy.jpg" className="img-responsive effectBefore" />
                    </div>
                </div>
            </div>
            <div className="row" style={{margin:'0',padding:'0'}}>
                <div className="leftDiv col-md-2 col-md-offset-3 hidden-sm hidden-xs">
                    <p>When it comes to the success of your website, app or software, strategy is everything. It’s the foundation for your success. It’s do or die.
                    <br/><br/> We understand business. That's why we begin every project with a workshop — crafting a one-of-a-kind, unique strategy that is designed to help you win.</p>
                        <br/><br/>
                        <div className="rightArrowP">
                            <i className="fas fa-arrow-right rightArrow"></i>
                            <div className="rightArrowRight">Start with a winning Strategy</div>
                        </div>
                </div>
                    <div className="col-md-3 col-md-offset-1 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 rightULDiv">
                        <ul className="list-unstyled text-center">
                            <div className="row">
                                <div className="col-sm-6 col-md-12 col-xs-12">
                                    <li><i className="far fa-dot-circle"></i>Strategy Blueprints</li>
                                    <hr />
                                    <li><i className="fa fa-search-plus"></i>Market Research</li>
                                    <hr />
                                    <li><i className="fas fa-flag-checkered"></i>Customer Interviews</li>
                                    <hr />
                                    <li><i className="fas fa-person-booth"></i>Buyer Personas</li>
                                    <hr />
                                </div>
                                <div className="col-sm-6 col-md-12 col-xs-12">
                                    <li><i className="fab fa-pagelines"></i>Customer Journeys</li>
                                    <hr />
                                    <li><i className="fas fa-chart-line"></i>Competitive Analysis</li>
                                    <hr />
                                    <li><i className="fas fa-chart-bar"></i>SWOT Analysis</li>
                                    <br/><br/><br/><br/>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="leftDiv col-sm-5 col-sm-offset-3 col-xs-8 col-xs-offset-2 hidden-md hidden-lg">
                        <p>When it comes to the success of your website, app or software, strategy is everything. It’s the foundation for your success. It’s do or die.
                        <br/><br/> We understand business. That's why we begin every project with a workshop — crafting a one-of-a-kind, unique strategy that is designed to help you win.</p>
                        <br/><br/>
                            <div className="rightArrowP">
                                <i className="fa fa-long-arrow-right rightArrow"></i>
                                <div className="rightArrowRight">Start with a winning Strategy</div>
                            </div>
                    </div>
            </div>
            {/* Slide Toggle Div End */}
            </div>
            
            </section>


</div>
        );
    }
}

export default strategy;