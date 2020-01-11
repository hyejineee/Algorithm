# 📱 핸드폰 번호 가리기
## 문제 
[프로그래머스 - 핸드폰 번호 가리기](https://programmers.co.kr/learn/courses/30/lessons/12948)

## 1. 이해 
- 주어진 것 : 전화번호 문자열 
- 원하는 것 : 뒤에 4자리만 숫자인 전화번호 문자열 

## 2. 계획
- 문자열을 char 배열로 만든다. 
- map을 적용해서 인덱스가 문자열의 길이-4 미만이면 '*'를 반환한다.
- 이상이면 그대로 반환한다. 
- join으로 다시 문자열로 만들어 준다. 

## 3. 회고 
- 1차 풀이 : 코드적으로 푼 것 같다. 간단하더라도 최대한 tdd 생각하면서 풀자.

## 참고.
- "*".repeat(s.length - 4) + s.slice(-4);
