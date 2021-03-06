
define("dynamic_typing", function(){
  // album starts off as a string
  var album = 'heroes';
  util.puts(album);

  // the language allows the same variable to be an integer
  album = 3;
  util.puts(album);
});

define("duck_typing", function(){
  var customObject = {};
  customObject.toString = function() {
    return "i'm a custom object";
  };

  var newObject = {};
  newObject[customObject] = 1;

  // util.puts doesn't care what you hand it,
  // as long as it responds to toString()
  util.puts([1,2,3,4]);
  util.puts(customObject);

  // Can you do duck typing in Java?

  function foo(x) {
    console.log(x.bar());
  }

  foo({ bar: function () { return 123; } });
  foo({ bar: function () { return 456; } });
});

define("boolean_coercion", function() {
  // Implicit type coercion to booleans WILL bite you
  if (0) {
    util.puts("We should never get here");
  }

  if ('') {
    util.puts("Nor here");
  }

  if (null) {
    util.puts("Nor here ... null");
  }

  if (undefined) {
    util.puts("Nor here ... undefined");
  }

  var status = 0;

  // Strict equality operators are your friend
  // ==
  // ===
  // !=
  // !==
  if (status != false) { // TODO fix this :)
    util.puts("We want to get here");
  }
});

define("type_coercion", function(){
  // Watch for implicit type conversion between strings and numeric types
  util.puts("Does 1 == '1'?\t" + cyan(1 == '1'));
  util.puts("Does 1 === '1'?\t" + cyan(1 === '1'));
  util.puts("What's 3 + '5'?\t" + cyan(3 + '5'));
});

define("misc_casting", function(){
  util.puts(new Date);
  util.puts(new Date().getTime());
  util.puts(+new Date);
  util.puts(10 + new Date);
  util.puts(10 + +new Date);
});

