<p align="middle" >
  <img width="200px;" src="./src/images/lotto_ball.png"/>
</p>
<h2 align="middle">행운의 로또 - 조기문 </h2>
<p align="middle">자바스크립트로 구현 하는 로또 어플리케이션 </p>

# 주안점
- MV* 패턴 적용하기.
  - 이번에 공부하고 처음 적용해봐 MVC인지 MVP인지 약간 모호하다
  - 그러나 확실히 역할 분담은 되는 것 같다. 
  - 첫 온보딩 미션(계산기)에서는 한 곳에서 모든 작업이 일어났는데, 지금은 어느정도 역할분담이 된 것 같다. <br/>
    -> __step1 -> step2 -> step3 넘어가면서 기능을 계속해서 추가했는데, 역할 분담이 나름 잘 돼 큰 무리 없이 기능을 추가 할 수 있었던 것 같다.__  
- 상수 적극적으로 사용하기
  - DOM 부터 Message 등 많은 부분에서 상수를 사용했다
  - 작업 시간은 증가했지만 오타에 대한 걱정을 많이 덜을 수 있었고, 좀 더 타입 세이프한 코드가 된 것 같다. 
- 임시 변수 최소화 하기
- `innerHTML` 사용 자제하기
  - 보안상의 문제가 있을 수 있고, 성능적으로도 조금 떨어지는 `innerHTML` 대신 다른 방법들을 사용했다.  
- 커맨드 사용해서 테스트 하기
  - `Cypress.Commands` 기능을 이용해 테스트를 작성했다. 
  - 고민한 부분은 __어디까지 Commands에 들어가야하냐__ 였는데, 재남님의 리뷰를 보니 __테스트는 포함하지 않는 것이 좋다고 생각하신다고 한다__. 확실히 테스트까지 Command에 포함시켜버리면 테스트를 보기 더 어려울 것 같다.


# 데모 페이지
[바로가기](https://guymoon.github.io/js-lotto/)
# 웹 VS코드 환경
[바로가기](https://github.dev/guymoon/js-lotto/tree/guymoon-step3)

# 요구 사항

## STEP 3
1) 구입 기능
- [x] 소비자는 수동 구매(스스로 구매 번호를 입력)를 할 수 있어야 한다.
- [x] 수동 구매를 위한 input UI는 스스로 구현한다.
- [x] 수동 구매 후 남는 금액이 있다면 자동으로 구매할 수 있어야 한다.
- [x ]위 기능들이 정상적으로 동작하는지 Cypress를 이용해 테스트한다.
2) 배포
- [x] 실행 가능한 페이지에 접근할 수 있도록 github page 기능을 이용하고, 해당 링크를 PR과 README에 작성한다.

# STEP3에서 반영해본 것
- 포맷터 도입.
- form 태그에 사용되는 `HTMLElement.value = ''` 대신 `.reset()` 사용.
- `DOMContentLoaded` 이벤트 별도로 사용 할 필요 없게 `defer` 속성 추가.
- `Array.from(Array(this.data.amount)).map` -> `[...Array(this.data.amount)].map` 더 간략하게 리팩토링.
- `show()`, `hide()` 최대한 유틸로 사용하게 하도록 리팩토링.


  
