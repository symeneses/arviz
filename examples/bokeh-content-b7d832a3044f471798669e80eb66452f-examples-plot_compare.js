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
    
      
      
    
      const element = document.getElementById("131c4c8c-2f03-4519-beca-cc933e91df35");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '131c4c8c-2f03-4519-beca-cc933e91df35' but no matching script tag was found.")
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
                    
                  const docs_json = '{"03645cb3-2166-49ad-9e23-2a1034290183":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"18309"},"glyph":{"id":"18310"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18312"},"nonselection_glyph":{"id":"18311"},"view":{"id":"18314"}},"id":"18313","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"18280"}],"center":[{"id":"18283"},{"id":"18287"}],"height":500,"left":[{"id":"18284"}],"output_backend":"webgl","renderers":[{"id":"18313"},{"id":"18319"},{"id":"18325"},{"id":"18331"},{"id":"18337"},{"id":"18339"}],"title":{"id":"18340"},"toolbar":{"id":"18298"},"toolbar_location":null,"width":500,"x_range":{"id":"18272"},"x_scale":{"id":"18276"},"y_range":{"id":"18274"},"y_scale":{"id":"18278"}},"id":"18271","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"18333"},"glyph":{"id":"18334"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18336"},"nonselection_glyph":{"id":"18335"},"view":{"id":"18338"}},"id":"18337","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18296","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18324","type":"Circle"},{"attributes":{},"id":"18349","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"hNBxwYDPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18348"},"selection_policy":{"id":"18347"}},"id":"18309","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18315"}},"id":"18320","type":"CDSView"},{"attributes":{"data":{"xs":[[-32.05318232491158,-29.322752162886484],[-32.237685546932575,-29.38343126345932]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18354"},"selection_policy":{"id":"18353"}},"id":"18327","type":"ColumnDataSource"},{"attributes":{},"id":"18343","type":"AllLabels"},{"attributes":{"axis":{"id":"18284"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18287","type":"Grid"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18334","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18329","type":"MultiLine"},{"attributes":{"toolbar":{"id":"18361"},"toolbar_location":"above"},"id":"18362","type":"ToolbarBox"},{"attributes":{"coordinates":null,"group":null},"id":"18340","type":"Title"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18297","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"18295","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18312","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18317","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"/kMNnx6wPsCE0HHBgM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18352"},"selection_policy":{"id":"18351"}},"id":"18321","type":"ColumnDataSource"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18307","type":"FixedTicker"},{"attributes":{},"id":"18346","type":"AllLabels"},{"attributes":{},"id":"18276","type":"LinearScale"},{"attributes":{},"id":"18355","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18318","type":"MultiLine"},{"attributes":{},"id":"18281","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18356"},"selection_policy":{"id":"18355"}},"id":"18333","type":"ColumnDataSource"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18345"},"group":null,"major_label_policy":{"id":"18346"},"ticker":{"id":"18281"}},"id":"18280","type":"LinearAxis"},{"attributes":{"coordinates":null,"formatter":{"id":"18342"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18343"},"ticker":{"id":"18307"}},"id":"18284","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18311","type":"Scatter"},{"attributes":{"axis":{"id":"18280"},"coordinates":null,"group":null,"ticker":null},"id":"18283","type":"Grid"},{"attributes":{},"id":"18342","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18316","type":"MultiLine"},{"attributes":{},"id":"18289","type":"PanTool"},{"attributes":{"overlay":{"id":"18297"}},"id":"18292","type":"LassoSelectTool"},{"attributes":{"end":0.5,"start":-1.5},"id":"18274","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18310","type":"Scatter"},{"attributes":{},"id":"18356","type":"Selection"},{"attributes":{"tools":[{"id":"18288"},{"id":"18289"},{"id":"18290"},{"id":"18291"},{"id":"18292"},{"id":"18293"},{"id":"18294"},{"id":"18295"}]},"id":"18298","type":"Toolbar"},{"attributes":{"toolbars":[{"id":"18298"}],"tools":[{"id":"18288"},{"id":"18289"},{"id":"18290"},{"id":"18291"},{"id":"18292"},{"id":"18293"},{"id":"18294"},{"id":"18295"}]},"id":"18361","type":"ProxyToolbar"},{"attributes":{"source":{"id":"18321"}},"id":"18326","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18322","type":"Circle"},{"attributes":{},"id":"18348","type":"Selection"},{"attributes":{"children":[[{"id":"18271"},0,0]]},"id":"18360","type":"GridBox"},{"attributes":{},"id":"18291","type":"WheelZoomTool"},{"attributes":{"source":{"id":"18327"}},"id":"18332","type":"CDSView"},{"attributes":{},"id":"18288","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18336","type":"Circle"},{"attributes":{},"id":"18353","type":"UnionRenderers"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18328","type":"MultiLine"},{"attributes":{},"id":"18350","type":"Selection"},{"attributes":{},"id":"18272","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18330","type":"MultiLine"},{"attributes":{"source":{"id":"18333"}},"id":"18338","type":"CDSView"},{"attributes":{},"id":"18294","type":"SaveTool"},{"attributes":{"children":[{"id":"18362"},{"id":"18360"}]},"id":"18363","type":"Column"},{"attributes":{"overlay":{"id":"18296"}},"id":"18290","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.68796724389903},"id":"18339","type":"Span"},{"attributes":{},"id":"18293","type":"UndoTool"},{"attributes":{"data":{"xs":[[-30.896720059785245,-30.72439675060665]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18350"},"selection_policy":{"id":"18349"}},"id":"18315","type":"ColumnDataSource"},{"attributes":{},"id":"18345","type":"BasicTickFormatter"},{"attributes":{},"id":"18347","type":"UnionRenderers"},{"attributes":{},"id":"18352","type":"Selection"},{"attributes":{},"id":"18278","type":"LinearScale"},{"attributes":{"source":{"id":"18309"}},"id":"18314","type":"CDSView"},{"attributes":{},"id":"18354","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"18321"},"glyph":{"id":"18322"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18324"},"nonselection_glyph":{"id":"18323"},"view":{"id":"18326"}},"id":"18325","type":"GlyphRenderer"},{"attributes":{},"id":"18351","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"18315"},"glyph":{"id":"18316"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18318"},"nonselection_glyph":{"id":"18317"},"view":{"id":"18320"}},"id":"18319","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"18327"},"glyph":{"id":"18328"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18330"},"nonselection_glyph":{"id":"18329"},"view":{"id":"18332"}},"id":"18331","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18323","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18335","type":"Circle"}],"root_ids":["18363"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"03645cb3-2166-49ad-9e23-2a1034290183","root_ids":["18363"],"roots":{"18363":"131c4c8c-2f03-4519-beca-cc933e91df35"}}];
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