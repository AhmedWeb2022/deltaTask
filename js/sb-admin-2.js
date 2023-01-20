(function ($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $(".sidebar .collapse").collapse("hide");
    }
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $(".sidebar .collapse").collapse("hide");
    }

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $(".sidebar .collapse").collapse("hide");
    }
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on("scroll", function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on("click", "a.scroll-to-top", function (e) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    e.preventDefault();
  });
})(jQuery); // End of use strict
const quantity = document.getElementById("quantity");
const inputQuantity = document.getElementById("inputQuantity");
if (quantity) {
  quantity.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      inputQuantity.removeAttribute("disabled");
    } else {
      inputQuantity.setAttribute("disabled");
    }
  });
}

const component = document.getElementById("component");
const inputComponent = document.getElementById("inputComponent");
if (component) {
  component.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      inputComponent.removeAttribute("disabled");
    } else {
      inputComponent.setAttribute("disabled");
    }
  });
}

function table(...td) {
  let tableData = `<tr>
  <td>${td[0]}</td>
  <td>${td[1]}</td>
  <td > 
    <select class='department' style="width: 100%; padding: 5px; color: #888; border: none; outline: none; cursor: pointer">
    <option>${td[2]}</option>
    </select>
  </td>
  <td>${td[3]}</td>
  <td>${td[4]}</td>
  <td>${td[5]}</td>
<td style="display: flex; justify-content: space-around">
  <a href="#"><i class="fas fa-pen" style="color: green"></i></a>
  <a href="#"><i class="fas fa-eye" style="color: blue"></i></a>
  <a href="#"><i class="fas fa-trash" style="color: red"></i></a>
</td>
</tr>`;
  return tableData;
}
function option(data) {
  const option = `<option>${data}</option>`;
  return option;
}
const assets = [
  {
    id: 1,
    name: "asset1",
    department: ["dept1"],
    category: "cat1",
    quality: 2,
    component: 5,
  },
  {
    id: 1,
    name: "asset2",
    department: ["dept1", "dept2"],
    category: "cat1",
    quality: 2,
    component: 5,
  },
  {
    id: 1,
    name: "asset3",
    department: ["dept1", "dept2"],
    category: "cat1",
    quality: 2,
    component: 5,
  },
];

const assetData = document.getElementById("asset-data");

if (assetData) {
  for (let i = 0; i < assets.length; i++) {
    assetData.insertAdjacentHTML("beforeend", table(assets[i].id, assets[i].name, assets[i].department, assets[i].category, assets[i].quality, assets[i].component));
  }
}
