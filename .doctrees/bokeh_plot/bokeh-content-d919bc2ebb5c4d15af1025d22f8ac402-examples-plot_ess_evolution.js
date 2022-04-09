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
    
      
      
    
      const element = document.getElementById("05b6068a-01b6-43a8-a2f1-f33033fd616f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '05b6068a-01b6-43a8-a2f1-f33033fd616f' but no matching script tag was found.")
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
                    
                  const docs_json = '{"9ac07360-70d6-4ad8-91fa-4367dcd8c43d":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"21113"},"glyph":{"id":"21114"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21116"},"nonselection_glyph":{"id":"21115"},"view":{"id":"21118"}},"id":"21117","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21149"},"selection_policy":{"id":"21148"}},"id":"21119","type":"ColumnDataSource"},{"attributes":{},"id":"21085","type":"BasicTicker"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"21129"},{"id":"21123"}]},"id":"21134","type":"LegendItem"},{"attributes":{},"id":"21078","type":"LinearScale"},{"attributes":{},"id":"21150","type":"UnionRenderers"},{"attributes":{},"id":"21093","type":"UndoTool"},{"attributes":{},"id":"21147","type":"Selection"},{"attributes":{"source":{"id":"21107"}},"id":"21112","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21147"},"selection_policy":{"id":"21146"}},"id":"21113","type":"ColumnDataSource"},{"attributes":{},"id":"21148","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"21125"},"glyph":{"id":"21126"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21128"},"nonselection_glyph":{"id":"21127"},"view":{"id":"21130"}},"id":"21129","type":"GlyphRenderer"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21120","type":"Line"},{"attributes":{},"id":"21076","type":"LinearScale"},{"attributes":{"tools":[{"id":"21088"},{"id":"21089"},{"id":"21090"},{"id":"21091"},{"id":"21092"},{"id":"21093"},{"id":"21094"},{"id":"21095"}]},"id":"21098","type":"Toolbar"},{"attributes":{},"id":"21146","type":"UnionRenderers"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"21142"},"group":null,"major_label_policy":{"id":"21143"},"ticker":{"id":"21081"}},"id":"21080","type":"LinearAxis"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21116","type":"Line"},{"attributes":{},"id":"21151","type":"Selection"},{"attributes":{},"id":"21145","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21122","type":"Line"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"21111"},{"id":"21117"}]},"id":"21133","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21108","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"21119"},"glyph":{"id":"21120"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21122"},"nonselection_glyph":{"id":"21121"},"view":{"id":"21124"}},"id":"21123","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21128","type":"Circle"},{"attributes":{},"id":"21149","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21097","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"21098"}],"tools":[{"id":"21088"},{"id":"21089"},{"id":"21090"},{"id":"21091"},{"id":"21092"},{"id":"21093"},{"id":"21094"},{"id":"21095"}]},"id":"21156","type":"ProxyToolbar"},{"attributes":{},"id":"21088","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21109","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21127","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21121","type":"Line"},{"attributes":{"axis":{"id":"21080"},"coordinates":null,"group":null,"ticker":null},"id":"21083","type":"Grid"},{"attributes":{"source":{"id":"21119"}},"id":"21124","type":"CDSView"},{"attributes":{},"id":"21089","type":"PanTool"},{"attributes":{"overlay":{"id":"21097"}},"id":"21092","type":"LassoSelectTool"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"21133"},{"id":"21134"}],"location":"center_right","orientation":"horizontal"},"id":"21132","type":"Legend"},{"attributes":{},"id":"21081","type":"BasicTicker"},{"attributes":{},"id":"21072","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21114","type":"Line"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21131","type":"Span"},{"attributes":{"children":[{"id":"21157"},{"id":"21155"}]},"id":"21158","type":"Column"},{"attributes":{},"id":"21140","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21145"},"selection_policy":{"id":"21144"}},"id":"21107","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21113"}},"id":"21118","type":"CDSView"},{"attributes":{},"id":"21074","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21110","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21126","type":"Circle"},{"attributes":{"toolbar":{"id":"21156"},"toolbar_location":"above"},"id":"21157","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"21096"}},"id":"21090","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"21135","type":"Title"},{"attributes":{"axis":{"id":"21084"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21087","type":"Grid"},{"attributes":{"source":{"id":"21125"}},"id":"21130","type":"CDSView"},{"attributes":{},"id":"21091","type":"WheelZoomTool"},{"attributes":{"above":[{"id":"21132"}],"below":[{"id":"21080"}],"center":[{"id":"21083"},{"id":"21087"}],"height":500,"left":[{"id":"21084"}],"output_backend":"webgl","renderers":[{"id":"21111"},{"id":"21117"},{"id":"21123"},{"id":"21129"},{"id":"21131"}],"title":{"id":"21135"},"toolbar":{"id":"21098"},"toolbar_location":null,"width":500,"x_range":{"id":"21072"},"x_scale":{"id":"21076"},"y_range":{"id":"21074"},"y_scale":{"id":"21078"}},"id":"21071","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"21107"},"glyph":{"id":"21108"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21110"},"nonselection_glyph":{"id":"21109"},"view":{"id":"21112"}},"id":"21111","type":"GlyphRenderer"},{"attributes":{},"id":"21142","type":"BasicTickFormatter"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"21139"},"group":null,"major_label_policy":{"id":"21140"},"ticker":{"id":"21085"}},"id":"21084","type":"LinearAxis"},{"attributes":{"children":[[{"id":"21071"},0,0]]},"id":"21155","type":"GridBox"},{"attributes":{},"id":"21144","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21151"},"selection_policy":{"id":"21150"}},"id":"21125","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"21115","type":"Line"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21096","type":"BoxAnnotation"},{"attributes":{},"id":"21143","type":"AllLabels"},{"attributes":{"callback":null},"id":"21095","type":"HoverTool"},{"attributes":{},"id":"21139","type":"BasicTickFormatter"},{"attributes":{},"id":"21094","type":"SaveTool"}],"root_ids":["21158"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"9ac07360-70d6-4ad8-91fa-4367dcd8c43d","root_ids":["21158"],"roots":{"21158":"05b6068a-01b6-43a8-a2f1-f33033fd616f"}}];
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