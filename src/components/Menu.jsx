import { useState } from "react";
import "./Menu.css";

const menuItems = [
    { id: 1, name: "Barbecue Sauce", price: 19.23, img: "/food1.jpg", off: "25%", category: "Pizza" },
    { id: 2, name: "Brief Pizza", price: 19.23, img: "/food2.jpg", off: "25%", category: "Pizza" },
    { id: 3, name: "Fresh Sea Foods", price: 19.23, img: "/food3.jpg", category: "Sea Foods" },
    { id: 4, name: "Sashimi Fish", price: 19.23, img: "/food4.jpg", off: "25%", category: "Sea Foods" },
    { id: 5, name: "Chicken Pasta", price: 19.23, img: "/food5.jpg", category: "Pasta" },
    { id: 6, name: "Beef Biryani", price: 19.23, img: "/food6.jpg", off: "25%", category: "Biryani" },
];

const ITEMS_PER_PAGE = 4;

export default function Menu() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    /* 🔍 FILTER */
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

            {/* 🔍 MOBILE SEARCH ONLY */}
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

            {/* SIDEBAR (DESKTOP ONLY) */}
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
                    {["All", "Pizza", "Sea Foods", "Pasta", "Biryani"].map(cat => (
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

                <h4>Popular Tags</h4>
                <div className="tags">
                    {["Pizza", "Sea Foods", "Biryani"].map(tag => (
                        <span
                            key={tag}
                            onClick={() => {
                                setCategory(tag);
                                setCurrentPage(1);
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="menu-content">

                {/* <div className="top-bar">
          <p>
            Showing {paginatedItems.length} of {filteredItems.length} results
          </p>
        </div> */}

                <div className="menu-grid">
                    {paginatedItems.length > 0 ? (
                        paginatedItems.map(item => (
                            <div className="menu-card" key={item.id}>
                                {/* ❌ BADGE REMOVED ON MOBILE VIA CSS */}
                                <span className="badges2 desktop-only">
                                    {item.off && `${item.off} OFF`}
                                </span>

                                <img src={item.img} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>{item.category}</p>
                                <span className="price">${item.price}</span>
                            </div>
                        ))
                    ) : (
                        <p>No items found</p>
                    )}
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
