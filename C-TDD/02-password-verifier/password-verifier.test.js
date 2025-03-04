let verify = require("./password-verifier");

describe("requirement one", () => {
  test("return Password rejected if password is less than 8 characters", function () {
    // Arrange
    let password = "Rahwa";
    // Act
    let result = verify(password);
    // Assert
    let expected = "Password rejected";

    expect(result).toEqual(expected);
  });
});

describe("requirement two", () => {
  test("return Password rejected if password is null", function () {
    // Arrange
    let password = null;
    // Act
    let result = verify(password);
    // Assert
    let expected = "Password rejected";

    expect(result).toEqual(expected);
  });
});

describe("requirement three", () => {
  test("return Password rejected if password does not have at least 1 uppercase letter ", function () {
    // Arrange
    let password = " rahwashiden";
    // Act
    let result = verify(password);
    // Assert
    let expected = "Password rejected";

    expect(result).toEqual(expected);
  });
});

describe("requirement four", () => {
  test("return Password rejected if password does not have at least 1 number ", function () {
    // Arrange
    let password = "RahwaShiden";
    // Act
    let result = verify(password);
    // Assert
    let expected = "Password rejected";

    expect(result).toEqual(expected);
  });
});

describe("requirement five", () => {
  test("return Password accepted if all four requirements are met ", function () {
    // Arrange
    let password = "rahwashiden28";
    // Act
    let result = verify(password);
    // Assert
    let expected = "Password rejected";

    expect(result).toEqual(expected);
  });
});
