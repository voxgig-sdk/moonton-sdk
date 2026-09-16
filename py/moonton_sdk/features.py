# Moonton SDK feature factory

from moonton_sdk.feature.base_feature import MoontonBaseFeature
from moonton_sdk.feature.ratelimit_feature import MoontonRatelimitFeature
from moonton_sdk.feature.retry_feature import MoontonRetryFeature
from moonton_sdk.feature.test_feature import MoontonTestFeature
from moonton_sdk.feature.timeout_feature import MoontonTimeoutFeature


_FEATURES = {
    "base": lambda: MoontonBaseFeature(),
    "ratelimit": lambda: MoontonRatelimitFeature(),
    "retry": lambda: MoontonRetryFeature(),
    "test": lambda: MoontonTestFeature(),
    "timeout": lambda: MoontonTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
