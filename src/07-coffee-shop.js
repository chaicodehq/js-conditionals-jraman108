/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  const sizes = size.toLowerCase();
  const types = type.toLowerCase();

  if (sizes == "small") {
    if (types == "regular") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 3;
        } else {
          return 0.5 + 3;
        }
      } else if (extras.extraShot) {
        return 0.75 + 3;
      } else {
        return 3;
      }
    }
    if (types == "latte") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 3 + 1;
        } else {
          return 0.5 + 3 + 1;
        }
      } else if (extras.extraShot) {
        return 0.75 + 3 + 1;
      } else {
        return 3 + 1;
      }
    }
    if (types == "cappuccino") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 3 + 1.5;
        } else {
          return 0.5 + 3 + 1.5;
        }
      } else if (extras.extraShot) {
        return 0.75 + 3 + 1.5;
      } else {
        return 3 + 1.5;
      }
    }
    if (types == "mocha") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 3 + 2;
        } else {
          return 0.5 + 3 + 2;
        }
      } else if (extras.extraShot) {
        return 0.75 + 3 + 2;
      } else {
        return 3 + 2;
      }
    } else {
      return -1;
    }
  } else if (sizes == "medium") {
    if (types == "regular") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 4;
        } else {
          return 0.5 + 4;
        }
      } else if (extras.extraShot) {
        return 0.75 + 4 ;
      } else {
        return 4 ;
      }
    }
    if (types == "latte") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 4 + 1;
        } else {
          return 0.5 + 4 + 1;
        }
      } else if (extras.extraShot) {
        return 0.75 + 4 + 1;
      } else {
        return 4 + 1;
      }
    }

    if (types == "cappuccino") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 4 + 1.5;
        } else {
          return 0.5 + 4 + 1.5;
        }
      } else if (extras.extraShot) {
        return 0.75 + 4 + 1.5;
      } else {
        return 4 + 1.5;
      }
    }
    if (types == "mocha") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 4 + 2;
        } else {
          return 0.5 + 4 + 2;
        }
      } else if (extras.extraShot) {
        return 0.75 + 4 + 2;
      } else {
        return 4 + 2;
      }
    } else {
      return -1;
    }
  } else if (sizes == "large") {
    if (types == "regular") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 5;
        } else {
          return 0.5 + 5 ;
        }
      } else if (extras.extraShot) {
        return 0.75 + 5 ;
      } else {
        return 5;
      }
    }
    if (types == "latte") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 5+1;
        } else {
          return 0.5 + 5 +1;
        }
      } else if (extras.extraShot) {
        return 0.75 + 5 +1;
      } else {
        return 5+1;
      }
    }
    if (types == "cappuccino") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 5+1.50;
        } else {
          return 0.5 + 5 +1.50;
        }
      } else if (extras.extraShot) {
        return 0.75 + 5 +1.50;
      } else {
        return 5+1.50;
      }
    }
    if (types == "mocha") {
      if (extras.whippedCream) {
        if (extras.extraShot) {
          return 0.75 + 0.5 + 5+2;
        } else {
          return 0.5 + 5 +2;
        }
      } else if (extras.extraShot) {
        return 0.75 + 5 +2;
      } else {
        return 5+2;
      }
    } else {
      return -1;
    }
  } else {
    return -1;
  }
}
