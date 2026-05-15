# Moonton SDK utility: make_context

from core.context import MoontonContext


def make_context_util(ctxmap, basectx):
    return MoontonContext(ctxmap, basectx)
