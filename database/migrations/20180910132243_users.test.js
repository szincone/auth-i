const _20180910132243_users = require("./20180910132243_users")
// @ponicode
describe("_20180910132243_users.up", () => {
    test("0", () => {
        let callFunction = () => {
            _20180910132243_users.up({ schema: { createTable: () => "da7588892" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _20180910132243_users.up({ schema: { createTable: () => "c466a48309794261b64a4f02cfcc3d64" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _20180910132243_users.up({ schema: { createTable: () => 12345 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _20180910132243_users.up({ schema: { createTable: () => "bc23a9d531064583ace8f67dad60f6bb" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _20180910132243_users.up({ schema: { createTable: () => 9876 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _20180910132243_users.up(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_20180910132243_users.down", () => {
    test("0", () => {
        let callFunction = () => {
            _20180910132243_users.down({ schema: { dropTableIfExists: () => false } }, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _20180910132243_users.down({ schema: { dropTableIfExists: () => false } }, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _20180910132243_users.down({ schema: { dropTableIfExists: () => true } }, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _20180910132243_users.down({ schema: { dropTableIfExists: () => true } }, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _20180910132243_users.down(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
