import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import { HeartOutlined, GlobalOutlined,LinkedinOutlined,InstagramOutlined,FacebookOutlined } from '@ant-design/icons';
import Factcards from "../components/cards/Factcards";

const Home=() => {
  return (
    <>
      <div className="jumbotron row h1 text-success font-weight-bold text-center">
        <div className="col-md-1">
          <img className="" height="70px" src="https://snipstock.com/assets/cdn/png/8abb4818a77321630f8b18c4e4e9959f.png"></img>
        </div>
        
        <div className="col-md-10"><Jumbotron text={['SPARKS CANCER SOCIETY' , 'ORGANIZATION BY THE SPARKS FOUNDATION']} /></div>

        <div className="col-md-1">
          <img className="" height="80px" src="https://www.thesparksfoundationsingapore.org/images/logo_small.png"></img>
        </div>
      </div>
      




      <h4 className="jumbotron  text-secondary text-center p-3 mb-5 mt-5">
      <p>Imagine a world free from cancer. Help make it a reality.</p>
        <a href="https://rzp.io/l/gpxAX4JH"><button className="btn btn-danger btn-raised"><span className="">{<HeartOutlined />} </span> DONATE</button></a>
      </h4>

      
      
      <div className="row container-fluid">
        <div className="col-md-8">
        <img className="col-md-12 img-responsive img-fluid img-thumbnail" src="https://4.bp.blogspot.com/-O0EjJ8iDAMc/XFii9bHAT8I/AAAAAAAACLE/22DvIK_IpngkLQfY7cxZbxdX05cJf6N_ACK4BGAYYCw/s1600/World%2BCancer%2BDay%2B2019.png"></img>
        </div>
        <div className="col-md-4">
          <h1 className="text-warning" ><u>About Us</u></h1>
        <p className="font-weight-bold h3 text-secondary ">Whether we're working in a community near you or one halfway around the world, our mission remains the same: to save lives. See what we've been up to lately — and get to know the Sparks Cancer Society a little bit better.</p>
        </div>
      </div>
      <br></br>
      <div className="row conatiner-fluid">  
      <div className="col-md-1"></div>      
        <div className="col-md-4">
          <h1 className="text-warning" ><u>Mission</u></h1>
        <p className="font-weight-bold h3 text-secondary ">At the Sparks Cancer Society, we're on a mission to free the world from cancer. Until we do, we'll be funding and conducting research, sharing expert information, supporting patients, and spreading the word about prevention. All so you can live longer — and better.</p>
        </div>
          
        <div className="col-md-7">
        <img className="col-md-12 img-responsive img-rounded img-fluid img-thumbnail" src="https://www.cancerresearchuk.org/sites/default/files/styles/cruk_no_style/public/full_logo_bl-wt-rd_001tm_0.jpg?itok=Cr_ce23D"></img>
        </div>
      </div>
        <br></br>
        <hr></hr>

        <div className="container">
        <Factcards/>
        </div>
        <hr></hr>

      <br></br>
      <div className="row container-fluid">
        <h1><u>Volunteer and Fundraise</u></h1>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <img height="200px" src="https://www.fundraisingzone.com/wp-content/uploads/2018/03/Cancer-Fundraising-43416824_s.jpg"></img>
        </div>
        <div className=" col-md-7">
          <p className="h4 text-secondary ">We couldn’t do what we do without our volunteers, fundraisers, and donors. Together, we’re making a difference – and you can, too. Become a volunteer, make a tax-deductible donation, or participate in a fundraising event to help us save lives.</p>

        </div>       

      </div>

      <h4 className="jumbotron  text-secondary text-center p-3 mb-5 mt-5">
      <p>Imagine a world free from cancer. Help make it a reality.</p>
        <a href="https://rzp.io/l/gpxAX4JH"><button className="btn btn-danger btn-raised"><span className="">{<HeartOutlined />} </span> DONATE</button></a>
      </h4>


      <h4 className="jumbotron  text-secondary text p-3 mb-5 mt-5">
      <h2 className="text-warning font-weight-bold"><u>OUR PARTNERS</u></h2>
      <div className="row">
        <div className="col-sm-6">
        <p>The Sparks Cancer Society couldn’t do what we do without the support of our partners. Learn more about these partnerships and how you too can join us in our mission to save lives, celebrate lives, and lead the fight for a world without cancer.</p>
        </div>
          <div className="col-sm-2"></div>
        <div className="col-sm-4">
              <ul>
                <li><a href="https://www.thesparksfoundationsingapore.org/" target="_blank">The Sparks Foundations{<GlobalOutlined />}</a></li>
                <li><a href="https://www.linkedin.com/company/the-sparks-foundation/mycompany/" target="_blank"> LinkedIn{<LinkedinOutlined />}</a></li>
                <li><a href="https://www.instagram.com/thesparksfoundation.info/?hl=en" target="_blank">Instagram{<InstagramOutlined />}</a></li>
                <li><a href="https://www.facebook.com/thesparksfoundation.info/" target="_blank">Facebook{<FacebookOutlined />}</a></li>
              </ul>
        </div>
      </div>
      </h4>

      
    </>
  );
}

export default Home;
