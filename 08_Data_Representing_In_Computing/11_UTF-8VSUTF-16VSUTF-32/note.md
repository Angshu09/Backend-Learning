# Note on UTF (Unicode Transformation Format)

**UTF (Unicode Transformation Format)** refers to encoding standards used to represent text in digital form, based on the Unicode character set.

## Common UTF Encodings

### UTF-8
- Variable-length encoding using 1 to 4 bytes per character.
- Optimized for ASCII characters (1 byte for characters in the range U+0000 to U+007F).
- Capable of representing every character in the Unicode standard.
- Widely used in web applications, programming languages, and modern operating systems.

### UTF-16
- Uses 2 or 4 bytes per character.
- More efficient than UTF-8 for some languages, such as those with many non-Latin characters (e.g., Chinese, Japanese, Korean).
- Common in environments like Windows and Java.

### UTF-32
- Uses 4 bytes for every character.
- Simplifies character indexing because all characters are the same size.
- Not space-efficient; typically used in internal processing where fixed-width encoding is beneficial.

## Notes
- UTF-8 is the most widely adopted encoding and is generally recommended unless specific requirements suggest otherwise.
- Incorrect encoding interpretation can lead to unreadable characters or data corruption. Ensure encoding consistency when reading or writing text files.


## String.fromCharCode()
- String.fromCharCode() is a static method of the String object in JavaScript. It converts one or more numeric Unicode code points (char codes) into their corresponding single-character strings.

