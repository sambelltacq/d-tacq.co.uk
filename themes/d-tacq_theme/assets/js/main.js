document.addEventListener("DOMContentLoaded", function (){

    function handleTooltips(){
        const popup = document.createElement("div");
        popup.style.position = "absolute";
        popup.style.background = "rgba(0,0,0,0.8)";
        popup.style.color = "#fff";
        popup.style.padding = "8px";
        popup.style.borderRadius = "4px";
        popup.style.pointerEvents = "none";
        popup.style.zIndex = "1000";
        popup.style.display = "none";
        popup.style.maxWidth = "400px";
        document.body.appendChild(popup);
      
        // Show tooltip on hover
        document.querySelectorAll("tooltip[data-title][data-body]").forEach(el => {
            el.addEventListener("mouseenter", e => {
                popup.innerHTML = `<strong>${el.dataset.title}</strong><br>${el.dataset.body}`;
                popup.style.display = "block";
            });
      
            el.addEventListener("mousemove", e => {
                popup.style.left = e.pageX + 10 + "px";
                popup.style.top = e.pageY + 10 + "px";
            });
      
            el.addEventListener("mouseleave", () => {
                popup.style.display = "none";
            });
        });
    }
    handleTooltips()

    function initLightbox(){
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox.querySelector('img');
        const lightboxCaption = lightbox.querySelector('.caption');

        document.querySelectorAll('.gallery-img').forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.dataset.original;
                lightboxImg.alt = img.alt;
                lightboxCaption.textContent = img.alt;
                lightbox.style.display = 'flex';
            });
        });

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    };
    initLightbox()
});
