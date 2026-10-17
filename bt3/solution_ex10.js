
// ==========================================
// 1. FUNCTION DECLARATION
// ==========================================

function turnOnLight() {
    console.log("Đèn thông minh đã bật");
}

// Có thể gọi hàm trước khi khai báo
turnOnLight();

// ==========================================
// 2. FUNCTION EXPRESSION
// ==========================================

const turnOffLight = function() {
    console.log("Đèn thông minh đã tắt");
};

turnOffLight();

// ==========================================
// 3. ARROW FUNCTION
// ==========================================

const checkTemperature = (temperature) => {
    console.log(`Nhiệt độ hiện tại: ${temperature}°C`);
};

checkTemperature(28);

// Implicit return
const calculatePower = (voltage, current) => voltage * current;

console.log(`Công suất: ${calculatePower(220, 2)}W`);

// ==========================================
// 4. MINH HỌA HOISTING
// ==========================================

// Function Declaration: hoạt động
showDeviceStatus();

function showDeviceStatus() {
    console.log("Thiết bị đang hoạt động");
}

// Function Expression: phải khai báo trước khi gọi
const showDeviceName = function() {
    console.log("Thiết bị: Smart Light");
};

showDeviceName();

// Arrow Function: phải khai báo trước khi gọi
const showDeviceLocation = () => {
    console.log("Vị trí: Phòng khách");
};

showDeviceLocation();

// ==========================================
// 5. SO SÁNH THIS
// ==========================================

const smartDevice = {
    deviceName: "Smart Light",

    showName: function() {
        console.log(this.deviceName);
    },

    showNameArrow: () => {
        console.log(this.deviceName);
    }
};

smartDevice.showName();
// Kết quả: Smart Light

smartDevice.showNameArrow();
// Không đảm bảo nhận được Smart Light vì Arrow Function
// không có this riêng và kế thừa this bên ngoài.

// ==========================================
// 6. SO SÁNH ARGUMENTS
// ==========================================

function showArguments() {
    console.log(arguments);
}

showArguments("Light", "Fan");

const showArrowArguments = (...args) => {
    console.log(args);
};

showArrowArguments("Light", "Fan");

// ==========================================
// 7. QUY CHUẨN CHO SMART HOME IOT
// ==========================================

// Dùng Function Declaration cho nghiệp vụ chính
function createDevice(deviceName) {
    return {
        deviceName: deviceName,
        isOn: false
    };
}

// Dùng Arrow Function cho callback
const devices = [
    createDevice("Smart Light"),
    createDevice("Smart Fan")
];

devices.forEach((device) => {
    console.log(`Thiết bị: ${device.deviceName}`);
});

// Dùng phương thức thông thường khi cần this
const deviceController = {
    deviceName: "Smart Fan",

    turnOn: function() {
        this.isOn = true;
        console.log(`${this.deviceName} đã bật`);
    },

    isOn: false
};

deviceController.turnOn();

