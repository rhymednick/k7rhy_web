import * as React from 'react';

const dl20w_basic = "<div id='product-component-1719949794355'></div><script type=\"text/javascript\">/*<![CDATA[*/(function () {  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'  if (window.ShopifyBuy)     if (window.ShopifyBuy.UI) {      ShopifyBuyInit();    } else {      loadScript();    }  } else {    loadScript();  }  function loadScript() {    var script = document.createElement('script');    script.async = true;    script.src = scriptURL;    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);    script.onload = ShopifyBuyInit;  }  function ShopifyBuyInit() {    var client = ShopifyBuy.buildClient({      domain: 'ca0f39-2e.myshopify.com',      storefrontAccessToken: '3f4647566c77a97a96e5ff4fdcc73097',    });    ShopifyBuy.UI.onReady(client).then(function (ui) {      ui.createComponent('product', {        id: '8242256511133',        node: document.getElementById('product-component-1719949794355'),        moneyFormat: '%24%7B%7Bamount%7D%7D',        options: {  \"product\": {    \"styles\": {      \"product\": {        \"@media (min-width: 601px)\": {          \"max-width\": \"calc(25% - 20px)\",          \"margin-left\": \"20px\",          \"margin-bottom\": \"50px\"        }      }    },    \"buttonDestination\": \"checkout\",    \"contents\": {      \"img\": false,      \"title\": false,      \"price\": false    },    \"text\": {      \"button\": \"Buy now\"    }  },  \"productSet\": {    \"styles\": {      \"products\": {        \"@media (min-width: 601px)\": {          \"margin-left\": \"-20px\"        }      }    }  },  \"modalProduct\": {    \"contents\": {      \"img\": false,      \"imgWithCarousel\": true,      \"button\": false,      \"buttonWithQuantity\": true    },    \"styles\": {      \"product\": {        \"@media (min-width: 601px)\": {          \"max-width\": \"100%\",          \"margin-left\": \"0px\",          \"margin-bottom\": \"0px\"        }      }    },    \"text\": {      \"button\": \"Add to cart\"    }  },  \"option\": {},  \"cart\": {    \"text\": {      \"total\": \"Subtotal\",      \"button\": \"Checkout\"    }  },  \"toggle\": {}},      });    });  }})();/*]]>*/</script>";

export function Shopify({ product='dl20w', format='basic' }) {

    
    return (
        <div className="shopify"> 
            <div id='product-component-1719949794355'></div>
        
 <script type="text/javascript">
{`
(function () {
  var scriptURL = \'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js\';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'ca0f39-2e.myshopify.com',
      storefrontAccessToken: '3f4647566c77a97a96e5ff4fdcc73097',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '8242256511133',
        node: document.getElementById('product-component-1719949794355'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      }
    },
    "buttonDestination": "checkout",
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Buy now"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {}
},
      });
    });
  }
})();
`}
</script>
</div>
    );
}