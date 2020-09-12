// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(
//     (x) => Number(x)
// );

const multiplication = (numbers)=>{
    let r = Array.from(numbers[1].toString()).reverse().reduce((acc,cur)=>
       [...acc, (Number(cur) * numbers[0])]
    , []);

    r = [...r, numbers[0]*numbers[1]]
    
    output(r);
};

const output = (result)=>{
    result.map(x =>{
        console.log(x)
    });
};

test("곱셈 단계에 들어가는 값을 구하라.", ()=>{
    expect(multiplication([472,385])).toEqual(
        `2360
        3776
        1416
        181720`);
});