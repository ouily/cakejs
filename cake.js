(function() {

    "use strict";

    window["Cake"] = function() {

        var routes = {};

        /**
         * Event fired when hash change
         **/

        window.addEventListener("hashchange", function(event) {
            var hash = window.location.hash;

            if (hash.charAt(1) == "/") {
                hash = hash.substr(2);
            }
            if (hash.charAt(hash.length - 1) == "/") {
                hash = hash.substr(0, hash.length - 1);
            }

            if (routes[hash]) {
                window["Cake"]["controllers"][routes[hash]["controller"]][routes[hash]["action"]]();
            } else {
                var tab = hash.split("/");
                var controller = tab[0];
                var action = tab[1];
                var params = tab.slice(2);

                window["Cake"]["controllers"][controller][action](params);
            }

        });

        return {

            /**
             * Attach controller to Cake
             **/

            attachController: function(name, ctrl) {
                window["Cake"]["controllers"][name] = ctrl;
            },

            /**
             * Attach route to controller/action
             **/

            route: function(str, tab) {
                routes[str] = tab;
            }
            controllers: {}
        };
    }();

})();