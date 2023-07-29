const popup = document.getElementById('popup')
const shareBtn = document.getElementById('share-btn')
const hidePopupBtn = document.getElementById('hide-popup')

shareBtn.addEventListener('click', () => {
  popup.classList.toggle('show')
  shareBtn.classList.toggle('active')
})

hidePopupBtn.addEventListener('click', () => {
  popup.classList.remove('show')
  shareBtn.classList.remove('active')
})
