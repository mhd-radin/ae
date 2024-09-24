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
- https://www.cgtrader.com/free-3d-models/exterior/cityscape/downtown-low-poly-3d-model
- https://www.cgtrader.com/free-3d-models/exterior/cityscape/nyc-block-set-8-f61d6947467ccd3aa5af24db320235dd
- Truck - https://sketchfab.com/3d-models/scania-s730-2-axle-2016-891ee120d3734b439a9a5e63eaa10a4c
- Bus - https://sketchfab.com/3d-models/generic-town-bus-14fe03d792914d51b6c6250b393c44fd
- https://sketchfab.com/3d-models/islands-0771b83eab04412e9df9aaf0083938df
- https://sketchfab.com/rSoXy/collections/vehicle-car-parts-1e5fae362968414c876ed747fac860ed
- https://sketchfab.com/3d-models/sportcar-concept-chanel-roadster-by-max-hordin-41a55cde9adb45a9b54e146ea0b421d7
- https://sketchfab.com/elike/collections/city-371c1947a01240dc8a33cb26020e1226
- https://sketchfab.com/william.sayin/collections/city-assets-31b92166940a4099816a249f39200687
- https://sketchfab.com/CrystalStarseed/collections/game-ready-city-30702135311f4737afd0ab5948e303be

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