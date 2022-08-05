const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const incrementCount = () => ({
    type: INCREMENT,
    payload: 1
});

const decrementCount = () => {
    return {
        type: DECREMENT,
        payload: 1
    };
};

export { INCREMENT, incrementCount, DECREMENT, decrementCount };