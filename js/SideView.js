AFRAME.registerComponent("place-side-view", {
  init: function() {
    this.createPlaces();
  },
  tick: function() {
    
    }
  },
  createPlaces: function() {
    const sideViewContainer = document.querySelector(
      "#side-view-container"
    );

    let prevoiusXPosition = -150;
    let prevoiusYPosition = 30;

    for (var i = 1; i <= 4; i++) {
      
  },
  createPlaceThumbNail: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    
    entityEl.setAttribute("id", `place-${id}`);

    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 2.5
    });

    entityEl.setAttribute("material", {
      
});
