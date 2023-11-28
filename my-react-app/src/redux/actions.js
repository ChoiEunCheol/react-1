// 액션 타입 정의
// 액션 타입은 필수값이며 이름 같은 느낌?

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// 액션 생성자 함수 정의
export const increment = () => {
    return { type : INCREMENT};
};

export const decrement = () => {
    return { type : DECREMENT};
};