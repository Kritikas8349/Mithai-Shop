import { useState, useMemo, useEffect } from "react";
import "./Menu.css";

/* MENU DATA (unchanged) */
const menuItems = [
    { id: 1, name: "Anjeer Milk Cake", img: "/anjeer milk cake.JPG", category: "Sweets" },
    { id: 2, name: "Anjeer Katli", img: "/anjeer katli.JPG", category: "Sweets" },
    { id: 3, name: "Anjeer Bite", img: "/anjeer bite.JPG", category: "Sweets" },
    { id: 4, name: "Anjeer Slice", img: "/anjeer slice.JPG", category: "Sweets" },
    { id: 5, name: "Ajeer Sugar Free", img: "/anjeer sugar free.JPG", category: "Sweets" },
    { id: 6, name: "Badaam Burfi", img: "/badaam burfi.JPG", category: "Sweets" },
    { id: 7, name: "Badaam Milk Cake", img: "/badaam milk cake.JPG", category: "Sweets" },
    { id: 8, name: "Baklava Kunafa", img: "/baklava kunafa.JPG", category: "Sweets" },
    { id: 9, name: "Baklava Tart", img: "/baklava tart.JPG", category: "Sweets" },
    { id: 10, name: "Baklava nest", img: "/baklava nest.JPG", category: "Sweets" },
    { id: 11, name: "Baklava pyramid", img: "/baklava kunafa.JPG", category: "Sweets" },
    { id: 12, name: "Besan Laddu", img: "/besan laddu.png", category: "Sweets" },
    { id: 13, name: "Bengali", img: "/bengali.JPG", category: "Sweets" },
    { id: 14, name: "Boondi Laddu", img: "/boondi laddu.JPG", category: "Sweets" },
    { id: 15, name: "Chena Roll", img: "/chena roll.JPG", category: "Sweets" },
    { id: 16, name: "Chocolate Bite", img: "/chocolate bite.JPG", category: "Sweets" },
    { id: 17, name: "Chocolate Burfi", img: "/chocolate burfi.JPG", category: "Sweets" },
    { id: 18, name: "Chocolate Slice", img: "/chocolate slice.JPG", category: "Sweets" },
    { id: 19, name: "Coconut Burfi", img: "/coconut burfi.JPG", category: "Sweets" },
    { id: 20, name: "Doda Burfi", img: "/doda burfi.JPG", category: "Sweets" },
    { id: 21, name: "Dry Fruit Laddu", img: "/dry fruit laddu.JPG", category: "Sweets" },
    { id: 23, name: "Gajar Halwa", img: "/gajar halwa.JPG", category: "Sweets" },
    { id: 24, name: "Ghee Boondi Laddu", img: "/motichur.JPG", category: "Sweets" },
    { id: 25, name: "Ghee Kedar Karachi Halwa", img: "/ghee kedar karachi halwa.JPG", category: "Sweets" },
    { id: 26, name: "Gulkand Chilki", img: "/gulkand chilki.JPG", category: "Sweets" },
    { id: 27, name: "Gulab Jamun", img: "/gulab jamun.png", category: "Sweets" },
    { id: 28, name: "Kaju Bite", img: "/kaju bite.JPG", category: "Sweets" },
    { id: 29, name: "Kaju Katli", img: "/kaju katli.JPG", category: "Sweets" },
    { id: 30, name: "Kaju Kesar Katori", img: "/kaju kesar katori.JPG", category: "Sweets" },
    { id: 31, name: "Kaju Paan", img: "/kaju paan.JPG", category: "Sweets" },
    { id: 32, name: "Kesar Casata", img: "/kesar casata.JPG", category: "Sweets" },
    { id: 33, name: "Kheer Khadam", img: "/kheer kadam.JPG", category: "Sweets" },
    { id: 34, name: "Khorak", img: "/khorak.JPG", category: "Sweets" },
    { id: 35, name: "Malai Peda", img: "/malai peda.JPG", category: "Sweets" },
    { id: 36, name: "Malai tikiya", img: "/malai tikiya.JPG", category: "Sweets" },
    { id: 38, name: "Meva Burfi", img: "/mewa burfi.JPG", category: "Sweets" },
    { id: 39, name: "Pista Bite ", img: "/pista bite.JPG", category: "Sweets" },
    { id: 40, name: "Raj Burfi", img: "/raj burfi.JPG", category: "Sweets" },
    { id: 41, name: "Rasgulla", img: "/rasgulla.png", category: "Sweets" },
    { id: 42, name: "Rasmalai", img: "/rasmalai.png", category: "Sweets" },
    { id: 43, name: "Roasted Almond Khajur", img: "/roasted almond khajur.JPG", category: "Sweets" },
    { id: 44, name: "Rose Honey", img: "/rose honey.JPG", category: "Sweets" },
    { id: 45, name: "Shahi Doda", img: "/shahi doda.JPG", category: "Sweets" },
    { id: 46, name: "Special Atta Laddu", img: "/speciel ata laddu.JPG", category: "Sweets" },
    { id: 47, name: "Special Karachi Halwa", img: "/speciel karachi halwa.JPG", category: "Sweets" },
    { id: 48, name: "Special Khajur Slice", img: "/speciel khajur slice.JPG", category: "Sweets" },
    { id: 49, name: "Sugar Free Anjeer", img: "/sugar free anjeer.JPG", category: "Sweets" },
    { id: 50, name: "Vanila Slice ", img: "/vanilla slice.JPG", category: "Sweets" },


    { id: 51, name: "Cheese Hot Sandwich", img: "/cheese sandwich.jpg", category: "FastFood" },
    { id: 52, name: "Veg Hot Sandwich", img: "/veg sandwich.jpg", category: "FastFood" },
    { id: 53, name: "Schezwan Noodels", img: "/Schezwan noodles.JPG", category: "FastFood" },
    { id: 54, name: "Schezwan Rice", img: "/Schezwan  rice.png", category: "FastFood" },
    { id: 55, name: "Dry Manchurian", img: "/dry manchurian.png", category: "FastFood" },
    { id: 56, name: "Honey Chili Potato", img: "/honey potato.png", category: "FastFood" },
    { id: 57, name: "Red Sauce Pasta", img: "/red pasta.png", category: "FastFood" },
    { id: 58, name: "Samosa", img: "/samosa.jpg", category: "FastFood" },
    { id: 59, name: "Kachori", img: "/kachori1.jpg", category: "FastFood" },
    { id: 60, name: "Vada Pav", img: "/vadapao.jpg", category: "FastFood" },
    { id: 61, name: "Cheese Vada Pav", img: "/cheese vada pao.JPG", category: "FastFood" },
    { id: 62, name: "Cheese Masala Pav", img: "/masala.jpg", category: "FastFood" },
    { id: 63, name: "Peanut Masala", img: "/peanut.jpg", category: "FastFood" },
    { id: 64, name: "Pao Bhaji", img: "/paao bhaji.png", category: "FastFood" },
    { id: 65, name: "Papdi Chat", img: "/papdi2.jpg", category: "FastFood" },
    { id: 66, name: "Masala Patties", img: "/masalapatties.JPG", category: "FastFood" },
    { id: 67, name: "Bombay Bhel", img: "/bhrl.png", category: "FastFood" },
    { id: 68, name: "Dahi Puri", img: "/dahi puri.png", category: "FastFood" },
    { id: 69, name: "Pani Puri", img: "/panipuri.png", category: "FastFood" },
    { id: 70, name: "Chole Tikki", img: "/chole tikki.JPG", category: "FastFood" },



    { id: 71, name: "Kaju Curry", img: "/kaju Curry3.JPG", category: "Main Course" },
    { id: 72, name: "Dal fry", img: "/dal fry1.JPG", category: "Main Course" },
    { id: 73, name: "Dal Tadka", img: "/dal tadka1.JPG", category: "Main Course" },
    { id: 74, name: "Mix Veg", img: "/mix veh.jpg", category: "Main Course" },
    { id: 75, name: "Mushroom Matar Masala", img: "/mushroom.jpg", category: "Main Course" },
    { id: 76, name: "Paneer Lababdar", img: "/panner lababdar.jpg", category: "Main Course" },
    { id: 77, name: "Paneer Butter Masala", img: "/paneer2.jpg", category: "Main Course" },
    { id: 78, name: "Paneer Pasanda", img: "/panner pasanda.jpg", category: "Main Course" },
    { id: 79, name: "Matar Panner", img: "/matar.jpg", category: "Main Course" },
    { id: 80, name: "Dal Makhani", img: "/dal.jpg", category: "Main Course" },
    { id: 81, name: "Garlic Naan", img: "/naan.jpg", category: "Main Course" },
    { id: 82, name: "Mix Veg Paratha", img: "/mix.jpg", category: "Main Course" },
    { id: 83, name: "Aalu paratha", img: "/aalu.jpg", category: "Main Course" },
    { id: 84, name: "Tawa Roti", img: "/roti.jpg", category: "Main Course" },
    { id: 86, name: "Veg Biryani", img: "/biryani.jpg", category: "Main Course" },
    { id: 87, name: "Dahi Vada", img: "/dahivada.jpg", category: "Main Course" },

    { id: 89, name: "Sabudana Vada", img: "/vada.jpg", category: "Falhari" },
    { id: 90, name: "Sabudana Khichdi", img: "/khichdi.jpg", category: "Falhari" },
    { id: 91, name: "Falhari Thali", img: "/fal.jpg", category: "Falhari" },


    { id: 92, name: "Chef Special Thali", img: "/thali1.JPG", category: "Our Special" },
    { id: 93, name: "Falhari Thali", img: "/fal.jpg", category: "Our Special" },
    { id: 94, name: "Honey Chili Potato", img: "/honey potato.png", category: "Our Special" },
    { id: 95, name: "Cheese Hot Sandwich", img: "/cheese sandwich.jpg", category: "Our Special" },
    { id: 96, name: "Baklava nest", img: "/baklava nest.JPG", category: "Our Special" },
    { id: 97, name: "Special Khajur Slice", img: "/speciel khajur slice.JPG", category: "Our Special" },

];

const ITEMS_PER_PAGE = 12;

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

    /* ✅ FAST FILTERING */
    const filteredItems = useMemo(() => {
        return menuItems.filter(item => {
            const matchCategory = category === "All" || item.category === category;
            const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
            return matchCategory && matchSearch;
        });
    }, [search, category]);

    /* ✅ FAST PAGINATION */
    const paginatedItems = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredItems.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredItems, currentPage]);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    /* ✅ PREFETCH NEXT PAGE IMAGES */
    useEffect(() => {
        const nextPage = currentPage + 1;
        const start = (nextPage - 1) * ITEMS_PER_PAGE;
        const nextItems = filteredItems.slice(start, start + ITEMS_PER_PAGE);

        nextItems.forEach(item => {
            const img = new Image();
            img.src = item.img;
        });
    }, [currentPage, filteredItems]);

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
            <aside className="sidebar">
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
                    {["All", "Sweets", "FastFood", "Main Course", "Falhari", "Our Special"].map(cat => (
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

                <div className="popular-tags">
                    <h4>Our Special</h4>
                    <div className="tags">
                        {popularItems.map(item => (
                            <span key={item} className="tag">{item}</span>
                        ))}
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="menu-content">
                <div className="menu-grid">
                    {paginatedItems.map(item => (
                        <div className="menu-card" key={item.id}>
                            <img
                                src={item.img}
                                alt={item.name}
                                loading="lazy"
                                decoding="async"
                                fetchpriority="low"
                            />
                            <h3>{item.name}</h3>
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