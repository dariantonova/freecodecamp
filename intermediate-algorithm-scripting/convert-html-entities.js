// ❓ DESCRIPTION
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to
their corresponding HTML entities.
 */

// ✅ SOLUTION
function convertHTML(str) {
    const encoded = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&apos;',
    }
    return str.replace(/([&<>"'])/g, symb => encoded[symb]);
}

convertHTML("Dolce & Gabbana");