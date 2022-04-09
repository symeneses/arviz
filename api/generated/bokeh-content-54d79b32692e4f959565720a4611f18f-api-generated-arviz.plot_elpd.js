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
    
      
      
    
      const element = document.getElementById("3e03a93e-fb34-4bc5-9a1c-8dcad3ddb23a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3e03a93e-fb34-4bc5-9a1c-8dcad3ddb23a' but no matching script tag was found.")
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
                    
                  const docs_json = '{"5ed10c2b-839a-482d-a0a2-566867f620b6":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17499","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17516","type":"Title"},{"attributes":{},"id":"17521","type":"AllLabels"},{"attributes":{"toolbar":{"id":"17531"},"toolbar_location":"above"},"id":"17532","type":"ToolbarBox"},{"attributes":{},"id":"17496","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"17501"}},"id":"17495","type":"BoxZoomTool"},{"attributes":{},"id":"17525","type":"UnionRenderers"},{"attributes":{"children":[{"id":"17532"},{"id":"17530"}]},"id":"17533","type":"Column"},{"attributes":{"callback":null},"id":"17500","type":"HoverTool"},{"attributes":{},"id":"17526","type":"Selection"},{"attributes":{"children":[[{"id":"17476"},0,0]]},"id":"17530","type":"GridBox"},{"attributes":{"coordinates":null,"formatter":{"id":"17523"},"group":null,"major_label_policy":{"id":"17524"},"ticker":{"id":"17486"}},"id":"17485","type":"LinearAxis"},{"attributes":{},"id":"17493","type":"ResetTool"},{"attributes":{},"id":"17490","type":"BasicTicker"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17502","type":"PolyAnnotation"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17520"},"group":null,"major_label_policy":{"id":"17521"},"ticker":{"id":"17490"}},"id":"17489","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17501","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17513"}},"id":"17515","type":"CDSView"},{"attributes":{"axis":{"id":"17489"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17492","type":"Grid"},{"attributes":{"overlay":{"id":"17502"}},"id":"17497","type":"LassoSelectTool"},{"attributes":{},"id":"17486","type":"BasicTicker"},{"attributes":{"below":[{"id":"17485"}],"center":[{"id":"17488"},{"id":"17492"}],"height":288,"left":[{"id":"17489"}],"output_backend":"webgl","renderers":[{"id":"17514"}],"title":{"id":"17516"},"toolbar":{"id":"17503"},"toolbar_location":null,"width":432,"x_range":{"id":"17477"},"x_scale":{"id":"17481"},"y_range":{"id":"17479"},"y_scale":{"id":"17483"}},"id":"17476","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17520","type":"BasicTickFormatter"},{"attributes":{},"id":"17477","type":"DataRange1d"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwCgPZTAZEQ/ABRdkUAak78AFo4kwaykPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17526"},"selection_policy":{"id":"17525"}},"id":"17513","type":"ColumnDataSource"},{"attributes":{},"id":"17523","type":"BasicTickFormatter"},{"attributes":{},"id":"17494","type":"PanTool"},{"attributes":{"tools":[{"id":"17493"},{"id":"17494"},{"id":"17495"},{"id":"17496"},{"id":"17497"},{"id":"17498"},{"id":"17499"},{"id":"17500"}]},"id":"17503","type":"Toolbar"},{"attributes":{},"id":"17524","type":"AllLabels"},{"attributes":{},"id":"17479","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17512","type":"Scatter"},{"attributes":{"coordinates":null,"data_source":{"id":"17513"},"glyph":{"id":"17512"},"group":null,"hover_glyph":null,"view":{"id":"17515"}},"id":"17514","type":"GlyphRenderer"},{"attributes":{},"id":"17483","type":"LinearScale"},{"attributes":{},"id":"17481","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"17503"}],"tools":[{"id":"17493"},{"id":"17494"},{"id":"17495"},{"id":"17496"},{"id":"17497"},{"id":"17498"},{"id":"17499"},{"id":"17500"}]},"id":"17531","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"17485"},"coordinates":null,"group":null,"ticker":null},"id":"17488","type":"Grid"},{"attributes":{},"id":"17498","type":"UndoTool"}],"root_ids":["17533"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"5ed10c2b-839a-482d-a0a2-566867f620b6","root_ids":["17533"],"roots":{"17533":"3e03a93e-fb34-4bc5-9a1c-8dcad3ddb23a"}}];
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