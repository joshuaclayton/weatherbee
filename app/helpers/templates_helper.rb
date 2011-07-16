module TemplatesHelper
  extend self

  def build_jst
    window_jst = {}

    Dir.glob(Rails.root.join("app", "views", "**", "*.jst")).each do |path|
      path = path.to_s
      view_root = Rails.root.join("app", "views").to_s
      key = path.gsub(view_root, "").gsub(".jst", "").gsub(/^\//, "")

      window_jst[key] = File.new(path).read
    end

    window_jst
  end
end
