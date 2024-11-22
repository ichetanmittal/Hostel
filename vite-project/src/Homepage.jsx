import React from 'react';
import './App.css';
import Slideshows from './Slideshow';
import WardenMessage from './Wardenmessage';
import HostelList from './List'; // Hostel list component

const Homepage = () => {
    return (
        <>
            <div className="hostels-container">
                <header className="hostels-header">
                    <h1>Welcome to NITJ Hostels!</h1>
                </header>
                <Slideshows />
                <section className="hostels-content">
                    <p>
                        Our hostels are more than just places to stay; they are thriving communities within the scenic NIT Jalandhar campus. Representing unity in diversity, these hostels bring together students from across the country, creating a unique blend of cultures and friendships that enriches every resident's experience.
                    </p>
                    <p>
                        Life here is filled with memorable moments—from late-night discussions and early morning study sessions to friendly badminton and basketball games. Each hostel features its own garden, providing a peaceful retreat, along with dedicated courts where students can unwind and stay active. And, of course, the beloved hostel canteens offer late-night snacks to refuel after a study session or a game.
                    </p>
                    <p>
                        In this welcoming environment, students find not just a place to live, but a second home—a place to grow, connect, and make lifelong memories.
                    </p>
                </section>
                <WardenMessage />
            </div>
            <HostelList /> {/* Include HostelList here */}
        </>
    );
};

export default Homepage;
