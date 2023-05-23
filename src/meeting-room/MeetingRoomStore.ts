import axios from "axios";
import { Dispatch } from "redux";
import { IMeetingRoom } from "./MeetingRoomTypes";

const MEETINGROOMS_LOADING = "MEETINGROOMS_LOADING";
const MEETINGROOMS_FAIL = "MEETINGROOMS_FAIL";
const MEETINGROOMS_SUCCESS = "MEETINGROOMS_SUCCESS";
const MEETINGROOM_SUCCESS = "MEETINGROOM_SUCCESS";

export const actions = {
    getMeetingRooms: () => async (
        dispatch: Dispatch<MeetingRoomsDispatchTypes>
    ) => {
        try {
            dispatch({
                type: MEETINGROOMS_LOADING
            });

            const url = `http://localhost:8080/api/school/meetingRooms/getall`;

            const res = await axios.get(url);

            dispatch({
                type: MEETINGROOMS_SUCCESS,
                payload: res.data
            });
        } catch (e) {
            dispatch({
                type: MEETINGROOMS_FAIL
            });
        }
    },
    setMeetingRoom: (selectedMeetingRoom: IMeetingRoom) => (
        dispatch: Dispatch<MeetingRoomsDispatchTypes>
    ) => {
        dispatch({
            type: MEETINGROOM_SUCCESS,
            payload: selectedMeetingRoom,
        });
    }
}

interface MeetingRoomsLoading {
    type: typeof MEETINGROOMS_LOADING;
}

interface MeetingRoomsFail {
    type: typeof MEETINGROOMS_FAIL;
}

interface MeetingRoomsSuccess {
    type: typeof MEETINGROOMS_SUCCESS;
    payload: IMeetingRoom[];
}

interface MeetingRoomSuccess {
    type: typeof MEETINGROOM_SUCCESS;
    payload: IMeetingRoom;
}

type MeetingRoomsDispatchTypes =
    | MeetingRoomsLoading
    | MeetingRoomsFail
    | MeetingRoomsSuccess
    | MeetingRoomSuccess;

interface DefaultState {
    loading?: boolean;
    meetingRooms?: IMeetingRoom[];
    meetingRoom?: IMeetingRoom;
}

const defaultState: DefaultState = {
    loading: false
};

const meetingRoomReducer = (
    state: DefaultState = defaultState,
    action: MeetingRoomsDispatchTypes
): DefaultState => {
    switch (action.type) {
        case MEETINGROOMS_FAIL:
            return {
                loading: false
            };
        case MEETINGROOMS_LOADING:
            return {
                loading: true
            };
        case MEETINGROOMS_SUCCESS:
            return {
                loading: false,
                meetingRooms: action.payload
            };
        case MEETINGROOM_SUCCESS:
            return {
                ...state,
                meetingRoom: action.payload
            };
        default:
            return state;
    }
};

export default meetingRoomReducer;