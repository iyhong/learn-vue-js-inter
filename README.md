# inflearn 
## [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89)

### 중요 내용 정리  

#### 1. vuex 패턴
Vue Components -(dispatch)-> Actions(backend api) -(commit)-> Mutations(devtools) -(mutate)-> State -(render)-> Vue Components  
![image](https://user-images.githubusercontent.com/22947274/158045702-e2131f1e-6903-45e5-b44e-8a8fe39539ba.png)

- state: 여러 컴포넌트에 공유된는 데이터 data
- getters: 연산된 state 값을 접근하는 속성 computed
- mutations: state 값을 변경하는 이벤트 로직, 메서드 methods
- actions: 비동기 처리 로직을 선언하는 메서드 async methods  


#### 2.state는 왜 직접 변경하지 않고 mutations로 변경할까?
- 여러개의 컴포넌트에서 아래와 같이 state값을 변경하는 경우 어느 컴포넌트에서 해당 state를 변경했는지 추적하기 가 어렵다.
```javascript
methods: {
  increaseCounter() { this.$store.state.counter++ }
}
```
- 특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한 건지 확인하기 어렵기 때문
- 따라서 뷰의 반응성을 거스르지 않게 명시적으로 상태 변화를 수행. 반응성, 디버깅, 테스팅 혜택.  

#### 3.actions란?
- 비동기 처리 로직을 선언하는 메서드, 비동기 로직을 담당하는 mutations
- 데이터 요청, Pomise, ES6 async와 같은 비동기 처리는 모두 actions에 선언
```javascript
// store.js
state: {
  num: 10,
},
mutations: {
  doubleNumber(state) {
    state.num =* 2
  }
},
actions: {
  delayDoubleNumber(context) { // context로 store의 메서드와 속성 접근
    context.commit('doubleNumber')
  }
}
```
```javascript
// App.vue
this.$store.dispatch('delayDoubleNumber')
```  

#### 4.vuex 헬퍼함수
 - mapState, mapGetters => computed
 - mapMutations, mapActions => methods
