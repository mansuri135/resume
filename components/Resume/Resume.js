import ProgressBar from "@ramonak/react-progress-bar";

function Resume(){

    return(
        <section id="resume" className="secAnimation">
            <div className="container">
            <p className="text-center mb-2 fadeInUp" ><span className="darkYellow text-dark px-2">Resume</span></p>
            <h2 className="text-h2 text-center mb-5 fadeInUp" >A summary of My Resume</h2>
            <div className="row g-5 mt-5">
                <div className="col-lg-6 fadeInUp">
                    <h3>My Education</h3>
                    <div className="border-start border-2 border-primary ps-3">
                        <div>
                        <h4>Master in Computer Engineering</h4>
                        <p className="mb-2">Harvard University / 2015 - 2017</p>
                        <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                        <hr className="my-4"></hr>
                        </div>
                        <div>
                        <h4>Bachelor in Computer Engineering</h4>
                        <p className="mb-2">University of California / 2014 - 2015</p>
                        <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                        <hr className="my-4"></hr>
                        </div>
                        <div>
                        <h4>International Science</h4>
                        <p className="mb-2">Harvard University / 2013 - 2014</p>
                        <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                        <hr className="my-4"></hr>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 fadeInUp">
                    <h3>My Experience</h3>
                    <div className="border-start border-2 border-primary ps-3">
                        <div>
                        <h4>Sr. Font End Developer</h4>
                        <p className="mb-2">Dribbble Inc / 2018 - 2020</p>
                        <p className="text-muted">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        <hr className="my-4"></hr>
                        </div>
                        <div>
                        <h4>Jr. Font End Developer</h4>
                        <p className="mb-2">University of California / 2014 - 2015</p>
                        <p className="text-muted">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        <hr className="my-4"></hr>
                        </div>
                        <div>
                        <h4>HTML Developer</h4>
                        <p className="mb-2">Adobe Inc / 2017 - 2018</p>
                        <p className="text-muted">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        <hr className="my-4"></hr>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row gx-5 mt-5">
            <h3>My Skills</h3>
                <div className="col-md-6 fadeInUp">
                <p className="mb-2">Web Design <span className="float-end">65%</span></p>
                <div className="progress progress-sm mb-4"><div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'65%'}} ></div></div>
                <p className="mb-2">Javascript <span className="float-end">80%</span></p>
                <div className="progress progress-sm mb-4"><div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}} ></div></div>
                <p className="mb-2">Angular Js <span className="float-end">60%</span></p>
                <div className="progress progress-sm mb-4"><div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}} ></div></div>
                </div>
                <div className="col-md-6 fadeInUp">
                <p className="mb-2">HTML/CSS <span className="float-end">95%</span></p>
                <div className="progress progress-sm mb-4"><div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'95%'}} ></div></div>
                <p className="mb-2">React Js <span className="float-end">70%</span></p>
                <div className="progress progress-sm mb-4"><div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}} ></div></div>
                <p className="mb-2">Bootstrap <span className="float-end">99%</span></p>
                <div className="progress progress-sm mb-4"><div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width:'99%'}} ></div></div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Resume