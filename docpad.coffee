# DocPad Configuration File
# http://docpad.org/docs/config

moment = require('moment')

# Define the DocPad Configuration
docpadConfig = {
  templateData:
    site:
      title: "Pusle med Nanni"
      # The website description (for SEO)
      description: """
        Pusle med Nanni.
        """

      # The website keywords (for SEO) separated by commas
      keywords: """

        """

    # -----------------------------
    # Helper Functions

    getPreparedDate: ->
      moment(@document.date).format('DD.MM.YYYY HH:mm:ss')

    # Get the prepared site/document title
    # Often we would like to specify particular formatting to our page's title
    # we can apply that formatting here
    getPreparedTitle: ->
      # if we have a document title, then we should use that and suffix the site's title onto it
      if @document.title
          "#{@document.title} | #{@site.title}"
      # if our document does not have its own title, then we should just use the site's title
      else
          @site.title

    # Get the prepared site/document description
    getPreparedDescription: ->
      # if we have a document description, then we should use that, otherwise use the site's description
      @document.description or @site.description

    # Get the prepared site/document keywords
    getPreparedKeywords: ->
      # Merge the document keywords with the site keywords
      @site.keywords.concat(@document.keywords or []).join(', ')

    groupMenu: (pages) ->
      grps = pages.reduce((res, cur) ->
        (res[cur.meta.group or ''] or= []).push(cur)
        res
      {})
      Object.keys(grps).map((k) ->
        res =
          name: k
          pages: grps[k]
        res
      )

  localeCode: 'de'

  collections:
    pages: ->
      @getCollection("html").findAllLive({isPage:true}, [{order:1}])
    samples: ->
      @getFilesAtPath({relativeOutPath: 'images\\slides'})

  events:
    # Write After
    # Used to minify our assets with grunt
    writeAfter: (opts,next) ->
      # Prepare
      safeps = require('safeps')
      docpad = @docpad
      rootPath = docpad.getConfig().rootPath
      gruntPath = 'grunt.cmd'
      env = docpad.getConfig().env or 'development'

      # Perform the grunt `min` task
      command = [gruntPath, env]

      # Execute
      safeps.spawn(command, {cwd:rootPath,output:true}, next)

      # Chain
      @
      
  environments:
    static:
      outPath: 'build'
}

# Export the DocPad Configuration
module.exports = docpadConfig
