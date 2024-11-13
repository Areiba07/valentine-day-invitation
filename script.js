let leftPos = 0;
let bottomPos = 0;

document.getElementById('yessir').addEventListener('click', () => {
    alert('Happy Valentine's Day to the love of my life. You make every day special.');
});

document.getElementById('nooo').addEventListener('mouseover', moveButton);
document.getElementById('nooo').addEventListener('click', moveButton);

function moveButton() {
    const button = document.getElementById('nooo');
    const maxLeft = window.innerWidth - button.offsetWidth;
    const maxBottom = window.innerHeight - button.offsetHeight;

    leftPos = Math.random() * maxLeft;
    bottomPos = Math.random() * maxBottom;

    button.style.position = "absolute";
    button.style.left = leftPos + "px";
    button.style.bottom = bottomPos + "px";
}
