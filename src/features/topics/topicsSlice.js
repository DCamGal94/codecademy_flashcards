import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: "topics",
    // Has initial state consisting of an object that includes one property, topics, which corresponds to an empty object.
    initialState: {
        topics: {}
    },
    // A reducer is a function that determines the application’s next state given a current state and a specific action. 
    // It returns a default initial state if none is provided and returns the current state if the action is not recognized.
    // A reducer must follow these three rules:
    //     1. They should only calculate the new state value based on the existing state and action.
    //     2. They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
    //     3. They must not do any asynchronous logic or other “side effects”.
    reducers: {
        // Has an addTopic action. An action is an object describing an event in the application. It must have a type property and it typically has a payload property as well.
        addTopic: (state, action) => {
            // You can expect the payload for this action to look like {id: '123456', name: 'name of topic', icon: 'icon url'}.
            const { id, name, icon } = action.payload;
            // Store these values in the state as a new topic object.
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        }
    }
});

// Create a selector that selects the topics object nested within initialState. Export the selector as well as the action creators and reducer that your slice generates
export const { addTopic } = topicsSlice.actions;

export const selectTopics = state => state.topics.topics;

export default topicsSlice.reducer;