// รับองค์ประกอบ Modal, รูปภาพใน Modal, และปุ่มปิด
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
// รับปุ่มปิด (x)
const closeBtn = document.getElementsByClassName('close-btn')[0];

// ฟังก์ชันสำหรับเปิด Modal
// ถูกเรียกใช้เมื่อผู้ใช้คลิกที่รูปภาพใบรับรอง (onclick="openModal(path)")
function openModal(imageSrc) {
    modal.style.display = "flex"; // แสดง Modal
    modalImage.src = imageSrc;    // ตั้งค่ารูปภาพให้เป็นรูปที่ถูกคลิก
}

// ปิด Modal เมื่อคลิกที่ปุ่ม x
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

// ปิด Modal เมื่อคลิกที่พื้นหลังสีดำ (ไม่ใช่ตัวรูปภาพ)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
