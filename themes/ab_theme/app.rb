# Use the app.rb file to load Ruby code, modify or extend the models, or
# do whatever else you fancy when the theme is loaded.

module Nesta
  class App

    use Rack::Static, :urls => ["/ab_theme"], :root => "themes/ab_theme/public"

    helpers do
      def format_date(date)
        date.strftime("%B %d, %Y")
      end

      def show_1000_characters(body)
        body[0..1000]
      end

      def show_characters_over_1000(body)
        body[1001..10000]
      end

    end

    # Add new routes here.
  end
end
