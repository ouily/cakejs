# CakeJS

## Usage

**Attach controller**

```
Cake.attachController("animations", {
  show: function(params) {
    // #/animations/show/2
  },
  delete: function(params) {
    // #/animations/delete/1
  }
});
```

**Routing**

```
Cake.route("la-page-des-animations", {controller: "animations", action: "show"});
```
