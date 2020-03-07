window.onload = () => {
    document.getElementById('list-client-list').style.borderBottomWeight = '1px';
    document.getElementById('list-client-list').style.borderBottomColor = '#FF8B03';
    document.getElementById('list-client-list').style.borderBottomStyle = 'solid';
    document.getElementById('list-client-list').style.background = '#f2f2f3';
    
    const el1 = document.getElementById("list-client-list");
    el1.addEventListener("click", changeListClient);

    const el2 = document.getElementById("list-service-list");
    el2.addEventListener("click", changeListService);


    // Change Ispolniteli
    function changeListClient(){
        document.getElementById('list-service-list').style.borderBottom = 'none';
        document.getElementById('list-service-list').style.background = 'none';

        document.getElementById('list-client-list').style.borderBottomWeight = '1px';
        document.getElementById('list-client-list').style.borderBottomColor = '#FF8B03';
        document.getElementById('list-client-list').style.borderBottomStyle = 'solid';
        document.getElementById('list-client-list').style.background = '#f2f2f3';
        
    }

    // Change Moi Zakazy
    function changeListService(){
        document.getElementById('list-client-list').style.borderBottom = 'none';
        document.getElementById('list-client-list').style.background = 'none'
        
        document.getElementById('list-service-list').style.borderBottomWeight = '1px';
        document.getElementById('list-service-list').style.borderBottomColor = '#FF8B03';
        document.getElementById('list-service-list').style.borderBottomStyle = 'solid';
        document.getElementById('list-service-list').style.background = '#f2f2f3';
    }

}