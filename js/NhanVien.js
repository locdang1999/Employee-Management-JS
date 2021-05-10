var NhanVien = function () {
    this.maNV = '';
    this.tenNV = '';
    this.chucVu = '';
    this.luongCB = '';
    this.gioLam = '';
    this.heSoLuong = '';
    this.tinhLuong = function () {
        var tongLuong = this.luongCB * this.heSoLuong;
        return tongLuong;
    };
    this.xepLoai = function () {
        if (this.gioLam > 120) {
            return 'Nhân viên xuất sắc';
        } else if (this.gioLam > 100 && this.gioLam <= 120) {
            return 'Nhân viên giỏi';
        } else if (this.gioLam > 80 && this.gioLam <= 100) {
            return 'Nhân viên khá';
        } else if (this.gioLam >= 50 && this.gioLam <= 80) {
            return 'Nhân viên trung bình';
        } else if (this.gioLam > 0 && this.gioLam < 50) {
            return 'Cảnh báo';
        }
    }
}

/**
    "maNhanVien": 0,
    "tenNhanVien": "string",
    "chucVu": "string",
    "heSoChucVu": 0,
    "luongCoBan": 0,
    "soGioLamTrongThang": 0 */