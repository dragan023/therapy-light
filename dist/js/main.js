var headerDropDownToggler = document.querySelector('.cl-c-header-item__product');
var headerDropDown = document.querySelector('.cl-c-header__dropdown');

headerDropDownToggler.addEventListener('click', function() {
    headerDropDown.classList.toggle('cl-c-header__dropdown-shown');
});