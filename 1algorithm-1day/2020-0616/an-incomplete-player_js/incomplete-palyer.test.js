
const incompletePlayer = (participants, completion)=>{

    const result = participants.map( participant =>{
        const index = completion.indexOf(participant) 
        if(index > -1){
            completion.splice(index,1)
            return true
        }else{
            return false
        }
    });

    return participants[result.indexOf(false)]
};

test(`완주하지 못한 선수`, () => {
    expect(incompletePlayer
        (["leo", "kiki", "eden"],
        ["eden", "kiki"])
    ).toEqual("leo");

    expect(incompletePlayer
        (["mislav", "stanko", "mislav", "ana"],
        ["stanko", "ana", "mislav"])
    ).toEqual("mislav");
  });