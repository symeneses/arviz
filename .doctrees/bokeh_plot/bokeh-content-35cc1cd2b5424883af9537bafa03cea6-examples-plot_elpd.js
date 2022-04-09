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
    
      
      
    
      const element = document.getElementById("21e0a9bd-60b8-48b0-905c-28a41c5267b0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '21e0a9bd-60b8-48b0-905c-28a41c5267b0' but no matching script tag was found.")
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
                    
                  const docs_json = '{"8794b2e7-327a-4c1f-a426-f27b925176f3":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"20799"}],"tools":[{"id":"20789"},{"id":"20790"},{"id":"20791"},{"id":"20792"},{"id":"20793"},{"id":"20794"},{"id":"20795"},{"id":"20796"}]},"id":"20827","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"formatter":{"id":"20819"},"group":null,"major_label_policy":{"id":"20820"},"ticker":{"id":"20782"}},"id":"20781","type":"LinearAxis"},{"attributes":{"children":[{"id":"20828"},{"id":"20826"}]},"id":"20829","type":"Column"},{"attributes":{},"id":"20779","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20816"},"group":null,"major_label_policy":{"id":"20817"},"ticker":{"id":"20786"}},"id":"20785","type":"LinearAxis"},{"attributes":{"overlay":{"id":"20797"}},"id":"20791","type":"BoxZoomTool"},{"attributes":{},"id":"20782","type":"BasicTicker"},{"attributes":{"callback":null},"id":"20796","type":"HoverTool"},{"attributes":{"axis":{"id":"20781"},"coordinates":null,"group":null,"ticker":null},"id":"20784","type":"Grid"},{"attributes":{},"id":"20775","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20797","type":"BoxAnnotation"},{"attributes":{},"id":"20819","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"20789"},{"id":"20790"},{"id":"20791"},{"id":"20792"},{"id":"20793"},{"id":"20794"},{"id":"20795"},{"id":"20796"}]},"id":"20799","type":"Toolbar"},{"attributes":{"toolbar":{"id":"20827"},"toolbar_location":"above"},"id":"20828","type":"ToolbarBox"},{"attributes":{},"id":"20777","type":"LinearScale"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20798","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"20809"},"glyph":{"id":"20808"},"group":null,"hover_glyph":null,"view":{"id":"20811"}},"id":"20810","type":"GlyphRenderer"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwCgPZTAZEQ/ABRdkUAak78AFo4kwaykPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20822"},"selection_policy":{"id":"20821"}},"id":"20809","type":"ColumnDataSource"},{"attributes":{},"id":"20816","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"20772"},0,0]]},"id":"20826","type":"GridBox"},{"attributes":{},"id":"20790","type":"PanTool"},{"attributes":{},"id":"20795","type":"SaveTool"},{"attributes":{},"id":"20786","type":"BasicTicker"},{"attributes":{"source":{"id":"20809"}},"id":"20811","type":"CDSView"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20808","type":"Scatter"},{"attributes":{},"id":"20822","type":"Selection"},{"attributes":{},"id":"20821","type":"UnionRenderers"},{"attributes":{"axis":{"id":"20785"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20788","type":"Grid"},{"attributes":{},"id":"20792","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"20781"}],"center":[{"id":"20784"},{"id":"20788"}],"height":288,"left":[{"id":"20785"}],"output_backend":"webgl","renderers":[{"id":"20810"}],"title":{"id":"20812"},"toolbar":{"id":"20799"},"toolbar_location":null,"width":432,"x_range":{"id":"20773"},"x_scale":{"id":"20777"},"y_range":{"id":"20775"},"y_scale":{"id":"20779"}},"id":"20772","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20794","type":"UndoTool"},{"attributes":{"overlay":{"id":"20798"}},"id":"20793","type":"LassoSelectTool"},{"attributes":{},"id":"20817","type":"AllLabels"},{"attributes":{},"id":"20820","type":"AllLabels"},{"attributes":{},"id":"20789","type":"ResetTool"},{"attributes":{},"id":"20773","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20812","type":"Title"}],"root_ids":["20829"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"8794b2e7-327a-4c1f-a426-f27b925176f3","root_ids":["20829"],"roots":{"20829":"21e0a9bd-60b8-48b0-905c-28a41c5267b0"}}];
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