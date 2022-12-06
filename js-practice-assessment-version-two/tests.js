"use strict";

/**
 * Tests for the following functions. See README.md for more detail.
 * isGreaterThan
 * isLessThan
 * isEqualNumber
 * isEqual
 * isNot
 * calcAbs
 * calcCube
 * isTypeMatch
 * findLongestString
 * isFactor
 */


describe("isGreaterThan", function () {
    it('should be a defined function', function () {
        expect(typeof isGreaterThan).toBe('function');
    });
    it('should return true when passed 9.3, 7.4.', function () {
        expect(isGreaterThan(9.3, 7.4)).toBe(true)
    });
    it('shound return false when passed 3.14, 3.14.', function () {
        expect(isGreaterThan(3.14, 3.14)).toBe(false);
    });
    it('should return false when passed 7.4, 9.3.', function () {
        expect(isGreaterThan(7.4, 9.3)).toBe(false);
    });
    it('should return false when passed -9.3, 7.4.', function () {
        expect(isGreaterThan(-9.3, 7.4)).toBe(false);
    });
    it('should return false when passed -3.14, 3.14', function () {
        expect(isGreaterThan(-3.14, 3.14)).toBe(false);
    });
    it('should return false when passed -7.4, 9.3.', function () {
        expect(isGreaterThan(-7.4, 9.3)).toBe(false);
    });
    it('should return true when passed 9.3, -7.4.', function () {
        expect(isGreaterThan(9.3, -7.4)).toBe(true);
    });
    it('should return true when passed 3.14, -3.14.', function () {
        expect(isGreaterThan(3.14, -3.14)).toBe(true);
    });
    it('should return true when passed 7.4, -9.3.', function () {
        expect(isGreaterThan(7.4, -9.3)).toBe(true);
    });
    it('should return false when passed -9.3, -7.4.', function () {
        expect(isGreaterThan(-9.3, -7.4)).toBe(false);
    });
    it('should return false when passed -3.14, -3.14.', function () {
        expect(isGreaterThan(-3.14, -3.14)).toBe(false);
    });
    it('should return true when passed -7.4, -9.3.', function () {
        expect(isGreaterThan(-7.4, -9.3)).toBe(true);
    });
    it('should return false when passed null, null.', function () {
        expect(isGreaterThan(null, null)).toBe(false);
    });
    it('should return false when passed \'Seven\', \'eight\'', function () {
        expect(isGreaterThan('Seven', 'eight')).toBe(false);
    });
});


describe("isLessThan", function () {
    it('should be a defined function', function () {
        expect(typeof isLessThan).toBe('function');
    });
    it('should return false when passed 9.3, 7.4.', function () {
        expect(isLessThan(9.3, 7.4)).toBe(false)
    });
    it('should return false when passed 3.14, 3.14.', function () {
        expect(isLessThan(3.14, 3.14)).toBe(false);
    });
    it('should return true when passed 7.4, 9.3.', function () {
        expect(isLessThan(7.4, 9.3)).toBe(true);
    });
    it('should return true when passed -9.3, 7.4.', function () {
        expect(isLessThan(-9.3, 7.4)).toBe(true);
    });
    it('should return true when passed -3.14, 3.14', function () {
        expect(isLessThan(-3.14, 3.14)).toBe(true);
    });
    it('should return true when passed -7.4, 9.3.', function () {
        expect(isLessThan(-7.4, 9.3)).toBe(true);
    });
    it('should return false when passed 9.3, -7.4.', function () {
        expect(isLessThan(9.3, -7.4)).toBe(false);
    });
    it('should return false when passed 3.14, -3.14.', function () {
        expect(isLessThan(3.14, -3.14)).toBe(false);
    });
    it('should return false when passed 7.4, -9.3.', function () {
        expect(isLessThan(7.4, -9.3)).toBe(false);
    });
    it('should return true when passed -9.3, -7.4.', function () {
        expect(isLessThan(-9.3, -7.4)).toBe(true);
    });
    it('should return false when passed 3.14, -3.14.', function () {
        expect(isLessThan(3.14, -3.14)).toBe(false);
    });
    it('should return false when passed -7.4, -9.3.', function () {
        expect(isLessThan(-7.4, -9.3)).toBe(false);
    });
    it('should return false when passed null, null.', function () {
        expect(isLessThan(null, null)).toBe(false);
    });
    it('should return false when passed \'Seven\', \'eight\'', function () {
        expect(isLessThan('Seven', 'eight')).toBe(false);
    });
});


describe("isEqualNumber", function () {
    it('should be a defined function', function () {
        expect(typeof isEqualNumber).toBe('function');
    });
    it('should return false when passed 9.3, 7.4.', function () {
        expect(isEqualNumber(9.3, 7.4)).toBe(false)
    });
    it('should return true when passed 3.14, 3.14.', function () {
        expect(isEqualNumber(3.14, 3.14)).toBe(true);
    });
    it('should return false when passed 7.4, 9.3.', function () {
        expect(isEqualNumber(7.4, 9.3)).toBe(false);
    });
    it('should return false when passed -9.3, 7.4.', function () {
        expect(isEqualNumber(-9.3, 7.4)).toBe(false);
    });
    it('should return false when passed the -3.14, 3.14', function () {
        expect(isEqualNumber(-3.14, 3.14)).toBe(false);
    });
    it('should return false when passed -7.4, 9.3.', function () {
        expect(isEqualNumber(-7.4, 9.3)).toBe(false);
    });
    it('should return false when passed 9.3, -7.4.', function () {
        expect(isEqualNumber(9.3, -7.4)).toBe(false);
    });
    it('should return false when passed 3.14, -3.14.', function () {
        expect(isEqualNumber(3.14, -3.14)).toBe(false);
    });
    it('should return false when passed 7.4, -9.3.', function () {
        expect(isEqualNumber(7.4, -9.3)).toBe(false);
    });
    it('should return false when passed -9.3, -7.4.', function () {
        expect(isEqualNumber(-9.3, -7.4)).toBe(false);
    });
    it('should return true when passed -3.14, -3.14.', function () {
        expect(isEqualNumber(-3.14, -3.14)).toBe(true);
    });
    it('should return false when passed -7.4, -9.3.', function () {
        expect(isEqualNumber(-7.4, -9.3)).toBe(false);
    });
    it('should return false when passed null, null.', function () {
        expect(isEqualNumber(null, null)).toBe(false);
    });
    it('should return false when passed \'Seven\', \'eight\'', function () {
        expect(isEqualNumber('Seven', 'eight')).toBe(false);
    });
});


describe("isEqual", function () {
    it('should be a defined function', function () {
        expect(typeof isEqual).toBe('function');
    });
    it('should return true when passed "Bill", "Bill".', function () {
        expect(isEqual("Bill", "Bill")).toBe(true)
    });
    it('shound return true when passed 9, 9.', function () {
        expect(isEqual(9, 9)).toBe(true);
    });
    it('should return true when passed null, null.', function () {
        expect(isEqual(null, null)).toBe(true);
    });
    it('should return true when passed false, false.', function () {
        expect(isEqual(false, false)).toBe(true);
    });
    it('should return false when passed "Codeup", "time"', function () {
        expect(isEqual("Codeup", "time")).toBe(false);
    });
    it('should return false when passed "James", "Jimmy".', function () {
        expect(isEqual("James", "Jimmy")).toBe(false);
    });
    it('should return false when passed null, true.', function () {
        expect(isEqual(null, true)).toBe(false);
    });
    it('should return false when passed true, false.', function () {
        expect(isEqual(true, false)).toBe(false);
    });
    it('should return false when passed "4", 4', function() {
        expect(isEqual('4', 4)).toBe(false);
    });
});


describe("isNot", function () {
    it('should be a defined function', function () {
        expect(typeof isNot).toBe('function');
    });
    it('should return true when passed false.', function () {
        expect(isNot(false)).toBe(true)
    });
    it('shound return false when passed true.', function () {
        expect(isNot(true)).toBe(false);
    });
    it('should return false when passed "Bob".', function () {
        expect(isNot("Bob")).toBe(false);
    });
    it('should return false when passed null.', function () {
        expect(isNot(null)).toBe(false);
    });
});


describe("calcAbs", function () {
    it('should be a defined function', function () {
        expect(typeof calcAbs).toBe('function');
    });
    it('should return 10 when passed 10.', function () {
        expect(calcAbs(10)).toBe(10)
    });
    it('shound return 17.3 when passed 17.3.', function () {
        expect(calcAbs(17.3)).toBe(17.3);
    });
    it('should return 1.1 when passed 2.7 - 3.8.', function () {
        expect(calcAbs(2.7 - 3.8)).toBeCloseTo(1.1, 0.1);
    });
    it('should return 0 when passed "Bob".', function () {
        expect(calcAbs("Bob")).toBe(0);
    });
    it('should return 0 when passed null.', function () {
        expect(calcAbs(null)).toBe(0);
    });
});


describe("calcCube", function () {
    it('should be a defined function', function () {
        expect(typeof calcCube).toBe('function');
    });
    it('should return 1000 when passed 10.', function () {
        expect(calcCube(10)).toBe(1000);
    });
    it('shound return 27 when passed 3.', function () {
        expect(calcCube(3)).toBe(27);
    });
    it('should return -64 when passed -4.', function () {
        expect(calcCube(-4)).toBe(-64);
    });
    it('should return 0 when passed "Bob".', function () {
        expect(calcCube("Bob")).toBe(0);
    });
    it('should return 0 when passed null.', function () {
        expect(calcCube(null)).toBe(0);
    });
});


describe("isTypeMatch", function () {
    it('should be a defined function', function () {
        expect(typeof isTypeMatch).toBe('function');
    });
    it('should return true when passed 16.3, -84.', function () {
        expect(isTypeMatch(16.3, -84)).toBe(true);
    });
    it('should return true when passed "Hello", " stranger".', function () {
        expect(isTypeMatch("Hello", " stranger")).toBe(true);
    });
    it('should return false when passed "Hello", 1984.', function () {
        expect(isTypeMatch("Hello", 1984)).toBe(false);
    });
    it('should return false when passed true, "stranger".', function () {
        expect(isTypeMatch(true, "stranger")).toBe(false);
    });
    it('should return false when passed null, 27.', function () {
        expect(isTypeMatch(null, 27)).toBe(false);
    });
});


describe("findLongestString", function () {
    it('should be a defined function', function () {
        expect(typeof findLongestString).toBe('function');
    });
    it('should return "Jethro" when passed "Jethro", "Tull".', function () {
        expect(findLongestString("Jethro", "Tull")).toBe("Jethro");
    });
    it('should return " stranger" when passed "Hello", " stranger".', function () {
        expect(findLongestString("Hello", " stranger")).toBe(" stranger");
    });
    it('should return "Hello" when passed "Hello", 1984.', function () {
        expect(findLongestString("Hello", 1984)).toBe("Hello");
    });
    it('should return "stranger" when passed true, "stranger".', function () {
        expect(findLongestString(true, "stranger")).toBe("stranger");
    });
    it('should return "" when passed null, 27.', function () {
        expect(findLongestString(null, 27)).toBe("");
    });
});


describe("isFactor", function () {
    it('should be a defined function', function () {
        expect(typeof isFactor).toBe('function');
    });
    it('should return true when passed 3, 9.', function () {
        expect(isFactor(3, 9)).toBe(true);
    });
    it('shound return true when passed -4, 16.', function () {
        expect(isFactor(-4, 16)).toBe(true);
    });
    it('should return false when passed 9, 3.', function () {
        expect(isFactor(9, 3)).toBe(false);
    });
    it('should return false when passed true, 2.', function () {
        expect(isFactor(true, 2)).toBe(false);
    });
    it('should return false when passed null, 13.', function () {
        expect(isFactor(null, 13)).toBe(false);
    });
    it('should return false when passed 0, 8.', function () {
        expect(isFactor(0, 8)).toBe(false);
    });
});
