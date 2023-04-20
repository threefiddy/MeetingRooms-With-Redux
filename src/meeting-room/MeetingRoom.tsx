import React from "react";
import { IMeetingRoom, MeetingRoomProps } from '../meeting-room/MeetingRoomTypes';
import { actions as meetingroomActions } from "./MeetingRoomStore";
import { connect } from "react-redux";
import { ApplicationState } from "../RootReducer";

const mapStateToProps = (state: ApplicationState) => state.meetingRoom;

const MeetingRoomsPage: React.FC<MeetingRoomProps> = props => {
  if (!props.loading && !props.meetingRooms) {
    props.getMeetingRooms();
  }

  const onclick = (e: React.MouseEvent, selectedMeetingRoom: IMeetingRoom) => {
    console.log("selectedMeetingRoom", selectedMeetingRoom)
    e.preventDefault();
    props.setMeetingRoom(selectedMeetingRoom);
  }

  return (
    <>
      <h2>Meeting Rooms</h2>
      <table>
        <tbody>
          {props.meetingRooms &&
            props.meetingRooms.map(x => (
              <tr key={x.Id} onClick={((e) => onclick(e, x))} className={"meeting-rooms-table"}>
                <th>{x.Id}</th>
                <th>{x.Name}</th>
                <th>{x.Location}</th>
                <th>{x.RoomCapacity}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}


const actions = {
  ...meetingroomActions,
};

const ConnectedMeetingroomPage = connect(
  mapStateToProps,
  actions
)(MeetingRoomsPage);

export { ConnectedMeetingroomPage as MeetingRoomsPage };