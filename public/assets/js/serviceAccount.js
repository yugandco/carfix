window.onload = () => {
    document.getElementById('serviceName').setAttribute('disabled', 'disabled');
    document.getElementById('bin_iin').setAttribute('disabled', 'disabled');
    document.getElementById('serviceCategory').setAttribute('disabled', 'disabled');
    document.getElementById('city').setAttribute('disabled', 'disabled');
    document.getElementById('address').setAttribute('disabled', 'disabled');
    document.getElementById('phoneNumber').setAttribute('disabled', 'disabled');

    const btnChange = document.getElementById('btnChange');
    btnChange.addEventListener("click", changeInput);

    function changeInput() {
        document.getElementById('serviceName').removeAttribute('disabled');
        document.getElementById('bin_iin').removeAttribute('disabled');
        document.getElementById('serviceCategory').removeAttribute('disabled');
        document.getElementById('city').removeAttribute('disabled');
        document.getElementById('address').removeAttribute('disabled');
        document.getElementById('phoneNumber').removeAttribute('disabled');

    }
}