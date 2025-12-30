import { useState } from "react";
import "./Menu.css";

/* ✅ MENU DATA */
const menuItems = [
    { id: 4, name: "Rabri", price: 10.99, img: "/rabdi.jpg", category: "Sweets" },
    { id: 1, name: "Gulab Jamun", price: 9.99, img: "/gulabjamun.jpg", category: "Sweets" },
    { id: 2, name: "Rasgulla", price: 8.99, img: "/ras.jpg", category: "Sweets" },
    { id: 3, name: "Kaju Katli", price: 12.99, img: "/kaju1.jpg", category: "Sweets" },
    { id: 5, name: "Jalebi", price: 7.99, img: "/jalebi.jpg", category: "Sweets" },

    { id: 6, name: "Veg Burger", price: 6.99, img: "/burger.jpg", category: "FastFood" },
    { id: 7, name: "Cheese Pizza", price: 11.99, img: "/pizz.jpg", category: "FastFood" },
    { id: 8, name: "French Fries", price: 4.99, img: "/french.jpg", category: "FastFood" },
    { id: 9, name: "Hot Dog", price: 5.99, img: "/hot dog.jpg", category: "FastFood" },
    { id: 10, name: "Sandwich", price: 6.49, img: "/sand.jpg", category: "FastFood" },

    { id: 11, name: "Paneer Butter Masala", price: 14.99, img: "/paneer2.jpg", category: "Main Course" },
    { id: 12, name: "Dal Makhani", price: 12.99, img: "/dal.jpg", category: "Main Course" },
    { id: 13, name: "Garlic Naan", price: 15.99, img: "/naan.jpg", category: "Main Course" },
    { id: 14, name: "Veg Biryani", price: 13.99, img: "/biryani.jpg", category: "Main Course" },
    { id: 15, name: "Matar Panner", price: 9.99, img: "/matar.jpg", category: "Main Course" },

    { id: 16, name: "Paneer Tikka", price: 8.99, img: "/tikka.jpg", category: "Starters" },
    { id: 17, name: "Veg Spring Roll", price: 6.99, img: "/spring.jpg", category: "Starters" },
    { id: 18, name: "Honey Chilli Potato", price: 9.99, img: "/honey chili potato.jpg", category: "Starters" },
    { id: 19, name: "Baby Corn", price: 7.49, img: "/baby corn.jpg", category: "Starters" },
    { id: 20, name: "Hara Bhara Kabab", price: 8.49, img: "/hara.jpg", category: "Starters" },

    { id: 21, name: "Cold Coffee", price: 4.99, img: "/cold1.jpg", category: "Beverages" },
    { id: 22, name: "Lassi", price: 3.99, img: "/lassi.jpg", category: "Beverages" },
    { id: 23, name: "Fresh Lime Soda", price: 3.49, img: "/soda.jpg", category: "Beverages" },
    { id: 24, name: "Masala Chai", price: 2.99, img: "/chaai.jpg", category: "Beverages" },
    { id: 25, name: "Mocktail", price: 5.99, img: "/mock2.jpg", category: "Beverages" },

    { id: 26, name: "Chef Special Thali", price: 18.99, img: "/thali.jpg", category: "Our Special" },
    { id: 27, name: "Royal Biryani", price: 19.99, img: "/biryani.jpg", category: "Our Special" },
    { id: 28, name: "Special chinese Platter", price: 17.99, img: "/chi.jpg", category: "Our Special" },
    { id: 29, name: "Tandoori Combo", price: 20.99, img: "/.jpg", category: "Our Special" },
    { id: 30, name: "Festival Special Dessert", price: 14.99, img: "/t.jpg", category: "Our Special" },
];

const ITEMS_PER_PAGE = 8;

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
                    {["All", "Sweets", "FastFood", "Main Course", "Starters", "Beverages", "Our Special"].map(cat => (
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
                            <p>{item.category}</p>
                            <span className="price">${item.price}</span>
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
