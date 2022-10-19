#import "RCTNativeSampleModule.h"
#import <React/RCTLog.h>

@implementation RCTNativeSampleModule
RCT_EXPORT_MODULE();
//RCT_EXPORT_METHOD(getHelloWorld:(NSString *)first second:(NSString *)second callback: (RCTResponseSenderBlock)callback) {
//  RCTLogInfo(@"Hello World %@ at %@", first, second);
//  NSString *message = @"Hello World asd";
//  callback(@[message]);
////  NSString *message = @"Hello World: %@ at %@";
////  return message;
//}

RCT_EXPORT_METHOD(getHelloWorld:(NSString *)name) {
  RCTLogInfo(@"Hello %@ ", name);
//  resolve(@[name]);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params
{
  RCTLog(@"Hello world 2 called");
  return std::make_shared<facebook::react::NativeSampleModuleSpecJSI>(params);
}
@end

