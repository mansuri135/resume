function About() {
     return (
        <section id="about" data-aos="fade-up">
            <div className="container">
            <p className="text-center mb-2 fadeInUp" ><span className="darkYellow text-dark px-2">About Me</span></p>
            <h2 className="text-h2 text-center mb-5 fadeInUp">Know Me More</h2>
            <div className="row mb-5">
                <div className="col-lg-8 fadeInUp">
                <h3 className="mb-3">Hi, I'm <span className="fw-700 border-bottom border-3 border-primary">John Mark</span></h3>
                <p>I'm a designer &amp; developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.</p>
                </div>
                <div className="col-lg-4 fadeInUp">
                    <div className="experienceWrap">
                        <div className="experienceText">22</div>
                    </div>
                    <h3 className="mb-3 text-center">Years of <span>Experience</span></h3>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-lg-3 wow fadeInUp">
                <p className="text-muted mb-0">Name:</p>
                <p className="text-dark mb-0">John Mark</p>
                </div>
                <div className="col-6 col-lg-3 wow fadeInUp">
                <p className="text-muted mb-0">Email:</p>
                <p className="text-dark mb-0">chat@resume.com</p>
                </div>
                <div className="col-6 col-lg-3 wow fadeInUp">
                <p className="text-muted mb-0">Date of Birth:</p>
                <p className="text-dark mb-0">11 November, 1992</p>
                </div>
                <div className="col-6 col-lg-3 wow fadeInUp">
                <p className="text-muted mb-0">From:</p>
                <p className="text-dark mb-0">Los Angeles, USA.</p>
                </div>
            </div>
            </div>
            
        </section>
    )
}

export default About;