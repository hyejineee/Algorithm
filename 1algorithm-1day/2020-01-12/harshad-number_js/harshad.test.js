const harshadNumber = (x)=> x % sum(x) === 0;

const sum = (x)=>{
    if(x == 0) return 0;
    if(x <=1 ) return 1;
    return sum(parseInt(x/10)) + parseInt(x%10);
};

test(`하샤드의 수`, ()=>{
    expect(harshadNumber(8)).toBe(true);
    expect(harshadNumber(10)).toBe(true);
    expect(harshadNumber(123)).toBe(false);
});

test(`sum`, ()=>{
    expect(sum(8)).toBe(8)
    expect(sum(10)).toBe(1)
    expect(sum(11)).toBe(2)
    expect(sum(13)).toBe(4)
    expect(sum(123)).toBe(6)
    expect(sum(1234)).toBe(10)


})
