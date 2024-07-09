(function () {

    const buttonTheme = document.querySelector('.button-theme') as HTMLElement | null;
    if (!buttonTheme) return;

    const body = document.querySelector('body');

    buttonTheme.addEventListener('click', () => {
        buttonTheme.classList.toggle('active');
        body.classList.toggle('second-theme');
    })

}())