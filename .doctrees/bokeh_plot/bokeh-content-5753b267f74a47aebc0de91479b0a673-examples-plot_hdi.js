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
    
      
      
    
      const element = document.getElementById("f544c6b3-59a7-46d7-adcd-909cab7dc2fa");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f544c6b3-59a7-46d7-adcd-909cab7dc2fa' but no matching script tag was found.")
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
                    
                  const docs_json = '{"716d0090-8ae7-4ee6-b292-e7ebfba5156a":{"defs":[],"roots":{"references":[{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"22347","type":"Line"},{"attributes":{},"id":"22360","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"22348","type":"Line"},{"attributes":{},"id":"22305","type":"DataRange1d"},{"attributes":{},"id":"22327","type":"SaveTool"},{"attributes":{"source":{"id":"22346"}},"id":"22351","type":"CDSView"},{"attributes":{},"id":"22356","type":"AllLabels"},{"attributes":{"axis":{"id":"22317"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"22320","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"22349","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"22329","type":"BoxAnnotation"},{"attributes":{},"id":"22307","type":"DataRange1d"},{"attributes":{"fill_alpha":0.2,"fill_color":"#ff0000","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"22343","type":"Patch"},{"attributes":{},"id":"22358","type":"BasicTickFormatter"},{"attributes":{},"id":"22324","type":"WheelZoomTool"},{"attributes":{},"id":"22359","type":"AllLabels"},{"attributes":{"tools":[{"id":"22321"},{"id":"22322"},{"id":"22323"},{"id":"22324"},{"id":"22325"},{"id":"22326"},{"id":"22327"},{"id":"22328"}]},"id":"22331","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"22361"},"selection_policy":{"id":"22360"}},"id":"22340","type":"ColumnDataSource"},{"attributes":{},"id":"22314","type":"BasicTicker"},{"attributes":{"coordinates":null,"formatter":{"id":"22355"},"group":null,"major_label_policy":{"id":"22356"},"ticker":{"id":"22318"}},"id":"22317","type":"LinearAxis"},{"attributes":{},"id":"22326","type":"UndoTool"},{"attributes":{},"id":"22362","type":"UnionRenderers"},{"attributes":{},"id":"22318","type":"BasicTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"22340"},"glyph":{"id":"22341"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"22343"},"nonselection_glyph":{"id":"22342"},"view":{"id":"22345"}},"id":"22344","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"22346"},"glyph":{"id":"22347"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"22349"},"nonselection_glyph":{"id":"22348"},"view":{"id":"22351"}},"id":"22350","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"22358"},"group":null,"major_label_policy":{"id":"22359"},"ticker":{"id":"22314"}},"id":"22313","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"22330","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"22313"}],"center":[{"id":"22316"},{"id":"22320"}],"height":500,"left":[{"id":"22317"}],"output_backend":"webgl","renderers":[{"id":"22344"},{"id":"22350"}],"title":{"id":"22352"},"toolbar":{"id":"22331"},"toolbar_location":"above","width":500,"x_range":{"id":"22305"},"x_scale":{"id":"22309"},"y_range":{"id":"22307"},"y_scale":{"id":"22311"}},"id":"22304","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"22340"}},"id":"22345","type":"CDSView"},{"attributes":{},"id":"22322","type":"PanTool"},{"attributes":{},"id":"22321","type":"ResetTool"},{"attributes":{"coordinates":null,"group":null},"id":"22352","type":"Title"},{"attributes":{},"id":"22361","type":"Selection"},{"attributes":{"callback":null},"id":"22328","type":"HoverTool"},{"attributes":{},"id":"22363","type":"Selection"},{"attributes":{},"id":"22311","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"Q9HErslqB8ARnBp34RMGwEVEd1DDUATAau5a29fbA8B9bg6OHwEAwInvVbdyofu/zxnuuwS0+L8p/zDON9L3v0VY1/yDh/a/0rWZ1a8H9L+PMryWl+/yv+9ZKshglvK/JEIAf9008r/h+rhoxhvxv703/EF93/C/oC2fFJxs8L8w+ycGOojtv0d0ANKSVOu/7a+a7eND67/XYdQhltTqv9RdCOycDOq/kv7xaJZo6L9M7UBFrQbov1/fs1qTVea/Zo7NedDe5b+F64+qm7blv48DamySYeW/qSMb3Vod5b9jMwUuNBbkv8geuieYueO/98hUArWa478c+Jnl8RnhvykEYT9/FeG/QinpweLM4L+SWGJA8PPdvxVJcA70Pt2/mQ5DP3pM2b/pvggdaJDWvwv7XFJySNW/zTI5jRyO1L8Ln6q5uYHUv94f9lN2HdK/TnCT8G3o0b9bKD66xcbRv5yZuuf3vNG/IB0nJIWL0L9JLOnvXbDFv4jnhfml77+/olTsWLhHj78/PYwwwguSPwCcUf+m47w/9Sv3ZA77wD+xglipvIvBP+C9wRKTJ84/EkuIJihvzj+xKkZmwKzQPz82MqhVPdE/t4EOIJwx0j9T14psmbXTP3JE3j2uvdc/t+DUOUHD2D8ao3uLyJfbP6TqiLMld94/XvTvyyOy3j8VmATHSU/hP8o4EsqXUOI/9gor9rMe5T9+cvAhWdHmPz760kqtBuc/hq+3kGKa5z9I7gclAf/oP7czyseYX+k/6qLmtSah6j+A2/Rf987qP6pgtC+FDes/3lGzS1sP6z/aYB+69a7rPy7z/Taj9+s/weVjO8ck7D8sl6jqw5LuP8sa4QMliO8/de3S+sTI8T8AHS7B+8byP/BfIggxEfQ/0sfQbT8+9D8Wuwx0aoj0P/0Q+bJr1/Y/k1UoT4fE9z/dq6IvqY34P2j3JAr6u/g/O62A9ImW+z/k6M8vwdH8P6jK1RkXuf0/2Sn6W3cX/j+PJbtL2jX+P9Pxa5zYgv4/3I/Evlje/j+QIw8IFgn/P9iintsBKwBAQ6VKyPGRAkA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"el12omwq4T/ex8oRPdjjP3Z3EV95Xuc/LCNKSVBI6D8GI+PjwP3vPzwIVaRGL/I/GPMIov2l8z9sgOcY5Bb0P95TlAE+vPQ/FyUzFSj89T+45qE0NIj2PwjT6pvPtPY/7t5/QJHl9j+QgqPLHHL3PyLkAV9BkPc/MGmw9bHJ9z80AXZ+8Z34P+7if0vbKvk/BVSZBAcv+T+K54p32kr5P4vo/cTYfPk/XIDDZdrl+T+txK+uVP75PygIUymbavo/ZpyM4UuI+j8fBVwVWZL6Pxx/5WSbp/o/Fje5SKm4+j8ns370cvr6P054EfaZEfs/ws1qv1IZ+z/5gZmGg7n7P/a+JzCguvs/sLWFT8fM+z/utPP3gUH8P932MX4hWPw/LZ4XuHDW/D8j6F788i39P59gtLXxVv0/ptlYbjxu/T8frMrIyG/9PwQ8gTVRvP0/9pHtQfLC/T/1OrhIJ8f9P8ysCANhyP0/XBx7W4/u/T87bQEh+qT+P8TQM9CCAP8/qxOnR7jg/z89jDDCCxIAQHBG/ZuOcwBAYLknc9iHAEAWxErlXYwAQO8Nlpg88QBAWUI0QXnzAECrYmQGzAoBQGQjg1rVEwFAG+gAwhkjAUB1rciWWTsBQEfk3ePaewFAC06dEzSMAUAyureIfLkBQKqOOFty5wFARv++PCLrAUADk+A46SkCQBlHQvkSSgJAX2HFftajAkBQDj4kK9oCQEhfWqnV4AJA8fUWUkzzAkDJ/aAk4B8DQHdG+RjzKwNAXdS81iRUA0Bwm/7r3lkDQBWM9qWwYQNAPGp2aethA0Ab7EO33nUDQGa+32b0fgNAuHxs55iEA0DmElV9WNIDQFkjfKAE8QNAXbu0PjFyBEBAh0vwvrEEQPyXCEJMBAVA9DF0248PBUDGLgOdGiIFQD9EvuzatQVAZRXK0yHxBUD3quhLaiMGQNo9iYL+LgZATysgfaLlBkA5+vNLcDQHQKpydcZFbgdAdor+1t2FB0Bkye6Sdo0HQHX8Gie2oAdA9yOxL5a3B0DkyAOCRcIHQGxRz+2AFQhAolIl5PhICUA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"22363"},"selection_policy":{"id":"22362"}},"id":"22346","type":"ColumnDataSource"},{"attributes":{},"id":"22355","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"22342","type":"Patch"},{"attributes":{"overlay":{"id":"22329"}},"id":"22323","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"22341","type":"Patch"},{"attributes":{"axis":{"id":"22313"},"coordinates":null,"group":null,"ticker":null},"id":"22316","type":"Grid"},{"attributes":{},"id":"22309","type":"LinearScale"},{"attributes":{"overlay":{"id":"22330"}},"id":"22325","type":"LassoSelectTool"}],"root_ids":["22304"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"716d0090-8ae7-4ee6-b292-e7ebfba5156a","root_ids":["22304"],"roots":{"22304":"f544c6b3-59a7-46d7-adcd-909cab7dc2fa"}}];
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