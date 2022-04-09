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
    
      
      
    
      const element = document.getElementById("97e9de7c-2957-47e6-8f3a-456bf75e8874");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '97e9de7c-2957-47e6-8f3a-456bf75e8874' but no matching script tag was found.")
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
                    
                  const docs_json = '{"e1648ff5-4487-40bc-83c8-ea6ccff747c3":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48540","type":"VBar"},{"attributes":{},"id":"48612","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"48511","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48544"},"glyph":{"id":"48545"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48547"},"nonselection_glyph":{"id":"48546"},"view":{"id":"48549"}},"id":"48548","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"48537"},"glyph":{"id":"48538"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48540"},"nonselection_glyph":{"id":"48539"},"view":{"id":"48542"}},"id":"48541","type":"GlyphRenderer"},{"attributes":{},"id":"48613","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48547","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48543","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48545","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48539","type":"VBar"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48605"},"group":null,"major_label_policy":{"id":"48606"},"ticker":{"id":"48583"}},"id":"48500","type":"LinearAxis"},{"attributes":{"source":{"id":"48537"}},"id":"48542","type":"CDSView"},{"attributes":{"children":[[{"id":"48453"},0,0],[{"id":"48489"},0,1]]},"id":"48621","type":"GridBox"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48600"},"selection_policy":{"id":"48599"}},"id":"48544","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"48583","type":"FixedTicker"},{"attributes":{"below":[{"id":"48496"}],"center":[{"id":"48499"},{"id":"48503"},{"id":"48561"},{"id":"48568"},{"id":"48575"},{"id":"48582"}],"height":331,"left":[{"id":"48500"}],"output_backend":"webgl","renderers":[{"id":"48559"},{"id":"48566"},{"id":"48573"},{"id":"48580"}],"title":{"id":"48585"},"toolbar":{"id":"48514"},"toolbar_location":null,"width":496,"x_range":{"id":"48454"},"x_scale":{"id":"48492"},"y_range":{"id":"48456"},"y_scale":{"id":"48494"}},"id":"48489","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48550","type":"Span"},{"attributes":{"axis":{"id":"48500"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48503","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48585","type":"Title"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48563","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48594"},"selection_policy":{"id":"48593"}},"id":"48523","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48546","type":"VBar"},{"attributes":{},"id":"48599","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"48512"}},"id":"48506","type":"BoxZoomTool"},{"attributes":{"source":{"id":"48544"}},"id":"48549","type":"CDSView"},{"attributes":{},"id":"48505","type":"PanTool"},{"attributes":{},"id":"48600","type":"Selection"},{"attributes":{},"id":"48504","type":"ResetTool"},{"attributes":{},"id":"48510","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48611"},"selection_policy":{"id":"48610"}},"id":"48555","type":"ColumnDataSource"},{"attributes":{},"id":"48507","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"48513"}},"id":"48508","type":"LassoSelectTool"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48591"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48592"},"ticker":{"id":"48463"}},"id":"48462","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"48562"},"glyph":{"id":"48563"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48565"},"nonselection_glyph":{"id":"48564"},"view":{"id":"48567"}},"id":"48566","type":"GlyphRenderer"},{"attributes":{},"id":"48509","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48558","type":"VBar"},{"attributes":{},"id":"48614","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48556","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48523"},"glyph":{"id":"48524"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48526"},"nonselection_glyph":{"id":"48525"},"view":{"id":"48528"}},"id":"48527","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"48555"},"glyph":{"id":"48556"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48558"},"nonselection_glyph":{"id":"48557"},"view":{"id":"48560"}},"id":"48559","type":"GlyphRenderer"},{"attributes":{},"id":"48615","type":"Selection"},{"attributes":{"source":{"id":"48555"}},"id":"48560","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48557","type":"VBar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48512","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48565","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48561","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48532","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48569"},"glyph":{"id":"48570"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48572"},"nonselection_glyph":{"id":"48571"},"view":{"id":"48574"}},"id":"48573","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48523"}},"id":"48528","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48613"},"selection_policy":{"id":"48612"}},"id":"48562","type":"ColumnDataSource"},{"attributes":{},"id":"48605","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48572","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48568","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48525","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48570","type":"VBar"},{"attributes":{},"id":"48606","type":"AllLabels"},{"attributes":{"axis":{"id":"48462"},"coordinates":null,"group":null,"ticker":null},"id":"48465","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48564","type":"VBar"},{"attributes":{"source":{"id":"48562"}},"id":"48567","type":"CDSView"},{"attributes":{},"id":"48608","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"48576"},"glyph":{"id":"48577"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48579"},"nonselection_glyph":{"id":"48578"},"view":{"id":"48581"}},"id":"48580","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48615"},"selection_policy":{"id":"48614"}},"id":"48569","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48579","type":"VBar"},{"attributes":{},"id":"48609","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48575","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48533","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48577","type":"VBar"},{"attributes":{},"id":"48616","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"48530"},"glyph":{"id":"48531"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48533"},"nonselection_glyph":{"id":"48532"},"view":{"id":"48535"}},"id":"48534","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48588"},"group":null,"major_label_policy":{"id":"48589"},"ticker":{"id":"48551"}},"id":"48466","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48571","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48529","type":"Span"},{"attributes":{"source":{"id":"48569"}},"id":"48574","type":"CDSView"},{"attributes":{},"id":"48617","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48538","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48596"},"selection_policy":{"id":"48595"}},"id":"48530","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48617"},"selection_policy":{"id":"48616"}},"id":"48576","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"48480"},{"id":"48514"}],"tools":[{"id":"48470"},{"id":"48471"},{"id":"48472"},{"id":"48473"},{"id":"48474"},{"id":"48475"},{"id":"48476"},{"id":"48477"},{"id":"48504"},{"id":"48505"},{"id":"48506"},{"id":"48507"},{"id":"48508"},{"id":"48509"},{"id":"48510"},{"id":"48511"}]},"id":"48622","type":"ProxyToolbar"},{"attributes":{},"id":"48460","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48582","type":"Span"},{"attributes":{},"id":"48463","type":"BasicTicker"},{"attributes":{},"id":"48456","type":"DataRange1d"},{"attributes":{"source":{"id":"48530"}},"id":"48535","type":"CDSView"},{"attributes":{"tools":[{"id":"48504"},{"id":"48505"},{"id":"48506"},{"id":"48507"},{"id":"48508"},{"id":"48509"},{"id":"48510"},{"id":"48511"}]},"id":"48514","type":"Toolbar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48578","type":"VBar"},{"attributes":{"source":{"id":"48576"}},"id":"48581","type":"CDSView"},{"attributes":{},"id":"48492","type":"LinearScale"},{"attributes":{"toolbar":{"id":"48622"},"toolbar_location":"above"},"id":"48623","type":"ToolbarBox"},{"attributes":{"below":[{"id":"48462"}],"center":[{"id":"48465"},{"id":"48469"},{"id":"48529"},{"id":"48536"},{"id":"48543"},{"id":"48550"}],"height":331,"left":[{"id":"48466"}],"output_backend":"webgl","renderers":[{"id":"48527"},{"id":"48534"},{"id":"48541"},{"id":"48548"}],"title":{"id":"48553"},"toolbar":{"id":"48480"},"toolbar_location":null,"width":496,"x_range":{"id":"48454"},"x_scale":{"id":"48458"},"y_range":{"id":"48456"},"y_scale":{"id":"48460"}},"id":"48453","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48531","type":"VBar"},{"attributes":{},"id":"48610","type":"UnionRenderers"},{"attributes":{},"id":"48454","type":"DataRange1d"},{"attributes":{},"id":"48611","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48536","type":"Span"},{"attributes":{"ticks":[0,1,2,3]},"id":"48551","type":"FixedTicker"},{"attributes":{},"id":"48458","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48553","type":"Title"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48513","type":"PolyAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48598"},"selection_policy":{"id":"48597"}},"id":"48537","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48526","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48524","type":"VBar"},{"attributes":{},"id":"48588","type":"BasicTickFormatter"},{"attributes":{},"id":"48589","type":"AllLabels"},{"attributes":{},"id":"48591","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"48477","type":"HoverTool"},{"attributes":{},"id":"48592","type":"AllLabels"},{"attributes":{"overlay":{"id":"48479"}},"id":"48474","type":"LassoSelectTool"},{"attributes":{},"id":"48475","type":"UndoTool"},{"attributes":{"axis":{"id":"48466"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48469","type":"Grid"},{"attributes":{},"id":"48471","type":"PanTool"},{"attributes":{},"id":"48470","type":"ResetTool"},{"attributes":{"children":[{"id":"48623"},{"id":"48621"}]},"id":"48624","type":"Column"},{"attributes":{},"id":"48593","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"48478"}},"id":"48472","type":"BoxZoomTool"},{"attributes":{},"id":"48594","type":"Selection"},{"attributes":{},"id":"48476","type":"SaveTool"},{"attributes":{},"id":"48473","type":"WheelZoomTool"},{"attributes":{"tools":[{"id":"48470"},{"id":"48471"},{"id":"48472"},{"id":"48473"},{"id":"48474"},{"id":"48475"},{"id":"48476"},{"id":"48477"}]},"id":"48480","type":"Toolbar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48478","type":"BoxAnnotation"},{"attributes":{},"id":"48595","type":"UnionRenderers"},{"attributes":{},"id":"48596","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48608"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48609"},"ticker":{"id":"48497"}},"id":"48496","type":"LinearAxis"},{"attributes":{"axis":{"id":"48496"},"coordinates":null,"group":null,"ticker":null},"id":"48499","type":"Grid"},{"attributes":{},"id":"48494","type":"LinearScale"},{"attributes":{},"id":"48497","type":"BasicTicker"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48479","type":"PolyAnnotation"},{"attributes":{},"id":"48597","type":"UnionRenderers"},{"attributes":{},"id":"48598","type":"Selection"}],"root_ids":["48624"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"e1648ff5-4487-40bc-83c8-ea6ccff747c3","root_ids":["48624"],"roots":{"48624":"97e9de7c-2957-47e6-8f3a-456bf75e8874"}}];
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