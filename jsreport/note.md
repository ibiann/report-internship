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

////////////////////////////////////////////////////////////////////////

- Iteration: 
+ forEach(): liệt kê với cú pháp ngắn hơn
+ map(): biến đổi các phần tử của nó và đưa các kết quả vào một mảng mới.
+ filter(): kiểm tra với điều kiện
+ reduce(): The total ,The item value, The item index, The array itself
+ reduceRight(): lấy giá trị từ phải sang trái
+ every(): kiểm tra các phần tử của mảng có hợp điều kiện không
+ some(): lặp qua các phần tử của mảng, mỗi lần lặp sẽ truyền giá trị vào hàm callback

* Date (không quan trọng thời gian hiện tại)
- sử dụng get (d.get)
- sử dụng set (d.set)

* Boolean: mệnh đề true/false 
 

* condition: mệnh đề so sánh if/else/else if/ switch case

* Switch: chọn case để thực hiện <=> với biến cho xong xử lí từng case
nếu case không có và gán default thì giá trị trả màn là default

* Loop: for; for in; for/of; while; do/while
- For...in dùng để loop 1 obj
// for (var prop in obj) {
//     console.log('obj.' + prop + '=' +obj[prop]);
// };

- for...of duyệt các đối tượng từ arr,str,map,...

var myString = 'Trung';

// for (var value of myString) {
//     console.log(value);
// }

- while: Câu lệnh while tạo ra một vòng lặp thực thi một khối lệnh cho đến khi điều kiện vẫn đúng.

- do...while: gần giống whiile nhưng code sẽ chạy ít nhất 1 lần nếu điều kiện thoả mãn

* set: cho phép lưu trữ dữ liệu 1 cách không trùng lặp
- new Set([""]); 
- add(): object.add(variable);

* map: là một tập hợp các cặp key/value có thể sử dụng mọi kiểu dữ liệu làm key và có thể duy trì thứ tự các phần tử của nó. 
- new Set([""]); 
- add(): object.add(variable);
size : có thuộc tính size, Objects không có tích hợp để lấy ra size của nó.
vòng lặp : Map có thể lặp lại trực tiếp, còn Object thì không.
tính linh hoạt : Maps có thể có bất kì kiểu dữ liệu nào làm key cho 1 value, còn Object thì chỉ là chuỗi.

* typeof : ktra dữ liệu của biến nào đó

* error, try, catch, finally
- error: tạo bởi coder

- throws: khi có lỗi, js dừng đưa ra màn error message
- finally để thực hiện code sau try với catch 

* Strict mode
- giúp code tốt hơn

* this
- đại diện cho 1 đối tượng

- borrowing: với bind() method, 1 obj có thể mượn 1 method từ obj khác
- this trong cú pháp
- this dứng 1 mình = global trả [objectWindow]
- vẫn cần tìm hiểu thêm
* arrow function
- làm code ngắn gọn

* class
- luôn thêm constructor() {}