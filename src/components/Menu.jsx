import { useState } from "react";
import "./Menu.css";

/* ✅ MENU DATA */
const menuItems = [
    { id: 1, name: "Ajeer Milk Cake", img: "/anjeer milk cake.JPG", category: "Sweets" },
    { id: 1, name: "Ajeer Katli", img: "/anjeer katli.JPG", category: "Sweets" },
    { id: 1, name: "Ajeer Bite", img: "/anjeer bite.JPG", category: "Sweets" },
    { id: 1, name: "Anjeer Slice", img: "/anjeer slice.JPG", category: "Sweets" },
    { id: 1, name: "Ajeer Sugar Free", img: "/anjeer sugar free.JPG", category: "Sweets" },
    { id: 1, name: "Badaam Burfi", img: "/badaam burfi.JPG", category: "Sweets" },
    { id: 1, name: "Badaam Milk Cake", img: "/badaam milk cake.JPG", category: "Sweets" },
    { id: 1, name: "Baklava Kunafa", img: "/baklava kunafa.JPG", category: "Sweets" },
    { id: 1, name: "Baklava Tart", img: "/baklava tart.JPG", category: "Sweets" },
    { id: 1, name: "Baklava nest", img: "/baklava nest.JPG", category: "Sweets" },
    { id: 1, name: "Baklava pyramid", img: "/baklava kunafa.JPG", category: "Sweets" },
    { id: 1, name: "Bengali", img: "/bengali.JPG", category: "Sweets" },
    { id: 1, name: "Boondi Laddu", img: "/boondi laddu.JPG", category: "Sweets" },
    { id: 1, name: "Chena Roll", img: "/chena roll.JPG", category: "Sweets" },
    { id: 1, name: "Chocolate Bite", img: "/chocolate bite.JPG", category: "Sweets" },
    { id: 1, name: "Chocolate Burfi", img: "/chocolate burfi.JPG", category: "Sweets" },
    { id: 1, name: "Chocolate Slice", img: "/chocolate slice.JPG", category: "Sweets" },
    { id: 1, name: "Coconut Burfi", img: "/coconut burfi.JPG", category: "Sweets" },
    { id: 1, name: "Doda Burfi", img: "/doda burfi.JPG", category: "Sweets" },
    { id: 1, name: "Dry Fruit Laddu", img: "/dry fruit laddu.JPG", category: "Sweets" },
    { id: 1, name: "Gajar Halwa", img: "/gajar halwa.JPG", category: "Sweets" },
    { id: 1, name: "Ghee Boondi Laddu", img: "/motichur.JPG", category: "Sweets" },
    { id: 1, name: "Ghee Kedar Karachi Halwa", img: "/ghee kedar karachi halwa.JPG", category: "Sweets" },
    { id: 1, name: "Gulkand Chilki", img: "/gulkand chilki.JPG", category: "Sweets" },
    { id: 1, name: "Kaju Bite", img: "/kaju bite.JPG", category: "Sweets" },
    { id: 1, name: "Kaju Katli", img: "/kaju katli.JPG", category: "Sweets" },
    { id: 2, name: "Gulab Jamun" ,img: "/gulabjamun.jpg", category: "Sweets" },
    { id: 3, name: "Rasgulla" ,img: "/ras.jpg", category: "Sweets" },
    { id: 4, name: "Kaju Katli", img: "/kaju katli.JPG", category: "Sweets" },
    { id: 5, name: "Atta Laddu", img: "/atta laddu.jpg", category: "Sweets" },
    { id: 6, name: "Milk cake", img: "/milk cake1.jpg", category: "Sweets" },
    { id: 7, name: "Malai Tikiya", img: "/malai tikiya1.JPG", category: "Sweets" },
    { id: 8, name: "Kheer Kadam", img: "/kheerkadam.jpg", category: "Sweets" },
    { id: 9, name: "Motichur Laddu", img: "/motichur.jpg", category: "Sweets" },
    { id: 10, name: "Besan Laddu", img: "/besanladdu.jpg", category: "Sweets" },
    { id: 11, name: "Dry fruits Laddu", img: "/dry fruit.jpg", category: "Sweets" },
    { id: 12, name: "Baklava", img: "/baklava1.jpg", category: "Sweets" },

    { id: 13, name: "Cheese Hot Sandwich", img: "/cheese sandwich.jpg", category: "FastFood" },
    { id: 14, name: "Veg Hot Sandwich", img: "/veg sandwich.jpg", category: "FastFood" },
    { id: 15, name: "Schezwan Noodels", img: "/schezwan noodels.jpg", category: "FastFood" },
    { id: 16, name: "Schezwan Rice", img: "/schezwanrice.jpg", category: "FastFood" },
    { id: 17, name: "Dry Manchurian", img: "/dry.jpg", category: "FastFood" },
    { id: 18, name: "Honey Chili Potato", img: "/honey.jpg", category: "FastFood" },
    { id: 19, name: "Red Sauce Pasta", img: "/redpasta.jpg", category: "FastFood" },
    { id: 20, name: "Samosa", img: "/samosa.jpg", category: "FastFood" },
    { id: 21, name: "Kachori", img: "/kachori1.jpg", category: "FastFood" },
    { id: 22, name: "Vada Pav", img: "/vadapao.jpg", category: "FastFood" },
    { id: 23, name: "Cheese Vada Pav", img: "/cheesevada.jpg", category: "FastFood" },
    { id: 24, name: "Cheese Masala Pav", img: "/masala.jpg", category: "FastFood" },
    { id: 25, name: "Peanut Masala", img: "/peanut.jpg", category: "FastFood" },
    { id: 26, name: "Pao Bhaji", img: "/pao.jpg", category: "FastFood" },
    { id: 27, name: "Papdi Chat", img: "/papdi2.jpg", category: "FastFood" },
    { id: 28, name: "Masala Patties", img: "/masalapatties.JPG", category: "FastFood" },
    { id: 29, name: "Bombay Bhel", img: "/bhel.jpg", category: "FastFood" },
    { id: 30, name: "Dahi Puri", img: "/dahi.jpg", category: "FastFood" },
    { id: 31, name: "Pani Puri", img: "/pani puri1.jpg", category: "FastFood" },
    { id: 32, name: "Chole Tikki", img: "/tikki.jpg", category: "FastFood" },



    { id: 33, name: "Kaju Curry" ,img: "/kaju Curry3.JPG", category: "Main Course" },
    { id: 34, name: "Dal fry", img: "/dal fry1.JPG", category: "Main Course" },
    { id: 35, name: "Dal Tadka", img: "/dal tadka1.JPG", category: "Main Course" },
    { id: 36, name: "Mix Veg", img: "/mix veh.jpg", category: "Main Course" },
    { id: 38, name: "Mushroom Matar Masala", img: "/mushroom.jpg", category: "Main Course" },
    { id: 39, name: "Paneer Lababdar", img: "/panner lababdar.jpg", category: "Main Course" },
    { id: 40, name: "Paneer Butter Masala", img: "/paneer2.jpg", category: "Main Course" },
    { id: 41, name: "Paneer Pasanda", img: "/panner pasanda.jpg", category: "Main Course" },
    { id: 42, name: "Matar Panner" ,img: "/matar.jpg", category: "Main Course" },
    { id: 43, name: "Dal Makhani", img: "/dal.jpg", category: "Main Course" },
    { id: 44, name: "Garlic Naan", img: "/naan.jpg", category: "Main Course" },
    { id: 45, name: "Mix Veg Paratha", img: "/mix.jpg", category: "Main Course" },
    { id: 46, name: "Aalu paratha", img: "/aalu.jpg", category: "Main Course" },
    { id: 46, name: "Tawa Roti", img: "/roti.jpg", category: "Main Course" },
    { id: 47, name: "Veg Biryani", img: "/biryani.jpg", category: "Main Course" },
    { id: 48, name: "Dahi Vada", img: "/dahivada.jpg", category: "Main Course" },
    
    { id: 49, name: "Sabudana Vada" ,img: "/vada.jpg", category: "Falhari" },
    { id: 50, name: "Sabudana Khichdi" ,img: "/khichdi.jpg", category: "Falhari" },
    { id: 51, name: "Falhari Thali", img: "/fal.jpg", category: "Falhari" },
    

    { id: 52, name: "Chef Special Thali", img: "/thali1.JPG", category: "Our Special" },
    { id: 53, name: "Falhari Thali", img: "/fal.jpg", category: "Our Special" },
    { id: 54, name: "Honey Chili Potato", img: "/honey.jpg", category: "Our Special" },
    { id: 55, name: "Milk cake", img: "/milk cake1.jpg", category: "Our Special" },
    { id: 56, name: "Baklava", img: "/baklava1.jpg", category: "Our Special" },
];

const ITEMS_PER_PAGE = 12;

/* ⭐ MOST SELLING ITEMS */
const popularItems = [
    "Chef Special Thali",
    "Baklava",
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
                    {["All", "Sweets", "FastFood", "Main Course","Falhari" , "Our Special"].map(cat => (
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
