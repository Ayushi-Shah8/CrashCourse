import './AboutUs.css';
import Footer from './Footer';

function AboutUs(){
    return(
        <>
        <section className="page-section" id="about">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Get to know us</h3>
        </div>
        <ul id="items" className="timeline">
            <li id="item-odd">
                <div className="timeline-image">
                    <img className="rounded-circle img-fluid imgAbout" src="images/About 1.jpeg" alt="" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>2009-2011</h4>
                        <h4 className="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li id="item-even">
                <div className="timeline-image">
                    <img className="rounded-circle img-fluid imgAbout" src="images/About 2.jpeg" alt="" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>March 2011</h4>
                        <h4 className="subheading">An Agency is Born</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted"> We started our Journey. Cheers to new beginnings! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li id="item-odd">
                <div className="timeline-image"><img className="rounded-circle img-fluid imgAbout" src="images/About 3.jpeg" alt="" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>December 2015</h4>
                        <h4 className="subheading">Transition to Full Service</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li id="item-even">
                <div className="timeline-image"><img className="rounded-circle img-fluid imgAbout" src="images/About 4.jpeg" alt="" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>July 2020</h4>
                        <h4 className="subheading">Phase Two Expansion</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
        </ul>
    </div>
</section>
<Footer />
</>
    )
}

export default AboutUs