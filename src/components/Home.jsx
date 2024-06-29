import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/home.css";
import img1 from "../components/images/HomeBanner.jpg"
import {Form, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({handleClick}) => {

  const [sport, setSport] = useState([]);
  const navigate = useNavigate();
  const [details, setDetails]=useState([]);
  const [close, setClose]= useState(false);
  const [search, setSearch]= useState('');
  console.log(search);
  

  const detailsPage =(ProductInfo)=>{
    setDetails([{...ProductInfo}])
    setClose(true)


  }
 



  const getSport = async () => {
    const response = await axios.get("http://localhost:3000/products");
    setSport(response);
  };

  useEffect(() => {
    getSport();
  }, []);
  console.log(sport.data);


 


  return (

    <section>
        <div className="banner">
            <img src={img1} alt="" />
            </div>
            

            <form className="search">
              <input className="search-input" type="text" placeholder="⌕ Search by Name ...." name="search" onChange={(e)=>setSearch(e.target.value)}/>
            </form>
            <h1 className="top-header">Choose Any Products</h1>

            {
              close ?
            

            <div className="details-container">
              <div className="details-content">
                <button className="close" onClick={()=>setClose(false)}><i class="fa fa-times" aria-hidden="true"/></button>
                {
                  details.map((sportdetails)=>{
                    return(
                      <>
                      <div key={sportdetails.id}>
                      <div className="details-info">
                        
                        <div className="img-box">
                          <img src={sportdetails.image} alt="" />
                        </div>
                        <div className="product-description">
                          <h2>{sportdetails.name}</h2>
                          <p className="details-des">₹{sportdetails.price}</p>
                          <p className="details-des">{sportdetails.description}</p>
                          <p className="details-rating">{sportdetails.rating}</p>
                          <button className="details-button" onClick={() => handleClick(sportdetails)}>Buy Now</button>
                        </div>
                        
                      </div>
                      </div>
                      </>
                    )
                  })
                }
              </div>

            </div>:null
            }

    <div className="sport-product">
        
      {sport?.data?.filter((sportData)=>{
        return search.toLocaleLowerCase()===''
        ?sportData
        :sportData.name.toLocaleLowerCase().includes(search);
      })
      
      .map((sportData) => {
        console.log(sportData);
        return (


            <div className="card">
              <div key={sportData.id}>

              <div>
                <img className="sport-image" src={sportData.image} alt="" />
              </div>

              <div>
                <h3 className="sport-name">{sportData.name}</h3>
              </div>

              <div>
                <p className="sport-price">₹{sportData.price}</p>
              </div>

              <div>
                <p className="sport-rating">{sportData.rating}</p>
              </div>

              <div>
                <button className="sport-button" onClick={()=> detailsPage (sportData)}>View Products</button>
              </div>

              </div>
          
            </div>
          
        );
      })}
    </div>
    <ToastContainer />
    </section>
  );
};

export default Home;
