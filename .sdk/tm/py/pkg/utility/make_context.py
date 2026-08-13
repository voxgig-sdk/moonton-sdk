# Moonton SDK utility: make_context

from projectname_sdk.core.context import MoontonContext


def make_context_util(ctxmap, basectx):
    return MoontonContext(ctxmap, basectx)
