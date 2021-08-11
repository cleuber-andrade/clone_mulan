function toggleVideo(){ 
    const trailer = document.querySelector('.trailer');
    const video = document.querySelectorAll('video');

    trailer.classList.toggle('active');
    video.currentTime = 0;    
}