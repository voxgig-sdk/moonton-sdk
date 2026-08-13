# Moonton SDK feature factory

from moonton_sdk.feature.base_feature import MoontonBaseFeature
from moonton_sdk.feature.test_feature import MoontonTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MoontonBaseFeature(),
        "test": lambda: MoontonTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
