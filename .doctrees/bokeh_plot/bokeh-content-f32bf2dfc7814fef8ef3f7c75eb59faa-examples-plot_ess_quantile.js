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
    
      
      
    
      const element = document.getElementById("0e9e8042-0774-48c2-bd8b-66743175c1db");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0e9e8042-0774-48c2-bd8b-66743175c1db' but no matching script tag was found.")
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
                    
                  const docs_json = '{"1449a8aa-8558-4de2-aff3-806fea21a85f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21364","type":"ResetTool"},{"attributes":{"callback":null},"id":"21371","type":"HoverTool"},{"attributes":{"axis":{"id":"21356"},"coordinates":null,"group":null,"ticker":null},"id":"21359","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21390","type":"Title"},{"attributes":{},"id":"21370","type":"SaveTool"},{"attributes":{"overlay":{"id":"21372"}},"id":"21366","type":"BoxZoomTool"},{"attributes":{},"id":"21398","type":"AllLabels"},{"attributes":{"axis":{"id":"21360"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21363","type":"Grid"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21373","type":"PolyAnnotation"},{"attributes":{},"id":"21365","type":"PanTool"},{"attributes":{},"id":"21395","type":"AllLabels"},{"attributes":{"toolbars":[{"id":"21374"}],"tools":[{"id":"21364"},{"id":"21365"},{"id":"21366"},{"id":"21367"},{"id":"21368"},{"id":"21369"},{"id":"21370"},{"id":"21371"}]},"id":"21405","type":"ProxyToolbar"},{"attributes":{"tools":[{"id":"21364"},{"id":"21365"},{"id":"21366"},{"id":"21367"},{"id":"21368"},{"id":"21369"},{"id":"21370"},{"id":"21371"}]},"id":"21374","type":"Toolbar"},{"attributes":{},"id":"21400","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21385","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21386","type":"Circle"},{"attributes":{},"id":"21348","type":"DataRange1d"},{"attributes":{},"id":"21399","type":"UnionRenderers"},{"attributes":{},"id":"21357","type":"BasicTicker"},{"attributes":{"source":{"id":"21383"}},"id":"21388","type":"CDSView"},{"attributes":{},"id":"21397","type":"BasicTickFormatter"},{"attributes":{},"id":"21367","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21383"},"glyph":{"id":"21384"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21386"},"nonselection_glyph":{"id":"21385"},"view":{"id":"21388"}},"id":"21387","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21372","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"21406"},{"id":"21404"}]},"id":"21407","type":"Column"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21384","type":"Circle"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21397"},"group":null,"major_label_policy":{"id":"21398"},"ticker":{"id":"21357"}},"id":"21356","type":"LinearAxis"},{"attributes":{"overlay":{"id":"21373"}},"id":"21368","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"21356"}],"center":[{"id":"21359"},{"id":"21363"}],"height":500,"left":[{"id":"21360"}],"output_backend":"webgl","renderers":[{"id":"21387"},{"id":"21389"}],"title":{"id":"21390"},"toolbar":{"id":"21374"},"toolbar_location":null,"width":500,"x_range":{"id":"21348"},"x_scale":{"id":"21352"},"y_range":{"id":"21350"},"y_scale":{"id":"21354"}},"id":"21347","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21394","type":"BasicTickFormatter"},{"attributes":{},"id":"21369","type":"UndoTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21389","type":"Span"},{"attributes":{"children":[[{"id":"21347"},0,0]]},"id":"21404","type":"GridBox"},{"attributes":{"toolbar":{"id":"21405"},"toolbar_location":"above"},"id":"21406","type":"ToolbarBox"},{"attributes":{},"id":"21350","type":"DataRange1d"},{"attributes":{},"id":"21354","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21400"},"selection_policy":{"id":"21399"}},"id":"21383","type":"ColumnDataSource"},{"attributes":{},"id":"21361","type":"BasicTicker"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21394"},"group":null,"major_label_policy":{"id":"21395"},"ticker":{"id":"21361"}},"id":"21360","type":"LinearAxis"},{"attributes":{},"id":"21352","type":"LinearScale"}],"root_ids":["21407"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"1449a8aa-8558-4de2-aff3-806fea21a85f","root_ids":["21407"],"roots":{"21407":"0e9e8042-0774-48c2-bd8b-66743175c1db"}}];
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