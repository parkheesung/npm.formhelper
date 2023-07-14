# formHelper

대상 form 안에 존재하는 모든 요소들의 값을 json 형태로 반환해주는 함수입니다.

React.js, Vue.js 등에서 동적으로 생성된 input, select, textarea 등 입력값을 일괄로 받을 때 편리하게 이용하실 수 있습니다.

타입스크립트에서 사용 가능합니다.

---

## Release

```shell
npm install roslyn.formhelper
```

> 버전은 1.1.1 이 정상동작하는 배포 버전입니다. 

---

## Example

폼 예시는 다음과 같습니다.
```html
<form id="frm">
<input type="text" name="name" id="name" value="홍길동" />
<input type="email" name="email" id="email" value="hong@email.com" />
<input type="number" name="age" id="age" value="23" />
<select name="gender">
    <option value="남" selected>남성</option>
    <option value="여">여성</option>
</select>
</form>
```

다음과 같이 호출합니다.
```javascript
//비동기식
import { formHelper } from 'roslyn.formhelper';
await formHelper("frm", function(jsonData) {
    console.log(jsonData);
    // { name : "홍길동", email : "hong@email.com", age : "23", gender : "남" }
});

//동기식
import { formHelperSync } from 'roslyn.formhelper';
let jsonData = await formHelperSync("frm");
console.log(jsonData);
// { name : "홍길동", email : "hong@email.com", age : "23", gender : "남" }
```

> 입력항목에 name 필드는 필수항목입니다.

---

## dependencies

프로젝트는 다음에 의존성을 가집니다.
  - npm 

