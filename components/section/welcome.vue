<template>
  <section id="welcomeSection" class="bg-blue flex z-[10]">
    <div ref="playground" class="justify-center"><br/></div>
  </section>
</template>
<script lang="ts" setup>
import * as Matter from "matter-js";
import pic from '~/assets/img/donutsNFT/1.png'
import logo from '~/assets/img/logo.png'


const playground = ref(null)
onMounted(() => {
  var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: playground.value,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            showAngleIndicator: false,
            wireframes: false,
            background: 'transparent'
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var offset = 10,
        options = { 
            isStatic: true,
            background: 'transparent'
        };

    world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    Composite.add(world, [
        Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
        Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
        Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
        Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options),
        Bodies.rectangle(400, 300, 80.5, 40, { 
            isStatic: true,
            texture: logo,
        })
    ]);

    var stack = Composites.stack(20, 20, 10, 4, 0, 0, function(x, y) {
            return Bodies.rectangle(x, y, 64, 64, {
                render: {
                    strokeStyle: '#ffffff',
                    sprite: {
                        texture: pic,
                        xScale: 0.25,
                        yScale: 0.25
                    }
                }
            });
        
    });

    Composite.add(world, stack);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });
});
</script>
