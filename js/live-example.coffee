loadPhoneSample = (options, cb) ->

  $.ajax
    url: options.logic
    dataType: "text"
    success: (adData) ->

      $.ajax
        url: options.manifest
        dataType: "text"
        success: (manifestData) ->

          adEditor = ace.edit options.adEditor
          adEditor.setValue adData

          manifestEditor = ace.edit options.manifestEditor
          manifestEditor.setValue manifestData

          reload = ->
            $(options.parentDiv).html ""
            AJS._initialized = false

            canvasDiv = options.parentDiv.split("#").join ""

            (->
              eval """
                #{manifestEditor.getSession().getValue()}

                AJS.init(function() {
                  AJS.loadManifest(textures, function() {
                    #{adEditor.getSession().getValue()}
                  });
                }, #{options.width}, #{options.height}, "#{canvasDiv}");
              """
            )()

          reload()

          adEditor.gotoLine 1
          manifestEditor.gotoLine 1

          # Give the callback the reload method
          cb reload

loadAd = (options) ->

  $.ajax
    url: options.logic
    dataType: "text"
    success: (adData) ->

      $.ajax
        url: options.manifest
        dataType: "text"
        success: (manifestData) ->

          $(options.parentDiv).html ""
          AJS._initialized = false

          canvasDiv = options.parentDiv.split("#").join ""

          eval """
            #{manifestData}

            AJS.init(function() {
              AJS.loadManifest(textures, function() {
                #{adData}
              });
            }, #{options.width}, #{options.height}, "#{canvasDiv}");
          """
