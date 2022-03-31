* output (built-in)
- innerHTML trả về mã html của phần tử hiện tại
- document.write(); đưa ra màn nhưng chủ yếu để test
- alert() thông báo pop-up
- console.log() đưa ra màn trong f12

* statements
-> những câu lệnh sẽ được thực hiện bởi trình duyệt web.

( Values, Operators, Expressions, Keywords, and Comments )

- Code Blocks: nhóm câu lệnh
- keywords: var, let, const, if, switch, for, function, return, try

* Syntax
- var, let, const
- var chứa biến 
- operators: arithmetic, assignment operator (toán tử)
+ arithmetic: % (dư); ++ -- (tăng/giảm)
+ assignment: (gán) 
== (not strictly) và === (strictly false)

- var khai báo biến: boolean, number, string,... (tính hoisting) tồn tại trong phạm vi function hoặc toàn cục
- let khai báo có scope (block scope)
- const( kiểu biến primitive: string, number, boolea, null, undefined)

* Variables
- let (không khởi tạo mới cùng const) có thể gán lại biến
 
* Data type
- boolean: điều kiện
- array: mảng
- object const ... = {}
- empty value: let ... = "";

* function 
- reuse code
- khởi tạo code 1 lần dùng lại nhiều lần

* Objects
- objects properties: objName.propertyName; objName["propertyName]
- "this"
+ accessing method: objectName.methodName()
- String parts 
+ slice (start, end) (parameter mà âm thì đi từ end lại)
+ substring (start, end)
+ substr (start, length)


* Events
- onclick
- onchange
- onload
- onmouseover

////////////////////////////////////////////////////////////////////////
* String 
- length: //let length = text.length;
- Strings as Objects
- String parts: slice, substring, substr
- text replace: replace()
- String search: indexOf(), lastIndexOf(), startsWith(), endsWith()

* Numbers
- float
- thêm kiểu dạng numbers -> Numbers
- thêm kiểu dạnng string "" -> string ""
- thêm kiểu dạng string "" + numbers -> string ""
- "NaN"
- "Infinity"

* Number methods
- toString(): number to string
- toExponential(): số mũ
- toFixed(): làm tròn console.log(x.toFixed(2));
- toPrecision(): độ chính xác console.log(x.toPercision(2));

- valueOf() numbers trả numbers console.log((1.5 + 8.0).valueOf());

* Mảng
- Methods:
+ pop() xoá 1 biến cuối trong mảng
+ push() thêm 1 biến vào mảng
+ objarray.shift();
+ objarray.unshift(); thêm một biến vào mảng và "unshift"

+ sử dụng length để append 1 biến mới vào array (easy-way method)

+ sử dụng concat() để merge hai mảng thành 1 mảng mới

+ sử dụng mảng splice() chứa 2 parameter [parameter 1 để add vị trí, parameter 2 để xem bao nhiêu elements sẽ xoá]

+ toString() trả mảng ra màn kèm phẩy

- Sort: sắp xếp thứ tự (sort; reversing)
+ Numeric: sắp xếp stt
+ Compare function: xếp theo abc hay number order
+ có sử dụng toán max, min nhưng chưa học sâu cái này nâng cao nhưng có xem qua


- Iteration: 
+ forEach(): liệt kê với cú pháp ngắn hơn
