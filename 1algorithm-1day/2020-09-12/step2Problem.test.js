
const compareTwoNumber = (a,b) => a == b? "==" : (a>b? ">": "<");

test('두 수 비교하기', ()=>{
    expect(compareTwoNumber(1,2)).toEqual("<");
    expect(compareTwoNumber(1,1)).toEqual("==");
    expect(compareTwoNumber(2,1)).toEqual(">");
});

const grade = (score)=>
    score >=90 ? 'A' : (score >=80? 'B' : score>=70 ? 'C' : score >= 60? 'D' : 'F' )

test('시험 성적', ()=>{
    expect(grade(100)).toEqual('A')
    expect(grade(81)).toEqual('B')
    expect(grade(66)).toEqual('D')
    expect(grade(0)).toEqual('F')
});

const leapYear = (year)=>
    year%4 === 0 && year %100 !==0 || year%400===0 ? 1 :0

test('윤년', ()=>{
    expect(leapYear(2000)).toEqual(1)
    expect(leapYear(1999)).toEqual(0)
});

const chooseQuadrant = (x,y)=>{
    let loc = (x > 0 ? 1 : -1 ) + (y > 0 ? 1 : -2);
    return loc >0  ? 1 : (loc === 0 ? 2 : (loc >= -1 ? 4: 3));
} 

test('사분면 고르기', ()=>{
    expect(chooseQuadrant(1000, 1000)).toEqual(1)
    expect(chooseQuadrant(-1000, 5)).toEqual(2)
    expect(chooseQuadrant(-1000, -1000)).toEqual(3)
    expect(chooseQuadrant(12, -1000)).toEqual(4)
});

const alarmsClocks = (h,m)=>
    `${m >= 45 ? h : (h === 0 ? 23 : h-1)} ${m >= 45 ? m-45 :(60+m)-45}`;


test('알람 시계', ()=>{
    expect(alarmsClocks(10, 10)).toEqual('9 25')
    expect(alarmsClocks(0, 30)).toEqual('23 45')
    expect(alarmsClocks(0, 0)).toEqual('23 15')
    expect(alarmsClocks(0, 45)).toEqual('0 0')
    expect(alarmsClocks(0, 0)).toEqual('23 15')
    expect(alarmsClocks(0, 55)).toEqual('0 10')
    expect(alarmsClocks(0, 44)).toEqual('23 59')
    expect(alarmsClocks(1, 44)).toEqual('0 59')
    expect(alarmsClocks(2, 44)).toEqual('1 59')
    expect(alarmsClocks(23, 59)).toEqual('23 14')
    expect(alarmsClocks(23, 40)).toEqual('22 55')
    expect(alarmsClocks(23, 45)).toEqual('23 0')


});

