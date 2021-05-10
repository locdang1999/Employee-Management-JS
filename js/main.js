var validate = new Validation();
var mangNhanVien = [];
document.querySelector('#btn-Them').onclick = function () {
    // Tạo mới đối tượng nhân viên 
    var nv = new NhanVien();
    // Dom lấy giá trị của các thẻ thuộc tính
    nv.maNV = document.querySelector('#maNV').value;
    nv.tenNV = document.querySelector('#tenNV').value;
    nv.chucVu = document.querySelector('#chucVu').value;
    nv.luongCB = document.querySelector('#luongCB').value;
    nv.gioLam = document.querySelector('#gioLam').value;
    nv.heSoLuong = document.querySelector('#chucVu').value;

    // Lấy giá trị
    var mangChucVu = document.querySelector('#chucVu').options;
    var viTriCV = document.querySelector('#chucVu').selectedIndex;
    nv.chucVu = mangChucVu[viTriCV].innerHTML;
    // console.log(nv);
    var doDaiChuoi = nv.maNV.length;
    // console.log(doDaiChuoi);

    // Kiểm tra lỗi
    var valid = true;
    valid &= validate.kiemTraRong(nv.maNV, 'Mã nhân viên', '#ktRong-maNV')
        & validate.kiemTraRong(nv.tenNV, 'Tên nhân viên', '#ktRong-tenNV')
        & validate.kiemTraRong(nv.luongCB, 'Lương cơ bản', '#ktRong-luongCB')
        & validate.kiemTraRong(nv.gioLam, 'Số giờ làm', '#ktRong-gioLam');
    valid &= validate.kiemTraDoDai(doDaiChuoi, 'Mã nhân viên', '#ktDoDai-maNV');
    valid &= validate.kiemTraSo(nv.maNV, 'Mã nhân viên', '#ktSo-maNV');
    valid &= validate.kiemTraChu(nv.tenNV, 'Tên nhân viên', '#ktChu-tenNV');
    valid &= validate.kiemtraLuong(nv.luongCB, 'Lương cơ bản', '#ktLuong-luongCB');
    valid &= validate.kiemtraGioLam(nv.gioLam, 'Giờ làm', '#ktGioLam-gioLam');


    // Lưu nhân viên vào localstorage
    // if (valid) {
    //     mangNhanVien.push(nv);
    //     rederTableNhanVien(mangNhanVien);
    //     luuDuLieuLocalStorage();
    // }
    if (!valid) {
        return;
    }
    mangNhanVien.push(nv);
    rederTableNhanVien(mangNhanVien);
    luuDuLieuLocalStorage();
}

var rederTableNhanVien = function (arrNV) {
    var noiDungTable = '';
    for (var i = 0; i < arrNV.length; i++) {
        // Gán các giá trị nhân viên vào mảng
        var nv = new NhanVien();
        nv.maNV = arrNV[i].maNV;
        nv.tenNV = arrNV[i].tenNV;
        nv.chucVu = arrNV[i].chucVu;
        nv.luongCB = arrNV[i].luongCB;
        nv.gioLam = arrNV[i].gioLam;
        nv.heSoLuong = arrNV[i].heSoLuong;

        // console.log(nv);
        noiDungTable += `
            <tr>
                <td>${nv.maNV}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.luongCB}</td>
                <td>${nv.tinhLuong()}</td>
                <td>${nv.gioLam}</td>
                <td>${nv.xepLoai()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNV}')">Xóa</button>
                    <button class="btn btn-primary" onclick="chinhSua('${nv.maNV}')">Chỉnh sửa</button>
                </td>
            </tr>
        `
    }
    document.querySelector('#table-NhanVien').innerHTML = noiDungTable;
}

// Hàm xóa
var xoaNhanVien = function (maNV) {
    for (var i = mangNhanVien.length - 1; i >= 0; i--) {
        var nv = mangNhanVien[i];
        if (nv.maNV === maNV) {
            mangNhanVien.splice(i, 1);
        }
    }
    rederTableNhanVien(mangNhanVien);
    luuDuLieuLocalStorage();
}

// Hàm chỉnh sửa
var chinhSua = function (maNV) {
    document.querySelector('#maNV').disabled = true;
    document.querySelector('#btn-Luu').style = 'opacity:1';
    document.querySelector('#btn-Them').style = 'opacity:0';

    for (var i = 0; i < mangNhanVien.length; i++) {
        var nv = mangNhanVien[i];
        if (nv.maNV === maNV) {
            document.querySelector('#maNV').value = nv.maNV;
            document.querySelector('#tenNV').value = nv.tenNV;
            document.querySelector('#chucVu').value = nv.heSoLuong;
            document.querySelector('#luongCB').value = nv.luongCB;
            document.querySelector('#gioLam').value = nv.gioLam;
        }
    }
}

document.querySelector('#btn-Luu').onclick = function () {

    var nv = new NhanVien();
    nv.maNV = document.querySelector('#maNV').value;
    nv.tenNV = document.querySelector('#tenNV').value;
    nv.chucVu = document.querySelector('#chucVu').value;
    nv.luongCB = document.querySelector('#luongCB').value;
    nv.gioLam = document.querySelector('#gioLam').value;
    nv.heSoLuong = document.querySelector('#chucVu').value;

    var mangChucVu = document.querySelector('#chucVu').options;
    var viTriCV = document.querySelector('#chucVu').selectedIndex;
    nv.chucVu = mangChucVu[viTriCV].innerHTML;

    for (var i = 0; i < mangNhanVien.length; i++) {
        var nvUpdate = mangNhanVien[i];
        if (nvUpdate.maNV === nv.maNV) {
            nvUpdate.tenNV = nv.tenNV;
            nvUpdate.chucVu = nv.chucVu;
            nvUpdate.luongCB = nv.luongCB;
            nvUpdate.gioLam = nv.gioLam;
            nvUpdate.heSoLuong = nv.heSoLuong;
            var doDaiChuoi = nv.maNV.length;
            var valid = true;
            valid &= validate.kiemTraRong(nv.maNV, 'Mã nhân viên', '#ktRong-maNV')
                & validate.kiemTraRong(nv.tenNV, 'Tên nhân viên', '#ktRong-tenNV')
                & validate.kiemTraRong(nv.luongCB, 'Lương cơ bản', '#ktRong-luongCB')
                & validate.kiemTraRong(nv.gioLam, 'Số giờ làm', '#ktRong-gioLam');
            valid &= validate.kiemTraDoDai(doDaiChuoi, 'Mã nhân viên', '#ktDoDai-maNV');
            valid &= validate.kiemTraSo(nv.maNV, 'Mã nhân viên', '#ktSo-maNV');
            valid &= validate.kiemTraChu(nv.tenNV, 'Tên nhân viên', '#ktChu-tenNV');
            valid &= validate.kiemtraLuong(nv.luongCB, 'Lương cơ bản', '#ktLuong-luongCB');
            valid &= validate.kiemtraGioLam(nv.gioLam, 'Giờ làm', '#ktGioLam-gioLam');
            if (!valid) {
                return;
            }
            luuDuLieuLocalStorage();
            document.querySelector('#maNV').disabled = false;
            document.querySelector('#btn-Luu').style = 'opacity:0';
            document.querySelector('#btn-Them').style = 'opacity:1';
            rederTableNhanVien(mangNhanVien);
        }
    }
}

// Lưu dữ liệu vào localStorage
var luuDuLieuLocalStorage = function () {
    var sMangNV = JSON.stringify(mangNhanVien);
    localStorage.setItem('mangNhanVien', sMangNV);
}

// Lấy dữ liệu cho LocalStorage
var layDuLieuLocalStorage = function () {
    if (localStorage.getItem('mangNhanVien')) {
        var sMangNV = localStorage.getItem('mangNhanVien');
        mangNhanVien = JSON.parse(sMangNV);
        rederTableNhanVien(mangNhanVien);
    }
}

layDuLieuLocalStorage();