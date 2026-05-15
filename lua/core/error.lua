-- Moonton SDK error

local MoontonError = {}
MoontonError.__index = MoontonError


function MoontonError.new(code, msg, ctx)
  local self = setmetatable({}, MoontonError)
  self.is_sdk_error = true
  self.sdk = "Moonton"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MoontonError:error()
  return self.msg
end


function MoontonError:__tostring()
  return self.msg
end


return MoontonError
