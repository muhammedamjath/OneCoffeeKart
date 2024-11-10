document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    $(document).ready(() => {
        $("#formSubmit").submit((e) => {
            e.preventDefault();
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbzGu1rQX-cAim2_Ef3LPPBMWpg2gQ52cVxZfxldJ2DluNmBDujUe9w8mOhcl5Hdq8Vk/exec",
                data: $("#formSubmit").serialize(),
                method: "post",
                success: function (response) {
                    alert("Form submitted successfully");
                    window.location.reload();
                },
                error: function (err) {
                    alert("Something went wrong");
                },
            });
        });
    });
});


window.onload = function() {
    const lat = 11.60588599403685;  
    const lng =  76.0036856796964

    const map = L.map('map').setView([lat, lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup("<b>One Coffee Kart.</b><br>Achooranam , 6th mile").openPopup();
}
