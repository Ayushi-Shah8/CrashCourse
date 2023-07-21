import './Contact.css';
import Footer from './Footer';

function Contact(){
    return(
        <>
        <div className="containerContact">
            <div className='container'>
            <form>
                <h1 id="heading"> Send a Message</h1>
                
                <div>
                    <label htmlFor="username">Name</label>
                    <input required type="text" name="username" className="form-control" placeholder="Enter your Name..." />
                </div>
                <br />


                <div>
                    <label htmlFor="email">Email</label>
                    <input required type="text" name="email" className="form-control" placeholder="name@example.com" />
                </div>
                <br />

                <div>
                    <label htmlFor="userId">Subject</label>
                    <input required type="text" name="subject" className="form-control" placeholder="Enter your Subject" />
                </div>
                <br />

                <div>
                    <label htmlFor="password">Message</label>
                    <textarea  name="textarea" rows="5"  className="form-control" placeholder="Enter your mesage" ></textarea>
                
                </div>

                <br />
                <br />

                <button className="btn btn-primary" type="submit">Submit</button>
                
            </form>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Contact