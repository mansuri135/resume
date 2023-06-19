function Contact() {
    return (
        <section id="contact" className="darkYellow">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 text-center text-lg-start fadeInUp">
                        <h2 className="text-h2 mb-5">Let's get in touch</h2>
                        <p className="mb-5 big-pera">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                        <h3>Living In:</h3>
                        <address>30 Shacham street, Los Angeles, USA.</address>
                        <h3>Call:</h3>
                        <p>(+060) 444 434 444</p>
                        <ul className="social-icons mt-5">
                            <li className="social-icons-twitter"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li className="social-icons-facebook"><a href="http://www.facebook.com/harnishdesign/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                            <li className="social-icons-instagram"><a href="http://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                            <li className="social-icons-github"><a href="http://www.github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                            <li className="social-icons-dribbble"><a href="http://www.dribbble.com/harnishdesign/" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a></li></ul>
                    </div>
                    <div className="col-lg-6 ms-auto mt-5 mt-lg-0 fadeInUp">
                    <h2 className="text-h2 mb-5">Estimate your Project?</h2>
                    <form id="contact-form" className="form-border" method="post">
                        <div className="row g-4">
                             <div className="col-12">
                                <label className="form-label" for="name">What is Your Name:</label>
                                <input id="name" name="user_name" type="text" className="form-control py-1" required="" />
                            </div>
                            <div className="col-12">
                                <label className="form-label" for="email">Your Email Address:</label>
                                <input id="email" name="user_email" type="email" className="form-control py-1" required="" />
                            </div>
                            <div className="col-12">
                                <label className="form-label" for="form-message">How can I Help you?:</label>
                                <textarea id="form-message" name="message" className="form-control py-1" rows="4" required=""></textarea>
                            </div>
                            <div className="col-12 text-center text-lg-start">
                                <button id="submit-btn" className="btn btn-dark rounded-0" type="submit">Send <span className="ms-3"><i className="fas fa-arrow-right"></i></span>
                                </button>
                            </div>
                        </div>

                    </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact;