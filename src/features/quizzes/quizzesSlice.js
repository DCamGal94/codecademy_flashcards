import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: "quizzes",
    // Has initial state consisting of an object that includes one property, quizzes, which corresponds to an empty object. 
    initialState: {
        quizzes: {}
    },
    reducers: {
        // Has an addQuiz action.
        addQuiz: (state, action) => {
            // You can expect the payload for this action to look like {id: '123456', name: 'name of quiz', topicId: '123456'}.
            const { id, name, topicId } = action.payload;
            // Store these values in the state as a new quiz object.
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                quizIds: []
            }
        }
    }
});

// Export the selector as well as the action creators and reducer that your slice generates.
export const { addQuiz } = quizzesSlice.actions;

export const selectQuizzes = state => state.quizzes.quizzes; // Has a selector which returns all quizzes from state.

export default quizzesSlice.reducer;