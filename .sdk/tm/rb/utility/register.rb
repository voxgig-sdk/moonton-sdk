# Moonton SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MoontonUtility.registrar = ->(u) {
  u.clean = MoontonUtilities::Clean
  u.done = MoontonUtilities::Done
  u.make_error = MoontonUtilities::MakeError
  u.feature_add = MoontonUtilities::FeatureAdd
  u.feature_hook = MoontonUtilities::FeatureHook
  u.feature_init = MoontonUtilities::FeatureInit
  u.fetcher = MoontonUtilities::Fetcher
  u.make_fetch_def = MoontonUtilities::MakeFetchDef
  u.make_context = MoontonUtilities::MakeContext
  u.make_options = MoontonUtilities::MakeOptions
  u.make_request = MoontonUtilities::MakeRequest
  u.make_response = MoontonUtilities::MakeResponse
  u.make_result = MoontonUtilities::MakeResult
  u.make_point = MoontonUtilities::MakePoint
  u.make_spec = MoontonUtilities::MakeSpec
  u.make_url = MoontonUtilities::MakeUrl
  u.param = MoontonUtilities::Param
  u.prepare_auth = MoontonUtilities::PrepareAuth
  u.prepare_body = MoontonUtilities::PrepareBody
  u.prepare_headers = MoontonUtilities::PrepareHeaders
  u.prepare_method = MoontonUtilities::PrepareMethod
  u.prepare_params = MoontonUtilities::PrepareParams
  u.prepare_path = MoontonUtilities::PreparePath
  u.prepare_query = MoontonUtilities::PrepareQuery
  u.result_basic = MoontonUtilities::ResultBasic
  u.result_body = MoontonUtilities::ResultBody
  u.result_headers = MoontonUtilities::ResultHeaders
  u.transform_request = MoontonUtilities::TransformRequest
  u.transform_response = MoontonUtilities::TransformResponse
}
