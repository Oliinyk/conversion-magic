// Tab
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent =document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btn = el.currentTarget;
  var tab = btn.dataset.tab;

  tabContent.forEach(function(el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function(el) {
    el.classList.remove("active");
  });

  document.querySelector("#" + tab).classList.add("active");
  btn.classList.add("active");
}


//tab 2
var resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    tabControl();
  }, 250);
});

function tabControl() {
  var tabs = document.querySelector('.tabbed-content .tabs');
  
  if (tabs && window.getComputedStyle(tabs).display !== 'none') {
    tabs.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var target = this.getAttribute('href'),
            buttons = tabs.querySelectorAll('a'),
            items = document.querySelectorAll('.tabbed-content .item');
        
        buttons.forEach(function(button) {
          button.classList.remove('active');
        });
        items.forEach(function(item) {
          item.classList.remove('active');
        });
        
        this.classList.add('active');
        document.querySelector(target).classList.add('active');
      });
    });
  } else {
    document.querySelectorAll('.item').forEach(function(item) {
      item.addEventListener('click', function() {
        var container = this.closest('.tabbed-content'),
            currId = this.getAttribute('id'),
            items = container.querySelectorAll('.item'),
            links = container.querySelectorAll('.tabs a');
        
        links.forEach(function(link) {
          link.classList.remove('active');
        });
        items.forEach(function(item) {
          item.classList.remove('active');
        });
        
        this.classList.add('active');
        container.querySelector('.tabs a[href="#' + currId + '"]').classList.add('active');
      });
    });
  }
}

tabControl();