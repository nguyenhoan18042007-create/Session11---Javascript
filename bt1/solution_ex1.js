
const devices = [
    {
        id: "DEV-01",
        name: "Dieu hoa phong khach",
        isActive: true,
        powerWatts: 1500
    },
    {
        id: "DEV-02",
        name: "Den ngu",
        isActive: true,
        powerWatts: 10
    }
];

const findDeviceById = (devices, targetId) => {
    for (let i = 0; i < devices.length; i++) {
        if (devices[i].id === targetId) {
            return devices[i];
        }
    }

    return null;
};

const updateDevice = (devices, targetId, updatedData) => {
    const targetDevice = findDeviceById(devices, targetId);

    if (targetDevice === null) {
        return false;
    }

    if (updatedData.name !== undefined) {
        targetDevice.name = updatedData.name;
    }

    if (updatedData.isActive !== undefined) {
        targetDevice.isActive = updatedData.isActive;
    }

    if (updatedData.powerWatts !== undefined) {
        targetDevice.powerWatts = updatedData.powerWatts;
    }

    return true;
};

// Cap nhat dieu hoa: tat thiet bi
updateDevice(devices, "DEV-01", {
    isActive: false
});

// Cap nhat den ngu: dua cong suat ve 0W
updateDevice(devices, "DEV-02", {
    powerWatts: 0
});

console.log("Danh sach thiet bi sau khi cap nhat:");
console.log(devices);