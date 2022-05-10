import React from 'react';
import faq from '../../../image/faq_pic.png'
import './about.css';

const About = () => {
    return (
        <div className="border">
            <div className='info-details py-md-5 py-2'>
                <div className="text-center my-3 py-3  text-white">
                    <h1 style={{ color: '#350A4E', fontFamily: 'Tourney, cursive' }} className="fw-bold">What Can We Offer You With?</h1>
                    <h5 >Our institute provides care for our regions most precious resource: human. We care for the growing needs of our community.</h5>
                </div>

                <div className="mt-1">
                    <div className="row ">
                        <div className="col-lg-4 text-center text-white">
                            <i style={{ color: 'orange' }} className="fas fa-code-branch fs-1"></i>
                            <h1 style={{ color: '#350A4E' }} className="fw-bold my-2">600+</h1>
                            <p className="fw-bold">Bring best quality tourist <br /> services worldwide.</p>
                        </div>

                        <div className="col-lg-4 text-center text-white">
                            <i style={{ color: 'orange' }} className="fas fa-users fs-1"></i>
                            <h1 style={{ color: '#350A4E' }} className="fw-bold my-2">900+</h1>
                            <p className="fw-bold">100% trusted travel agency</p>
                        </div>

                        <div className="col-lg-4 text-center text-white">
                            <i style={{ color: 'orange' }} className="fas fa-map-marker-alt fs-1"></i>
                            <h1 style={{ color: '#350A4E' }} className="fw-bold my-2">150+</h1>
                            <p className="fw-bold">Picking where to go out of <br /> 150 countries worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-md-5 py-2 container' id='faq'>
                <h1 style={{ color: '#350A4E', fontFamily: 'Tourney, cursive' }} className="text-center fw-bold">Frequently Asked Questions</h1>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <img className='img-fluid  rounded-3 faq-img' src={faq} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="accordion accordion-flush pe-lg-3" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                        Getting your key
                                        <span className="fas fa-chevron-down down-icon"></span>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    You will be able to communicate directly with your host to find out how to get your keys. Whether you meet them personally or simply use a lockbox, it will be easy for you to access your property and start enjoying your holiday!
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                         Communicating with your host
                                        <span className="fas fa-chevron-down down-icon"></span>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    You can always contact your host with any questions leading up to your trip. Perhaps you want to let them know what time you are arriving or you have a special request  enjoy stress-free communication at all times.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Checking in
                                        <span className="fas fa-chevron-down down-icon"></span>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    Maybe you have always stayed in hotels and you are not sure how to "check-in" to an apartment or holiday home. Do not worry, other guests have felt the same! That is why hosts provide all the information you need to get you settled in.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                         Our Terms And Condition
                                        <span className="fas fa-chevron-down down-icon"></span>
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, animi? Animi voluptate quaerat doloribus laboriosam magni pariatur quia cupiditate eveniet incidunt eligendi repudiandae iste, doloremque, ratione vero hic alias inventore?
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                         Kinds Of Payment We Accept
                                        <span className="fas fa-chevron-down down-icon"></span>
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                                    data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia vitae quidem consequatur dignissimos tenetur tempora molestias dolorem, nam ducimus nemo!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="additional-ques-section py-2">
                            <div>
                                    <div className="accordion-item rounded-3">
                                        <h4 className="accordion-header rounded-3" id="flush-headingFive">
                                            <button className="accordion-button collapsed rounded-top" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="true"
                                                aria-controls="flush-collapseFive">
                                                Our Terms And Condition
                                            </button>
                                        </h4>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse rounded-3"
                                            aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body rounded-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Omnis fuga harum quos. Repudiandae debitis, numquam doloribus, dolores
                                                eius quas quis hic quaerat amet quo labore!</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item rounded-3">
                                        <h4 className="accordion-header rounded-3" id="flush-headingSix">
                                            <button className="accordion-button collapsed rounded-top" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="true"
                                                aria-controls="flush-collapseSix">
                                                Kinds Of Payment We Accept
                                            </button>
                                        </h4>
                                        <div id="flush-collapseSix" className="accordion-collapse collapse rounded-3"
                                            aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body rounded-3">Lorem ipsum dolor sit amet consectetur adipisicing
                                                elit.
                                                Qui minus doloremque, quam accusamus perspiciatis tenetur fugiat quia, autem,
                                                asperiores vitae impedit reprehenderit ducimus voluptates ipsa.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default About;