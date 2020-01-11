const nNumbers = (x, n)=>
    Array.from({length: n},(_,index)=>(index+1)*x);


test(`x만큼 간격이 있는 n개의 수 테스트`,()=>{
    expect(nNumbers(2,5)).toEqual([2,4,6,8,10]);
    expect(nNumbers(4,3)).toEqual([4,8,12]);
    expect(nNumbers(-4,2)).toEqual([-4, -8]);
})
