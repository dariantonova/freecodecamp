// ❓ DESCRIPTION
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// ✅ SOLUTION
function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').split(/[^a-z]+/gi).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');