const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const incrementCount = () => ({
    type: INCREMENT,
    payload: 2
});

const decrementCount = () => {
    return {
        type: DECREMENT,
        payload: 2
    };
};

export { INCREMENT, incrementCount, DECREMENT, decrementCount };