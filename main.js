const popup = document.getElementById('popup')
const shareBtn = document.getElementById('share-btn')
const hidePopupBtn = document.getElementById('hide-popup')

shareBtn.addEventListener('click', () => {
  popup.classList.add('show')
})

hidePopupBtn.addEventListener('click', () => {
  popup.classList.remove('show')
})
