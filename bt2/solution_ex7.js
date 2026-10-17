
const devices = [
    {
        id: "DEV_001",
        name: "Đèn phòng khách",
        room: "Phòng khách",
        power: 20,
        status: true
    },
    {
        id: "DEV_002",
        name: "Quạt phòng ngủ",
        room: "Phòng ngủ",
        power: 50,
        status: false
    }
];

// 1. Hàm kiểm chuẩn dữ liệu
const validateDevice = (device) => {
    if (!device.name || device.name.trim() === "") {
        return false;
    }

    if (!device.room || device.room.trim() === "") {
        return false;
    }

    if (typeof device.power !== "number" || device.power <= 0) {
        return false;
    }

    return true;
};

// 2. Thêm thiết bị
const createDevice = (list, newDev) => {
    if (!validateDevice(newDev)) {
        console.log("Dữ liệu thiết bị không hợp lệ!");
        return false;
    }

    const newId = "DEV_" + String(Date.now()).slice(-6);

    const device = {
        id: newId,
        name: newDev.name,
        room: newDev.room,
        power: newDev.power,
        status: newDev.status ?? false
    };

    list.push(device);

    console.log("Thêm thiết bị thành công:", device);
    return device;
};

// 3. Xem thiết bị theo phòng
const readDevicesByRoom = (list, roomName) => {
    return list.filter((device) =>
        device.room.toLowerCase() === roomName.toLowerCase()
    );
};

// 4. Cập nhật thiết bị
const updateDevice = (list, id, updateData) => {
    const device = list.find((item) => item.id === id);

    if (!device) {
        console.log("Không tìm thấy thiết bị!");
        return false;
    }

    if (updateData.name !== undefined) {
        if (typeof updateData.name !== "string" ||
            updateData.name.trim() === "") {
            return false;
        }
    }

    if (updateData.room !== undefined) {
        if (typeof updateData.room !== "string" ||
            updateData.room.trim() === "") {
            return false;
        }
    }

    if (updateData.power !== undefined) {
        if (typeof updateData.power !== "number" ||
            updateData.power <= 0) {
            return false;
        }
    }

    if (updateData.status !== undefined &&
        typeof updateData.status !== "boolean") {
        return false;
    }

    Object.assign(device, updateData);

    console.log("Cập nhật thành công:", device);
    return true;
};

// 5. Xóa thiết bị
const deleteDevice = (list, id) => {
    const index = list.findIndex((device) => device.id === id);

    if (index === -1) {
        console.log("Không tìm thấy thiết bị cần xóa!");
        return false;
    }

    list.splice(index, 1);

    console.log("Xóa thiết bị thành công!");
    return true;
};

// 6. Kiểm thử các hàm CRUD
console.log("===== DANH SÁCH BAN ĐẦU =====");
console.log(devices);

console.log("===== THÊM THIẾT BỊ =====");
createDevice(devices, {
    name: "Điều hòa",
    room: "Phòng khách",
    power: 1500,
    status: false
});

console.log("===== LỌC THIẾT BỊ PHÒNG KHÁCH =====");
console.log(readDevicesByRoom(devices, "Phòng khách"));

console.log("===== CẬP NHẬT THIẾT BỊ =====");
console.log(
    updateDevice(devices, "DEV_001", {
        status: false,
        power: 0
    })
);

console.log("===== CẬP NHẬT HỢP LỆ =====");
console.log(
    updateDevice(devices, "DEV_001", {
        status: false,
        power: 30
    })
);

console.log("===== XÓA THIẾT BỊ =====");
console.log(deleteDevice(devices, "DEV_002"));

console.log("===== XÓA ID KHÔNG TỒN TẠI =====");
console.log(deleteDevice(devices, "DEV_999"));

console.log("===== DANH SÁCH CUỐI CÙNG =====");
console.log(devices);