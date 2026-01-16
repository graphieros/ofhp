console.log('I knew you would look here.\nThis is just a static website.');

function updateScrollOverlays(scrollElement) {
    const maxScrollTop = scrollElement.scrollHeight - scrollElement.clientHeight;
    scrollElement.classList.toggle("has-scroll-top", scrollElement.scrollTop > 0);
    scrollElement.classList.toggle("has-scroll-bottom", scrollElement.scrollTop < maxScrollTop - 1);
}

const content = document.getElementById("content");
updateScrollOverlays(content);

content.addEventListener("scroll", () => updateScrollOverlays(content), { passive: true });
window.addEventListener("resize", () => updateScrollOverlays(content));
new ResizeObserver(() => updateScrollOverlays(content)).observe(content);
