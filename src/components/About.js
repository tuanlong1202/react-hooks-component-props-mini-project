import React from "react";

function About (prop) {
    return (
        <aside>
            <img src={(prop.image == null) ? `https://via.placeholder.com/215` : prop.image} placeholder="https://via.placeholder.com/215" alt="blog logo" />
            <p>{prop.about}</p>
        </aside>
    );
}

export default About;