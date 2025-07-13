document.addEventListener('DOMContentLoaded', () => {
    const yuanfanLink = document.querySelector('.flink-list-item a[title="yuanfan"] .flink-item-icon');
    if (yuanfanLink) {
        ['heart-1', 'heart-2', 'heart-3'].forEach(className => {
            const heart = document.createElement('span');
            heart.className = className;
            yuanfanLink.appendChild(heart);
        });
    }
});