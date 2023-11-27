function calculateTriangleArea(base, height) {
    if (base > 0 && height > 0) {
      return (base / 2 * height) ;
    } else {
      return "Base and height must be positive numbers.";
    }
  }
  
  // Example usage:
  const baseLength = 5;
  const heightLength = 8;
  
  const areaOfTriangle = calculateTriangleArea(baseLength, heightLength);
  
  console.log("The area of the triangle is:", areaOfTriangle);