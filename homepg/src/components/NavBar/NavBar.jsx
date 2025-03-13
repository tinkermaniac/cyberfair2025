import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    {
      name: "Project Summary",
      links: [
        { path: "/narrative", text: "Narrative" },
        { path: "/learning", text: "Learning" },
        { path: "/layout", text: "Layout" }
      ]
    },
    {
      name: "Initiatives",
      links: [
        { path: "/elder-connect", text: "Elder Connect" },
        { path: "/orphanage-connect", text: "Orphanage Connect" },
        { path: "/organ-donation", text: "Organ Donation" },
        { path: "/joy-of-giving", text: "Joy of Giving" },
        { path: "/volunteering", text: "Volunteering" },
        { path: "/vintage-veterans-app", text: "Vintage Veterans app" }
      ]
    },
    {
      name: "Untold",
      links: [
        { path: "/echoes", text: "Echoes" },
        { path: "/resonance", text: "Resonance" }
      ]
    },
    {
      name: "Research",
      links: [
        { path: "/indian-culture", text: "Indian Culture" },
        { path: "/interaction-1", text: "Interaction 1" },
        { path: "/interaction-2", text: "Interaction 2" },
        { path: "/interaction-3", text: "Interaction 3" },
        { path: "/analysis", text: "Analysis" },
        { path: "/bibliography", text: "Bibliography" }
      ]
    },
    {
      name: "Collaborators",
      links: [
        { path: "/team", text: "Students" },
        { path: "/facilitators", text: "Facilitators" }
      ]
    },
    {
      name: "Palette",
      links: [
        { path: "/palate-panache", text: "Palate Panache" },
        { path: "/impressions", text: "Impressions" }
      ]
    },
    {
      name: "Downloads",
      links: [
        { path: "/bhajans", text: "Bhajans" },
        { path: "/worksheets", text: "Worksheets" },
        { path: "/yoga-videos", text: "Yoga videos" },
        { path: "/old-movies", text: "Old Movies" }
      ]
    }
  ];

  return (
    <header className="header" onClick={closeDropdowns}>
      <h1 className="logo">UMEED</h1>
      
      <div className={`nav-buttons ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/" className="talk-button">Home</Link>
        
        {menuItems.map((item, index) => (
          <div key={index} className="menu-container">
            <button 
              className={`menu-button ${activeDropdown === item.name ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(item.name);
              }}
            >
              {item.name} <span>⋯</span>
            </button>
            <div className={`dropdown ${activeDropdown === item.name ? "show" : ""}`}>
              {item.links.map((link, linkIndex) => (
                <Link key={linkIndex} to={link.path} onClick={closeDropdowns}>
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <Link to="/umeed" className="talk-button" onClick={closeDropdowns}>Umeed</Link>
        <Link to="/rejuvenation" className="talk-button" onClick={closeDropdowns}>Rejuvenation</Link>
      </div>

      <div 
        className="mobile-menu-toggle" 
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
      >
        <span className={isMobileMenuOpen ? "open" : ""}></span>
        <span className={isMobileMenuOpen ? "open" : ""}></span>
        <span className={isMobileMenuOpen ? "open" : ""}></span>
      </div>
    </header>
  );
};

export default Header;