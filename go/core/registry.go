package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGameEntityFunc func(client *MoontonSDK, entopts map[string]any) MoontonEntity

