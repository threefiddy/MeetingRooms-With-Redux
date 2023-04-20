import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../RootReducer";
import { MeetingRoomDetailsProps } from "./MeetingRoomDetailsTypes";

const MeetingRoomDetailsPage: React.FC<MeetingRoomDetailsProps> = () => {
    const store = useSelector((store: ApplicationState) => store);

    return (
        <>
            <h2>Chosen one</h2>
            {store.meetingRoom.meetingRoom && (
                <>
                    <p>{store.meetingRoom.meetingRoom.Name}</p>
                    <p>{store.meetingRoom.meetingRoom.Location}</p>
                    <p>{store.meetingRoom.meetingRoom.RoomCapacity}</p>
                </>
            )}
        </>
    )
}

export default MeetingRoomDetailsPage;