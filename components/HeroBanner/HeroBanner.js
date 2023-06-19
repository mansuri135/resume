import Typewriter from 'typewriter-effect';
import Image from 'next/image'
import mypic from '@/public/assets/john.jpg'


function HeroBanner() {
    return (
        <section id='home' className='darkYellow fullscreen-with-header'>
            <div className='container'>
                <div className='row py-4'>
                    <div className='col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0'>
                        <h1 className="mb-0 text-uppercase">Hi, I'm a Freelancer</h1>
                        <h2 className="text-uppercase mb-0">
                            <Typewriter
                                options={{
                                    strings: ['Developer', 'Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <p>based in Los Angeles, USA.</p>
                        <a className="btn btn-dark rounded-0 smooth-scroll mt-3" href='#portfolio' >View My Works</a>
                        <a className="btn btn-link text-dark smooth-scroll mt-3" >Contact Me</a>
                    </div>
                    <div className='col-lg-5 myImageWrap text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1'>
                        <Image
                            src={mypic}
                            alt="Picture of the author"
                            width="350px"
                            height="300px"
                            placeholder="blur" // placeholder="empty" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;