import React from 'react';

const About = () => {
    return (
        <div>
            <div className="section-container mx-auto text-center my-5 py-3">
                <h1 style={{ color: 'crimson', fontFamily: 'Tourney, cursive' }} className="primary-color fw-bold">What Can We Offer You With?</h1>
                <h5 className="text-muted">Our institute provides care for our regions most precious resource: human. We care for the growing needs of our community.</h5>
            </div>


            <div className="container mt-2 pb-5">
                <div className="row ">
                    <div className="col-lg-4 text-center">
                        <i className="fas fa-code-branch fs-1 text-primary"></i>
                        <h1 className="text-danger fw-bold my-2">600+</h1>
                        <p className="text-muted fw-bold">Bring best quality tourist services worldwide.</p>
                    </div>

                    <div className="col-lg-4 text-center">
                        <i class="fas fa-users fs-1 text-primary"></i>
                        <h1 className="text-danger fw-bold my-2">900+</h1>
                        <p className="text-muted fw-bold">100% trusted travel agency</p>
                    </div>

                    <div className="col-lg-4 text-center">
                        <i class="fas fa-map-marker-alt fs-1 text-primary"></i>
                        <h1 className="text-danger fw-bold my-2">150+</h1>
                        <p className="text-muted fw-bold">Picking where to go out of 150 countries worldwide.</p>
                    </div>

                </div>
            </div>

            <div className='container px-5 py-5'>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <h1 style={{ color: 'crimson', fontFamily: 'Tourney, cursive' }} className='mb-4'>How does it work?</h1>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Getting your key
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                You will be able to communicate directly with your host to find out how to get your keys. Whether you meet them personally or simply use a lockbox, it will be easy for you to access your property and start enjoying your holiday!</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Communicating with your host
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                You can always contact your host with any questions leading up to your trip. Perhaps you want to let them know what time you are arriving or you have a special request  enjoy stress-free communication at all times.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Checking in
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                Maybe you have always stayed in hotels and you are not sure how to "check-in" to an apartment or holiday home. Do not worry, other guests have felt the same! That is why hosts provide all the information you need to get you settled in.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;