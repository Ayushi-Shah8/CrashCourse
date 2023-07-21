import './Blog.css'
import Footer from './Footer';
import CarousalBlog from './carousalBlog';

function Blog(){
    return(
      <>
      
        <div className="container containerHome">
        <div className="row rowHome">
    <div className="small-container">
    <CarousalBlog />
          <h2 className="titleBlog">Historical Blogs</h2>
          <div className="row rowHome">
            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Behind the Scenes of World War-II</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 1.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Do newspapers tell the truth ?</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 2.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Things to learn from the French Revolution</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 3.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Who actually set foot on the Moon first?</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 4.jpeg" alt=""/> 
                </div>
               </div>
            </div>


            <h2 className="titleBlog">Other Genres</h2>
            <div className="row rowHome">

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Revolutionizing Industries: Exploring the Latest Breakthroughs in Technologies</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 5.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">The Future is Now: Unveiling the Hottest Technological Advancements of 2023</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 6.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">From AI to Quantum Computing: A Deep Dive into the Cutting-Edge Technologies</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 7.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Tech Trends to Watch: The Top Four Innovations Shaping the Digital Landscape in 2023</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 8.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Blog Title</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 9.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Blog Title</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 10.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Blog Title</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 11.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            <div className="col-4 col-4Blog">
              <div className="book">
                <h4 id="b-title">Blog Title</h4> 
                <button className="btn btn-primary btnBlog">Read Now</button>
                <div className="cover">
                  <img src="images/blog 12.jpeg" alt=""/> 
                </div>
               </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
    )
}

export default Blog