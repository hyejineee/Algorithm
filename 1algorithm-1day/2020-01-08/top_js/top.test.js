const findTowerIndexs = heights => {
    // return [0, 0, 2, 2, 4];
    // 어떻게 0,0,2,2,4라는 배열이 나오게 되었는가?
    // 배열의 각 원소가 의미하는 것은 무엇인가?

    // return [0, 0, heights.indexOf(9)+1,heights.indexOf(9)+1 , heights.indexOf(7)+1];
    // 수신탑의 높이에 해당하는 인덱스를 어떻게 구할 것인가? 예: 4 -> 7(4)
    // findTowerIndex()를 사용한다.

    // return [
    //     findTowerIndex(6,[[0,0]]),
    //     findTowerIndex(9,[[6,1]]),
    //     findTowerIndex(5,[[6,1],[9,2]]),
    //     findTowerIndex(7,[[6,1],[9,2],[5,3]]),
    //     findTowerIndex(4,[[6,1],[9,2],[5,3],[7,4]])
    // ];

    const heightIndexPairs = heights.map((height,index)=>[height,index+1])

    return heightIndexPairs.map(([height,index])=>
        findTowerIndex(height,heightIndexPairs.slice(0,index-1))
    );

};

const findTowerIndex = (sendTower, remainTowers) =>{
    // return 4;
    // 4는 어디에서 온 숫자인가? 7의 인덱스+1 

    // return remainTowers.indexOf(7)+1;
    // 왜 7의 인덱스를 구하는가? 7이 4보다 높은 탑중에 제일 먼저 만나는 탑이기 때문에
    
    // return remainTowers.indexOf(remainTowers.filter(it=>it>sendTower).pop())+1;
    // 같은 높이인 탑의 인덱스 찾기를 indexOf를 사용 -> 다른 값이 나올 확률이 있다. 
    // expect(findTowerIndex(2,[3, 9, 9, 7, 5, 7])).toBe(6)
    // -> 인덱스와 높이를 묶어서 사용한다. heights.map((x,index)=>[x,index])

    const receiveTower = remainTowers.filter(([height,_])=> height>sendTower).pop()
    return receiveTower ? receiveTower[1]:0;
};


test(`각 송신탑들의 수신탑의 인덱스를 구한다.`, () => {
    expect(findTowerIndexs([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
    expect(findTowerIndexs([6, 9, 5, 7, 8])).toEqual([0, 0, 2, 2, 2]);
    expect(findTowerIndexs([6, 9, 5, 7, 9])).toEqual([0, 0, 2, 2, 0]);
    expect(findTowerIndexs([20, 9, 5, 7, 9])).toEqual([0, 1, 2, 2, 1]);
    expect(findTowerIndexs([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6]);
    expect(findTowerIndexs([1, 5, 3, 6, 7, 6, 5])).toEqual([0, 0, 2, 0, 0, 5, 6]);
});

test(`수신탑의 높이에 해당하는 인덱스를 구한다.`, ()=>{
    expect(findTowerIndex(4, [ 
        [ 6, 1 ], 
        [ 9, 2 ], 
        [ 5, 3 ], 
        [ 7, 4 ]
    ]))
        .toBe(4)

    expect(findTowerIndex(7, [ 
        [ 6, 1 ], 
        [ 9, 2 ], 
        [ 5, 3 ]
    ]))
        .toBe(2)

    expect(findTowerIndex(2, [
        [ 3, 1 ],
        [ 9, 2 ],
        [ 9, 3 ], 
        [ 3, 4 ],
        [ 5, 5 ], 
        [ 7, 6 ]
      ])).toBe(6)
      
}); 


  