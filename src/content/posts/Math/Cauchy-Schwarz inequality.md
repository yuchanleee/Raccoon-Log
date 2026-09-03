---
author: Yuchan Lee
pubDatetime: 2026-09-02
# modDatetime:
title: Cauchy Schwarz inequality
featured: false
draft: false
category:
  - Math
tags:
  - others
# ogImage: ../../assets/images/example.png
description: 증명 
# canonicalURL: https://example.com/original-post
# hideEditPost: false
# timezone: Asia/Seoul
# cover:
---

### Cauchy Schwarz inequality
Let $(a_1,a_2, \dots, a_n)$ and $(b_1,b_2,\dots,b_n)$ be two sequences of real numbers, then 

$$
\left(\sum_{i=1}^na_i^2\right) \left(\sum_{i=1}^nb_i^2\right) \ge \left(\sum_{i=1}^na_ib_i\right)^2
$$

#### By mathematical induction
Let proposition P(n)

$$
\left(\sum_{i=1}^na_i^2\right) \left(\sum_{i=1}^nb_i^2\right) \ge \left(\sum_{i=1}^na_ib_i\right)^2\quad (n\ge1)
$$

when n=1 

$$
(a_1^2)(b_1^2)=(a_1b_1)^2
$$

suppose P(k) is true. then

$$\begin{aligned} \sqrt{\sum_{i=1}^{k+1} a_i^2 \sum_{i=1}^{k+1} b_i^2}  &= \sqrt{\left( \sum_{i=1}^k a_i^2 + a_{k+1}^2 \right) \left( \sum_{i=1}^k b_i^2 + b_{k+1}^2 \right)} \\ &\ge \sqrt{\sum_{i=1}^k a_i^2 \sum_{i=1}^k b_i^2} + \sqrt{{a_{k+1}}^2 {b_{k+1}}^2} \quad \cdots (*) \\ &\ge \sqrt{\left( \sum_{i=1}^k a_i b_i \right)^2} + \sqrt{{a_{k+1}}^2 {b_{k+1}}^2} \quad (\because \text{귀납 가정 적용}) \\ &= \sum_{i=1}^k \vert{}a_i b_i\vert{} + \vert{}a_{k+1} b_{k+1}\vert{} \\ &= \sum_{i=1}^{k+1} \vert{}a_i b_i\vert{} \quad \left( \ge \sum_{i=1}^{k+1} a_i b_i \right) \end{aligned}$$

#### other prove method
[refer to this](https://m.blog.naver.com/yh6613/220458975310)