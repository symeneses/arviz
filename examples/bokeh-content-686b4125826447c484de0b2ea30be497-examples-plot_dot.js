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
    
      
      
    
      const element = document.getElementById("fe6ea794-5abb-4c4e-9994-2a309fe985f7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fe6ea794-5abb-4c4e-9994-2a309fe985f7' but no matching script tag was found.")
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
                    
                  const docs_json = '{"f8b503df-8079-4806-b4fd-105be071815e":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20683","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"20671"},"glyph":{"id":"20672"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20674"},"nonselection_glyph":{"id":"20673"},"view":{"id":"20676"}},"id":"20675","type":"GlyphRenderer"},{"attributes":{},"id":"20627","type":"BasicTicker"},{"attributes":{"source":{"id":"20659"}},"id":"20664","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20667","type":"Circle"},{"attributes":{},"id":"20624","type":"LinearScale"},{"attributes":{"children":[[{"id":"20617"},0,0]]},"id":"20696","type":"GridBox"},{"attributes":{"overlay":{"id":"20643"}},"id":"20638","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"20626"},"coordinates":null,"group":null,"ticker":null},"id":"20629","type":"Grid"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20642","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20643","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"20644"}],"tools":[{"id":"20634"},{"id":"20635"},{"id":"20636"},{"id":"20637"},{"id":"20638"},{"id":"20639"},{"id":"20640"},{"id":"20641"}]},"id":"20697","type":"ProxyToolbar"},{"attributes":{},"id":"20681","type":"AllLabels"},{"attributes":{},"id":"20634","type":"ResetTool"},{"attributes":{},"id":"20692","type":"Selection"},{"attributes":{},"id":"20620","type":"DataRange1d"},{"attributes":{"children":[{"id":"20698"},{"id":"20696"}]},"id":"20699","type":"Column"},{"attributes":{"source":{"id":"20671"}},"id":"20676","type":"CDSView"},{"attributes":{},"id":"20631","type":"BasicTicker"},{"attributes":{"source":{"id":"20653"}},"id":"20658","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20665"},"glyph":{"id":"20666"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20668"},"nonselection_glyph":{"id":"20667"},"view":{"id":"20670"}},"id":"20669","type":"GlyphRenderer"},{"attributes":{},"id":"20684","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20668","type":"Circle"},{"attributes":{"callback":null},"id":"20641","type":"HoverTool"},{"attributes":{"toolbar":{"id":"20697"},"toolbar_location":"above"},"id":"20698","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"20642"}},"id":"20636","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"20626"}],"center":[{"id":"20629"},{"id":"20633"}],"height":360,"left":[{"id":"20630"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20657"},{"id":"20663"},{"id":"20669"},{"id":"20675"}],"title":{"id":"20677"},"toolbar":{"id":"20644"},"toolbar_location":null,"width":720,"x_range":{"id":"20618"},"x_scale":{"id":"20622"},"y_range":{"id":"20620"},"y_scale":{"id":"20624"}},"id":"20617","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20691","type":"UnionRenderers"},{"attributes":{},"id":"20685","type":"UnionRenderers"},{"attributes":{},"id":"20686","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20672","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20692"},"selection_policy":{"id":"20691"}},"id":"20671","type":"ColumnDataSource"},{"attributes":{},"id":"20687","type":"UnionRenderers"},{"attributes":{},"id":"20637","type":"WheelZoomTool"},{"attributes":{"source":{"id":"20665"}},"id":"20670","type":"CDSView"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20660","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20653"},"glyph":{"id":"20654"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20656"},"nonselection_glyph":{"id":"20655"},"view":{"id":"20658"}},"id":"20657","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20656","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20659"},"glyph":{"id":"20660"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20662"},"nonselection_glyph":{"id":"20661"},"view":{"id":"20664"}},"id":"20663","type":"GlyphRenderer"},{"attributes":{},"id":"20622","type":"LinearScale"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20686"},"selection_policy":{"id":"20685"}},"id":"20653","type":"ColumnDataSource"},{"attributes":{},"id":"20640","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null},"id":"20677","type":"Title"},{"attributes":{"data":{},"selected":{"id":"20690"},"selection_policy":{"id":"20689"}},"id":"20665","type":"ColumnDataSource"},{"attributes":{},"id":"20680","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"formatter":{"id":"20683"},"group":null,"major_label_policy":{"id":"20684"},"ticker":{"id":"20627"}},"id":"20626","type":"LinearAxis"},{"attributes":{"coordinates":null,"formatter":{"id":"20680"},"group":null,"major_label_policy":{"id":"20681"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20631"}},"id":"20630","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20661","type":"Line"},{"attributes":{"tools":[{"id":"20634"},{"id":"20635"},{"id":"20636"},{"id":"20637"},{"id":"20638"},{"id":"20639"},{"id":"20640"},{"id":"20641"}]},"id":"20644","type":"Toolbar"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20654","type":"Line"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20688"},"selection_policy":{"id":"20687"}},"id":"20659","type":"ColumnDataSource"},{"attributes":{},"id":"20618","type":"DataRange1d"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20662","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20673","type":"Circle"},{"attributes":{},"id":"20635","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20674","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20666","type":"Circle"},{"attributes":{},"id":"20689","type":"UnionRenderers"},{"attributes":{},"id":"20690","type":"Selection"},{"attributes":{},"id":"20639","type":"UndoTool"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20655","type":"Line"},{"attributes":{"axis":{"id":"20630"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20633","type":"Grid"},{"attributes":{},"id":"20688","type":"Selection"}],"root_ids":["20699"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"f8b503df-8079-4806-b4fd-105be071815e","root_ids":["20699"],"roots":{"20699":"fe6ea794-5abb-4c4e-9994-2a309fe985f7"}}];
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