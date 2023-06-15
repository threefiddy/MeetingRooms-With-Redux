import React from "react";
import { IMeetingRoom, MeetingRoomProps } from '../meeting-room/MeetingRoomTypes';
import { actions as meetingroomActions } from "./MeetingRoomStore";
import { connect } from "react-redux";
import { ApplicationState } from "../RootReducer";

const mapStateToProps = (state: ApplicationState) => state.meetingRoom;

const MeetingRoomsPage: React.FC<MeetingRoomProps> = props => {
  if (!props.meetingRooms && !props.loading) {
    props.getMeetingRooms();
  }

  const setSelectedMeetingRoom = (e: React.MouseEvent, selectedMeetingRoom: IMeetingRoom) => {
    e.preventDefault();
    props.setMeetingRoom(selectedMeetingRoom);
  }

  return (
    <>
      <h2>Meeting Rooms</h2>
      <table className="meeting-room-table-styling">
        <tbody>
          {props.meetingRooms &&
            props.meetingRooms.map(x => (
              <tr key={x.Id} onClick={((e) => setSelectedMeetingRoom(e, x))} className="meeting-room-row-styling">
                <th>{x.Name}</th>
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