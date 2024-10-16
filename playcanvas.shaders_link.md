# Playcanvas Effects and Shaders link
## Docs, Project or Forum links

- [About lighting](https://developer.playcanvas.com/en/user-manual/graphics/lighting/lights/)
- [Bokeh Effect - background blur effect](https://forum.playcanvas.com/t/bokeh-effect-just-for-background/26832)
- [Planar mirror effect](https://playcanvas.com/project/717166/overview/planar-mirror-reflection)
- [Depth Of Feild Effect](https://playcanvas.com/project/6461/overview)
- [Lightmaps docs](https://developer.playcanvas.com/user-manual/graphics/lighting/runtime-lightmaps/)
- [Water Refelection](https://playcanvas.com/project/712960/overview/water-reflections)
- [Motion Blue Effect](https://playcanvas.com/project/362233/overview/tutorial-motion-blur)
- [Custom Post Effect](https://playcanvas.com/project/406045/overview/tutorial-custom-post-effect)
- [3rd Person Veiw on Vehicle](https://playcanvas.com/project/715737/overview/vehicle-physics-3rd-person-cam)
- [Shader Tune](https://playcanvas.com/editor/scene/1389397)
- [Downtown Low Poly 3D Model](https://www.cgtrader.com/free-3d-models/exterior/cityscape/downtown-low-poly-3d-model)
- [NYC Block Set 8](https://www.cgtrader.com/free-3d-models/exterior/cityscape/nyc-block-set-8-f61d6947467ccd3aa5af24db320235dd)
- [Truck - Scania S730 2 Axle 2016](https://sketchfab.com/3d-models/scania-s730-2-axle-2016-891ee120d3734b439a9a5e63eaa10a4c)
- [Bus - Generic Town Bus](https://sketchfab.com/3d-models/generic-town-bus-14fe03d792914d51b6c6250b393c44fd)
- [Islands](https://sketchfab.com/3d-models/islands-0771b83eab04412e9df9aaf0083938df)
- [Vehicle Car Parts Collection](https://sketchfab.com/rSoXy/collections/vehicle-car-parts-1e5fae362968414c876ed747fac860ed)
- [Sportcar Concept - Chanel Roadster by Max Hordin](https://sketchfab.com/3d-models/sportcar-concept-chanel-roadster-by-max-hordin-41a55cde9adb45a9b54e146ea0b421d7)
- [City Collection by elike](https://sketchfab.com/elike/collections/city-371c1947a01240dc8a33cb26020e1226)
- [City Assets Collection by william.sayin](https://sketchfab.com/william.sayin/collections/city-assets-31b92166940a4099816a249f39200687)
- [Game Ready City Collection by CrystalStarseed](https://sketchfab.com/CrystalStarseed/collections/game-ready-city-30702135311f4737afd0ab5948e303be)
- [Profile of Daniel Zhabotinsky](https://sketchfab.com/DanielZhabotinsky)
- [Profile of Ardmation](https://sketchfab.com/ardmation)
- [Mazda E-2200 Pickup Truck](https://sketchfab.com/3d-models/mazda-e-2200-pickup-truck-3d6fe0687b074e2bb57bd931a9621d58)
- [Lightbody Pickup '85 Low Poly Model](https://sketchfab.com/3d-models/lightbody-pickup-85-low-poly-model-67beae18c3d24be68f9c8f0ec382d8e3)

***
```
// Assuming you have imported a model called "myModel" in the editor

// Access the PlayCanvas asset registry
var assetRegistry = this.app.assets;

// Get the "Template" asset for your model
var modelTemplate = assetRegistry.get('myModelTemplate'); // Replace "myModelTemplate" with the actual template asset name

// Create a new entity using the template
var newEntity = new pc.Entity();
newEntity.set('template', modelTemplate);


// Add the new entity to the scene hierarchy
this.app.root.addChild(newEntity);
```


```const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.3) {
      // Add your animation logic here
      entry.target.classList.add('animate');
    } else {
      // Remove animation if needed when the element goes out of view
      entry.target.classList.remove('animate');
    }
  });
}, { threshold: 0.3 });

const targetElement = document.querySelector('.target'); // Element to observe
observer.observe(targetElement);```

- [bsdo ui 01](https://www.behance.net/gallery/134128527/Facebook-reDesign?tracking_source=search_projects|Facebook+Redesign&l=2)
- [bsdo ui 02](https://www.behance.net/gallery/87791525/facebook-redesign?tracking_source=search_projects|Facebook+Redesign&l=3)