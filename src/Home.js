import './Home.css';
import Footer from "./Footer";

function Home(){
    return(
      <>
      <div className="header headerHome">
     
    
        <div className="container containerHome">
    
          <div className="row rowHome">
    
            <div className="col-2 col-2Home">
              <h1>Give Your Self Some Facts To Think About</h1>
              <p>
                Success isn't always about greatness. It's about consistency.
                Consistent hard work gains success. Greatness will come.
              </p>
              <a href="read" className="btn btnHome">Read Now &#8594;</a>
            </div>
    
            <div className="col-2 col-2Home">
             <img src="images/image1.png" alt="" />
            </div>
    
          </div>
    
        </div>
    
      </div>
      <div className="categories">
    
        <div className="small-container">
    
          <h2 className="title">Categories</h2>
    
          <div className="row rowHome">
    
            <div className="col-3 col-3Home">
              <img src="images/MealsForOne.webp" alt="" />
              <br />
              <br />
              <h3>Meals for One</h3>
            </div>
            
    
            <div className="col-3 col-3Home">
              <img src="images/hospitality.webp" alt="" />
              <br />
              <br />
              <h3>The Greatest Hospitality Story Ever</h3>
            </div>
    
            <div className="col-3 col-3Home">
              <img src="images/insideman.webp" alt="" />
              <br />
              <br />
              <h3>Inside Man</h3>
            </div>
    
          </div>
    
        </div>
    
      </div>
      <div className="stories">
    
        <div className="small-container">
    
          <div className="row rowHome">
    
            <div className="col-2 col-2Home">
              <img src="images/success.png" alt="" className="success-img" />
            </div>
    
            <div className="col-2 col-2Home">
              <p>Exclusive Available on Blogger</p>
              <h1>Success Stories</h1>
              
    
              <small>
                Discover the limitless potential of blogging and be inspired by the extraordinary success stories at BlogBliss!
              </small>
              <br />
    
              <a href="read" className="btn">Read Now &#8594;</a>
            </div> 
    
          </div>
    
        </div>
    
      </div>
      <div className="brands">
    
        <div className="small-container">
    
          <div className="row rowHome">
    
            <div className="col-4 col-4Home">
              <img src="images/logo-godrej.png" alt="" />
            </div>
    
            <div className="col-4 col-4Home">
              <img src="images/logo-coca-cola.png" alt="" />
            </div>
    
            <div className="col-4 col-4Home">
              <img src="images/logo-oppo.png" alt="" />
            </div>
    
            <div className="col-4 col-4Home">
              <img src="images/logo-philips.png" alt="" />
            </div>
    
            <div className="col-4 col-4Home">
              <img src="images/logo-paypal.png" alt="" />
            </div>
    
          </div>
        </div>
    
      </div>
      <Footer />
      </>
    );
}

export default Home