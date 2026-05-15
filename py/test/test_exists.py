# ProjectName SDK exists test

import pytest
from moonton_sdk import MoontonSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MoontonSDK.test(None, None)
        assert testsdk is not None
