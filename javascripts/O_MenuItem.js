$(function() {
  $(".A_MenuItemButtom").click(function(e) {
    e.preventDefault()

  let container = $(e.target).closest(".O_MenuItem");

  let subItems = container.find(".A_SubMenuItem");

  let item = subItems[0];
  let height = 0;


  if (item) {
    let itemHeight = $(item).height()
    height = subItems.length * itemHeight
  };


  if (container.hasClass("active")) {
    container.removeClass("active")

    $(".M_SubMenu").height(0);
  } else {
    $(".O_MenuItem").removeClass("active");
    $(".M_SubMenu").height(0);

    container.addClass("active");

    container.find(".M_SubMenu").height(height);
    }
  });
});
