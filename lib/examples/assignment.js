var globalVar = 123;

function aFunction() {
  // Never ever do this
  globalScopingSideEffect = "wuh oh";

  // Do this
  // var globalScopingSideEffect = "wuh oh";
}

define("global_scoping", function() {
  aFunction();
  if (typeof globalScopingSideEffect !== 'undefined') {
    util.puts(globalScopingSideEffect);
  }
  util.puts(globalVar);
});

define("defaulting", function(){
  // A variable can be defaulted with the || operator
  var uninitialized = undefined;
  uninitialized = uninitialized || "now initialized";
  util.puts(uninitialized);

  // More on equality in a bit ...
});

