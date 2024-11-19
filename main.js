window.onload = function () {
  document.querySelector(".usd input").focus();
};

fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=4d311f0a9c4d47ba895108d0d308145e"
)
  .then((response) => {
    return response.json();
  })
  .then((jsData) => {
    document.querySelector(".usd input").oninput = function () {
      let val = document.querySelector(".usd input").value.replaceAll(",", "");
      document.querySelector(".egp span").textContent = `${(
        jsData.rates.EGP * Number(val)
      ).toFixed(1)}`;
      document.querySelector(".sar span").textContent = `${(
        jsData.rates.SAR * Number(val)
      ).toFixed(1)}`;
      document.querySelector(".eur span").textContent = `${(
        jsData.rates.EUR * Number(val)
      ).toFixed(1)}`;
      document.querySelector(".gbp span").textContent = `${(
        jsData.rates.GBP * Number(val)
      ).toFixed(1)}`;
      document.querySelector(".jpy span").textContent = `${(
        jsData.rates.JPY * Number(val)
      ).toFixed(1)}`;
      document.querySelector(".kpw span").innerHTML = `${(
        jsData.rates.KPW * Number(val)
      ).toFixed(1)}`;
      setTimeout(() => {
        if (
          document.querySelector(".egp span").textContent == "NaN" &&
          document.querySelector(".sar span").textContent == "NaN" &&
          document.querySelector(".eur span").textContent == "NaN" &&
          document.querySelector(".gbp span").textContent == "NaN" &&
          document.querySelector(".jpy span").textContent == "NaN" &&
          document.querySelector(".kpw span").textContent == "NaN"
        ) {
          document.querySelector("form").style.border = "2px solid #f1382a";
          document.querySelector("form .string").style.opacity = "1";
        } else {
          document.querySelector("form").style.border = "2px solid #eee";
          document.querySelector("form .string").style.opacity = "0";
        }
      }, 10);
    };
  });
