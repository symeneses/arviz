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
    
      
      
    
      const element = document.getElementById("2feb414c-c5c9-40f5-94b4-d84ce55e885a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2feb414c-c5c9-40f5-94b4-d84ce55e885a' but no matching script tag was found.")
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
                    
                  const docs_json = '{"4330828c-fc1e-4343-b81b-2729ec56cbe4":{"defs":[],"roots":{"references":[{"attributes":{},"id":"41929","type":"BasicTicker"},{"attributes":{},"id":"42037","type":"AllLabels"},{"attributes":{},"id":"41922","type":"LinearScale"},{"attributes":{"source":{"id":"41987"}},"id":"41992","type":"CDSView"},{"attributes":{"axis":{"id":"41924"},"coordinates":null,"group":null,"ticker":null},"id":"41927","type":"Grid"},{"attributes":{"children":[{"id":"42047"},{"id":"42045"}]},"id":"42048","type":"Column"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"42019"},"group":null,"major_label_policy":{"id":"42020"},"ticker":{"id":"41929"}},"id":"41928","type":"LinearAxis"},{"attributes":{},"id":"41932","type":"ResetTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41976","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"41939","type":"HoverTool"},{"attributes":{"axis":{"id":"41928"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41931","type":"Grid"},{"attributes":{},"id":"41952","type":"DataRange1d"},{"attributes":{},"id":"41925","type":"BasicTicker"},{"attributes":{},"id":"42038","type":"UnionRenderers"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"42033"},"group":null,"major_label_policy":{"id":"42034"},"ticker":{"id":"41965"}},"id":"41964","type":"LinearAxis"},{"attributes":{},"id":"41933","type":"PanTool"},{"attributes":{},"id":"42039","type":"Selection"},{"attributes":{},"id":"41938","type":"SaveTool"},{"attributes":{"overlay":{"id":"41940"}},"id":"41934","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41977","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"41941"}},"id":"41936","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"42010","type":"Span"},{"attributes":{},"id":"41937","type":"UndoTool"},{"attributes":{"callback":null},"id":"41975","type":"HoverTool"},{"attributes":{},"id":"41935","type":"WheelZoomTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"42027"},"selection_policy":{"id":"42026"}},"id":"41997","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41940","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41993","type":"Span"},{"attributes":{},"id":"41973","type":"UndoTool"},{"attributes":{},"id":"42019","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41994","type":"Span"},{"attributes":{},"id":"42020","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"41987"},"glyph":{"id":"41988"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41990"},"nonselection_glyph":{"id":"41989"},"view":{"id":"41992"}},"id":"41991","type":"GlyphRenderer"},{"attributes":{},"id":"42022","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"41968"},{"id":"41969"},{"id":"41970"},{"id":"41971"},{"id":"41972"},{"id":"41973"},{"id":"41974"},{"id":"41975"}]},"id":"41978","type":"Toolbar"},{"attributes":{},"id":"42040","type":"UnionRenderers"},{"attributes":{},"id":"42041","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41941","type":"PolyAnnotation"},{"attributes":{},"id":"42023","type":"AllLabels"},{"attributes":{"toolbar":{"id":"42046"},"toolbar_location":"above"},"id":"42047","type":"ToolbarBox"},{"attributes":{"axis":{"id":"41964"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41967","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"42008","type":"Span"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41990","type":"Circle"},{"attributes":{},"id":"41965","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41989","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41995","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"42041"},"selection_policy":{"id":"42040"}},"id":"42012","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"41977"}},"id":"41972","type":"LassoSelectTool"},{"attributes":{},"id":"42024","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"41976"}},"id":"41970","type":"BoxZoomTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41996","type":"Scatter"},{"attributes":{},"id":"41969","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"41997"},"glyph":{"id":"41996"},"group":null,"hover_glyph":null,"view":{"id":"41999"}},"id":"41998","type":"GlyphRenderer"},{"attributes":{},"id":"41968","type":"ResetTool"},{"attributes":{},"id":"42025","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"42000","type":"Title"},{"attributes":{},"id":"41961","type":"BasicTicker"},{"attributes":{"source":{"id":"41997"}},"id":"41999","type":"CDSView"},{"attributes":{},"id":"41958","type":"LinearScale"},{"attributes":{"axis":{"id":"41960"},"coordinates":null,"group":null,"ticker":null},"id":"41963","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"42039"},"selection_policy":{"id":"42038"}},"id":"42002","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"41942"},{"id":"41978"}],"tools":[{"id":"41932"},{"id":"41933"},{"id":"41934"},{"id":"41935"},{"id":"41936"},{"id":"41937"},{"id":"41938"},{"id":"41939"},{"id":"41968"},{"id":"41969"},{"id":"41970"},{"id":"41971"},{"id":"41972"},{"id":"41973"},{"id":"41974"},{"id":"41975"}]},"id":"42046","type":"ProxyToolbar"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"42036"},"group":null,"major_label_policy":{"id":"42037"},"ticker":{"id":"41961"}},"id":"41960","type":"LinearAxis"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"42011","type":"Scatter"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"42025"},"selection_policy":{"id":"42024"}},"id":"41987","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"42012"},"glyph":{"id":"42011"},"group":null,"hover_glyph":null,"view":{"id":"42014"}},"id":"42013","type":"GlyphRenderer"},{"attributes":{},"id":"41956","type":"LinearScale"},{"attributes":{},"id":"42026","type":"UnionRenderers"},{"attributes":{},"id":"42027","type":"Selection"},{"attributes":{"source":{"id":"42012"}},"id":"42014","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"42002"},"glyph":{"id":"42003"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"42005"},"nonselection_glyph":{"id":"42004"},"view":{"id":"42007"}},"id":"42006","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"41932"},{"id":"41933"},{"id":"41934"},{"id":"41935"},{"id":"41936"},{"id":"41937"},{"id":"41938"},{"id":"41939"}]},"id":"41942","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42005","type":"Circle"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"42022"},"group":null,"major_label_policy":{"id":"42023"},"ticker":{"id":"41925"}},"id":"41924","type":"LinearAxis"},{"attributes":{},"id":"41974","type":"SaveTool"},{"attributes":{"below":[{"id":"41924"}],"center":[{"id":"41927"},{"id":"41931"}],"height":500,"left":[{"id":"41928"}],"output_backend":"webgl","renderers":[{"id":"41991"},{"id":"41993"},{"id":"41994"},{"id":"41995"},{"id":"41998"}],"title":{"id":"42000"},"toolbar":{"id":"41942"},"toolbar_location":null,"width":500,"x_range":{"id":"41916"},"x_scale":{"id":"41920"},"y_range":{"id":"41918"},"y_scale":{"id":"41922"}},"id":"41915","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"42033","type":"BasicTickFormatter"},{"attributes":{},"id":"41971","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42003","type":"Circle"},{"attributes":{"below":[{"id":"41960"}],"center":[{"id":"41963"},{"id":"41967"}],"height":500,"left":[{"id":"41964"}],"output_backend":"webgl","renderers":[{"id":"42006"},{"id":"42008"},{"id":"42009"},{"id":"42010"},{"id":"42013"}],"title":{"id":"42015"},"toolbar":{"id":"41978"},"toolbar_location":null,"width":500,"x_range":{"id":"41952"},"x_scale":{"id":"41956"},"y_range":{"id":"41954"},"y_scale":{"id":"41958"}},"id":"41951","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41916","type":"DataRange1d"},{"attributes":{"end":1,"start":-0.05},"id":"41954","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"42015","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42004","type":"Circle"},{"attributes":{"children":[[{"id":"41915"},0,0],[{"id":"41951"},0,1]]},"id":"42045","type":"GridBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41988","type":"Circle"},{"attributes":{"source":{"id":"42002"}},"id":"42007","type":"CDSView"},{"attributes":{},"id":"42034","type":"AllLabels"},{"attributes":{},"id":"42036","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"42009","type":"Span"},{"attributes":{},"id":"41920","type":"LinearScale"},{"attributes":{"end":1,"start":-0.05},"id":"41918","type":"DataRange1d"}],"root_ids":["42048"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"4330828c-fc1e-4343-b81b-2729ec56cbe4","root_ids":["42048"],"roots":{"42048":"2feb414c-c5c9-40f5-94b4-d84ce55e885a"}}];
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