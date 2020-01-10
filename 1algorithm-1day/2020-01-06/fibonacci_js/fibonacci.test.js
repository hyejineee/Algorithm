const fibonacci = (n)=>{
    if(n==1) return 0 
    if(n==2) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

test(`피보나치 수열 테스트`,()=>{
    expect(fibonacci(5)).toBe(3)
    expect(fibonacci(10)).toBe(34)
});