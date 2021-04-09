import React, { Component } from "react";
import Banner from "../component/home/Banner";
import RecentlyAddedHotels from "../component/home/RecentlyAddedHotels";
import PopularDestinations from "../component/home/PopularDestinations";
import WhyChoose from "../component/home/WhyChoose";
import AppAvailable from "../component/home/AppAvailable";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Banner />
        <PopularDestinations />
        <RecentlyAddedHotels />
        <WhyChoose />
        <AppAvailable />
      </>
    );
  }
}
