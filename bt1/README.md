# README.md — Dò vết và sửa lỗi Falsy Value

## 1. Phân tích lỗi

Trong hàm `updateDevice`, hai điều kiện `if (updatedData.isActive)` và `if (updatedData.powerWatts)` gây ra lỗi khi cập nhật thiết bị.

JavaScript xem `false` và `0` là các giá trị Falsy. Vì vậy, khi chủ nhà muốn tắt điều hòa bằng `isActive: false` hoặc đưa công suất đèn ngủ về `0W` bằng `powerWatts: 0`, các câu lệnh cập nhật không được thực hiện.

Cách khắc phục là sử dụng `!== undefined` để kiểm tra giá trị có được truyền vào hay không. Cách này vẫn chấp nhận các giá trị `false` và `0`.

## 2. Bảng Test Cases

| Trường hợp kiểm thử            | Dữ liệu đầu vào                                          | Kết quả sai thực tế                                         | Kết quả đúng mong đợi                   |
| ------------------------------ | -------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------- |
| TC01 — Tắt điều hòa            | `targetId: "DEV-01"`, `updatedData: { isActive: false }` | `isActive` vẫn là `true`, điều hòa chưa được tắt.           | `isActive` được cập nhật thành `false`. |
| TC02 — Đưa công suất đèn về 0W | `targetId: "DEV-02"`, `updatedData: { powerWatts: 0 }`   | `powerWatts` vẫn là `10`, đèn chưa được cập nhật công suất. | `powerWatts` được cập nhật thành `0`.   |

## 3. Kết luận

Đã sửa các điều kiện kiểm tra bằng `!== undefined`, giúp hàm `updateDevice` cập nhật chính xác các giá trị `false` và `0`. Chương trình sử dụng các kiến thức JavaScript cơ bản gồm mảng, đối tượng, hàm, vòng lặp và câu lệnh điều kiện.
