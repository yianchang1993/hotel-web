import React from "react";
import { RoomContext } from "../context";
import Loading from "./loading";
import Room from "./Room";
import Title from "./title";

export default class FeatureRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context; //rename featuresRooms into rooms
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="feature room" />
        <div className="featured-room-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
