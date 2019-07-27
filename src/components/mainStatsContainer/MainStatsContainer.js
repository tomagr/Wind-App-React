import React from "react";
import SocketsService from "../../services/socketsService"

import LatestStats from '../latestStats/LatestStats';
import MapView from '../mapView/MapView';
import Slider from "react-slick";

import './MainStatsContainer.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import spinner from '../..//assets/img/spinner.gif';
import StatsSlide from "../statsSlide/StatsSlide";

const ENDPOINT = "https://api.vientoenelrio.com/1";

//const ENDPOINT = "http://localhost:3000/1";

class MainStatsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.get_stats_url = ENDPOINT + "/stats";
        SocketsService.listenForNewWindLogs(this);

        this.state = {
            error: null,
            isLoaded: false,
            stats: []
        };
    }

    componentDidMount = () => {
        fetch(this.get_stats_url)
            .then(res => res.json())
            .then(
                (results) => {
                    this.setState({
                        isLoaded: true,
                        stats: results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    socketsCallback = (data) => {
        console.log(data);
        this.updateStats(data.stats);
    }

    updateStats = (stats) => {
        this.setState({
            stats: stats
        });
    }


    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="spinner-container"><img src={spinner}/></div>;
        } else {
            return this.renderLatestStatsView()
        }
    }


    renderLatestStatsView = () => {
        if (this.state.stats)
            return this.displayStats();
        else
            return this.displayPlaceholder();
    }

    displayStats = () => {
        var settings = {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="main-container">

                <div className="stats-container">
                    {this.getLatestStatsView(this.state.stats[2])}

                    <section className="stats-slider">
                        <Slider {...settings}>
                            {this.state.stats.map(stats => this.getStatsSlide(stats))}
                        </Slider>
                    </section>
                </div>

                <div className='map-container'><MapView/></div>

            </div>
        )
    }

    displayPlaceholder = () => {
        return (
            <div className="stats-placeholder">
                <h1>No información disponible</h1>
            </div>
        )
    }

    // Component Views
    getLatestStatsView = (stats) => {
        return (
            <LatestStats
                key={stats.id}
                id={stats.id}
                speed={stats.speed}
                gust={stats.gust}
                hour={stats.hour}
                direction={stats.direction}
            />
        );
    }

    getStatsSlide = (stats) => {
        return (
            <StatsSlide
                key={stats.id}
                id={stats.id}
                speed={stats.speed}
                gust={stats.gust}
                hour={stats.hour}
                direction={stats.direction}
            />
        );
    }

}

export default MainStatsContainer;
