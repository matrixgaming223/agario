function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: false
    });
}

define("GUEST", 0);
define("USER", 1);
define("MODER", 2);
define("ADMIN", 5);
define("YT", 2); // YouTube
define("SUP", 3); // supervisor