import { useState } from "react";
import "./Menu.css";

/* ✅ MENU DATA */
const menuItems = [
    { id: 4, name: "Rabri", img: "/rabdi.jpg", category: "Sweets" },
    { id: 1, name: "Gulab Jamun" ,img: "/gulabjamun.jpg", category: "Sweets" },
    { id: 2, name: "Rasgulla" ,img: "/ras.jpg", category: "Sweets" },
    { id: 3, name: "Kaju Katli", img: "/kaju katli.JPG", category: "Sweets" },
    { id: 5, name: "Sandwich", img: "/sand.jpg", category: "FastFood" },

    { id: 6, name: "Kaju Curry" ,img: "/kaju Curry3.JPG", category: "Main Course" },
    { id: 7, name: "Parantha", img: "/pizz.jpg", category: "Main Course" },
    { id: 8, name: "French Fries", img: "/french.jpg", category: "Main Course" },
    { id: 9, name: "Hot Dog", img: "/hot dog.jpg", category: "Main Course" },
    { id: 10, name: "Sandwich", img: "/sand.jpg", category: "Main Course" },
    { id: 11, name: "Paneer Butter Masala", img: "/paneer2.jpg", category: "Main Course" },
    { id: 12, name: "Dal Makhani", img: "/dal.jpg", category: "Main Course" },
    { id: 13, name: "Garlic Naan", img: "/naan.jpg", category: "Main Course" },
    { id: 14, name: "Veg Biryani", img: "/biryani.jpg", category: "Main Course" },
    { id: 15, name: "Matar Panner" ,img: "/matar.jpg", category: "Main Course" },

    { id: 16, name: "Paneer Tikka" ,img: "/tikka.jpg", category: "Starters" },
    { id: 17, name: "Veg Spring Roll" ,img: "/spring.jpg", category: "Starters" },
    { id: 18, name: "Honey Chilli Potato", img: "/honey chili potato.jpg", category: "Starters" },
    { id: 19, name: "Baby Corn" ,img: "/baby corn.jpg", category: "Starters" },
    { id: 20, name: "Hara Bhara Kabab" ,img: "/hara.jpg", category: "Starters" },

    { id: 21, name: "Cold Coffee" ,img: "/cold1.jpg", category: "Beverages" },
    { id: 22, name: "Lassi" ,img: "/lassi.jpg", category: "Beverages" },
    { id: 23, name: "Fresh Lime Soda" ,img: "/soda.jpg", category: "Beverages" },
    { id: 24, name: "Masala Chai", img: "/chaai.jpg", category: "Beverages" },
    { id: 25, name: "Mocktail", img: "/mock2.jpg", category: "Beverages" },

    { id: 26, name: "Chef Special Thali", img: "/thali.jpg", category: "Our Special" },
    { id: 27, name: "Royal Biryani", img: "/biryani.jpg", category: "Our Special" },
    { id: 28, name: "Special chinese Platter", img: "/chi.jpg", category: "Our Special" },
    { id: 29, name: "Tandoori Combo", img: "/.jpg", category: "Our Special" },
    { id: 30, name: "Festival Special Dessert", img: "/t.jpg", category: "Our Special" },
];

const ITEMS_PER_PAGE = 12;

/* ⭐ MOST SELLING ITEMS */
const popularItems = [
    "Chef Special Thali",
    "Royal Biryani",
    "Paneer Butter Masala",
    "Cold Coffee"
];

export default function Menu() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    /* 🔍 FILTER (ORDER SAFE) */
    const filteredItems = menuItems.filter(item => {
        const matchCategory = category === "All" || item.category === category;
        const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    /* 📄 PAGINATION */
    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="menu-page">

            {/* MOBILE SEARCH */}
            <div className="mobile-search-only">
                <input
                    className="search"
                    placeholder="Search food..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                />
            </div>

            {/* SIDEBAR */}
            <aside className="sidebar desktop-only">
                <input
                    className="search"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setCurrentPage(1);
                    }}
                />

                <h4>All Menu</h4>
                <ul className="category">
                    {["All", "Sweets", "FastFood", "Main Course", "Starters", , "Our Special"].map(cat => (
                        <li
                            key={cat}
                            className={category === cat ? "active" : ""}
                            onClick={() => {
                                setCategory(cat);
                                setCurrentPage(1);
                            }}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>

                {/* ⭐ POPULAR / MOST SELLING */}
                <div className="popular-tags">
                    <h4>Our Special</h4>
                    <div className="tags">
                        {popularItems.map(item => (
                            <span
                                key={item}
                                className="tag"
                            // onClick={() => {
                            //   setSearch(item);
                            //   setCurrentPage(1);
                            // }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="menu-content">
                <div className="menu-grid">
                    {paginatedItems.map(item => (
                        <div className="menu-card" key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <h3>{item.name}</h3>
                            {/* <p>{item.category}</p> */}
                            <span className="price">{item.price}</span>
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div className="pagination">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={currentPage === index + 1 ? "active" : ""}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {String(index + 1).padStart(2, "0")}
                        </button>
                    ))}
                </div>

            </main>
        </div>
    );
}
