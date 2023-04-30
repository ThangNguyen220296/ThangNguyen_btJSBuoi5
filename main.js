//QUẢN LÝ TUYỂN SINH
function tinhDiemThi(a, b, c, d, e) {
    return c + d + e + a + b;
}

function btnKetQuaDiemThi() {
    var diemChuan = document.getElementById("diemChuan").value;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var diemMon1 = document.getElementById("diemMon1").value * 1;
    var diemMon2 = document.getElementById("diemMon2").value * 1;
    var diemMon3 = document.getElementById("diemMon3").value * 1;

    var ketQuaDiemThi = tinhDiemThi(khuVuc, doiTuong, diemMon1, diemMon2, diemMon3);

    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        var result = "<div>Bạn đã rớt. Vì có 1 môn bị liệt với điểm 0.</div>";
    } else if (ketQuaDiemThi < diemChuan) {
        var result = "<div class='alert alert-primary'>Bạn đã rớt. Tổng điểm thi: " + ketQuaDiemThi + "</div>"
    } else if (ketQuaDiemThi >= diemChuan) {
        var result = "<div class='alert alert-primary'>Bạn đã đậu. Tổng điểm thi: " + ketQuaDiemThi + "</div>"
    } else {
        alert("Vui lòng nhập số hợp lệ!");
    }

    document.getElementById("footerDiemThi").innerHTML = result;

}


//TÍNH TIỀN ĐIỆN
var currentFormat = new Intl.NumberFormat("vn-VN");

function tinhTienDien(a) {
    if (a <= 50) {
        return a * 500;
    } else if (50 < a && a <= 100) {
        return 50 * 500 + (a - 50) * 650;
    } else if (100 < a && a <= 200) {
        return 50 * 500 + 50 * 650 + (a - 100) * 850;
    } else if (200 < a && a <= 350) {
        return 50 * 500 + 50 * 650 + 100 * 850 + (a - 200) * 1100;
    } else {
        return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (a - 350) * 1300;
    }
}

function btnTinhTienDien() {
    var name = document.getElementById("name").value;
    var soKw = document.getElementById("soKw").value * 1;

    var tienDien = tinhTienDien(soKw);

    var result = "<div class='alert alert-success'>Họ và tên: " + name + "<br />" + "Tiền đện: " + currentFormat.format(tienDien) + " VND</>";

    document.getElementById("footerTienDien").innerHTML = result;
}


//TÍNH THUẾ THU NHẬP CÁ NHÂN
function tinhThue(a, b) {
    var c = ((a - 4e+6) - (b * 1.6e+6));
    if (a <= 60e+6) {
        return c * (5 / 100);
    } else if (60e+6 < a && a <= 120e+6) {
        return c * (10 / 100);
    } else if (120e+6 < a && a <= 210e+6) {
        return c * (15 / 100);
    } else if (210e+6 < a && a <= 384e+6) {
        return c * (20 / 100);
    } else if (384e+6 < a && a <= 624e+6) {
        return c * (25 / 100);
    } else if (624e+6 < a && a <= 960e+6) {
        return c * (30 / 100);
    } else {
        return c * (35 / 100);
    }
}

function btnTinhThue() {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value * 1;
    var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

    var tienThue = tinhThue(thuNhapNam, soNguoiPhuThuoc);

    var result = "<div class='alert alert-warning'>Họ và tên: " + hoTen + "<br />" + "Tiền thuế cần đóng: " + currentFormat.format(tienThue) + " VND</div>";

    document.getElementById("footerThue").innerHTML = result;
}


//TÍNH TIỀN CÁP

// document.getElementById("khachHang").onchange = function () {
//     var khachHang = document.getElementById("khachHang").value * 1;
//     if (khachHang == 0) {
//         document.getElementById("divKetNoi").style.display = "none";
//     } else {
//         document.getElementById("divKetNoi").style.display = "block";
//     }
// }


function chonKhachHang() {
    var khachHang = document.getElementById("khachHang").value * 1;
    if (khachHang == 0) {
        document.getElementById("divKetNoi").style.display = "none";
    } else {
        document.getElementById("divKetNoi").style.display = "block";
    }
}

function tinhTienCap(a, b) {
    var khachHang = document.getElementById("khachHang").value * 1;
    if (khachHang == 0) {
        return a * 7.5 + 20.5 + 4.5;
    } else {
        if (b <= 10) {
            return a * 50 + 75 + 15;
        } else {
            return a * 50 + 75 + 15 + (b - 10) * 5;
        }
    }
}

document.getElementById("btnTinhTienCap").onclick = function () {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
    var soKetNoi = document.getElementById("soKetNoi").value * 1;

    var tienCap = tinhTienCap(soKenhCaoCap, soKetNoi);

    var result = "<div class='alert alert-danger'>Mã khách hàng: " + maKhachHang + "<br />" + "Tiền cáp: $" + tienCap + "</div>";

    document.getElementById("footerTienCap").innerHTML = result;
}

