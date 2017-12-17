
Module.register("MMM-Xmas", {
   
    defaults: {
        updateInterval: 5 * 1000
    },

    getStyles: function() {
        return ["MMM-Xmas.css"];
    },

    start: function() {
        Log.info("Starting module: " + this.name);
          console.log("Running Lights....");
          },
   
  
    getDom: function() {
    	    var wrapper  = document.createElement("ul");
            wrapper.classList.add("strand");
            wrapper.innerHTML = "<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>";
        return wrapper;
    },
});