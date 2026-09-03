---
author: Yuchan Lee
pubDatetime: 2026-09-02
# modDatetime:
title: 바젤 문제 
featured: false
draft: false
category:
  - Math
  - analysis
tags:
  - others
# ogImage: ../../assets/images/example.png
description: 푸리에 급수를 이용한 증명 
# canonicalURL: https://example.com/original-post
# hideEditPost: false
# timezone: Asia/Seoul
# cover:
---
### 바젤 문제 (Basel Problem)

바젤 문제는 다음 무한급수의 정확한 값을 구하는 문제이다.

$$
\sum_{n=1}^{\infty}\frac{1}{n^2}
=\frac{\pi^2}{6}
$$

### 푸리에 급수 

1. 삼각함수 직교 -> 무한차원 기저
2. fejer kernal 
3. 푸리에 급수 부분합 이해 
4. 부분합이 수렴 -> 푸리에 급수가 수렴 

이 순서로 이해하면 됨 

푸리에 급수에 대해 이해한 후 
x^2꼴을 푸리에 급수로 표현, 이후 $x=pi$ 대입 후 항 비교하면 바젤 문제 증명 가능하다. 
