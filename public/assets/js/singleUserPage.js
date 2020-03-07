window.onload = () => {
    document.getElementById('list-profile-list').style.borderBottomWeight = '1px';
    document.getElementById('list-profile-list').style.borderBottomColor = '#FF8B03';
    document.getElementById('list-profile-list').style.borderBottomStyle = 'solid';
    
    const el1 = document.getElementById("list-home-list");
    el1.addEventListener("click", changeListHome);

    const el2 = document.getElementById("list-profile-list");
    el2.addEventListener("click", changeListProfile);

    const el3 = document.getElementById("list-messages-list");
    el3.addEventListener("click", changeListMessages);

    // Change Ispolniteli
    function changeListHome(){
        document.getElementById('list-profile-list').style.borderBottom = 'none';
        document.getElementById('list-messages-list').style.borderBottom = 'none';


        document.getElementById('list-home-list').style.borderBottomWeight = '1px';
        document.getElementById('list-home-list').style.borderBottomColor = '#FF8B03';
        document.getElementById('list-home-list').style.borderBottomStyle = 'solid';
    }

    // Change Moi Zakazy
    function changeListProfile(){
        document.getElementById('list-home-list').style.borderBottom = 'none';
        document.getElementById('list-messages-list').style.borderBottom = 'none';

        
        document.getElementById('list-profile-list').style.borderBottomWeight = '1px';
        document.getElementById('list-profile-list').style.borderBottomColor = '#FF8B03';
        document.getElementById('list-profile-list').style.borderBottomStyle = 'solid';
    }

    // Change Izbrannye
    function changeListMessages(){
        document.getElementById('list-home-list').style.borderBottom = 'none';
        document.getElementById('list-profile-list').style.borderBottom = 'none';

        
        document.getElementById('list-messages-list').style.borderBottomWeight = '1px';
        document.getElementById('list-messages-list').style.borderBottomColor = '#FF8B03';
        document.getElementById('list-messages-list').style.borderBottomStyle = 'solid';
    }
}