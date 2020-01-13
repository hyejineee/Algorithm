const findAVG = (arr)=>{
    return sum(arr)/arr.length;
};

const sum = (arr) => arr.reduce((acc, cur)=>acc+cur ,0)

test(`평균 구하기`, ()=>{
    expect(findAVG([1,2,3,4])).toBe(2.5)
});

test(`sum`,()=>{
    expect(sum([1,2,3,4])).toBe(10)
});