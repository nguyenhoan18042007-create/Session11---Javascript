# Phân tích Trade-off: Function Declaration vs Function Expression vs Arrow Function

## 1. Bảng so sánh kỹ thuật

| Tiêu chí           | Function Declaration                             | Function Expression                                     | Arrow Function                                 |
| ------------------ | ------------------------------------------------ | ------------------------------------------------------- | ---------------------------------------------- |
| **Cú pháp**        | `function fn() {}`                               | `const fn = function() {}`                              | `const fn = () => {}`                          |
| **Hoisting**       | Có thể gọi trước khi khai báo trong cùng phạm vi | Không thể gọi trước khi biến được khởi tạo              | Không thể gọi trước khi biến được khởi tạo     |
| **`this`**         | Phụ thuộc vào cách gọi hàm                       | Phụ thuộc vào cách gọi hàm                              | Kế thừa `this` từ phạm vi bên ngoài            |
| **`arguments`**    | Có đối tượng `arguments` riêng                   | Có đối tượng `arguments` riêng                          | Không có `arguments` riêng                     |
| **Giá trị trả về** | Thường sử dụng `return`                          | Thường sử dụng `return`                                 | Có thể dùng implicit return                    |
| **Ưu điểm**        | Dễ đọc, có thể gọi trước khi khai báo            | Linh hoạt, có thể gán hàm vào biến                      | Ngắn gọn, phù hợp với callback                 |
| **Nhược điểm**     | Cú pháp dài hơn Arrow Function                   | Phải khởi tạo trước khi gọi nếu dùng `const` hoặc `let` | Không phù hợp với phương thức cần `this` riêng |
| **Khuyến nghị**    | Dùng cho các hàm nghiệp vụ chính                 | Dùng khi cần biểu thức hàm                              | Dùng cho callback và xử lý dữ liệu             |

## 2. Ví dụ minh họa Hoisting

### 2.1. Function Declaration

```javascript
turnOnLight();

function turnOnLight() {
    console.log("Đèn thông minh đã bật");
}
```

**Kết quả:**

```text
Đèn thông minh đã bật
```

**Giải thích:** Function Declaration được khởi tạo trước khi thực thi các câu lệnh trong phạm vi tương ứng, nên có thể gọi hàm trước vị trí khai báo.

### 2.2. Function Expression

```javascript
const turnOffLight = function() {
    console.log("Đèn thông minh đã tắt");
};

turnOffLight();
```

**Giải thích:** Phải khởi tạo biến `turnOffLight` trước khi gọi. Nếu gọi trước khi khởi tạo, chương trình sẽ phát sinh lỗi `ReferenceError`.

### 2.3. Arrow Function

```javascript
const checkTemperature = (temperature) => {
    console.log(`Nhiệt độ: ${temperature}°C`);
};

checkTemperature(28);
```

**Kết quả:**

```text
Nhiệt độ: 28°C
```

**Giải thích:** Arrow Function được gán cho biến `const`, nên phải khởi tạo biến trước khi gọi hàm.

## 3. Quy chuẩn viết hàm cho dự án Smart Home IoT

* **Function Declaration:** Ưu tiên sử dụng cho các hàm nghiệp vụ chính như `createDevice()`, `readDevices()`, `updateDevice()` và `deleteDevice()`.
* **Function Expression:** Sử dụng khi cần biểu diễn hàm như một giá trị hoặc gán hàm vào biến.
* **Arrow Function:** Ưu tiên sử dụng cho callback như `forEach()`, `map()` và `filter()`.
* **Quản lý `this`:** Sử dụng phương thức thông thường khi cần `this` tham chiếu đến đối tượng thiết bị.
* **Quy tắc Hoisting:** Khai báo Function Expression và Arrow Function trước khi gọi để mã nguồn dễ đọc và hạn chế lỗi.
* **Quy tắc đặt tên:** Sử dụng tiếng Anh theo camelCase, ví dụ `turnOnDevice()` và `updateDeviceStatus()`.

## 4. Kết luận

Không có một loại hàm nào phù hợp với mọi trường hợp. Đối với dự án Smart Home IoT, nên ưu tiên Function Declaration cho các hàm nghiệp vụ chính, Arrow Function cho callback và Function Expression khi cần biểu diễn hàm như một giá trị.

Việc thống nhất quy chuẩn giúp mã nguồn dễ đọc, dễ bảo trì và hạn chế lỗi liên quan đến Hoisting và `this`.
