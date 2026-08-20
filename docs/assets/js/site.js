/* Two Hills Lab — theAIFolks.com
   Progressive enhancement only. Every page is fully readable with JS disabled:
   the evidence log renders all rows statically; filters are added here. */
(function () {
  "use strict";

  /* ---------- Evidence log: tier filter chips ---------- */
  var TIERS = [
    ["all", "All"],
    ["p", "Primary"],
    ["r", "Report"],
    ["n", "News"],
    ["v", "Vendor"]
  ];

  document.querySelectorAll("[data-evidence-filter]").forEach(function (filterRow) {
    var section = filterRow.closest("section") || document;
    var tbody = section.querySelector("[data-evidence-rows]");
    var countEl = section.querySelector("[data-evidence-count]");
    if (!tbody) return;

    var rows = Array.prototype.slice.call(tbody.querySelectorAll("tr[data-tier]"));
    var groups = Array.prototype.slice.call(tbody.querySelectorAll("tr.grp"));
    var total = rows.length;

    function apply(tier) {
      var shown = 0;
      rows.forEach(function (tr) {
        var show = tier === "all" || tr.getAttribute("data-tier") === tier;
        tr.hidden = !show;
        if (show) shown++;
      });
      /* hide group headers whose whole group is filtered out */
      groups.forEach(function (grp) {
        var el = grp.nextElementSibling, any = false;
        while (el && !el.classList.contains("grp")) {
          if (!el.hidden) { any = true; break; }
          el = el.nextElementSibling;
        }
        grp.hidden = !any;
      });
      if (countEl) {
        countEl.textContent = tier === "all"
          ? "All " + total + " sources shown."
          : shown + " of " + total + " sources shown (filtered to " +
            filterRow.querySelector('[aria-pressed="true"]').textContent.trim() + " tier).";
      }
    }

    filterRow.hidden = false;
    TIERS.forEach(function (t, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "filter-chip";
      b.textContent = t[1];
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        filterRow.querySelectorAll(".filter-chip").forEach(function (c) {
          c.setAttribute("aria-pressed", "false");
        });
        b.setAttribute("aria-pressed", "true");
        apply(t[0]);
      });
      filterRow.appendChild(b);
    });
  });

  /* ---------- Citation markers: reveal filtered-out target rows ---------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href*="#src-"]');
    if (!a) return;
    var hash = a.getAttribute("href").split("#")[1];
    var row = document.getElementById(hash);
    if (row && row.hidden) {
      /* reset the filter so the linked row is visible */
      var section = row.closest("section");
      var chip = section && section.querySelector('[data-evidence-filter] .filter-chip');
      if (chip) chip.click();
    }
  });

  /* ---------- Unsolved Problems: domain filter ---------- */
  var pFilter = document.querySelector("[data-problems-filter]");
  if (pFilter) {
    var cards = document.querySelectorAll(".problem-card[data-domain]");
    var chips = pFilter.querySelectorAll(".filter-chip:not(.disabled)");

    function applyDomain(domain) {
      cards.forEach(function (card) {
        card.hidden = domain !== "all" && card.getAttribute("data-domain") !== domain;
      });
    }
    chips.forEach(function (btn) {
      btn.addEventListener("click", function () {
        chips.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        applyDomain(btn.getAttribute("data-domain"));
      });
    });
    /* pre-apply filter from URL hash, e.g. problems/#fashion */
    var want = (location.hash || "").replace("#", "");
    if (want) {
      chips.forEach(function (btn) {
        if (btn.getAttribute("data-domain") === want) btn.click();
      });
    }
  }

  /* ---------- Copy-link buttons ---------- */
  document.querySelectorAll("[data-copy-link]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var url = btn.getAttribute("data-copy-link") || location.href;
      function done() {
        var old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = old; }, 1400);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, function () { prompt("Copy link:", url); });
      } else {
        prompt("Copy link:", url);
      }
    });
  });
})();
