const download = document.getElementById('projects');

download.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'download/CV_ArtemHazhevalov.pdf';
    link.download = 'CV_ArtemHazhevalov.pdf';
    link.click();
});