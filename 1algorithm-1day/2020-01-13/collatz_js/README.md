# 📱 콜라츠 추측
## 문제 
[프로그래머스 - 콜라츠 추측](https://programmers.co.kr/learn/courses/30/lessons/12943)

## 1. 이해
- 주어진 것 : 콜라츠 추측 알고리즘
- 콜라츠 알고리즘의 마지막 수는 1이다.
- 500 이내에 콜라츠 알고리즘을 적용한 수가 1이 되지 않으면 -1을 리턴
- 원하는 것 : 콜라츠 알고리즘의 반복횟수

## 2. 계획
- 주어진 수에 콜라츠 알고리즘을 반복해서 적용한다.
- 적용한 횟수를 카운트 한다.
- 숫자가 1이되면 적용을 멈춘고 카운트한 횟수를 반환한다.
- 500번 이상 적용하면 -1을 반환한다.

## 3. 회고 
- 1차 풀이 : 계획에 적은 그대로 반복문을 사용해서 문제를 풀었다. 재귀로 가능할 것 같다. 다음엔 재귀로 풀어보자.
- 2차 풀이 : 재귀로 문제를 풀었다.!!