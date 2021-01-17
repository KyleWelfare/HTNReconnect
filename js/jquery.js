$("#age-range-slider").ionRangeSlider({
  min: 0,
  max: 60,
  from: 0,
  to: 25,
  type: "double",
  max_postfix: "+",
  postfix: " years",
  skin: "flat",
});

$("#cost-range-slider").ionRangeSlider({
  min: 0,
  max: 100,
  from: 8,
  to: 25,
  type: "double",
  max_postfix: "+",
  prefix: "$",
  skin: "flat",
});
