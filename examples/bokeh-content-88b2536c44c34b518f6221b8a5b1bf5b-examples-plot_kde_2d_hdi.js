(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("291535eb-13f2-4607-a35e-765bf00fbdcc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '291535eb-13f2-4607-a35e-765bf00fbdcc' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"9844fd9f-ebbd-4f6a-98dc-8c2bd4302b68":{"defs":[],"roots":{"references":[{"attributes":{},"id":"24033","type":"AllLabels"},{"attributes":{"overlay":{"id":"23997"}},"id":"23991","type":"BoxZoomTool"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"24015","type":"Patch"},{"attributes":{},"id":"23973","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[534]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[534]}},"selected":{"id":"24035"},"selection_policy":{"id":"24034"}},"id":"24008","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"24010","type":"Patch"},{"attributes":{},"id":"23977","type":"LinearScale"},{"attributes":{},"id":"23975","type":"DataRange1d"},{"attributes":{"callback":null},"id":"23996","type":"HoverTool"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"24021","type":"Patch"},{"attributes":{},"id":"23986","type":"BasicTicker"},{"attributes":{"children":[{"id":"24045"},{"id":"24043"}]},"id":"24046","type":"Column"},{"attributes":{},"id":"23979","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[318]},"y":{"__ndarray__":"eebk/Smb7j84KlD4o13wPzLhrfGybfE/LJgL68F98j8mT2nk0I3zPyAGx93fnfQ/Gr0k1+6t9T8UdILQ/b32P6IuABcoWPc/DivgyQzO9z8I4j3DG974PwKZm7wq7vk//E/5tTn++j/2BlevSA78P/C9tKhXHv0/6HQSomYu/j8i/OFDW9D+P+QrcJt1Pv8/bvFmSkInAEDg5aVEDJwAQOzMFcdJrwBAaqjEQ1E3AUDmg3PAWL8BQAA+wGTc6gFAZF8iPWBHAkDhOtG5Z88CQE74t6CD4gJAXhaANm9XA0D9/s+AvMUDQNrxLrN23wNAWM3dL35nBEC2u4R1N54EQNSojKyF7wRAA6pOGzZcBUBShDspjXcFQE9nKu7P9QVAzl/qpZT/BUDwAEE5L30GQEw7mSKchwZAOPRBMUAHB0DIFkifow8HQEby9hurlwdA3qNO2QuiB0DCzaWYsh8IQGepjYssQwhAQKlUFbqnCEBqmV5EQM8IQLyEA5LBLwlAJcoLlAZFCUDXqWscXrMJQDpgsg7JtwlAfXPhpQ4rCkC2O2GL0D8KQLBVg9WrmgpANBcQCNjHCkAw1DZIjvoKQLHyvoTfTwtA0QG9ywZXC0CxSsjdFLULQC7ObQHn1wtAWZLN0GsRDECqqRx+7l8MQKy7DSTtagxAsPqWocLCDEAohcv69ecMQL5ytujtDw1A+C6eQP9PDUClYHp3/W8NQNeeVevGiQ1ACs//LpLCDUBSR2fWDvYNQCI8KfQE+A1A0L23oesdDkDlfoxM8jQOQCZT9Wo9Qg5AjSsl/CtXDkD4y81FAnMOQJ4X2HAMgA5A6H3pgYOIDkDhv0zgcZAOQKQthbIxjw5AFXqL+yKRDkA0NwkFj5AOQJ4X2HAMgA5A0gZA5pB7DkD19cMl6F8OQEgvwGSuTw5AbqPC6lozDkAoW5V+3wIOQCI8KfQE+A1AfIaGX4S7DUCkYHp3/W8NQBN7Uo4oQQ1AKIXL+vXnDEChRPZIScsMQKqpHH7uXwxAGGwXsUlXDEAuzm0B59cLQPbOh2c2fwtAsfK+hN9PC0A0FxAI2McKQKA12fWGcwpAtjthi9A/CkA6YLIOybcJQLyEA5LBLwlAkhnfmcYnCUA/qVQVuqcIQMLNpZiyHwhARvL2G6uXB0DIFkifow8HQEw7mSKchwZAzl/qpZT/BUBShDspjXcFQNSojKyF7wRAWM3dL35nBEDa8S6zdt8DQOuibwpY0gNAXhaANm9XA0DgOtG5Z88CQGRfIj1gRwJAbM+rG6bSAUDmg3PAWL8BQGqoxENRNwFA7MwVx0mvAECOdI38cZoAQG7xZkpCJwBA5Ctwm3U+/z9ET2i6U23+P+h0EqJmLv4/8L20qFce/T/eof3pMGP8P/YGV69IDvw//E/5tTn++j/XE1qt9GP6PwKZm7wq7vk/B+I9wxve+D+DP8B6/b74Pw4r4MkMzvc/03nra+Zu9z8UdILQ/b32P2RTM874KPY/Gr0k1+6t9T8PLXb0HrL0PyAGx93fnfQ/Jk9p5NCN8z8JphJXNz/zPyyYC+vBffI/xaYRb4gG8j8y4a3xsm3xP7eN9ogb6fA/OCpQ+KNd8D/0kmBO27HvP3jm5P0pm+4/Is7J22Gm7T+EeCkLDHvsPyZ3pMXs0+s/kApuGO5a6j9JX2Jfg0vqP+4i4EVBzeg/nJyyJdA66D8f/Ei4SCrnP6gu9zKyGuY/EC1ZrjKD5T9pOnX9AgvkP7TAO0CU+uM/qBcHDEyV4j/AUoBNdtrhP4uXTzxnKuE/Dee8GubD3z+YyYm1sHTfP+xdbIOkjd0/4a1D+rGn2z+w7RLQdDTbPwRMyEHfxNk/N9vHdaT71z/IEZzqOPTWP8G5hnV4QdY/uHXzpyyP1D8lW2KlzinTP+A1JQX9s9I/EFbQ017y0T8gic8hmyTRP3WU5IRg69A//4HxIP2l0D+xkTH3RyPQP+y7WwUbBc8/XJL3hrmZzT90o4lRi//MP+sQ9GTN/80/3nwkYS8rzz/GYvbvg23QP1fpNhasENI/4DUlBf2z0j/4zpsSqdTTPz6aV4Q6xNU/yBGc6jj01j/mQ4mzUtTYP7DtEtB0NNs/dtnqh4Ze3D+CtjoT+23fP5jJibWwdN8/wFKATXba4T/cYXamDRriP7TAO0CU+uM/UbCwn73j5D+oLvcyshrmP5ycsiXQOug/LtzC97xH6D+QCm4Y7lrqP4R4KQsMe+w/ZxEw6Bt77j955uT9KZvuP3K0wDJ9Efk/COI9wxve+D8OK+DJDM73PxR0gtD9vfY/Gr0k1+6t9T9a4u0nYhD1PyAGx93fnfQ/4vylZQfN8z8mT2nk0I3zP0xHHzxWB/M/wlY3Bm2Q8j8smAvrwX3yPyybh+1nWPI/1eVqXX9A8j8YiouSUjzyP/igsKJ3RPI/Z+XAaQBg8j8smAvrwX3yP3nueoewmPI/2OXnWKPk8j9MGzhz0D/zPyZPaeTQjfM/WpkPaJ698z9Mlf3q3Fr0PyAGx93fnfQ//bP1hxMN9T8avSTX7q31P69QkNR/z/U/B+aqJBCj9j8UdILQ/b32P0KBMGfei/c/DivgyQzO9z/ELn7VFYr4PwjiPcMb3vg/D4web9in+T8CmZu8Ku75P3TKEpw9+fo//E/5tTn++j/2BlevSA78P7gCeVPLVPw/8L20qFce/T+a8UKbEuv9P+h0EqJmLv4/5Stwm3U+/z9u8WZKQicAQK8E2LzuMgBA7MwVx0mvAEBqqMRDUTcBQJuMzhLcnwFA5oNzwFi/AUBkXyI9YEcCQOA60blnzwJAXhaANm9XA0Da8S6zdt8DQFjN3S9+ZwRA1KiMrIXvBED41/70HkEFQFKEOymNdwVAzl/qpZT/BUCoXgHX1hkGQEw7mSKchwZAzYh46OHBBkDIFkifow8HQKm/6/8uHwdAmDg0QZ5MB0DrgTtm+W0HQHrJ4zxXhAdA7xfKktSCB0B4MKKeO28HQF6k3+GmUgdA7gv5vWcrB0DIFkifow8HQOemz/L2+AZAaDkRkai/BkBMO5kinIcGQJnyXeGFgAZA4UXaNv44BkDOX+qllP8FQCY5D2lK3AVAUoQ7KY13BUDqMxKJnHEFQPELBoZvAQVA1KiMrIXvBEB9pOHE1o0EQFjN3S9+ZwRAGMgLSm4PBEDa8S6zdt8DQK8taKGtfgNAXhaANm9XA0DgOtG5Z88CQDMZJKKFzQJAZF8iPWBHAkAQXXskb/wBQOaDc8BYvwFAaqjEQ1E3AUAdeDkeyx8BQOzMFcdJrwBAbvFmSkInAEDkK3CbdT7/P+d0EqJmLv4/8b20qFce/T+6lW/nfsD8P/YGV69IDvw//E/5tTn++j8CmZu8Ku75P3K0wDJ9Efk/","dtype":"float64","order":"little","shape":[318]}},"selected":{"id":"24037"},"selection_policy":{"id":"24036"}},"id":"24014","type":"ColumnDataSource"},{"attributes":{},"id":"23982","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"b3Y3azWm8D8nGjHNd4TwP8QQBisll/A/AobOdRHH8D8FO/EBK9/wPyJRzEyBOvE/tfezvNiW8T88kAYExAXyPyq2W57KpfI/dJo+knZE8z/skg2s8mTzPzkNVMEnK/Q/sKR2ICmD9D/+kzi8mfP0P+yurq7bwfU/LQVIJQnF9T8FH/v1dbX2PyS55jyOAPc/0lM19gXS9z9gwx7LQD/4P/XGW/UBGvk/mM1WWfN9+T9DHyPshoj6P9TXjuelvPo/DOLGdVj7+z+iAfT0kgv8P0js/gMLOv0/roMd76qt/T+A9jaSvXj+P7wAbyBwt/8/kKf4jDzd/z96hVNXEXsAQJiKb55qGgFAzDEkTBtiAUC2j4vlw7kBQNKUpywdWQJA8JnDc3b4AkAMn9+6z5cDQCqk+wEpNwRARqkXSYLWBEBkrjOQ23UFQH+zT9c0FQZAeKLcj2E2BkCeuGsejrQGQAqfZUZA8gZAu72HZedTB0CArQuG6WsHQOPto7660gdA2MKjrEDzB0ASqKhkwyMIQOwedufwWghA+l6S/Bl2CEBio/IxeHMIQBPRLaaBVwhAEeirxysvCEB3nWCQWf8HQNjCo6xA8wdAiElOZH3NB0BzO8LwdZEHQLq9h2XnUwdAkGWcI0tOB0AQpUsRRRAHQIOjP/wtywZAnrhrHo60BkDgx5gwdG0GQICzT9c0FQZALbk3C7r0BUASgItaGXgFQGWuM5DbdQVAFjggrNP5BEBGqRdJgtYEQGaVx/Q6aQRAKqT7ASk3BEA6ZuILC8QDQAyf37rPlwNA5VKQ4usLA0DwmcNzdvgCQNKUpywdWQJA7QQK91Y9AkC2j4vlw7kBQBjM689YVAFAmIpvnmoaAUB6hVNXEXsAQOwdpYRSPgBAvABvIHC3/z+A9jaSvXj+P0js/gMLOv0/4qQGJhqj/D8M4sZ1WPv7P9TXjuelvPo/mM1WWfN9+T9gwx7LQD/4PyS55jyOAPc/sfrq0NYj9j/srq6u28H1P7CkdiApg/Q/PKDid8+l8z90mj6SdkTzP/TPRd/9WfI/PJAGBMQF8j/jJ8WYKqPxPy2DkLrVK/E/h4tXJ3vw8D/IbbFNec7wPwKGznURx/A/b3Y3azWm8D8=","dtype":"float64","order":"little","shape":[106]},"y":{"__ndarray__":"ApmbvCru+T/8T/m1Of76P/UGV69IDvw/upVv537A/D/wvbSoVx79P+h0EqJmLv4/5Ctwm3U+/z9u8WZKQicAQOzMFcdJrwBAHXg5HssfAUBqqMRDUTcBQOaDc8BYvwFAEF17JG/8AUBkXyI9YEcCQDMZJKKFzQJA4DrRuWfPAkBeFoA2b1cDQK8taKGtfgNA2vEus3bfA0AYyAtKbg8EQFjN3S9+ZwRAfaThxNaNBEDUqIyshe8EQPELBoZvAQVA6jMSiZxxBUBShDspjXcFQCU5D2lK3AVAzl/qpZT/BUDhRdo2/jgGQJnyXeGFgAZATDuZIpyHBkBoORGRqL8GQOemz/L2+AZAyBZIn6MPB0DtC/m9ZysHQF2k3+GmUgdAeDCinjtvB0DvF8qS1IIHQHrJ4zxXhAdA64E7ZvltB0CYODRBnkwHQKm/6/8uHwdAyBZIn6MPB0DNiHjo4cEGQEw7mSKchwZAqF4B19YZBkDOX+qllP8FQFKEOymNdwVA99f+9B5BBUDUqIyshe8EQFjN3S9+ZwRA2vEus3bfA0BeFoA2b1cDQOA60blnzwJAZF8iPWBHAkDmg3PAWL8BQJuMzhLcnwFAaqjEQ1E3AUDszBXHSa8AQK8E2LzuMgBAbvFmSkInAEDkK3CbdT7/P+h0EqJmLv4/m/FCmxLr/T/wvbSoVx79P7cCeVPLVPw/9gZXr0gO/D/8T/m1Of76P3TKEpw9+fo/ApmbvCru+T8QjB5v2Kf5PwjiPcMb3vg/xC5+1RWK+D8OK+DJDM73P0KBMGfei/c/FHSC0P299j8H5qokEKP2P7BQkNR/z/U/Gr0k1+6t9T/8s/WHEw31PyAGx93fnfQ/TJX96txa9D9bmQ9onr3zPyZPaeTQjfM/TBs4c9A/8z/Y5edYo+TyP3nueoewmPI/LJgL68F98j9n5cBpAGDyP/igsKJ3RPI/GIqLklI88j/V5Wpdf0DyPyybh+1nWPI/LJgL68F98j/CVjcGbZDyP0xHHzxWB/M/Jk9p5NCN8z/i/KVlB83zPyAGx93fnfQ/WuLtJ2IQ9T8avSTX7q31PxR0gtD9vfY/DivgyQzO9z8I4j3DG974P3O0wDJ9Efk/ApmbvCru+T8=","dtype":"float64","order":"little","shape":[106]}},"selected":{"id":"24039"},"selection_policy":{"id":"24038"}},"id":"24020","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"23998"}},"id":"23993","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"24016","type":"Patch"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23998","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23997","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"formatter":{"id":"24032"},"group":null,"major_label_policy":{"id":"24033"},"ticker":{"id":"23982"}},"id":"23981","type":"LinearAxis"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"24009","type":"Patch"},{"attributes":{},"id":"23990","type":"PanTool"},{"attributes":{"coordinates":null,"formatter":{"id":"24029"},"group":null,"major_label_policy":{"id":"24030"},"ticker":{"id":"23986"}},"id":"23985","type":"LinearAxis"},{"attributes":{},"id":"23994","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"23999"}],"tools":[{"id":"23989"},{"id":"23990"},{"id":"23991"},{"id":"23992"},{"id":"23993"},{"id":"23994"},{"id":"23995"},{"id":"23996"}]},"id":"24044","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"23981"}],"center":[{"id":"23984"},{"id":"23988"}],"height":500,"left":[{"id":"23985"}],"output_backend":"webgl","renderers":[{"id":"24012"},{"id":"24018"},{"id":"24024"}],"title":{"id":"24026"},"toolbar":{"id":"23999"},"toolbar_location":null,"width":500,"x_range":{"id":"23973"},"x_scale":{"id":"23977"},"y_range":{"id":"23975"},"y_scale":{"id":"23979"}},"id":"23972","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23992","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null},"id":"24026","type":"Title"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"24017","type":"Patch"},{"attributes":{"axis":{"id":"23981"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23984","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"24022","type":"Patch"},{"attributes":{},"id":"24037","type":"Selection"},{"attributes":{},"id":"24038","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"24023","type":"Patch"},{"attributes":{},"id":"24032","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"23972"},0,0]]},"id":"24043","type":"GridBox"},{"attributes":{},"id":"24036","type":"UnionRenderers"},{"attributes":{},"id":"24029","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"23985"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23988","type":"Grid"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"24011","type":"Patch"},{"attributes":{},"id":"24034","type":"UnionRenderers"},{"attributes":{},"id":"23989","type":"ResetTool"},{"attributes":{},"id":"24035","type":"Selection"},{"attributes":{"source":{"id":"24008"}},"id":"24013","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"24008"},"glyph":{"id":"24009"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24011"},"nonselection_glyph":{"id":"24010"},"view":{"id":"24013"}},"id":"24012","type":"GlyphRenderer"},{"attributes":{},"id":"24039","type":"Selection"},{"attributes":{"tools":[{"id":"23989"},{"id":"23990"},{"id":"23991"},{"id":"23992"},{"id":"23993"},{"id":"23994"},{"id":"23995"},{"id":"23996"}]},"id":"23999","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"24020"},"glyph":{"id":"24021"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24023"},"nonselection_glyph":{"id":"24022"},"view":{"id":"24025"}},"id":"24024","type":"GlyphRenderer"},{"attributes":{},"id":"24030","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"24014"},"glyph":{"id":"24015"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"24017"},"nonselection_glyph":{"id":"24016"},"view":{"id":"24019"}},"id":"24018","type":"GlyphRenderer"},{"attributes":{},"id":"23995","type":"SaveTool"},{"attributes":{"source":{"id":"24020"}},"id":"24025","type":"CDSView"},{"attributes":{"toolbar":{"id":"24044"},"toolbar_location":"above"},"id":"24045","type":"ToolbarBox"},{"attributes":{"source":{"id":"24014"}},"id":"24019","type":"CDSView"}],"root_ids":["24046"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"9844fd9f-ebbd-4f6a-98dc-8c2bd4302b68","root_ids":["24046"],"roots":{"24046":"291535eb-13f2-4607-a35e-765bf00fbdcc"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();