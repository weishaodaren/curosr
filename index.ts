const cursor = document.querySelector('.cursor') as HTMLElement;


window.onmousemove = (event: MouseEvent) => {
  const { movementX, movementY, clientX, clientY } = event;

  const rotate = Math.abs(movementX) + Math.abs(movementY) > 3 // 光标滑动阈值
    ? Math.atan2(movementX, -movementY) // Y轴相反
    : 0;
  
  cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) rotate(${rotate}rad)`;
}
