import React from "react";
import { GiBowlOfRice, GiChefToque, GiHealthPotion } from "react-icons/gi";
import { FiEye } from "react-icons/fi";
import "./Resturant.css";

const Resturant = () => {

  const meals = [
    {
      title: "Noodles",
      description: "Freshly prepared pasta with authentic Italian spices ",
      image: "/noodle.jpg",
    },
    {
      title: "Saahi Paneer",
      description: "Freshly prepared pasta with authentic Italian spices ",
      image: "/paneer2.jpg",
    },
    {
      title: "Pav Bhaji",
      description: "Freshly prepared pasta with authentic Italian spices ",
      image: "/paao bhaji.png",
    },
    {
      title: "Special Thali",
      description: "Freshly prepared pasta with authentic Italian spices ",
      image: "/thali1.JPG",
    },
    {
      title: "Fried Rice",
      description: "Freshly prepared pasta with authentic Italian spices ",
      image: "/rice.png",
    },
  ];
  return (
    <>
      <section className="restaurant-hero"
        role="banner"
        aria-label="The Chanchal Restaurant - Authentic Indian Dining"
      >
        {/* Background slider */}
        <div className="bg-slider" aria-hidden="true"></div>

        <div className="overlay"></div>

        <div className="hero-content1">
          <p className="small-top">
            Since 1950 • Pure Veg Restaurant in Bhopal
          </p>

          {/* MAIN SEO HEADING */}
          <h1 className="main-heading">
            The <br /> Chanchal <br /> Restaurant
          </h1>

          {/* SUPPORTING KEYWORDS */}
          <h2 className="script-text">
            Authentic Indian Cuisine & Family Dining
          </h2>

          {/* Hidden SEO paragraph */}
          <p className="seo-text">
            The Chanchal Restaurant in Bhopal offers authentic Indian cuisine,
            traditional recipes, hygienic preparation, and a premium family
            dining experience since 1950.
          </p>
        </div>

        {/* <div className="bottom-bar">
        Authentic Indian Restaurant in Bhopal • Family Dining • Since 1950
      </div> */}
      </section>



      <section className="why-section">
        <div className="why-container">

          <div className="why-card">
            <div className="icon-wrap">
              <GiBowlOfRice className="why-icon" />
            </div>
            <h3>Fresh Daily Preparation</h3>
            <p>
              Every sweet and dish is freshly prepared each day using
              premium ingredients to maintain authentic taste and purity.
            </p>
          </div>

          <div className="why-card">
            <div className="icon-wrap">
              <GiChefToque className="why-icon" />
            </div>
            <h3>Traditional Expertise</h3>
            <p>
              Crafted by experienced halwais and chefs following
              time-honored recipes passed through generations.
            </p>
          </div>

          <div className="why-card">
            <div className="icon-wrap">
              <GiHealthPotion className="why-icon" />
            </div>
            <h3>Hygiene & Trust</h3>
            <p>
              Strict hygiene standards and quality checks ensure
              safe, delicious and trustworthy food every time.
            </p>
          </div>

        </div>
      </section>



      <section className="food-showcase">
        <div className="showcase-container">

          {/* LEFT IMAGE */}
          <div className="showcase-image">
            <img
              src="/best.png"   // 👈 apni image yahan lagao
              alt="Delicious Food"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="showcase-content">
            <h4 className="tagline">Taste That Speaks</h4>

            <p>
              Every dish is crafted with authentic spices, premium ingredients,
              and a passion for perfection. From the first bite to the last,
              experience flavors that stay with you forever.
            </p>

            <button className="explore-btn">Explore Menu</button>
          </div>

        </div>
      </section>



      <section className="meals-section">
        <h2 className="meals-title">Best Meals for You</h2>

        <div className="meals-container">
          {meals.map((meal, index) => (
            <div className="meal-card" key={index}>

              {/* IMAGE */}
              <div className="meal-image-wrapper">
                <img src={meal.image} alt={meal.title} />
              </div>

              <div className="meal-content">
                <h3>{meal.title}</h3>

                {/* DESCRIPTION */}
                <p className="meal-desc">
                  {meal.description}
                </p>

                <div className="meal-bottom">
                  <p className="price">{meal.price}</p>
                  <button className="view-btn">View</button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>



      <section className="offer-wrapper">

        {/* LEFT SIDE */}
        <div className="offer-left">
          <div className="hero-blur-card-r">
            <div className="offer-overlay">
              <span className="tag">INDIAN RESTAURANT</span>
              <h2>Dine-In Service</h2>
              <p>
                Enjoy authentic Indian flavors with a comfortable dine-in
                experience. Freshly prepared dishes served hot at your table.
              </p>
              <button>Book a Table</button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="offer-right">

          {/* TOP IMAGE */}
          <div className="offer-right-top">
            <div className="text-box">
              <h3>Special Offers</h3>
              <p>Delicious food at irresistible prices</p>
            </div>
          </div>

          {/* BOTTOM FOOD IMAGE */}
          <div className="offer-right-bottom">
            <div className="text-box dark">
              <h3>Freshly Cooked</h3>
              <p>Made with premium ingredients</p>
            </div>
          </div>

        </div>

      </section>




    </>
  );
};

export default Resturant;
