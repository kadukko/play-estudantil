$(window).on('resize', () => {
  const vw = $(this).width();
  const right = 1200 - vw > 0 ? 0 : (1200 - vw) / 2 - 100;

  $("#palestras .background").css("right", right);
});

$(document).ready(() => {
  //Counter
  setInterval(() => {
    const counter = $('#counter');
    const counter2 = $('#counter2');
    const date = new Date('2020-10-05T09:30:00-03:00');
    const now = new Date();
    if (now < date) {
      const diff = date.getTime() - now.getTime();
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      counter.text(`${String(days).padStart(2, '0')} : ${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')}`);
      counter2.text(`${String(days).padStart(2, '0')} : ${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')}`);
    } else {
      counter.text('00 : 00 : 00');
      counter2.text('00 : 00 : 00');
    }
  }, 1000);
})

function showMobileMenu() {
  $('body').addClass('mobile-menu-show');
}

function hideMobileMenu() {
  $('body').removeClass('mobile-menu-show');
}