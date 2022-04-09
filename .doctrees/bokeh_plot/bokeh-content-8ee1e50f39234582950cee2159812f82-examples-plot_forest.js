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
    
      
      
    
      const element = document.getElementById("7a73f5ee-616b-4cf7-9b86-0b4794d9d072");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7a73f5ee-616b-4cf7-9b86-0b4794d9d072' but no matching script tag was found.")
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
                    
                  const docs_json = '{"07b5dd61-84da-4686-a237-65edf9711fff":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21660","type":"Selection"},{"attributes":{},"id":"21647","type":"UnionRenderers"},{"attributes":{},"id":"21685","type":"UnionRenderers"},{"attributes":{},"id":"21673","type":"UnionRenderers"},{"attributes":{},"id":"21462","type":"BasicTicker"},{"attributes":{},"id":"21649","type":"UnionRenderers"},{"attributes":{},"id":"21686","type":"Selection"},{"attributes":{"callback":null},"id":"21476","type":"HoverTool"},{"attributes":{"tools":[{"id":"21469"},{"id":"21470"},{"id":"21471"},{"id":"21472"},{"id":"21473"},{"id":"21474"},{"id":"21475"},{"id":"21476"}]},"id":"21479","type":"Toolbar"},{"attributes":{},"id":"21665","type":"UnionRenderers"},{"attributes":{"coordinates":null,"formatter":{"id":"21645"},"group":null,"major_label_policy":{"id":"21646"},"ticker":{"id":"21462"}},"id":"21461","type":"LinearAxis"},{"attributes":{},"id":"21645","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"formatter":{"id":"21642"},"group":null,"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"21643"},"ticker":{"id":"21636"}},"id":"21465","type":"LinearAxis"},{"attributes":{},"id":"21653","type":"UnionRenderers"},{"attributes":{},"id":"21474","type":"UndoTool"},{"attributes":{},"id":"21459","type":"LinearScale"},{"attributes":{},"id":"21690","type":"Selection"},{"attributes":{},"id":"21688","type":"Selection"},{"attributes":{},"id":"21457","type":"LinearScale"},{"attributes":{},"id":"21663","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21477","type":"BoxAnnotation"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"21654"},"selection_policy":{"id":"21653"}},"id":"21506","type":"ColumnDataSource"},{"attributes":{},"id":"21651","type":"UnionRenderers"},{"attributes":{},"id":"21664","type":"Selection"},{"attributes":{},"id":"21682","type":"Selection"},{"attributes":{"axis":{"id":"21465"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"21468","type":"Grid"},{"attributes":{},"id":"21674","type":"Selection"},{"attributes":{},"id":"21475","type":"SaveTool"},{"attributes":{},"id":"21652","type":"Selection"},{"attributes":{},"id":"21661","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"21478"}},"id":"21473","type":"LassoSelectTool"},{"attributes":{},"id":"21650","type":"Selection"},{"attributes":{},"id":"21470","type":"PanTool"},{"attributes":{},"id":"21662","type":"Selection"},{"attributes":{},"id":"21683","type":"UnionRenderers"},{"attributes":{"bounds":"auto","min_interval":1},"id":"21634","type":"DataRange1d"},{"attributes":{},"id":"21646","type":"AllLabels"},{"attributes":{},"id":"21666","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21478","type":"PolyAnnotation"},{"attributes":{},"id":"21672","type":"Selection"},{"attributes":{},"id":"21671","type":"UnionRenderers"},{"attributes":{},"id":"21648","type":"Selection"},{"attributes":{"ticks":[1.275]},"id":"21636","type":"FixedTicker"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"21648"},"selection_policy":{"id":"21647"}},"id":"21488","type":"ColumnDataSource"},{"attributes":{},"id":"21687","type":"UnionRenderers"},{"attributes":{},"id":"21681","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21526","type":"Line"},{"attributes":{},"id":"21643","type":"AllLabels"},{"attributes":{},"id":"21689","type":"UnionRenderers"},{"attributes":{},"id":"21684","type":"Selection"},{"attributes":{"axis":{"id":"21461"},"coordinates":null,"group":null,"ticker":null},"id":"21464","type":"Grid"},{"attributes":{},"id":"21642","type":"BasicTickFormatter"},{"attributes":{},"id":"21659","type":"UnionRenderers"},{"attributes":{},"id":"21469","type":"ResetTool"},{"attributes":{},"id":"21472","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"21477"}},"id":"21471","type":"BoxZoomTool"},{"attributes":{},"id":"21656","type":"Selection"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"21650"},"selection_policy":{"id":"21649"}},"id":"21494","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"21512"},"glyph":{"id":"21513"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21515"},"nonselection_glyph":{"id":"21514"},"view":{"id":"21517"}},"id":"21516","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"21674"},"selection_policy":{"id":"21673"}},"id":"21566","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"21573","type":"Circle"},{"attributes":{"source":{"id":"21614"}},"id":"21619","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21587","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"21609","type":"Circle"},{"attributes":{"toolbar":{"id":"21699"},"toolbar_location":"above"},"id":"21700","type":"ToolbarBox"},{"attributes":{"coordinates":null,"data_source":{"id":"21494"},"glyph":{"id":"21495"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21497"},"nonselection_glyph":{"id":"21496"},"view":{"id":"21499"}},"id":"21498","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21533","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"21520","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21563","type":"Line"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"21686"},"selection_policy":{"id":"21685"}},"id":"21602","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"21629","type":"Circle"},{"attributes":{},"id":"21655","type":"UnionRenderers"},{"attributes":{},"id":"21678","type":"Selection"},{"attributes":{"source":{"id":"21518"}},"id":"21523","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"21554"},"glyph":{"id":"21555"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21557"},"nonselection_glyph":{"id":"21556"},"view":{"id":"21559"}},"id":"21558","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21491","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21495","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21562","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"21611","type":"Circle"},{"attributes":{"source":{"id":"21488"}},"id":"21493","type":"CDSView"},{"attributes":{},"id":"21654","type":"Selection"},{"attributes":{},"id":"21675","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"21596"},"glyph":{"id":"21597"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21599"},"nonselection_glyph":{"id":"21598"},"view":{"id":"21601"}},"id":"21600","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21494"}},"id":"21499","type":"CDSView"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"21672"},"selection_policy":{"id":"21671"}},"id":"21560","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21578"}},"id":"21583","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"21682"},"selection_policy":{"id":"21681"}},"id":"21590","type":"ColumnDataSource"},{"attributes":{},"id":"21658","type":"Selection"},{"attributes":{"source":{"id":"21548"}},"id":"21553","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21598","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21532","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21579","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"21602"},"glyph":{"id":"21603"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21605"},"nonselection_glyph":{"id":"21604"},"view":{"id":"21607"}},"id":"21606","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21581","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"21592","type":"Circle"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"21492"},{"id":"21498"},{"id":"21504"},{"id":"21510"},{"id":"21516"},{"id":"21522"},{"id":"21528"},{"id":"21534"},{"id":"21540"},{"id":"21546"},{"id":"21552"},{"id":"21558"}]},"id":"21639","type":"LegendItem"},{"attributes":{},"id":"21657","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"21503","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21507","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21599","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"21500"},"glyph":{"id":"21501"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21503"},"nonselection_glyph":{"id":"21502"},"view":{"id":"21505"}},"id":"21504","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"21530"},"glyph":{"id":"21531"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21533"},"nonselection_glyph":{"id":"21532"},"view":{"id":"21535"}},"id":"21534","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21567","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21515","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21531","type":"Line"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"21564"},{"id":"21570"},{"id":"21576"},{"id":"21582"},{"id":"21588"},{"id":"21594"},{"id":"21600"},{"id":"21606"},{"id":"21612"},{"id":"21618"},{"id":"21624"},{"id":"21630"}]},"id":"21640","type":"LegendItem"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"21668"},"selection_policy":{"id":"21667"}},"id":"21548","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21622","type":"Line"},{"attributes":{},"id":"21669","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"21502","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21615","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21513","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"21560"},"glyph":{"id":"21561"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21563"},"nonselection_glyph":{"id":"21562"},"view":{"id":"21565"}},"id":"21564","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21490","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"21538","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"21676"},"selection_policy":{"id":"21675"}},"id":"21572","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21602"}},"id":"21607","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"text":"94.0% HDI"},"id":"21632","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"21593","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21514","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21623","type":"Line"},{"attributes":{},"id":"21667","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21568","type":"Line"},{"attributes":{"data":{},"selected":{"id":"21688"},"selection_policy":{"id":"21687"}},"id":"21608","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"21488"},"glyph":{"id":"21489"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21491"},"nonselection_glyph":{"id":"21490"},"view":{"id":"21493"}},"id":"21492","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"21542"},"glyph":{"id":"21543"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21545"},"nonselection_glyph":{"id":"21544"},"view":{"id":"21547"}},"id":"21546","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"21660"},"selection_policy":{"id":"21659"}},"id":"21524","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"21700"},{"id":"21698"}]},"id":"21701","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"21626"},"glyph":{"id":"21627"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21629"},"nonselection_glyph":{"id":"21628"},"view":{"id":"21631"}},"id":"21630","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21584"}},"id":"21589","type":"CDSView"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"21635","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"21620"},"glyph":{"id":"21621"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21623"},"nonselection_glyph":{"id":"21622"},"view":{"id":"21625"}},"id":"21624","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21496","type":"Line"},{"attributes":{"source":{"id":"21530"}},"id":"21535","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21597","type":"Line"},{"attributes":{},"id":"21679","type":"UnionRenderers"},{"attributes":{"source":{"id":"21512"}},"id":"21517","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"21556","type":"Circle"},{"attributes":{},"id":"21691","type":"UnionRenderers"},{"attributes":{},"id":"21692","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21489","type":"Line"},{"attributes":{"source":{"id":"21542"}},"id":"21547","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"21518"},"glyph":{"id":"21519"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21521"},"nonselection_glyph":{"id":"21520"},"view":{"id":"21523"}},"id":"21522","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"21539","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21603","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"21519","type":"Circle"},{"attributes":{"source":{"id":"21560"}},"id":"21565","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"21628","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21551","type":"Line"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"21680"},"selection_policy":{"id":"21679"}},"id":"21584","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21596"}},"id":"21601","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"21652"},"selection_policy":{"id":"21651"}},"id":"21500","type":"ColumnDataSource"},{"attributes":{},"id":"21693","type":"UnionRenderers"},{"attributes":{},"id":"21694","type":"Selection"},{"attributes":{"source":{"id":"21524"}},"id":"21529","type":"CDSView"},{"attributes":{"source":{"id":"21536"}},"id":"21541","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21586","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"21524"},"glyph":{"id":"21525"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21527"},"nonselection_glyph":{"id":"21526"},"view":{"id":"21529"}},"id":"21528","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"21590"},"glyph":{"id":"21591"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21593"},"nonselection_glyph":{"id":"21592"},"view":{"id":"21595"}},"id":"21594","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21604","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"21566"},"glyph":{"id":"21567"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21569"},"nonselection_glyph":{"id":"21568"},"view":{"id":"21571"}},"id":"21570","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21508","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"21591","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"21614"},"glyph":{"id":"21615"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21617"},"nonselection_glyph":{"id":"21616"},"view":{"id":"21619"}},"id":"21618","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21527","type":"Line"},{"attributes":{"source":{"id":"21590"}},"id":"21595","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21550","type":"Line"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"21692"},"selection_policy":{"id":"21691"}},"id":"21620","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21616","type":"Line"},{"attributes":{},"id":"21668","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"21578"},"glyph":{"id":"21579"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21581"},"nonselection_glyph":{"id":"21580"},"view":{"id":"21583"}},"id":"21582","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21545","type":"Line"},{"attributes":{},"id":"21677","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"21574","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21580","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"21610","type":"Circle"},{"attributes":{},"id":"21680","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"21584"},"glyph":{"id":"21585"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21587"},"nonselection_glyph":{"id":"21586"},"view":{"id":"21589"}},"id":"21588","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"21537","type":"Circle"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"21666"},"selection_policy":{"id":"21665"}},"id":"21542","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21554"}},"id":"21559","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21621","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"21555","type":"Circle"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"21690"},"selection_policy":{"id":"21689"}},"id":"21614","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"21572"},"glyph":{"id":"21573"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21575"},"nonselection_glyph":{"id":"21574"},"view":{"id":"21577"}},"id":"21576","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"21656"},"selection_policy":{"id":"21655"}},"id":"21512","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21561","type":"Line"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"21662"},"selection_policy":{"id":"21661"}},"id":"21530","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21509","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21605","type":"Line"},{"attributes":{"source":{"id":"21500"}},"id":"21505","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21544","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"21557","type":"Circle"},{"attributes":{"source":{"id":"21566"}},"id":"21571","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21617","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21549","type":"Line"},{"attributes":{"source":{"id":"21608"}},"id":"21613","type":"CDSView"},{"attributes":{"source":{"id":"21572"}},"id":"21577","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"21608"},"glyph":{"id":"21609"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21611"},"nonselection_glyph":{"id":"21610"},"view":{"id":"21613"}},"id":"21612","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21543","type":"Line"},{"attributes":{"toolbars":[{"id":"21479"}],"tools":[{"id":"21469"},{"id":"21470"},{"id":"21471"},{"id":"21472"},{"id":"21473"},{"id":"21474"},{"id":"21475"},{"id":"21476"}]},"id":"21699","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"21536"},"glyph":{"id":"21537"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21539"},"nonselection_glyph":{"id":"21538"},"view":{"id":"21541"}},"id":"21540","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"21521","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"21664"},"selection_policy":{"id":"21663"}},"id":"21536","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"21678"},"selection_policy":{"id":"21677"}},"id":"21578","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"21684"},"selection_policy":{"id":"21683"}},"id":"21596","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"21506"},"glyph":{"id":"21507"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21509"},"nonselection_glyph":{"id":"21508"},"view":{"id":"21511"}},"id":"21510","type":"GlyphRenderer"},{"attributes":{"above":[{"id":"21638"}],"below":[{"id":"21461"}],"center":[{"id":"21464"},{"id":"21468"}],"height":348,"left":[{"id":"21465"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"21492"},{"id":"21498"},{"id":"21504"},{"id":"21510"},{"id":"21516"},{"id":"21522"},{"id":"21528"},{"id":"21534"},{"id":"21540"},{"id":"21546"},{"id":"21552"},{"id":"21558"},{"id":"21564"},{"id":"21570"},{"id":"21576"},{"id":"21582"},{"id":"21588"},{"id":"21594"},{"id":"21600"},{"id":"21606"},{"id":"21612"},{"id":"21618"},{"id":"21624"},{"id":"21630"}],"title":{"id":"21632"},"toolbar":{"id":"21479"},"toolbar_location":null,"width":450,"x_range":{"id":"21634"},"x_scale":{"id":"21457"},"y_range":{"id":"21635"},"y_scale":{"id":"21459"}},"id":"21452","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"21525","type":"Line"},{"attributes":{"data":{},"selected":{"id":"21670"},"selection_policy":{"id":"21669"}},"id":"21554","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"21548"},"glyph":{"id":"21549"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21551"},"nonselection_glyph":{"id":"21550"},"view":{"id":"21553"}},"id":"21552","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21497","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21585","type":"Line"},{"attributes":{"data":{},"selected":{"id":"21658"},"selection_policy":{"id":"21657"}},"id":"21518","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21620"}},"id":"21625","type":"CDSView"},{"attributes":{"source":{"id":"21626"}},"id":"21631","type":"CDSView"},{"attributes":{"source":{"id":"21506"}},"id":"21511","type":"CDSView"},{"attributes":{"line_alpha":0.2,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"21569","type":"Line"},{"attributes":{"data":{},"selected":{"id":"21694"},"selection_policy":{"id":"21693"}},"id":"21626","type":"ColumnDataSource"},{"attributes":{},"id":"21676","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"21627","type":"Circle"},{"attributes":{},"id":"21670","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"21575","type":"Circle"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"21639"},{"id":"21640"}],"location":"top_left"},"id":"21638","type":"Legend"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"21501","type":"Circle"},{"attributes":{"children":[[{"id":"21452"},0,0]]},"id":"21698","type":"GridBox"}],"root_ids":["21701"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"07b5dd61-84da-4686-a237-65edf9711fff","root_ids":["21701"],"roots":{"21701":"7a73f5ee-616b-4cf7-9b86-0b4794d9d072"}}];
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