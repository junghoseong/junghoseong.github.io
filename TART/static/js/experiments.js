document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.experiments-tabs li').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var tabName = tab.getAttribute('data-tab');
      var block = tab.closest('.experiments-block');
      if (!block || !tabName) {
        return;
      }

      block.querySelectorAll('.experiments-tabs li').forEach(function (item) {
        item.classList.remove('is-active');
      });
      block.querySelectorAll('.experiments-panel').forEach(function (panel) {
        panel.classList.remove('is-active');
      });

      tab.classList.add('is-active');
      var panel = block.querySelector('.experiments-panel[data-tab="' + tabName + '"]');
      if (panel) {
        panel.classList.add('is-active');
      }
    });
  });
});
