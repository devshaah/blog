import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./style.css";
import axios from "axios";

import search from "./asssets/search.png";
import profile from "./asssets/profile.png";
import logo from "./asssets/logo.png";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [health, sethealth] = useState([]);
  const [news, setnews] = useState([]);
  const [recipe, setrecipe] = useState([]);
  const [job, setjob] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const options = {
        method: "GET",
        url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
        params: { muscle: "biceps" },
        headers: {
          "X-RapidAPI-Key":
            "1e957e3163msh038748693f59828p1e1110jsn375aa4699a71",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        sethealth(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      const options = {
        method: "GET",
        url: "https://news-api14.p.rapidapi.com/top-headlines",
        params: {
          country: "in",
          language: "en",
          pageSize: "10",
        },
        headers: {
          "X-RapidAPI-Key":
            "1e957e3163msh038748693f59828p1e1110jsn375aa4699a71",
          "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setnews(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      const options = {
        method: "GET",
        url: "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe",
        params: {
          query: "butter chicken",
          offset: "10",
        },
        headers: {
          "X-RapidAPI-Key":
            "1e957e3163msh038748693f59828p1e1110jsn375aa4699a71",
          "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setrecipe(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1'
  },
  headers: {
    'X-RapidAPI-Key': '1e957e3163msh038748693f59828p1e1110jsn375aa4699a71',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

      try {
        const response = await axios.request(options);
        setjob(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div>
      <Navbar />
      <div className="blog">
        <h1 className="top">Blogs </h1>
        <div className="blogs">

          <div className="card">
            <div className="title">
              <h1>Recipes</h1>
              <h3>Discover the delicious and tastiest recipes here.</h3>
            </div>
            <div className="blog1">
              <Carousel controls indicators>
                {recipe.map((item) => {
                  return (
                    <div>
                      <h3>Title: {item.title}</h3>
                      <h4>Ingredients :{item.ingredients}</h4>
                      <p className="d-none d-md-block">
                        <h5>Instruction: </h5>
                        <h5>{item.instructions}</h5>
                      </p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>

          <div className="card">

            <div className="blog1">
              <Carousel controls indicators>
                {health.map((item) => {
                  return (
                    <div>
                      <h2>Exercise:{item.name}</h2>
                      <h3>Difficulty:{item.difficulty}</h3>
                      <p className="d-none d-md-block">
                        <h5>{item.instructions}</h5>
                      </p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div className="title">
              <h1>Health & Wellness</h1>
              <h3>Find tips and advice on Exercises.</h3>
            </div>
          </div>

          <div className="card">
            <div className="title">
              <h1>Latest News</h1>
              <h3>Get the Latest News Today</h3>
            </div>
            <div className="blog1">
              <Carousel controls indicators>
                {news.map((item) => {
                  return (
                    <div>
                      <h3>Title: {item.title}</h3>
                      <a href={item.url}>Read More..</a>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
      <h1 className="news-title">News</h1>
      <div className="news">
        {news.map((item) => {
          return (
            <div className="newsbox">
              <h3 className="boxtitle"> {truncate(item.title, 100) }</h3>
              <a href={item.url} className="btn">Read More..</a>     
            </div>
          );
        })}
      </div>
      </div>

      <div className="row">
      <h1 className="news-title">Jobs</h1>
      <div className="news">
        {job.map((item) => {
          return (
            <div className="jobbox">
              <h3 className="jobtitle">{item.employer_name}</h3>
              <h3>Location : {item.job_city}</h3>
              <p>Description</p>
              <p> {truncate(item.job_description, 200) }</p>
              <a href={item.job_apply_link} className="btn">Apply</a>     
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Home;
