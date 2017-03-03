sublime text3
====

配置
----

- auto save
```
"rulers":
  [
    80,
    100
  ],
  "save_on_focus_lost": true,
  "show_encoding": true,
  "show_full_path": true,
  "spell_check": false,
  "tab_size": 4,
  "translate_tabs_to_spaces": true,
  "update_check": false
```
- material-theme

  - Type "install package" and press enter. Then search for "Material Theme"
  - Preferences > Packages Settings and choose Material Theme > Activate Material Theme
- editorconfig
- [prettify](https://github.com/victorporof/Sublime-HTMLPrettify)
  - html,css,js format code(cmd+shift+h)
  - blank line 不保留? `.jsbeautifyrc`

  ```
  {
  "html": {
    "max_preserve_newlines": 1, // 在一个chunk中允许的最大换行数（0表示不允许）
    // 以下设置了没效果
    "blank_line": "", // This is how a blank line is to appear (up to the newline character).
    "keep_blank_lines": true, // If true, preserve one blank where blank(s) are encountered.
    "add_blank_lines_around_comments": true, // If true, set off comment blocks with blanks.
    "add_blank_line_after_doc_string": true, // If true, add blank line after doc strings.
    }
  }
  ```
- scss,sass: Syntax Highlighting for Sass
- Highlighter, show color for hex or rgb
- eslint format
- local history
- key
  - `Ctrl+Shift+M` : 选中花括号里面的全部内容不包括{}
  - `{ "keys": ["alt+/"], "command": "auto_complete" },`: auto complete
  - `cmd+up`: start of file
  - `cmd+down`: end of file
