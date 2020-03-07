window.onload = () => {
    document.getElementById('list-order-list').style.backgroundColor = '#f2f2f3';
    document.getElementById('list-order-list').style.borderBottomWidth = '3px';
    document.getElementById('list-order-list').style.borderBottomStyle = 'solid';
    document.getElementById('list-order-list').style.borderBottomColor = '#ff8b03';

    const order = document.getElementById('list-order-list');
    order.addEventListener("click", orderChange);

    const current = document.getElementById('list-current-list');
    current.addEventListener("click", currentChange);

    const history = document.getElementById('list-history-list');
    history.addEventListener("click", historyChange);

    function orderChange() {
        order.style.backgroundColor = '#f2f2f3';
        order.style.borderBottomWidth = '3px';
        order.style.borderBottomStyle = 'solid';
        order.style.borderBottomColor = '#ff8b03';

        current.style.borderBottom = 'none';
        current.style.backgroundColor = 'white';
        history.style.borderBottom = 'none';
        history.style.backgroundColor = 'white';
    }


    function currentChange() {
        current.style.backgroundColor = '#f2f2f3';
        current.style.borderBottomWidth = '3px';
        current.style.borderBottomStyle = 'solid';
        current.style.borderBottomColor = '#ff8b03';

        order.style.borderBottom = 'none';
        order.style.backgroundColor = 'white';
        history.style.borderBottom = 'none';
        history.style.backgroundColor = 'white';
    }

    function historyChange() {
        history.style.backgroundColor = '#f2f2f3';
        history.style.borderBottomWidth = '3px';
        history.style.borderBottomStyle = 'solid';
        history.style.borderBottomColor = '#ff8b03';

        order.style.borderBottom = 'none';
        order.style.backgroundColor = 'white';
        current.style.borderBottom = 'none';
        current.style.backgroundColor = 'white';
    }

    // let tune = document.getElementById('tune');
    // tune.addEventListener("click", changeTune);

    // const changeComp = document.getElementById('contentRightSightTune');
    // const changeContentItems = document.getElementById('contentItems');
    // function changeTune() {
        
    // }
}