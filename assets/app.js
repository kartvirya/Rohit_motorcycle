(function () {
  var s = window.SHOP, q = function (sel) { return document.querySelectorAll(sel); };
  q("[data-shop]").forEach(function (e) { e.textContent = s[e.dataset.shop]; });
  var msg = encodeURIComponent("Hello " + s.name + ", I'd like to book a bike service.");
  q("[data-wa]").forEach(function (e) {
    e.href = "https://wa.me/" + s.whatsapp + "?text=" + msg;
    e.target = "_blank"; e.rel = "noopener";
  });
  q("[data-call]").forEach(function (e) {
    e.href = "tel:" + s.phone.replace(/[^\d+]/g, "");
    if (!e.textContent.trim()) e.textContent = s.phone;
  });
  q("[data-maps]").forEach(function (e) { e.href = s.mapsLink; });
  var m = document.getElementById("map");
  if (s.mapsEmbed) m.innerHTML = '<iframe src="' + s.mapsEmbed + '" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>';
  else m.remove();
  document.getElementById("yr").textContent = new Date().getFullYear();
})();
