import './carousalBlog.css';

function CarousalBlog(){
    return(
<div>
  
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div  id ="blog-image" className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000" >
        <div className="carousel-caption d-none d-md-block">
        </div>
        <img src="images/carousel1.jpeg" className="d-block w-100 Image1" alt="" />
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="images/carousel2.jpeg" className="d-block w-100 Image1" alt="" />
        <div className="carousel-caption d-none d-md-block">
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="images/carousel3.jpeg" className="d-block w-100 Image1" alt="" />
        <div className="carousel-caption d-none d-md-block">
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
    );
}

export default CarousalBlog