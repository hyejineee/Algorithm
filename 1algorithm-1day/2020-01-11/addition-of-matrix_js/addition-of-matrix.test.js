const addition = (arr1,arr2)=>{
    // return [[4,6],[7,9]];
    // 왜 4,6,7,9 인가?

    // return [[1+3,2+4],[2+5,3+6]];
    // 각각의 수가 의미하는 것은 무엇인가?

    // return [
    //     [arr1[0][0] + arr2[0][0], arr1[0][1] +  arr2[0][1]],
    //     [arr1[1][0] + arr2[1][0], arr1[1][1] + arr2[1][1]]
    // ]
    // arr1과 arr2의 자리가 같은 곳에서 값을 가져온다. 

    return arr1.map((v,i)=> v.map((v2,i2)=>v2+arr2[i][i2])
    );
}

test(`행렬의 덧셈`,()=>{
    expect(addition([[1,2],[2,3]], [[3,4],[5,6]])).toEqual([[4,6],[7,9]])
});
