# Moonton SDK utility: make_context

from moonton_sdk.core.context import MoontonContext


def make_context_util(ctxmap, basectx):
    return MoontonContext(ctxmap, basectx)
