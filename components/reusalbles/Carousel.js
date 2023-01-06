import React from 'react'
import classes from './carousel.module.css'
const Carousel = () => {
    return (
        <div id="slider" className={`${classes.carousel} ${classes.slide}`} data-ride="carousel">
            <ol className={classes.carousel_indicators}>
                <li data-target="#slider" data-slide-to="0" className="active"></li>
                <li data-target="#slider" data-slide-to="1"></li>
                <li data-target="#slider" data-slide-to="2"></li>
                <li data-target="#slider" data-slide-to="3"></li>
                <li data-target="#slider" data-slide-to="4"></li>
            </ol>

            <div className={classes.carousel_inner}>
                <div className={`${classes.carousel_item} ${classes.active}`}>
                    <img className="d-block w-100" src="http://via.placeholder.com/350x350/d8ddef/ffffff?text=header.jpg" />
                </div>
                <div className={classes.carousel_item}>
                    <img className="d-block w-100" src="http://via.placeholder.com/350x350/a0a4b8/ffffff?text=slider2.jpg" />
                </div>
                <div className={classes.carousel_item}>
                    <img className="d-block w-100" src="http://via.placeholder.com/350x350/7293a0/ffffff?text=slider3.jpg" />
                </div>
                <div className={classes.carousel_item}>
                    <img className="d-block w-100" src="http://via.placeholder.com/350x350/45b69c/ffffff?text=slider4.jpeg" />
                </div>
                <div className={classes.carousel_item}>
                    <img className="d-block w-100" src="http://via.placeholder.com/350x350/21d19f/ffffff?text=slider5.jpeg" />
                </div>
            </div>
        </div>
    )
}

export default Carousel