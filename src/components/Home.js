import React from 'react';
import './style/style.css'

const Home = () => {
    return ( 
        <>
            <nav class="navbar navbar-expand-md fixed-top top-nav">
	<div class="container">
		  <a class="navbar-brand" href="#"><strong>Grafreez</strong></a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul class="navbar-nav ml-auto">
		      <li class="nav-item active">
		        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">About</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Services</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Team</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Prices</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">FAQ's</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Contact</a>
		      </li>
		    </ul>
		  </div>	
	</div>
</nav>

<section class="intro carousel slide bg-overlay-light h-auto" id="carouselExampleCaptions">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <div class="carousel-caption ">
          	<h2 class="display-4 text-white mb-2 mt-4">In the business world, the rearview mirror is always clearer than the windshield.</h2>
			<p class="text-white mb-3 px-5 lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do enim ad minim veniam, </p>
			<a href="#" class="btn btn-primary btn-capsul px-4 py-2">Explore More</a>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block img-fluid" alt="First slide" src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg-02.jpg"></img>
        <div class="carousel-caption ">
          	<h2 class="display-4 text-white mb-2 mt-4">Accept the challenges so that you can feel the exhilaration of victory.</h2>
			<p class="text-white mb-3 px-5 lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do enim ad minim veniam, </p>
			<a href="#" class="btn btn-primary btn-capsul px-4 py-2">Explore More</a>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</section>

<section class="info-section">
	<div class="container">
		<div class="head-box text-center mb-5">
			<h2>Who We Are</h2>
			<h6 class="text-underline-primary">This is information panel</h6>
		</div>
		<div class="three-panel-block mt-5">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="service-block-overlay text-center mb-5 p-lg-3">
						<i class="fa fa-laptop box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
						<h3>Responsive Design</h3>
						<p class="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="service-block-overlay text-center mb-5 p-lg-3">
						<i class="fa fa-calendar box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
						<h3>Integrated Calendar</h3>
						<p class="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="service-block-overlay text-center mb-5 p-lg-3">
						<i class="fa fa-bug box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
						<h3>Bug Free Solutions</h3>
						<p class="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="service-block-overlay text-center p-lg-3">
						<i class="fa fa-cloud-upload box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
						<h3>Cloud Storage</h3>
						<p class="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="service-block-overlay text-center p-lg-3">
						<i class="fa fa-diamond box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
						<h3>Premium Features</h3>
						<p class="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-6">
					<div class="service-block-overlay text-center p-lg-3">
						<i class="fa fa-comments box-circle-solid mt-3 mb-3" aria-hidden="true"></i>
						<h3>24/7 Support</h3>
						<p class="px-4">Never in all their history have men been able truly to conceive of the world as one a single sphere</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="info-section bg-primary py-0">
	<div class="container-fluid">
		<div class="row">
            <div class="col-md-6 col-lg-6 content-half mt-md-0 pl-5 pt-4">
                <div class="head-box mb-5 pl-5 mt-2">
					<h2 class="text-white">Our Story</h2>
					<h6 class="text-white text-underline-rb-white">This is information panel</h6>
				</div>
                <ul class="pl-5">
                    <li>
                    	<i class="fa fa-laptop box-round-outline" aria-hidden="true"></i>
                    	<span class="list-content">
                    		<strong>Responsive Design</strong>
                    		<br />Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    	</span>
                	</li>
                    <li>
                    	<i class="fa fa-cloud-upload box-round-outline" aria-hidden="true"></i>
                    	<span class="list-content">
                    		<strong>Cloud Storage</strong>
                    		<br/ >Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    	</span>
                    </li>
                    <li>
                    	<i class="fa fa-diamond box-round-outline" aria-hidden="true"></i>
                    	<span class="list-content">
                    		<strong>Premium Features</strong>
                    		<br />Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    	</span>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 p-0 m-0">
            	<img src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg.jpg" class="img-fluid"></img>
            </div>
        </div>
    </div>
</section>
<section class="team-section py-5">
	<div class="container">
		<div class="row mb-5">
			<div class="head-box text-center mb-5 col-md-12">
				<h2>Meet Our Team</h2>
				<h6 class="text-underline-primary mb-5">This is information panel</h6>
			</div>
			<div class="col-md-4 mb-md-0 mb-sm-4">
				<div class="member-box anim-lf t-bottom">
			        <img class="img-fluid" src="https://grafreez.com/wp-content/temp_demos/suffi/img/t-member-01.jpg" alt=""></img>
			        <div class="overlay-content">
			          <h3 class="text-white ml-3 my-0">Jim Gorden</h3>
			          <p class="text-white ml-3 mb-3">Developer</p>
			          <span class="socail-l ml-3 mb-3">
			            <a href="#" class="mr-2"><i class="fa fa-facebook box-circle-solid"></i></a>
						<a href="#" class="mr-2"><i class="fa fa-twitter box-circle-solid"></i></a>
						<a href="#"><i class="fa fa-dribbble box-circle-solid"></i></a>
			          </span>
			        </div>
			    </div>
			</div>
			<div class="col-md-4 mb-md-0 mb-sm-4">
				<div class="member-box anim-lf t-bottom">
			        <img class="img-fluid" src="https://grafreez.com/wp-content/temp_demos/suffi/img/t-member-02.jpg" alt=""></img>
			        <div class="overlay-content">
			          <h3 class="text-white ml-3 my-0">Peyton Warren</h3>
			          <p class="text-white ml-3 mb-3">UI/UX</p>
			          <span class="socail-l ml-3 mb-3">
			            <a href="#" class="mr-2"><i class="fa fa-facebook box-circle-solid"></i></a>
						<a href="#" class="mr-2"><i class="fa fa-twitter box-circle-solid"></i></a>
						<a href="#"><i class="fa fa-dribbble box-circle-solid"></i></a>
			          </span>
			        </div>
			    </div>
			</div>
			<div class="col-md-4 mb-md-0 mb-sm-4">
				<div class="member-box anim-lf t-bottom">
			        <img class="img-fluid" src="https://grafreez.com/wp-content/temp_demos/suffi/img/t-member-03.jpg" alt=""></img>
			        <div class="overlay-content">
			          <h3 class="text-white ml-3 my-0">Craig Thompson</h3>
			          <p class="text-white ml-3 mb-3">Manager</p>
			          <span class="socail-l ml-3 mb-3">
			            <a href="#" class="mr-2"><i class="fa fa-facebook box-circle-solid"></i></a>
						<a href="#" class="mr-2"><i class="fa fa-twitter box-circle-solid"></i></a>
						<a href="#"><i class="fa fa-dribbble box-circle-solid"></i></a>
			          </span>
			        </div>
			    </div>
			</div>
		</div>
	</div>
</section>
        </>
     );
}
 
export default Home;