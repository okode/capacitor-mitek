import Foundation

@objc public class Mitek: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
