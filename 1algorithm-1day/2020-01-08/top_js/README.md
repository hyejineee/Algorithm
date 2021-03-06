# ☕️ T.O.P
## 문제 
[프로그래머스 - 탑](https://programmers.co.kr/learn/courses/30/lessons/42588)

## 1. 이해 
- 발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신합니다
- 신호를 수신하는 탑이 없으면 0으로 표시합니다.
- [6,9,5,7,4] -> [0,0,2,2,4] 

- 주어지는 것 : 탑의 높이를 담은 배열 heights
- 원하는 것 : 수신탑의 인덱스 배열 

## 2. 계획 
- 배열에 인덱스와 높이를 담은 값을 저장한다.
    -> 6(1), 9(2), 5(3), 7(4), 4(5)
- 송신탑의 전파를 수신하는 탑을 찾아서 인덱스를 구한다.

## 3. 회고 
- 1차 풀이 : 짝 프로그래밍이라 문제를 푸는 것에만 집중했다. TDD 단계가 필요해...
- 2차 풀이 : 최대한 단계를 쪼개서 TDD로 문제를 풀었다. 코드 파일에 주석으로 TDD과정을 남기면서 풀었다. 자바스크립트에서 코드를 더 좋게 하는 함수가 있을 것 같다...
