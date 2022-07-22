import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FeaturedPostCard } from '../Components';
import { getFeaturedPosts } from '../services';

const FeaturedPosts = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getFeaturedPosts().then((result) => {
        setFeaturedPosts(result);
        setDataLoaded(true);
        });
    }, []);

    return (
        <div className="mb-8">
        <Slider {...settings}>
            {dataLoaded && featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
            ))}
        </Slider>
        </div>
    );
};

export default FeaturedPosts;
