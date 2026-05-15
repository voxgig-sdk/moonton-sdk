# Moonton SDK utility: feature_add
module MoontonUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
