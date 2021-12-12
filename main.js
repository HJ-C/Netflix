const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// 탭 Select
function selectItem(e) {
    removeBorder()
    removeShow()
    this.classList.add('tab-border')
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
    
}

// tab 아랫선 삭제
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// 모든 tap 제거
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}


// 탭클릭시 화면변경
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
