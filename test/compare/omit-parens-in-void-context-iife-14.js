/*{
    "options": {
        "preserveCompletionValue": false
    }
}*/
switch (cond) {
default:
  // do not optimize it
  (function () {
    print('ok');
  }());
}
