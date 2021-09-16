const clock = document.querySelector("h2#clock");

function getClock()
{
    const data = new Date(); // Date object
    const hours = String(data.getHours()).padStart(2, "0");
    const minutes = String(data.getMinutes()).padStart(2, "0");
    const seconds = String(data.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 새로 고침 시, html에서 표시한 초기 값인 00:00이 출력되지 않도록 한번 수행.
setInterval(getClock, 1000);