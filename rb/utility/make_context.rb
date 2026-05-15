# Moonton SDK utility: make_context
require_relative '../core/context'
module MoontonUtilities
  MakeContext = ->(ctxmap, basectx) {
    MoontonContext.new(ctxmap, basectx)
  }
end
