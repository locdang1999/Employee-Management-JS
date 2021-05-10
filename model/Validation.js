var Validation = function () {
    this.kiemTraRong = function (value, name, selectorError) {
        if (value.trim() === '') {
            document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống!';
            document.querySelector(selectorError).className = 'alert alert-danger';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).className = '';
        return true;
    }
    this.kiemTraDoDai = function (value, name, selectorError) {
        if (value < 4 && value != '' || value > 6 && value != '') {
            document.querySelector(selectorError).innerHTML = name + ' tối đa từ 4-6 ký tự số';
            document.querySelector(selectorError).className = 'alert alert-danger';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).className = '';
        return true;
    }
    this.kiemTraSo = function (value, name, selectorError) {
        var regexNamber = /^[0-9]+$/;
        if (!regexNamber.test(value) && value != '') {
            document.querySelector(selectorError).innerHTML = name + ' phải là ký tự số';
            document.querySelector(selectorError).className = 'alert alert-danger';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).className = '';
        return true;
    }

    this.kiemTraChu = function (value, name, selectorError) {
        var regexLetter = /^[a-z A-Z]+$/;
        if (!regexLetter.test(value) && value != '') {
            document.querySelector(selectorError).innerHTML = name + ' phải là ký tự chữ!';
            document.querySelector(selectorError).className = 'alert alert-danger';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).className = '';
        return true;
    }
    this.kiemtraLuong = function (value, name, selectorError) {
        var luongCBNN = 1000000;
        var luongCBLN = 20000000;
        if (value < luongCBNN && value !='' || value > luongCBLN && value !='') {
            document.querySelector(selectorError).innerHTML = name + ' phải từ 1000000-20000000!';
            document.querySelector(selectorError).className = 'alert alert-danger';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).className = '';
        return true;
    }
    this.kiemtraGioLam = function (value, name, selectorError) {
        var gioLamNN = 50;
        var gioLamLN = 150;
        if (value < gioLamNN && value !='' || value > gioLamLN && value !='') {
            document.querySelector(selectorError).innerHTML = name + ' phải từ 50-150 giờ!';
            document.querySelector(selectorError).className = 'alert alert-danger';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).className = '';
        return true;
    }
}