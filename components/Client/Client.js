import Carousel from "react-bootstrap/Carousel";

function Client() {
    const testimonial = [
        {
            image: "./assets/john.jpg",
            content:
                "Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.",
            author: "Sarah M., Director of Events"
        },
        {
            image: "./assets/john.jpg",
            content:
                "I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.",
            author: "Sarah M., CCHS Foundation"
        },
        {
            image: "./assets/john.jpg",
            content:
                "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
            author: "Alexander B., Pan-Mass Challenge"
        },
        {
            image: "./assets/john.jpg",
            content:
                "MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.",
            author: "Amy C., One Less Orphan Fund"
        }
    ];

    return (
        <section id="client" className="bg-light">
            <div className="container">
                <p className="text-center mb-2 fadeInUp" ><span className="darkYellow text-dark px-2">Client Speak</span></p>
                <h2 className="text-h2 text-center mb-3 fadeInUp" >What Some of my Clients Say</h2>
                <div className="row">
                    <div className="col-lg-9 mx-auto fadeInUp text-center">
                        <Carousel interval={1000}>
                            {testimonial.map((c, index) => {
                                return (
                                    <Carousel.Item interval={5000}>
                                       
                                        <p>{c.content}</p>
                                        <img src={c.image} className="img-fluid d-inline-block rounded-circle shadow" />
                                        <h4>{c.author}</h4>

                                    </Carousel.Item>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Client