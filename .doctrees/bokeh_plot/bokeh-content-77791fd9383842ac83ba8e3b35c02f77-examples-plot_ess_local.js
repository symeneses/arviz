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
    
      
      
    
      const element = document.getElementById("4ebab2e2-4872-4f64-b8bd-6cc9aedb0955");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4ebab2e2-4872-4f64-b8bd-6cc9aedb0955' but no matching script tag was found.")
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
                    
                  const docs_json = '{"e7b01175-65be-4068-b454-a91f843839f3":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"21227"},0,0]]},"id":"21291","type":"GridBox"},{"attributes":{"below":[{"id":"21236"}],"center":[{"id":"21239"},{"id":"21243"}],"height":500,"left":[{"id":"21240"}],"output_backend":"webgl","renderers":[{"id":"21267"},{"id":"21271"},{"id":"21273"},{"id":"21274"}],"title":{"id":"21275"},"toolbar":{"id":"21254"},"toolbar_location":null,"width":500,"x_range":{"id":"21228"},"x_scale":{"id":"21232"},"y_range":{"id":"21230"},"y_scale":{"id":"21234"}},"id":"21227","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"21263"},"glyph":{"id":"21264"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21266"},"nonselection_glyph":{"id":"21265"},"view":{"id":"21268"}},"id":"21267","type":"GlyphRenderer"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21269","type":"Scatter"},{"attributes":{},"id":"21279","type":"BasicTickFormatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21287"},"selection_policy":{"id":"21286"}},"id":"21270","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"21254"}],"tools":[{"id":"21244"},{"id":"21245"},{"id":"21246"},{"id":"21247"},{"id":"21248"},{"id":"21249"},{"id":"21250"},{"id":"21251"}]},"id":"21292","type":"ProxyToolbar"},{"attributes":{},"id":"21244","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21264","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21265","type":"Circle"},{"attributes":{},"id":"21230","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21266","type":"Circle"},{"attributes":{},"id":"21287","type":"Selection"},{"attributes":{"toolbar":{"id":"21292"},"toolbar_location":"above"},"id":"21293","type":"ToolbarBox"},{"attributes":{},"id":"21237","type":"BasicTicker"},{"attributes":{},"id":"21283","type":"AllLabels"},{"attributes":{"callback":null},"id":"21251","type":"HoverTool"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21282"},"group":null,"major_label_policy":{"id":"21283"},"ticker":{"id":"21237"}},"id":"21236","type":"LinearAxis"},{"attributes":{"overlay":{"id":"21253"}},"id":"21248","type":"LassoSelectTool"},{"attributes":{},"id":"21285","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21273","type":"Span"},{"attributes":{},"id":"21247","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21253","type":"PolyAnnotation"},{"attributes":{},"id":"21241","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21274","type":"Span"},{"attributes":{},"id":"21250","type":"SaveTool"},{"attributes":{},"id":"21280","type":"AllLabels"},{"attributes":{},"id":"21228","type":"DataRange1d"},{"attributes":{},"id":"21245","type":"PanTool"},{"attributes":{"axis":{"id":"21236"},"coordinates":null,"group":null,"ticker":null},"id":"21239","type":"Grid"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21279"},"group":null,"major_label_policy":{"id":"21280"},"ticker":{"id":"21241"}},"id":"21240","type":"LinearAxis"},{"attributes":{},"id":"21282","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"21270"}},"id":"21272","type":"CDSView"},{"attributes":{},"id":"21234","type":"LinearScale"},{"attributes":{"tools":[{"id":"21244"},{"id":"21245"},{"id":"21246"},{"id":"21247"},{"id":"21248"},{"id":"21249"},{"id":"21250"},{"id":"21251"}]},"id":"21254","type":"Toolbar"},{"attributes":{},"id":"21284","type":"UnionRenderers"},{"attributes":{"source":{"id":"21263"}},"id":"21268","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21252","type":"BoxAnnotation"},{"attributes":{},"id":"21286","type":"UnionRenderers"},{"attributes":{},"id":"21249","type":"UndoTool"},{"attributes":{"children":[{"id":"21293"},{"id":"21291"}]},"id":"21294","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"21270"},"glyph":{"id":"21269"},"group":null,"hover_glyph":null,"view":{"id":"21272"}},"id":"21271","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"21240"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21243","type":"Grid"},{"attributes":{},"id":"21232","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21275","type":"Title"},{"attributes":{"overlay":{"id":"21252"}},"id":"21246","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21285"},"selection_policy":{"id":"21284"}},"id":"21263","type":"ColumnDataSource"}],"root_ids":["21294"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"e7b01175-65be-4068-b454-a91f843839f3","root_ids":["21294"],"roots":{"21294":"4ebab2e2-4872-4f64-b8bd-6cc9aedb0955"}}];
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