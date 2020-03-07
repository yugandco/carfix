window.onload = () => {
    // NEW ORDER SECTION
    document.getElementById('mycar-select').style.display = "block";
    document.getElementById('car-select').style.display = "none";

    const cartab = document.getElementById('car');
    cartab.addEventListener("click", carSelect);

    const mycartab = document.getElementById('mycar');
    mycartab.addEventListener("click", mycarSelect);

    function mycarSelect() {
        document.getElementById('mycar-select').style.display = 'block';
        document.getElementById('car-select').style.display = 'none';
    }
    function carSelect() {
        document.getElementById('mycar-select').style.display = 'none';
        document.getElementById('car-select').style.display = 'block';
    }
}