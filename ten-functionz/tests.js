(function() {

  "use strict";

  /** 
   * Tests for the following functions. See README.md for more detail.
   * isTrue
   * isFalse
   * not
   * addOne
   * isEven
   * isIdentical
   * isEqual
   * or
   * and
   * concat
   */
   

  const randomBoolean = Boolean(Math.round(Math.random()))
  const randomNumber = Math.ceil(Math.random() * 100)

  describe('concat', () => {
    it('should be a defined function', () => {
      expect(typeof concat).toBe('function');
    })
    it('should return a string when passed to strings', () => {
      expect(typeof concat("hello", "world")).toBe('string')
    })
    it('should return "helloworld" when passed "hello" and "world" as the two inputs.', () => {
      expect(concat("hello", "world")).toBe("helloworld");
    })
    it('should return "Codeup" when passed "Code" and "up" as the two inputs', () => {
      expect(concat("Code", "up")).toBe("Codeup")
    })
    it('should return "42" when passed the number 4 and 2, treating each input as a string', () => {
      expect(concat(4, 2)).toBe("42")
    })
    it('should return "truetrue" when passed true and true', () => {
      expect(concat(true, true)).toBe("truetrue")
    })
  }) 

  describe('and', () => {
    it('should be a defined function', () => {
      expect(typeof and).toBe('function')
    })
    it('should return a boolean when passed two boolean values', () => {
      expect(typeof and(randomBoolean, false)).toBe('boolean')
    })
    it('should return true when passed with true and true as the inputs', () => {
      expect(and(true, true)).toBe(true)
    })
    it('should return false when passed true and false as the inputs', () => {
      expect(and(false, true)).toBe(false)
    })
    it('should return false when passed false and false as inputs', () => {
      expect(and(false, false)).toBe(false)
    })
    it('should return "world" when passed the inputs "hello" and "world" in that order', () => {
      expect(and("hello", "world")).toBe("world")
    })
  })

  describe('or', () => {
    it('should be a defined function', () => {
      expect(typeof or).toBe('function')
    })
    it('should return true when passed true and true', () => {
      expect(or(true, true)).toBe(true);
    })
    it('should return true when passed true and one false as inputs', () => {
      expect(or(true, false)).toBe(true)
    })
    it('should return false when passed two false values', () => {
      expect(or(false, false)).toBe(false)
    })
    it('should return "hello" when passed the inputs "hello" and "world" in that order', () => {
      expect(or("hello", "world")).toBe("hello")
    })    
  })

  describe('isEqual', () => {
    it('should be a defined function', () => {
      expect(typeof isEqual).toBe('function');
    })
    it('should return a boolean value', () => {
      expect(typeof isEqual(randomNumber, randomNumber)).toBe('boolean')
    })
    it('should return true when passed 2 and "2" as inputs since they are equal in value', () => {
      expect(isEqual(2, "2")).toBe(true)
    })
    it('should return true when passed "3.6" and 3.6 as inputs, since they have the same value', () => {
      expect(isEqual(3.6, "3.6")).toBe(true)
    })
    it('should return true when passed true and 1, since == performs type coersion', () => {
      expect(isEqual(true, 1)).toBe(true)
    })
    it('should return true when passed 0 and false, since == performs type coersion', () => {
      expect(isEqual(0, false)).toBe(true)
    })
    it('should return false when passed "java" and "javascript" as inputs, since they are not equal in value', () => {
      expect(isEqual("java", "javascript")).toBe(false)
    })
    it('should return false when passed -4 and 5 as inputs', () => {
      expect(isEqual(-4, 5)).toBe(false)
    })
  })

  describe('isIdentical', () => {
    it('should be a defined function', () => {
      expect(typeof isIdentical).toBe('function');
    })
    it('should return a boolean value when called with a random number and random boolean since they are not the same data type or value', () => {
      expect(isIdentical(randomNumber, randomBoolean)).toBe(false)
    })
    it('should return true when passed ' + randomNumber + ' and ' + randomNumber, () => {
      expect(isIdentical(randomNumber, randomNumber)).toBe(true)
    })
    it('should return true when passed ' + randomBoolean + ' and ' + randomBoolean, () => {
      expect(isIdentical(randomBoolean, randomBoolean)).toBe(true)
    })
    it('should return false when passed 2 and "5", since they are not the same value and not the same data type', () => {
      expect(isIdentical(2, "5")).toBe(false)
    })
    it('should return false when passed "3" and 3, since they are not the same data type', () => {
      expect(isIdentical("3", 3)).toBe(false)
    })
  })

  describe('isEven', () => {
    it('should be a defined function', () => {
      expect(typeof isEven).toBe('function');
    })
    it('should return a boolean value when passed any number', () => {
      expect(typeof isEven(randomNumber)).toBe('boolean')
    })
    it('should return true when passed 2', () => {
      expect(isEven(2)).toBe(true)
    })
    it('should return true when passed -4', () => {
      expect(isEven(-4)).toBe(true)
    })
    it('should return true when passed "8"', () => {
      expect(isEven("8")).toBe(true)
    })
    it('should return true when passed 0', () => {
      expect(isEven(0)).toBe(true)
    })
    it('should return false when passed the number 3', () => {
      expect(isEven(3)).toBe(false)
    })
    it('should return false when passed a non-numeric string like "banana"', () => {
      expect(isEven("banana")).toBe(false)
    })
    it('should return false when passed the boolean value ' + randomBoolean, () => {
      expect(isEven(randomBoolean)).toBe(false)
    })
  })

  describe('addOne', () => {
    it('should be a defined function', () => {
      expect(typeof addOne).toBe('function');
    })
    it('should return a number when passed a number', () => {
      expect(addOne(randomNumber)).toBe(randomNumber + 1)
    })
    it('should return -4 when passed "-5"', () => {
      expect(addOne("-5")).toBe(-4)
    })
    it('should return Infinity when passed Infinity', () => {
      expect(addOne(Infinity)).toBe(Infinity)
    })
    it('should return 1 when passed "0"', () => {
      expect(addOne("0")).toBe(1)
    })
  })

  describe('isFalse', () => {
    it('should be a defined function', () => {
      expect(typeof isFalse).toBe('function');
    })
    it('should return a boolean when passed any value', () => {
      expect(typeof isFalse(randomBoolean)).toBe('boolean')
    })
    it('should return true when passed the value of false', () => {
      expect(isFalse(false)).toBe(true)
    })
    it('should return false when passed true', () => {
      expect(isFalse(true)).toBe(false)
    })
    it('should return false when passed undefined', () => {
      expect(isFalse(undefined)).toBe(false)
    })
    it('should return false when passed null', () => {
      expect(isFalse(null)).toBe(false)
    })
    it('should return false when passed the number ' + randomNumber, () => {
      expect(isFalse(randomNumber)).toBe(false)
    })
    it('should return false when passed any string', () => {
      expect(isFalse("hello world")).toBe(false)
    })
  })

  describe('not', () => {
    it('should be a defined function', () => {
      expect(typeof not).toBe('function');
    })
    it('should return true when passed false', () => {
      expect(not(false)).toBe(true)
    })
    it('should return true when passed null', () => {
      expect(not(null)).toBe(true)
    })
    it('should return true when passed 0', () => {
      expect(not(0)).toBe(true) })
    it('should return true when passed undefined', () => {
      expect(not(undefined)).toBe(true)
    })
    it('should return false when passed 5', () => {
      expect(not(5)).toBe(false)
    })
    it('should return true when passed NaN', () => {
      expect(not(NaN)).toBe(true)
    })
    it('should return true when passed the empty string ""', () => {
      expect(not("")).toBe(true)
    })
    it('should return false when passed true', () => {
      expect(not(true)).toBe(false)
    })
    it('should return false when passed the string "hello"', () => {
      expect(not("hello")).toBe(false)
    })
    it('should return false when passed the number 123', () => {
      expect(not(123)).toBe(false)
    })
  })



  describe('isTrue', () => {
    it('should be a defined function', () => {
      expect(typeof isTrue).toBe('function')
    })
    it('should return a boolean value', () => {
      expect(typeof isTrue(randomBoolean)).toBe('boolean')
    })
    it('should return true when passed the boolean true', () => {
      expect(isTrue(true)).toBe(true)
    })
    it('should return false when passed the boolean false as the input', () => {
      expect(isTrue(false)).toBe(false)
    })
    it('should return false when passed a number as the input', () => {
      expect(isTrue(randomNumber)).toBe(false);
    })
    it('should return false when passed a string as input', () => {
      expect(isTrue("hello world")).toBe(false);
    })
  })

})();
