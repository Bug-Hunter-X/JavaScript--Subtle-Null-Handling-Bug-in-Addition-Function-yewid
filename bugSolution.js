function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Handle both null values
  } else if (a === null || b === null) {
    return 0; // Handle single null value
  }
  return a + b; 
}