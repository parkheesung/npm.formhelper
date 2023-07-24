const { JSDOM } = require("jsdom");

var HTML = `
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<link rel="icon" href="favicon.ico" />
<title>Jest Test</title>
</head>
<body>
<h3>Sample</h3>
<form id="target" name="target" method="post">
<p><input type="text" name="Title" id="Title" value="제목텍스트" /></p>
<p>
<label for="openType_true">공개</label><input type="radio" name="openType" id="openType_true" value="Y" checked />
<label for="openType_false">비공개</label><input type="radio" name="openType" id="openType_false" value="N" />
</p>
<p>
<h4>태그</h4>
<input type="checkbox" name="category" id="category_1" value="1" /><label for="category_1">카테고리1</label><br/>
<input type="checkbox" name="category" id="category_2" value="2" checked /><label for="category_2">카테고리2</label><br/>
<input type="checkbox" name="category" id="category_3" value="3" /><label for="category_3">카테고리3</label><br/>
<input type="checkbox" name="category" id="category_4" value="4" checked /><label for="category_4">카테고리4</label><br/>
<input type="checkbox" name="category" id="category_5" value="5" /><label for="category_5">카테고리5</label><br/>
<input type="checkbox" name="category" id="category_6" value="6" /><label for="category_6">카테고리6</label><br/>
</p>
<p>
<h4>본문</h4>
<textarea name="bodyText" id="bodyText">여기에 본문이 들어갑니다.</textarea>
</p>
</form>
</body>
</html>
`;

const dom = new JSDOM(HTML);
global.document = dom.window.document;

const { formHelper, formHelperSync } = require("./index.js");

test("Input Text 체크", async () => {
    let formData = await formHelperSync('target');
    expect(formData.Title).toBe('제목텍스트');
});

test("Input radio 체크", async () => {
    let formData = await formHelperSync('target');
    expect(formData.openType).toBe('Y');
});

test("Input checkbox 체크", async () => {
    let formData = await formHelperSync('target');
    expect(formData.category).toBe('2,4');
});

test("Input textarea 체크", async () => {
    let formData = await formHelperSync('target');
    expect(formData.bodyText).toBe('여기에 본문이 들어갑니다.');
});

